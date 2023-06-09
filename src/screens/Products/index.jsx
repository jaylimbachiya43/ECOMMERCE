"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/cards?populate=*"
      );
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.data?.map((product) => {
            console.log({ product });
            return (
              <div
                key={product.attributes.id}
                className="group relative shadow-lg"
              >
                <div className="min-h-80 object-cover  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product?.attributes?.image?.data?.attributes?.url}
                    alt="image"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="mt-4 flex justify-between p-1">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.attributes.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.attributes.title}
                    </a>
                  </h3>

                  <p className="text-sm font-medium text-gray-900">
                  ₹{product.attributes.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
