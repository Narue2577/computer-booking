'use client'

import Image from "next/image";
import Link from "next/link";
import {  useActionState  } from "react";
import { saveFormDatasToDatabase } from '../registration/action'



export default function Admin() {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction, pending] = useActionState(
    saveFormDatasToDatabase,
    initialState
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="relative flex flex-col items-center justify-center w-full">
        <Link href="/auth/admin" className="grid text-center justify-items-center">
          <Image
            src="/swuEng.png"
            width={150}
            height={150}
            alt="SWU Logo"
          />
          </Link>
        </div>
        <h2 className="mb-6 text-2xl font-semibold text-center">Admin</h2>
        
        <form className="space-y-4" action={formAction}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
             Staff Buasri
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Buasri"
              name="buasri"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Email 
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>   
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 disabled:opacity-50"
              disabled={pending}
            >
              {pending ? 'Lecturing...' : 'Reserving a Room'}
            </button>
            {state?.message && (
              <p className={`mt-2 text-sm ${state.message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                {state.message}
              </p>
            )}
          </div>
          
          <Link href="/auth/login" className="grid text-center text-indigo-600 justify-items-center hover:text-indigo-800">
            Back to Student
          </Link>
          
        </form>
      </div>
    </div>
  );
}