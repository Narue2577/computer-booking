"use server";

import pool from '@/lib/db'; // Adjust path as needed



export const saveReservToDatabase = async (_, formData) => {
    const username = formData.get('username');
    const room = formData.get('room');
    const seats = JSON.parse(formData.getAll('seats'));

    if (!username || !room || !seats.length) {
        return { message: "Please fill all the required fields." };
    }

    try {
        for (const seat of seats) {
            const dateIn2 = new Date(seat.date_in).toISOString().slice(0, 19).replace('T', ' ');
            const dateOut2 = new Date(seat.date_out).toISOString().slice(0, 19).replace('T', ' ');

            await pool.execute(
                'INSERT INTO stud_reserv (username, room, seat, date_in, date_out, status, created_at) VALUES (?, ?, ?, ?, ?, "Reserved", NOW())',
                [username, room, seat.seat, dateIn2, dateOut2]
            );
        }

        return { message: "Reservation Complete.", success: true };
    } catch (error) {
        console.error("Error saving reservation:", error);
        return { message: "An error occurred while processing your request." };
    }
};
