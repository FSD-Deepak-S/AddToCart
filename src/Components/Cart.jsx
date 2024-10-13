import React from 'react';
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
            <h1 className='text-2xl border-b-2'>Shopping Cart</h1>
                <h1 className='font-extrabold px-2'>Total Amount : ₹ {cartValue.toFixed(2)}</h1>
            <button className='font-extrabold bg-red-500 p-3' onClick={()=>close()}>X</button>
            </div>
            <div className='overflow-y-auto p-5'>
            {
                cart.length === 0 ? 
                <h1 className='text-center'>Your Cart is Empty</h1> :

            cart.map((cartProducts,index)=>{
                return(
                    <div key={index} className='grid items-center border-2 gap-1 p-1 sm:flex lg:gap-0 lg:justify-evenly lg:m-auto w-full lg:w-1/2 bg-gray-400'>
                        <div>
                        <img src={cartProducts.image} alt="" srcSet="" className='h-16 w-16 sm:w-20 sm:h-20 lg:w-36 lg:h-36'/>
                        </div>
                        
                        <h1 className='text-xs text-wrap lg:w-36 lg:text-base'>{cartProducts.title}</h1>
                        <div className='flex '>
                        <span className='text-sm '>₹</span><h1 className='font-extrabold '>{cartProducts.price}</h1>
                        </div>
                        <button className='bg-white shadow-md text-xs rounded-lg px-3 lg:text-base' onClick={()=>removeCart(cartProducts)}>Remove from Cart</button>
                    </div>
                )
            })
            }
            </div>
            
        </div>
    );
};

export default Cart;