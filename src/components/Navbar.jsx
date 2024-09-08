import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import SearchBar from './SearchBar';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const location = useLocation()
    const { cart } = useContext(AppContext);
  return (
    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 
    ${location.pathname !== "/" ? "bg-richblack-800" : ""} transition-all duration-200`}>
        <div className='flex w-11/12 justify-between items-center max-w-maxContent'>
            
            {/* logo */}
            <Link to='/'>
                <FaShoppingCart className='text-4xl'/>
            </Link>

            <SearchBar/>

            <div>
            <Link to='/dashboard/cart' className='relative'>
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {
                    cart.length > 0 && (
                        <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                            {cart.length}
                        </span>
                    )
                }
            </Link>
            </div>
        </div>
    </div>
            

  )
}

export default Navbar