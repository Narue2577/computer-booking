 "use client";
/* eslint-disable */
 // const router = useRouter()
 
/*  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }*/
{/* 
 'use client'

import SecretAdmin from "@/components/secretAdmin";
import Link from "next/link";
import { useActionState } from "react";
import { loginUser } from './actionl1';
import { signIn } from 'next-auth/react';
import { useState } from 'react';


export default function Login2() {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction, pending] = useActionState(loginUser, initialState);
  const [buasri, setBuasri] = useState('')


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await signIn('credentials', {
      buasri,
      redirect: false,
    })

    if (result?.ok) {
      window.location.href = '/home'
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
      <div className="flex mt-6 gap-[230px] space-x-4"> {/* Add spacing between buttons
    <Link href="/auth/login" className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded hover:bg-red-200">Student</Link>
    <Link href="/auth/login_faculty" className="px-4 py-2 text-white transition duration-300 bg-gray-500 rounded hover:bg-gray-200">Faculty/Staff</Link>
  </div>
        <div className="relative flex flex-col items-center justify-center w-full">
          <SecretAdmin />
        </div>
        <h2 className="mb-6 text-2xl font-semibold text-center">Login (Faculty / Staff)</h2>
        <h2 className="mb-6 text-2xl font-semibold text-center">College of Social Communication Innovation</h2>
        
        <form className="space-y-4" action={formAction} onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Buasri ID
            </label>
            <input
              type="type"
              value={buasri}
              onChange={(e) => setBuasri(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Buasri ID"
              name="buasri"
              required
            />
          </div>
          
          
          
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 disabled:opacity-50"
              disabled={pending}
            >
              {pending ? 'Logging in...' : 'Login'}
            </button>
            {state?.message && (
              <p className={`mt-2 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                {state.message}
              </p>
            )}
          </div>
          
          <Link href="/auth/registration" className="grid px-4 py-2 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600 justify-items-center hover:text-indigo-800">
           Register
          </Link>
        </form>
      </div>
    </div>
  );
}
 */}


import SecretAdmin from "@/components/secretAdmin";
import Link from "next/link";
import { useState } from 'react';
import { loginUser } from "../login_faculty/actionl1";

export default function Login() {
    const [buasri, setBuasri] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true); // Set pending state

        try {
            const formData = new FormData();
            formData.append('buasri', buasri);

            // Call the Server Action
            const result = await loginUser(null, formData);

            if (result.success) {
                window.location.href = result.redirectUrl; // Redirect on success
            } else {
                setMessage(result.message); // Show error message
            }
        } catch (error) {
            console.error('Login failed:', error);
            setMessage("An unexpected error occurred. Please try again.");
        } finally {
            setIsPending(false); // Reset pending state
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <div className="flex mt-6 gap-[230px] space-x-4">
                    <Link href="/auth/login" className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded hover:bg-red-200">Student</Link>
                    <Link href="/auth/login_faculty" className="px-4 py-2 text-white transition duration-300 bg-gray-500 rounded hover:bg-gray-200">Faculty/Staff</Link>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full">
                    <SecretAdmin />
                </div>
                <h2 className="mb-6 text-2xl font-semibold text-center">Login (Faculty/Staff)</h2>
                <h2 className="mb-6 text-2xl font-semibold text-center">College of Social Communication Innovation</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Buasri ID
                        </label>
                        <input
                            type="text"
                            value={buasri}
                            onChange={(e) => setBuasri(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Buasri ID"
                            name="buasri"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 disabled:opacity-50"
                            disabled={isPending}
                        >
                            {isPending ? 'Logging in...' : 'Login'}
                        </button>
                        {message && (
                            <p className={`mt-2 text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                {message}
                            </p>
                        )}
                    </div>

                    <Link href="/auth/registration" className="grid px-4 py-2 text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-600 justify-items-center hover:text-indigo-800">
                        Register
                    </Link>
                </form>
            </div>
        </div>
    );
}