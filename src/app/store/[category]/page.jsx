'use client'
import AddToCartButton from '@/screens/addbutton';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const CategoryItems = (context) => {
    const [products, setProducts] = useState([]);
    // const [filter, setFilter] = useState([]);

    useEffect(() => {
      // Fetch product data when the component mounts
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products`
        );
        console.log(response.data);
        const filterProducts = response.data.filter(
          (product) => product.category === `${context.params.category}`
        );
        console.log(filterProducts);
        setProducts(filterProducts);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    // const filterProducts = products?.filter(product => product.category === `${context.params.Category}`);
  //  setFilter(filterProducts);
  return (
    <div className=' text-black'> 
     
        
           <div className="bg-white">
      <div className="  px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
        <h1 className="text-2xl font-bold  text-gray-900">Products</h1>

        <ul className="mt-6 grid grid-cols-2 md:grid-col-2  md:items-baseline lg:items-baseline items-baseline gap-x-6 gap-y-10  lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => {
            console.log({ product });
            return (
              <li key={product.id} className=" shadow-lg">
                <div className=" grid items-center">
                  <Link
                    href={"/item/[id]"}
                    as={`/item/${product?.id}`}
                  >
                    <Image
                      src={`${product?.image}`}
                      alt="image"
                      height={300}
                      width={300}
                    />
                  </Link>
                </div>
                <div className="mt-4  justify-between p-1">
                  <h3 className="text-sm text-gray-700">
                    {product.title}
                  </h3>

                  <p className="text-lg pt-2 font-semibold  text-gray-900">
                    ₹{product.price}
                  </p>
                </div>
                <div className="pb-2">
                  {" "}
                  <AddToCartButton />
             
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>

    </div>
  )
}

export default CategoryItems