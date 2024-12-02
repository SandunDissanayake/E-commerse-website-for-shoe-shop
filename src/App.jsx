import React from 'react';
import { Outlet } from 'react-router-dom'; // Make sure this import is present
import './App.css';
import NavItem from './components/NavItem'; // Adjust the path if necessary
import Footer from './components/Footer';   // Adjust the path if necessary

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <NavItem />
      
      {/* Main Content Area */}
      <div className='min-vh-100'>
        {/* Outlet will render the children routes like Home, Shop, AddProduct, etc. */}
        <Outlet />
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
