import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email } = body;

    console.log('data from frontend:', {
      'first name': firstName,
      'last name': lastName,
      email,
    });

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!,
    });

    console.log('✅ Successfully connected to MySQL database.');

    try {
      await connection.execute(
        'INSERT INTO subscribers (first_name, last_name, email) VALUES (?, ?, ?)',
        [firstName, lastName, email]
      );
    } catch (insertErr: any) {
      // Detect duplicate email error
      if (insertErr.code === 'ER_DUP_ENTRY' || insertErr.errno === 1062) {
        console.warn('⚠️ Duplicate entry for email:', email);
        return NextResponse.json({ message: 'User exists' }, { status: 409 });
      } else {
        throw insertErr;
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
      text: `Hi ${firstName},\n\nThank you for subscribing to Responsible Computing updates.`,
    });

    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });

  } catch (err) {
    console.error('❌ Error in /api/subscribe POST route:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
