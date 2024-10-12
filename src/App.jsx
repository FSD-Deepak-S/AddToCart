import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Product from './Components/Product';

const App = () => {
  // creating state for api data 
  const [products,setProducts] = useState([]);
  // creating state for cart data 
  const [cart,setCart] = useState([]);
  // creating state for modal open and close  
  const [cartOpen,setCartOpen] = useState(false)
  // creating state for cart value
  const [cartValue,setCartValue] = useState(0)



// fetch data from api using useEffect and set to setproducts state  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  // to open the cart when clicking Cart in Navbar Component 
  const openCart = ()=>{
    setCartOpen(true)
  }

  // to close the cart when clicking Close in Cart Component 
  const closeCart = ()=>{
    setCartOpen(false)
  }


  return (
    <div>
      <div className={cartOpen ? "pointer-events-none overflow-x-hidden blur-lg" : ""}>
      <NavBar cart={cart} openCart={openCart}/>      
      <Product products={products} cart={cart} setCart={setCart} setCartValue={setCartValue}/>
      </div>
      
      {cartOpen ?  <Cart cart={cart} setCart={setCart} closeCart={closeCart} cartValue={cartValue} setCartValue={setCartValue}/> : ""}    
    </div>
  );
};

export default App;