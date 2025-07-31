import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

interface SubscriberRequest {
  firstName: string;
  lastName: string;
  email: string;
}

interface SqlError extends Error {
  code?: string;
  errno?: number;
}

export async function POST(req: Request) {
  try {
    const body: SubscriberRequest = await req.json();
    const { firstName, lastName, email } = body;

    console.log('Data received from frontend:', {
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
    });

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!
    });

    console.log('Successfully connected to MySQL database.');

    try {
      await connection.execute(
        'INSERT INTO subscribers (first_name, last_name, email) VALUES (?, ?, ?)',
        [firstName, lastName, email]
      );
    } catch (error) {
      const sqlError = error as SqlError;
      if (sqlError.code === 'ER_DUP_ENTRY' || sqlError.errno === 1062) {
        console.warn('Duplicate entry for email:', email);
        return NextResponse.json({ message: 'User exists' }, { status: 409 });
      } else {
        throw error;
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
  from: `"RC App" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: 'Subscription Confirmed',
  html: `
    <p>Hi ${firstName},</p>
    <p>Thank you for subscribing to Responsible Computing updates.</p>

    <p>
      <a href="https://kisiiuniversity.ac.ke/unsubscribe?firstName=${encodeURIComponent(firstName)}&email=${encodeURIComponent(email)}" style="color:#d32f2f;text-decoration:none;">
        Unsubscribe
      </a>
      if you wish to stop receiving emails.
    </p>

    <p>Best regards,<br/>Kisii University Responsible Computing Team</p>
  `,
});



    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
  } catch (err: unknown) {
  if (err instanceof Error) {
    console.error('Error in /api/subscribe POST route:', err.message);
  } else {
    console.error('Unknown error in /api/subscribe POST route:', err);
  }
  return NextResponse.json({ message: 'Server error' }, { status: 500 });
}

}
