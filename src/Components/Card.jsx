import React from 'react';

const Card = ({product,addtocart}) => {
    const setCart = (product)=>{
        addtocart(product)
    }
    return (
        <div className='grid justify-items-center py-3 px-2 bg-white space-y-3 shadow-lg'>
            <img src={product.image} alt="" srcSet="" className='h-20 max-w-full m-0'/>
            
            <h1 className='text-sm w-36 truncate hover:text-wrap '>{product.title}</h1>
            <div className='flex'>
            <span className='text-sm '>₹</span><h1 className='font-extrabold'>{product.price}</h1>
            </div>
            <button onClick={()=>setCart(product)} className='bg-[#ffe066] rounded-xl px-4 py-1 text-sm font-medium hover:bg-[#c2aa4e]' >Add to Cart</button>
        </div>
    );
};

export default Card;