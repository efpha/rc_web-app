import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Configure your DB connection (use .env variables in production)
const dbConfig = {
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!
};

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json(
        { message: 'First name and email are required.' },
        { status: 400 }
      );
    }

    const connection = await mysql.createConnection(dbConfig);

    // Check if the user is already unsubscribed
    const [existing] = await connection.execute(
      'SELECT * FROM subscribers WHERE email = ? AND first_name = ?',
      [email, firstName]
    );

    if ((existing as any[]).length === 0) {
      await connection.end();
      return NextResponse.json(
        { message: 'No active subscription found for this name and email.' },
        { status: 404 }
      );
    }

    // Delete the user from the subscribers table
    await connection.execute(
      'DELETE FROM subscribers WHERE email = ? AND first_name = ?',
      [email, firstName]
    );

    await connection.end();

    return NextResponse.json(
      { message: 'You have successfully unsubscribed.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unsubscribing:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
