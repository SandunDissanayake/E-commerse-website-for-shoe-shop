import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;

    try {
      const response = await axios.get(`http://localhost:8080/api/carts/${cartId}`);
      if (response.data && Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
        calculateTotal(response.data.items);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      alert('Failed to load cart items. Please try again.');
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;

    try {
      await axios.put(`http://localhost:8080/api/carts/${cartId}/products/${productId}`, null, {
        params: { quantity: newQuantity },
      });
      fetchCartItems();
    } catch (error) {
      console.error('Error updating item quantity:', error);
      alert('Failed to update item quantity. Please try again.');
    }
  };

  const handleRemoveItem = async (productId) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;

    try {
      console.log(`Sending DELETE request to: http://localhost:8080/api/carts/${cartId}/products/${productId}`);
      await axios.delete(`http://localhost:8080/api/carts/${cartId}/products/${productId}`);
      fetchCartItems(); 
    } catch (error) {
      console.error('Error removing item:', error.response ? error.response.data : error.message);
      alert('Failed to remove item. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-lg-8 col-md-10 col-sm-12 cart-page">
        <h2 className="text-center mb-4">Your Cart</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>Rs.{item.product.price}</td>
                <td>
                  <div className="quantity-control d-flex justify-content-center">
                    <button 
                      onClick={() => handleQuantityChange(item.product.id, Math.max(item.quantity - 1, 1))}
                      disabled={item.quantity <= 1}
                      className="btn btn-secondary me-2"
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="btn btn-secondary ms-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td>Rs.{item.product.price * item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.product.id)} className="btn btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total text-center mt-4">
          <h4>Total: Rs.{total}</h4>
          <Link to="/blog/CheckoutPage" className="btn btn-primary mt-2">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
