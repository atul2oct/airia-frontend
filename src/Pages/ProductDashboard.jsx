import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import Product from '../components/DashBoard/Product';

const ProductDashboard = () => {
  const { fetchProduct, paginatedProducts, loading } = useContext(AppContext);

  useEffect(() => {
    fetchProduct(); // Fetch products initially
  }, []);

  // useEffect(() => {
  //   if (products.length > 0) {
  //     setFilteredProducts(products); // Reset filtered products when products change
  //   }
  // }, [products, setFilteredProducts]);


  return (
    <div>
      <div>
        {
          loading ? <Spinner/> : 
          (
            paginatedProducts.length > 0 ? 
            (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
                  paginatedProducts.map((product)=>(
                    <Product key={product.id} product={product}/>
                  ))
                }
              </div>
            ) : 
            (
              <div className="flex justify-center items-center">
                <p>No Data Found</p>
              </div>
            )
          )
        }
      </div> 
      
      {/* Pagination Controls */}
      <Pagination/>
      
    </div>
  );
};

export default ProductDashboard;
