import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

export const Navbar = () => {


      const {navigate, token} = useAppContext() 

  return (
    <div className="flex justify-between items-center cursor-pointer
    py-5 mx-8 sm:mx-20 xl:mx-32">
      <div className="flex items-center gap-4">
  <img
    onClick={() => navigate('/')}
    src={assets.logo}
    alt="logo"
    className="w-32 sm:w-44"
  />
</div>
      <button onClick={() => navigate('/admin')} className="flex items-center gap-2 
      rounded-full text-sm cursor-pointer bg-primary cursor-pointer
      text-white px-5 py-2.5">
        {token ? 'Dashboard' : 'Login' }
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
    
  );
};


