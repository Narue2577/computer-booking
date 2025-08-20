import { NextResponse } from 'next/server';
import pool from '@/lib/db'; // Adjust the path to your database connection

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, room, seats } = body;

        if (!username || !room || !seats?.length) {
            return NextResponse.json(
                { message: "Please fill all the required fields." },
                { status: 400 }
            );
        }

        for (const seat of seats) {
            const dateIn2 = new Date(seat.date_in).toISOString().slice(0, 19).replace('T', ' ');
            const dateOut2 = new Date(seat.date_out).toISOString().slice(0, 19).replace('T', ' ');

            await pool.execute(
                'INSERT INTO stud_reserv (username, room, seat, date_in, date_out, status, created_at) VALUES (?, ?, ?, ?, ?, "Reserved", NOW())',
                [username, room, seat.seat, dateIn2, dateOut2]
            );
        }

        return NextResponse.json(
            { message: "Reservation Complete.", success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error saving reservation:", error);
        return NextResponse.json(
            { message: "An error occurred while processing your request." },
            { status: 500 }
        );
    }
}