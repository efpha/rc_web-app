import { NextRequest, NextResponse } from 'next/server';
import mysql, { RowDataPacket } from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!
};

// Extend RowDataPacket to satisfy the constraint
interface Subscriber extends RowDataPacket {
  email: string;
  first_name: string;
}

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

    // Cast the query result as Subscriber[]
    const [existing] = await connection.execute<Subscriber[]>(
      'SELECT * FROM subscribers WHERE email = ? AND first_name = ?',
      [email, firstName]
    );

    if (existing.length === 0) {
      await connection.end();
      return NextResponse.json(
        { message: 'No active subscription found for this name and email.' },
        { status: 404 }
      );
    }

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
