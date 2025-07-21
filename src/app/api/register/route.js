import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request) {
    try {
        const data = await request.json();
        
        // Validate input
        if (!data.full_name || !data.email || !data.password || !data.confirmPassword) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (data.password !== data.confirmPassword) {
            return NextResponse.json(
                { error: 'Passwords do not match' },
                { status: 400 }
            );
        }

        // Check if email exists
        const existingUser = await db.query('SELECT * FROM users WHERE email = ?', [data.email]);
        if (existingUser.length > 0) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            );
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        // Insert user
        const result = await db.query(`
            INSERT INTO users (full_name, email, password_hash)
            VALUES (?, ?, ?)
        `, [data.full_name, data.email, hashedPassword]);

        return NextResponse.json({
            id: result.insertId,
            full_name: data.full_name,
            email: data.email
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}