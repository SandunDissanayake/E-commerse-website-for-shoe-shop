import React, { useState } from 'react';
import ProductCard from '../shop/ProductCard';
import CartPage from './Blog';

const ParentComponent = () => {
  const [cart, setCart] = useState(null);

  const handleCartUpdate = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <div>
      <ProductCard 
        GridList={true} 
        products={""} 
        cartId={cart ? cart.id : null} 
        onCartUpdate={handleCartUpdate} 
      />
      <CartPage cart={cart} />
    </div>
  );
};

export default ParentComponent;
