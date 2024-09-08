import React, { useCallback, useContext } from 'react'
import { AppContext } from '../context/AppContext';

const SearchBar = () => {


    const { searchQuery,setSearchQuery } = useContext(AppContext);

    
    
    // optimise using debounce
    const debounce = (func) => {
        let timer;
        return function(...args){
        const context = this;
        console.log('this context',context)
        if(timer) clearTimeout(timer);

        timer = setTimeout(()=>{
            timer = null;
            func.apply(context, args);
        },500);
        }
    }

    // Create a debounced version of the handleSearchChange function
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Create a debounced version of the handleSearchChange function
    const optimisedVersion = useCallback(debounce(handleSearchChange),[searchQuery])

    

  return (
    <div>
        {/* Search Bar */}
        <input
            type="text"
            placeholder="Search by title..."
            name='search'
            onChange={optimisedVersion}
            className=" w-full border-[1px] border-richblack-900 rounded-md px-4 py-2 mx-4 text-richblack-900 transition duration-300 ease-in-out hover:scale-110"
        />
    </div>
  )
}

export default SearchBar