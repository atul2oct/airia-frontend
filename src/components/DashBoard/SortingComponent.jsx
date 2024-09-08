import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const SortingComponent = () => {
    const { setPopularityRange} = useContext(AppContext);

    // Handle popularity range filter
    const handlePopularityFilter = (event) => {
        const range = event.target.value;
        
        if (range === "") {
            // Reset to include all popularity values
            setPopularityRange([0, Infinity]);
        } else {
            // Parse and set the range
            const [min, max] = range.split('-').map(Number);
            setPopularityRange([min || 0, max || Infinity]); // Default to [0, Infinity] if no value
        }
    };

    return (
        <div>
            <h4 className="text-md font-medium mb-2">Popularity Range</h4>
            <div className="space-y-2">
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="popularity"
                        value=""
                        onChange={handlePopularityFilter}
                        className="form-radio text-blue-600"
                    />
                    <span className="text-gray-700">All</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="popularity"
                        value="0-10000"
                        onChange={handlePopularityFilter}
                        className="form-radio text-blue-600"
                    />
                    <span className="text-gray-700">0-10000</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="popularity"
                        value="10000-30000"
                        onChange={handlePopularityFilter}
                        className="form-radio text-blue-600"
                    />
                    <span className="text-gray-700">10000-30000</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="popularity"
                        value="30000-50000"
                        onChange={handlePopularityFilter}
                        className="form-radio text-blue-600"
                    />
                    <span className="text-gray-700">30000-50000</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="popularity"
                        value="50000"
                        onChange={handlePopularityFilter}
                        className="form-radio text-blue-600"
                    />
                    <span className="text-gray-700">50000+</span>
                </label>
            </div>
        </div>
    );
};

export default SortingComponent;
