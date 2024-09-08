import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import tablet from "../../images/tablet.png"
import mobile from "../../images/mobile.png"
import fitnesstracker from "../../images/fitnesstracker.png"

const Product = ({product}) => {
    const { cart, addToCart, removeFromCart } = useContext(AppContext);
  
  return (
      <div className='flex flex-col items-center justify-between hover:scale-110
      transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5 outline
      hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>

        <div >
          <p className='text-gray-700 font-semibold text-lg truncate w-40
        mt-1'>{product.title}</p>
        </div>

        <div >
          <p className='text-gray-700 font-semibold text-lg truncate w-40
        mt-1'>{product.subcategory}</p>
        </div>

        <div className='h-[180px]'>
        <img 
            src={
                product.subcategory === "mobile" 
                ? mobile 
                : product.subcategory === "tablet" 
                ? tablet 
                : fitnesstracker
            } alt={product.subcategory} className='h-full w-full'/>
        </div>

        <div className='flex justify-between gap-12 items-center w-full mt-5'>
          <div>
            <p className='text-green-600 font-semibold '>Rs. {product.price}</p>
          </div>
          {
            cart.some((p) => p.id === product.id) ?
            <button className='text-gray-700 border-2 border-gray-700 rounded-full 
            font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700
            hover:text-white transition duration-300 ease-in' onClick={()=>removeFromCart(product.id)}
            >Remove Item</button> :
            <button className='text-gray-700 border-2 border-gray-700 rounded-full 
            font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700
            hover:text-white transition duration-300 ease-in' onClick={()=>addToCart(product)}
            >Add to Cart</button>
          }
        </div>

      </div>
    );
};

export default Product;
