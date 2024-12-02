import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import AddProduct from './shop/AddProduct.jsx';
import Signup from './Home/Signup.jsx';
import Login from './Home/Login.jsx';
import CheckoutPage from './blog/Checkout.jsx'; 
import About from './About/About.jsx';// Correct component import
import Contact from './ContactPage/Contact.jsx';
import OrderConfirmationPage from './blog/Confirm.jsx';
// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App component renders the layout (NavBar, Footer)
    children: [
      { path: "/", element: <Home /> },  // Home page
      { path: "/blog", element: <Blog /> },  // Blog page
      { path: "/shop", element: <Shop /> },  // Shop page
      { path: "/shop/:id", element: <SingleProduct /> },  // Single product page
      { path: "/shop/add-product", element: <AddProduct /> },  // AddProduct page for admin
      { path: "/signup", element: <Signup /> },  // Signup page
      { path: "/login", element: <Login /> },  // Login page
      { path: "/blog/checkoutpage", element: <CheckoutPage /> }, 
      { path: "/about", element: <About /> },
      {path: "/contact", element:<Contact/>},
      {path: "/orderconfirmationpage", element: <OrderConfirmationPage/>}

      // Checkout page
    ],
  },
]);

// Render RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
