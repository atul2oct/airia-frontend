import React, { useCallback, useContext, useMemo, useState } from 'react'
import { AppContext } from '../context/AppContext';

const SearchBar = () => {

    const { products, paginatedProducts, setProducts } = useContext(AppContext);

    
    
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
    // Handle search input change
    const handleSearchChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setProducts(products.filter(product =>
            product.title.toLowerCase().includes(searchTerm)
        ));
    };

    // Create a debounced version of the handleSearchChange function
    const optimisedVersion = useCallback(debounce(handleSearchChange),[products, setProducts])

    

  return (
    <div>
        {/* Search Bar */}
        <input
            type="text"
            placeholder="Search by title..."
            name='search'
            onChange={optimisedVersion}
            style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />
    </div>
  )
}

export default SearchBar