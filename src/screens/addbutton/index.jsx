import {  useState } from 'react';


const AddToCartButton = () => {
  const [showAddToCart, setShowAddToCart] = useState(true);
  const [showIncreaseDecrease, setShowIncreaseDecrease] = useState(false);
   
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

  const addToCart = () => {
    // Here you can implement your actual "Add to Cart" logic
    // For demonstration purposes, we'll just display an alert with the selected quantity.
  
    setShowIncreaseDecrease(true);
    setShowAddToCart(false);
  };

  return (
    <div className="flex items-center">
      <div className={`flex items-center justify-between  rounded-lg p-4 ${showIncreaseDecrease ? 'mb-4' : ''}`}>
        {showIncreaseDecrease && (
          <>
           <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              -
            </button>
            <span className="mx-4 font-bold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              +
            </button>
          </>
        )}
        {showAddToCart && (
          <button
            onClick={addToCart}
            className="p-2 bg-blue-700 text-white rounded-md"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
