'use client'
import React, { useState } from 'react'

const Idbutton = () => {
    const [quantity, setQuantity] = useState(1);
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
        } else {
          setQuantity(0);
          setShowAddToCart(true);
          setShowIncreaseDecrease(false);
        }
      };
    
      const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
      };
  return (
    <div className='flex items-center'>
        <button
              onClick={decreaseQuantity}
              className="p-1 bg-gray-300 rounded-md"
            >
              -
            </button>
            <span className="mx-4 font-bold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="p-1 bg-blue-500 text-white rounded-md"
            >
              +
            </button>
    </div>
  )
}

export default Idbutton