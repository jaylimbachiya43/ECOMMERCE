import React from 'react'
import ProductImg from '../../../public/shirts.webp'
import Image from 'next/image';
import {AiOutlineDelete} from 'react-icons/ai'
import Idbutton from '../Idbutton';
import Link from 'next/link';
const products = [
    {
        id:1,
      productName: "shirt",
      productTitle: "Title for Product 1",
      description: "Description for Product 1",
      price: 19.99,
      image: <ProductImg/>,
      category: "Category A",
      quantity: 2,
    },
    {id:2,
      productName: "shoes",
      productTitle: "Title for Product 2",
      description: "Description for Product 2",
      price: 29.99,
      image:<ProductImg/> ,
      category: "Category B",
      quantity: 2,
    },
    {id:3,
      productName: "Product 3",
      productTitle: "Title for Product 3",
      description: "Description for Product 3",
      price: 39.99,
      image:<ProductImg/>,
      category: "Category A",
      quantity: 1,
    },
    // Add more products here if needed
  ];
  
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.quantity * product.price, 0);
  };
  

const Cart = () => {
  return (
    <div className='text-black grid justify-center bg-white border-2 border-blue-400'>
        <h1 className='text-center text-base font-semibold pt'> youre cart Items</h1>
       <ul className='grid gap-2 p-5 '>
       {products.map((val)=>{
        return (
       <li key={val.id} className='border-2 bg-white z-20 border-gray-700'>
        <div className='flex gap-2 items-center p-2'>
            <div className='flex-1 h-14 w-12 bg-blue-400' ><Image src={val.image}  /></div>
            <div className='flex-1 text-black'>
                <h1 className='text-lg font-bold '>{val.productName}</h1>
                <p className='text-sm font-medium'>{val.description}</p>
                <h1 className='text-lg  font-semibold'>₹{val.price}</h1>
                <Idbutton/>
            </div>
            <div><button className='text-red-700'><AiOutlineDelete/></button></div>
        </div>
       </li> )
    })}
       </ul>
    <div>
    <table  border="1" cellpadding="8">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total Price</th>
      </tr>
    </thead>
      <tbody>
        {products.map((val)=>{
          return (
           <tr key={val.id}>
           <td className='text-center'>{val.productName}</td>
           <td className='text-center'>{val.quantity}</td>
           <td className='text-center'>₹{val.price}</td>
           <td className='text-center'>₹{val.price}</td>
         </tr>)
        })}

      </tbody>
      <tfoot>
      <tr>
        <td colspan="3" ><strong>Total:</strong></td>
        <td className='font-semibold'>₹{calculateTotalPrice().toFixed(2)}</td>
      </tr>
    </tfoot>
    </table>
      </div>  
      <Link href={"/buy"}>
      <button className='px-16 mx-14 py-2 bg-blue-600 text-white rounded-lg  mb-2'>Place On Order</button>     
      </Link>
    </div>
  )
}

export default Cart