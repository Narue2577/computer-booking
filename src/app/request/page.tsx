"use client";

import { redirect } from "next/navigation";
import Navbar from "../navbar/page";
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';

export default function Request() {
  const [posts, setPosts] = useState([]); // Initialize state for fetched data
  const { data: session, status } = useSession();
    // Enhanced booking handler with better error handling
  const cancelBooking = async (reservationId) => {
  try {
    const response = await fetch(`/api/reservations/${reservationId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete reservation');
    }

    // Remove the deleted reservation from the state
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== reservationId));
  } catch (error) {
    console.error('Error deleting reservation:', error);
  }
};
  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        if (session?.user?.username) {
          const res = await fetch(`/api/check?username=${session.user.username}`);
          const data = await res.json();
          
          // Ensure `data.reservations` is an array before setting it to state
          if (Array.isArray(data.reservations)) {
            setPosts(data.reservations);
          } else {
            console.error('Invalid response format:', data);
            setPosts([]); // Set posts to empty array if the response is invalid
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setPosts([]); // Set posts to empty array in case of an error
      }
    }
    fetchData();
  }, [session]);

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return redirect('./auth/login');

  return (
    <div className="w-full min-h-screen m-0 font-sans bg-gray-100">
      <div className="bg-white shadow">
        <Navbar profile={session.user?.username}></Navbar>
      </div>
      <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
        <div className="p-4 space-y-4 md:p-5">
          <h1 className="text-3xl font-bold underline">Cancellations</h1>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            This section allows you cancel your reservation if you are not satisfy your booking. 
            This table is a list of your reservations if you have confirmed booking before. Please feel free to use this.
          </p>
          
          {/* Render the data in a table */}
          <table className="w-full bg-white border border-gray-300 table-auto">
            <thead className="text-white bg-pink-500">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Room</th>
                <th className="px-4 py-2 border border-gray-300">Seat</th>
                <th className="px-4 py-2 border border-gray-300">Date In</th>
                <th className="px-4 py-2 border border-gray-300">Date Out</th>
                <th className="px-4 py-2 border border-gray-300">Period Time</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
                <th className="px-4 py-2 border border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center border border-gray-300">{post.room}</td>
                    <td className="px-4 py-2 text-center border border-gray-300">{post.seat}</td>
                    <td className="px-4 py-2 text-center border border-gray-300">{post.date_in}</td>
                    <td className="px-4 py-2 text-center border border-gray-300">{post.date_out}</td>
                    <td className="px-4 py-2 text-center border border-gray-300">{post.peroid_time}</td>
                    <td className="px-4 py-2 text-center border border-gray-300">{post.status}</td>
                    <td className="px-4 py-2 text-center border border-gray-300">
  <button 
    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" 
    onClick={() => cancelBooking(post.id)} // Assuming `post.id` is the reservation ID
  >
    DELETE
  </button>
</td>
                  </tr>
                ))
              ) : (
                // Display a message if there are no reservations
                <tr>
                  <td colSpan={7} className="py-4 text-center">
                    No reservations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
//https://blog.devgenius.io/apis-in-next-js-update-delete-request-6ca90d929cab