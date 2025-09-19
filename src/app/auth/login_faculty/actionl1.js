"use server";

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
};