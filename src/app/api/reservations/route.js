// app/api/reservations/route.js

import { saveReservToDatabase } from '@/lib/reservation'; // Import function ของคุณ

export async function POST(request) {
    try {
        const formData = await request.formData(); // รับข้อมูลจาก client
        const result = await saveReservToDatabase(null, formData); // บันทึกข้อมูลลงฐานข้อมูล

        return new Response(JSON.stringify(result), { // ส่ง response กลับไปยัง client
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error in API route:', error);
        return new Response(
            JSON.stringify({ message: "An internal server error occurred." }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}