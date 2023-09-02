"use client";
import React, {  useState } from "react";
import Link from "next/link";

import { IoMdCart } from "react-icons/io";

import Cart from "@/screens/cart";
import DropDown from "@/screens/dropdown";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);


  return (
    <nav className="  shadow">
      <div className="justify-between px-4  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* <a href="javascript:void(0)"> */}
            <Link href="/home">
              {" "}
              <h2 className="text-2xl font-bold text-black">LOGO</h2>
            </Link>
            <div className="flex items-center gap-3 text-xl md:hidden">
            <DropDown/>
              <IoMdCart  onClick={() => setOpen(!open)}/>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-black focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
          <div
            className={`flex-1 relative justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-indigo-200">
                {/* <a href="javascript:void(0)">Home</a> */}
                <Link href="/home">home</Link>
              </li>
              <li className="text-black hover:text-indigo-200">
                <Link href="/products">Products</Link>
              </li>
              <li className="text-black hover:text-indigo-200">
                <Link href="/contactpage">Contact</Link>
              </li>
              <li className="text-black hover:text-indigo-200">
                <Link href="/about">About</Link>
              </li>
              <li className=" gap-3 text-xl invisible md:visible" onClick={() => setOpen(!open)}>
                <IoMdCart />
              </li>
              <li className=" gap-3 text-xl invisible md:visible">
                
               <DropDown/>
               
                
              </li>
            </ul>

                        
          </div>
        
        <div className=' flex right-0 md:top-16 lg:top-4 absolute'>
          {open && <Cart  />}
          </div>
      </div>
      
    </nav>
  );
};

export default Navbar;