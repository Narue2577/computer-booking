import Image from "next/image";
import Link from "next/link";

export default function Registration(){
    return(
        <>
           <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <div className="relative flex flex-col items-center justify-center w-full ">
                      <Image
                                      src="/swuEng.png"
                                      width={150}
                                      height={150}
                                      alt="SWU Logo"
                                  />
                      </div>
            <h2 className="mb-6 text-2xl font-semibold text-center">Registration</h2>
                <form className="space-y-4">
                     <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                                            Full Name
                                            </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         //   placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                                            Email Address
                                            </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           // placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                                            Password
                                            </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           // placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                                            Confirm Password
                                            </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            // placeholder="Confirm your password" 
                        />
                    </div>
                    {/* <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-600">
                                            I agree to the terms and conditions
                                            </label>
                    </div>*/}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
                        >
                            Register
                        </button>
                    </div>
                    <Link href="/login" className="grid text-center justify-items-center" >Click to Login</Link>
                </form>
        </div>
    </div>
        </>
    );
}