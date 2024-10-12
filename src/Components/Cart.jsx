import React from 'react';
import Product from './Product';

const Cart = ({cart,setCart,closeCart,cartValue,setCartValue}) => {
    const close = ()=>{
        closeCart()
    }
    
    const removeCart = (cartProducts)=>{
        setCart(pval=>pval.filter(item=>item.id !== cartProducts.id))
        setCartValue(ppval=>ppval-parseFloat(cartProducts.price))
    }


    return (
       
        <div className='shadow-lg absolute w-[80%] h-[80%] top-[10%] left-[10%] bg-white z-20 flex flex-col'>
            <div  className='right-0  flex justify-between items-center'>
                <h1 className='font-extrabold px-2'>Total Amount : ₹ {cartValue.toFixed(2)}</h1>
            <button className='font-extrabold bg-red-500 p-3' onClick={()=>close()}>X</button>
            </div>
            <div className='overflow-y-auto p-5'>
            {
                cart.length === 0 ? 
                <h1 className='text-center'>Your Cart Empty</h1> :

            cart.map((cartProducts,index)=>{
                return(
                    <div key={index} className='grid items-center border-2 gap-1 p-1 sm:flex sm:justify-between w-full '>
                        <img src={cartProducts.image} alt="" srcSet="" className='h-16 w-16'/>
                        <h1 className='text-xs text-wrap sm:w-28'>{cartProducts.title}</h1>
                        <div className='flex '>
                        <span className='text-sm '>₹</span><h1 className='font-extrabold'>{cartProducts.price}</h1>
                        </div>
                        <button className='bg-red-500 text-xs rounded-lg font-extrabold text-white px-3' onClick={()=>removeCart(cartProducts)}>Remove from Cart</button>
                    </div>
                )
            })
            }
            </div>
            
        </div>
    );
};

export default Cart;