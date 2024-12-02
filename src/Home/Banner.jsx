import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from "../products.json";
import SelectedCategory from '../components/SelectedCategory';

const title = (
    <h2>Buy Your One From <span>Thousand</span> Of Product</h2>
);
const desc = "We have the largest collection of Shoe products";
const bannerList = [
    {
        iconName: "iconfont-users-alt-4",
        text: "1.5 million Customers",
    },
    {
        iconName: "iconfont-notification",
        text: "More than 1000 Merchants",
    },
    {
        iconName: "iconfont-globe",
        text: "Buy Anything Online",
    },
];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        const filtered = productData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className='banner-content'>
                    {title}
                    <form>
                        <SelectedCategory select={"all"}/>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Search your Shoe product'
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <button type="submit">
                        <i className="icofont-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className='lab-ul'>
                        {searchInput && filteredProducts.map((product, i) => 
                            <li key={i}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;
