// /api/mysqList/booking/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // Get all reservations with their current status
    const query = 'SELECT * FROM nodelogin.stud_reserv ORDER BY room, seat';
    const [results] = await connection.execute(query);

    connection.end();
    return NextResponse.json(results);
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}