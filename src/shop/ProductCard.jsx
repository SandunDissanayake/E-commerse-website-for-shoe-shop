import React, { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import axios from 'axios';

const ProductCard = ({ GridList, products }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      fetchCart(storedCartId);
    } else {
      createCart();
    }
  }, []);

  const fetchCart = async (cartId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/carts/${cartId}`);
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const createCart = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/carts');
      setCart(response.data);
      localStorage.setItem('cartId', response.data.id); // Store cartId in localStorage
    } catch (error) {
      console.error('Error creating cart:', error);
    }
  };

  const handleAddToCart = async (product) => {
    if (!cart) {
      alert('Cart not found!');
      return;
    }

    try {
      const cartItem = { quantity: 1 };  // Default quantity to 1
      const response = await axios.post(
        `http://localhost:8080/api/carts/${cart.id}/products/${product.id}`, 
        cartItem
      );
      console.log('Product added to cart:', response.data);
      setCart(response.data);  // Update cart state with new cart data
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart.');
    }
  };

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={i} className='col-lg-4 col-md-6 col-12'>
          <div className='product-item'>
            <div className='product-thumb'>
              <img src={product.imageUrl} alt={product.name} />
              <div className='product-action-link'>
                <button 
                  className='btn-add-to-cart' 
                  onClick={() => handleAddToCart(product)}  // Add to cart
                >
                  <FaCartPlus size={20} />
                </button>
              </div>
            </div>
            <div className='product-content'>
              <h5>{product.name}</h5>
              <h6>Rs.{product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
