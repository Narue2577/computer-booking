// /api/updateExpiredReservations/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // Update expired reservations to 'available' status
    const updateQuery = `
      UPDATE nodelogin.stud_reserv 
      SET status = 'available' 
      WHERE status = 'occupied' AND date_out < NOW()
    `;
    
    const [result] = await connection.execute(updateQuery);
    
    connection.end();
    
    return NextResponse.json({ 
      message: 'Expired reservations updated successfully',
      updatedCount: (result as any).affectedRows 
    });
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}