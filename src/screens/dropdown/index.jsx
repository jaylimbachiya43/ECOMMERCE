'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { AbcdC } from "@/context/auth";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useContext(AbcdC);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
    <button
      onClick={toggleMenu}
      className=" items-center px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
    >
     <VscAccount/>
      
    </button>
    {isOpen && (
      <div className=" flex flex-col w-28 absolute mt-2 gap-2 bg-white rounded-md shadow-lg">
        
        <Link
            href="/login"
            className=" text-xs  md:text-base p-2 text-center text-white bg-gray-600 rounded-md  hover:bg-gray-800"
          >
            Sign in
          </Link>
          <Link
            href="/registration"
            className="   text-xs  p-2  md:text-base text-center text-gray-800 bg-slate-50  rounded-md  hover:bg-gray-200"
          >
            Sign up
          </Link>
          <button
            href="/login"
            className="text-center  text-xs  md:text-base p-2 text-white bg-gray-600 rounded-md  hover:bg-gray-800"
            onClick={logout}
          >
            Sign out
          </button>
        {/* Add more items as needed */}
      </div>
    )} 
  </div>
  )
}

export default DropDown