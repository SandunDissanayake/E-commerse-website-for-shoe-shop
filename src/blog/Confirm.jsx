import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const OrderConfirmationPage = () => {
  return (
    <div className="order-confirmation container mt-5">
      <div className="card border-primary mb-3">
        <div className="card-header bg-primary text-white">
          <h2>Order Confirmation</h2>
        </div>
        <div className="card-body">
          <h4 className="card-title">Thank you for your order!</h4>
          
          <div className="alert alert-success" role="alert">
          <p className="card-text">
            Your order has been successfully placed. We appreciate your business and look forward to serving you again.
          </p>
          </div>
        </div>
        <div className="card-footer text-center">
          <Link to="/" className="btn btn-primary">Go to Home</Link>
          <Link to="/shop" className="btn btn-secondary ms-2">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
