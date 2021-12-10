import React from 'react';
// stylesheet
import './product.css'
const Products = () => {
    return (
        <>
            <div className="searchDiv h-25 py-4 ">
                <h2 className='fs-2 fw-bold text-light mt-3'>Search</h2>
                <input className='search' placeholder='Search by materials' type="text" name="search" id="search" />
            </div>
        </>
    );
};

export default Products;