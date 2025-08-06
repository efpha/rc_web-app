import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!
    });

    const [rows] = await connection.execute(`
      SELECT id, CONCAT(first_name, ' ', last_name) AS name, email, subscribed_at 
      FROM subscribers
      ORDER BY subscribed_at DESC
    `);

    await connection.end();

    return NextResponse.json({ subscribers: rows });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}
