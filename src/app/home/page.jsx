'use client'
import ContactForm from "@/Components/ContactUs";
import Navbar from "@/Components/Navbar";
import ProductList from "@/screens/Products";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const home = () => {
  const {push} = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      push("/login");
    }
  
  }, []);
  return (
    <div>
      <Navbar/>
      <ProductList />
      <ContactForm/>
    </div>
  );
};

export default home;
