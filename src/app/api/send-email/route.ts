import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { subject, content } = await req.json();

    if (!subject || !content) {
      return NextResponse.json({ error: 'Subject and content required' }, { status: 400 });
    }

    // Connect to MySQL
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Fetch subscribed users
    const [rows] = await connection.execute('SELECT email FROM subscribers');
    const emails = Array.isArray(rows) ? rows.map((row: any) => row.email) : [];

    if (!emails.length) {
      return NextResponse.json({ message: 'No subscribers found' }, { status: 404 });
    }

    // Setup email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to all users
    for (const email of emails) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text: content,
        html: `<p>${content}</p>`,
      });
    }

    return NextResponse.json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
