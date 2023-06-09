import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Login to your account</h1>
      

    {/* {error && <p className="text-red-500">{error}</p>}  */}
    <form 
  //   onSubmit={handleLogin}
     className="flex flex-col">
      <label htmlFor="email" className="mb-2 flex flex-col">
        Email:
        <input
          type="email"
          id="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </label>
      <label htmlFor="password" className="mb-2 flex flex-col">
        Password:
        <input
          type="password"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Creat New Password
      </button>
    </form>
    <p className="mt-4">
      Create new password{' '}
      <Link href="/login" className="text-blue-500 ">
        Login
      </Link>
    </p>

  </div>
  )
}

export default ForgotPassword