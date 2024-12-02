import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'Credit Card', 
  });
  const navigate = useNavigate();

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
        setTotal(response.data.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)); // Calculate total
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      alert('Cart ID is missing.');
      return;
    }
  
    try {
      
      const response = await axios.post(`http://localhost:8080/api/order/${cartId}`, {
        customerName: customerDetails.name,
        customerAddress: customerDetails.address,
        customerPhone: customerDetails.phone,
        paymentMethod: customerDetails.paymentMethod,
      });
  
      if (response.status === 200) {
        alert('Order placed successfully!');
        navigate('/orderconfirmationpage');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Try again.');
    }
  };

  
  return (
    <div className="checkout-page container">
      <h2>Checkout</h2>
      
      <h4>Customer Details</h4>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={customerDetails.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={customerDetails.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={customerDetails.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Payment Method:</label>
        <select
          name="paymentMethod"
          className="form-control"
          value={customerDetails.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </div>

      <h4>Order Summary</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>Rs.{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>Rs.{item.product.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checkout-total">
        <h4>Total: Rs.{total}</h4>
        <button className="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
