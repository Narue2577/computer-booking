"use client"

import { redirect } from "next/navigation";
import Navbar from "../navbar/page";
import { useSession } from "next-auth/react";
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
    const query = `SELECT room, seat, date_in, date_out, peroid_time, status FROM nodelogin.stud_reserv ORDER BY room, seat WHERE (status = 'occupied')`;
    const [results] = await connection.execute(query);

    connection.end();
    return NextResponse.json(results);
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}



export default function Request() {
    const { data: session, status } = useSession()
    
      if (status === 'loading') return <p>Loading...</p>
      if (!session) return redirect('./auth/login');
    return(
      <div className="w-full min-h-screen m-0 font-sans bg-gray-100">
    <div className="bg-white shadow">
   <Navbar profile={session.user?.username}></Navbar>
  </div>
<div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
        <div className="w-full max-w-xs">
  <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
        Username
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
        Password
      </label>
      <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-xs italic text-red-500">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>



<footer className="w-full shadow-sm bg-neutral-400 dark:bg-gray-900">
    <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        
        <span className="block text-sm text-black-500 sm:text-center dark:text-black-400">© 2025 <a href="http://cosci.swu.ac.th/" className="hover:underline">College Of Social Communication Innovation</a>. All Rights Reserved.</span>
    </div>
</footer>
</div>
</div>

    );
}