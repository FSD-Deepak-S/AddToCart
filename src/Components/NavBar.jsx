import React from "react";

const NavBar = ({ cart, openCart }) => {
  const open = () => {
    openCart();
  };

  return (
    <div className="shadow-lg fixed z-10 w-full flex justify-between px-5 py-1 bg-white h-16 items-center">
      <h1 className="font-extrabold text-2xl">Online Shopping</h1>
      <a href="#" className="font-extrabold">Home</a>
      <div className="flex items-center">
        <button onClick={() => open()} className="flex items-center relative font-extrabold">
          <h1 className="text-xl font-extrabold absolute top-0 left-7">
            {cart.length}
          </h1>
          <img
            src="https://th.bing.com/th/id/OIP.pOnfCsTErz9dI3GsCGZEngHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            srcSet=""
            className="h-16"
          />
          Cart
        </button>
      </div>
    </div>
  );
};

export default NavBar;
