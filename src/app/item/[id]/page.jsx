"use client";
import Navbar from "@/Components/Navbar";
import StarRating from "@/Components/startRating";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Item = (context) => {
  const [products, setProducts] = useState({});

  
  useEffect(() => {
    // Fetch product data when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${context.params.id}`
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  return (
    <div>
      <Navbar/>
    <div className="flex flex-col lg:flex-row px-4 lg:px-14 pt-6 lg:py-14 gap-7 items-start">

      <div className="lg:flex-1 rounded-md   flex  items-center justify-center ">
      <Image
                      src={products?.image}
                      
                      alt="image"
                      className="cursor-move"
                      height={300}
                      width={300}
                    />
      </div>
      <div className="lg:flex-1 rounded-md flex flex-col gap-4 justify-center ">
        <h1 className="text-2xl font-bold text-black">
          {products?.title}
        </h1>
        <h1 className="text-2xl font-medium text-black ">
          ₹{products?.price}
        </h1>
        
        <div className="text-gray-700">
            Rating: <StarRating rating={products?.rating?.rate} /> ({products?.rating?.count} reviews)
          </div>
        <div>
          <p className="text-base">{products?.description}</p>
        </div>
        <button className="px-8 py-2 mx-6  rounded-xl bg-blue-800 text-white ">
          add cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default Item;
