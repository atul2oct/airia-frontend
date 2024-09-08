import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const FilterComponent = () => {
    const { setPriceRange} = useContext(AppContext);

    // Handle price range filter
    const handlePriceFilter = (event) => {
        const range = event.target.value;
        
        if (range === "") {
            // Reset to include all popularity values
            setPriceRange([0, Infinity]);
        } else {
            // Parse and set the range
            const [min, max] = range.split('-').map(Number);
            setPriceRange([min || 0, max || Infinity]); // Default to [0, Infinity] if no value
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            <div className="mb-6">
                <h4 className="text-md font-medium mb-2">Price Range</h4>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="price"
                            value=""
                            onChange={handlePriceFilter}
                            className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">All</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="price"
                            value="0-5000"
                            onChange={handlePriceFilter}
                            className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">0-5000</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="price"
                            value="5000-10000"
                            onChange={handlePriceFilter}
                            className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">5000-10000</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="price"
                            value="10000-20000"
                            onChange={handlePriceFilter}
                            className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">10000-20000</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="price"
                            value="20000"
                            onChange={handlePriceFilter}
                            className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">20000+</span>
                    </label>
                </div>
            </div>
            
            
        </div>
    );
};

export default FilterComponent;

