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

 'use client'

import SecretAdmin from "@/components/secretAdmin";
import Link from "next/link";
//import { useActionState } from "react";

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function ForgetPassword() {
  const initialState = {
    success: false,
    message: "",
  };

  //const [state, formAction, pending] = useActionState(initialState);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.ok) {
      window.location.href = '/home'
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-lg p-6 bg-white rounded-lg shadow-lg item-center gap-x-8">
        <div className="w-1/4">
          <SecretAdmin />
        </div>
       
        <div className="w-3/4">
        <form  action="" onSubmit={handleSubmit}>
        <h2 className="mb-6 text-2xl font-semibold text-center">Reset Password</h2>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your new password"
              name="password"
              required
            />
          </div>  
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 mb-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 disabled:opacity-50"
             > SUBMIT
            </button>

          </div>
          
         
        </form>
        </div>
      </div>
    </div>
  );
}