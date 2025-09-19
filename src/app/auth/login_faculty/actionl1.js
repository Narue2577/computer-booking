/*"use server";

import pool from '@/lib/db';
import { redirect } from 'next/navigation';

export const loginUser = async (_, formData) => {
  const rawData = {
    buasri: formData.get("buasri"),
    password: formData.get("password"),
  };

  if (!rawData.buasri || !rawData.password) {
    return { message: "Please fill all fields.", success: false };
  }

  try {
    const [users] = await pool.execute(
      'SELECT id, full_name, email, password FROM tasks WHERE email = ?',
      [rawData.email]
    );

    if (users.length === 0) {
      return { message: "Invalid email or password.", success: false };
    }




    

   
    // Here you would typically set up session/JWT
    // For now, just redirect to dashboard
    
    
  } catch (error) {
    console.error('Login error:', error);
    return { message: "Login failed. Please try again.", success: false };
  }
  redirect('/home');
};*/
"use server";

import mysql from 'mysql2/promise';

export const loginUser = async (_, formData) => {
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
            'SELECT staff_buasri FROM staff WHERE  staff_buasri = ?',
            [rawData.buasri]
        );

        // 3. Close the database connection
        await connection.end();

        if (users.length === 0) {
            return { message: "This allows only staff's buasri.", success: false };
        }

        // Return a success flag instead of redirecting directly
        return { message: "Login successful!", success: true, redirectUrl: '/home' };
    } catch (error) {
        console.error('Login error:', error);
        return { message: "Login failed. Please try again.", success: false };
    }
};