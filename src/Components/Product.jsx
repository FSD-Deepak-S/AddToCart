import React from "react";
import Card from "./Card";

const Product = ({ products,cart,setCart,setCartValue }) => {

    const addtocart = (product)=>{
        
        const c = cart.find(cart => cart.id === product.id);

        if (typeof c === "undefined") {
            setCart([...cart,product])
            setCartValue(pval=>pval+parseFloat(product.price))
        }else{
            if ( c.id == product.id) {
                alert("Item already added to the cart")
            }else{
                setCart([...cart,product])
            setCartValue(pval=>pval+parseFloat(product.price))
            }

        }
       
    }


  return (
    <div className="flex flex-wrap justify-center gap-1 relative top-10 h-lvh py-10 ">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Card product={product} addtocart={addtocart}/>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
