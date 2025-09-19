"use server";

import mysql from 'mysql2/promise';

export const loginUser2 = async (_, formData) => {
    // Extract buasri from form data
    const rawData = {
        buasri: formData.get("buasri")
    };

    if (!rawData.buasri) {
        return { message: "Please enter your BUASRI.", success: false };
    }

    try {
        // 1. Connect to the database
        const connection = await mysql.createConnection({
            host: '10.1.140.57',
            user: 'cosciadministrator',
            password: 'Cosci!_2021',
            database: 'cosci_system'
        });

        // 2. Execute query to check if buasri exists
        const [users] = await connection.execute(
            'SELECT stu_buasri FROM student WHERE  stu_buasri = ?',
            [rawData.buasri]
        );

        // 3. Close the database connection
        await connection.end();

        if (users.length === 0) {
            return { message: "Buasri ID must be student only.", success: false };
        }

        // Return a success flag instead of redirecting directly
        return { message: "Login successful!", success: true, redirectUrl: '/home' };
    } catch (error) {
        console.error('Login error:', error);
        return { message: "Login failed. Please try again.", success: false };
    }
};