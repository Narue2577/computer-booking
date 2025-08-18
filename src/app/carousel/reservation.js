"use server";

import pool from '@/lib/db'; // Adjust path as needed



export const saveReservToDatabase = async (_, formData) => {
  const rawData = {
    username: formData.get("username"),
    room: formData.get("room"),
    seat: formData.get("seat"),
    date_in: formData.get("date_in"),
    date_out: formData.get("date_out"),
    status: formData.get("status"),

  };

  // Validation (your existing code)
  if (!rawData.username || !rawData.room || !rawData.seat || !rawData.date_in || !rawData.date_out || !rawData.status ) {
    return { message: "Please fill all the areas.", inputs: rawData };
  }



  if (rawData.fullName.length < 2 || rawData.fullName.length > 50) {
    return {
      message: "Name must be between 2 and 50 characters.",
      inputs: rawData,
    };
  }

  // MISSING: Password validation
  if (rawData.password.length < 6) {
    return {
      message: "Password must be at least 6 characters long.",
      inputs: rawData,
    };
  }

   
    const dateIn = rawData.date_in;
    const dateOut = rawData.date_out;
    const dateIn2 = dateIn.toISOString().slice(0, 19).replace('T', ' ');
    const dateOut2 = dateOut.toISOString().slice(0, 19).replace('T', ' ');

    // MISSING: Insert user into database
    await pool.execute(
      'INSERT INTO stud_reserv (username, room, date_in, date_out,status, created_at, update_at) VALUES (?, ?, ?, ?, ?, ?,NOW(), NOW())',
      [rawData.username, rawData.room, dateIn2, dateOut2, rawData.status]
    );

    // Return success message instead of redirect
    return {
      message: "Reservation Complete.",
      success: true,
    };
    
  } 
