import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';


const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems(); // Load the cart items when the page loads
  }, []);

  const fetchCartItems = async () => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;

    try {
      const response = await axios.get(`http://localhost:8080/api/carts/${cartId}`);
      if (response.data && Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
        setTotal(response.data.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const cartId = localStorage.getItem('cartId');
    try {
      const orderData = {
        name,
        address,
        paymentMethod,
        totalAmount: total,
        cartItems
      };
      const response = await axios.post(`http://localhost:8080/api/orders`, orderData);
      if (response.status === 200) {
        alert('Order placed successfully!');
        navigate('/order-success'); // Navigate to success page after order is placed
      }
    } catch (error) {
      console.error('Error placing the order:', error);
    }
  };

  return (
    <div className="checkout-page container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <div className="row">
        {/* Order Summary Section */}
        <div className="col-md-6 order-summary">
          <h4>Your Order Summary</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>Rs.{item.product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5>Total: Rs.{total}</h5>
        </div>

        {/* Checkout Form Section */}
        <div className="col-md-6">
          <form onSubmit={handleOrderSubmit} className="checkout-form p-4 shadow-sm bg-light rounded">
            <div className="form-group mb-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address">Shipping Address</label>
              <textarea
                id="address"
                className="form-control"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="payment">Payment Method</label>
              <select
                id="payment"
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash_on_delivery">Cash on Delivery</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success btn-block">
              <FaCreditCard className="mr-2" /> Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
