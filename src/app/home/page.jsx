import ContactForm from "@/Components/ContactUs";
import Navbar from "@/Components/Navbar";
import ProductList from "@/screens/Products";
import React from "react";


const home = () => {
  return (
    <div>
      <Navbar />
     
      <ProductList />
      <ContactForm/>
    </div>
  );
};

export default home;
