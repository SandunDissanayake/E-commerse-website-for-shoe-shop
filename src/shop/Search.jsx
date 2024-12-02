import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='widget widget-search'>
            <form className='search-wrapper mb-3' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit'>
                    <i className='icofont-search-2'></i>
                </button>
            </form>

            {/* Display filtered products or a message if none are found */}
            <div>
                {searchTerm && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link key={product.id} to={`/shop/${product.id}`} className='d-flex gap-3 p-2'>
                            <div className='pro-thumb h-25'>
                                {/* Assuming the product image URL field is 'imageUrl' */}
                                <img src={product.imageUrl} alt={product.name} width={70} className='flex-grow-0' />
                            </div>
                            <div className='product-content'>
                                <span>{product.name}</span>
                                <h6>${product.price}</h6>
                            </div>
                        </Link>
                    ))
                ) : searchTerm ? (
                    <p>No products found.</p>
                ) : null}
            </div>
        </div>
    );
};

export default Search;
