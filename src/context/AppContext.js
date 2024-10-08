import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { productsData } from "../data/data";
import toast from "react-hot-toast";

// context creation-data create krta hai
export const AppContext=createContext();

// provider-data pass krta hai
// AppContextProvider iss tag k ander jo bhi component hai wo iske children honge index.js page jao samgh jaoge
// children pass krne ki jarurat nhi hai 
// step 1
export default function AppContextProvider({children}){

    const itemsPerPage = 20;

    const[loading,setLoading]=useState(false);
    const currentPageRef = useRef(1); // Use ref to persist the current page

    const currentPage = currentPageRef.current;
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [priceRange, setPriceRange] = useState([0, Infinity]); // [min, max]
    const [popularityRange, setPopularityRange] = useState([0, 20000]);
    const [cart, setCart] = useState([]); // State for cart
  
    const fetchProduct = () => {
        const toastId = toast.loading('Loading...')
        setLoading(true)
        try {
        const productsObject = productsData.products;

        // Transform the products object into an array using Object.entries
        const productsArray = Object.entries(productsObject).map(([id, product]) => {
            return {
            id,
            ...product,
            };
        });
            console.log("rendering")
        setProducts(productsArray);
        setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('Failed to process products data');
        }
        toast.dismiss(toastId)
    } // Empty dependency array ensures fetchProduct does not change

    

    // Use useMemo to optimize filtering of products useMemo for Filtering: Memoize filteredProducts to avoid recalculating the filtered list unless products or searchQuery changes.
    // const filteredProducts = useMemo(() => 
    //     products.filter(product =>
    //     product.title.toLowerCase().includes(searchQuery.toLowerCase())
    // ), [products, searchQuery]);

    // Memoize the filteredProducts calculation based on searchQuery and priceRange
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // for search
            const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

            const popularity = Number(product.popularity);
            const price = Number(product.price);
            const [priceMin, priceMax] = priceRange;
            const [popMin, popMax] = popularityRange;

            const priceMatch = (priceMin <= price && (isNaN(priceMax) || price <= priceMax));
            const popularityMatch = (popMin <= popularity && (isNaN(popMax) || popularity <= popMax));
            
            return titleMatch && priceMatch && popularityMatch;
        });
    }, [products, searchQuery, priceRange, popularityRange]); // Dependencies for useMemo

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Memoize the paginatedProducts calculation
    const paginatedProducts = useMemo(() => {
        return filteredProducts.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [filteredProducts, currentPage, itemsPerPage]);

    function handlePageChange(page){
        if (page >= 1 && page <= totalPages) {
            currentPageRef.current = page; // Update the ref value
            // Trigger a re-render manually if needed, e.g., by updating a state
            setProducts([...products]); // This will cause the component to re-render
        }
    };

    // Initialize cart from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add product to cart
    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
        toast.success("Product added to cart")
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
        toast.error("Product added to cart")
    };

    // snapshot of data or context
    const value={
        loading,
        setLoading,
        totalPages,
        handlePageChange,
        fetchProduct,
        products,
        setProducts,
        paginatedProducts,
        currentPage,
        filteredProducts,
        searchQuery,
        setSearchQuery,
        cart,
        addToCart,
        removeFromCart,
        priceRange,
        setPriceRange,
        popularityRange,
        setPopularityRange
    }

    // step 2
    // sending data/value to childern/App.js 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}