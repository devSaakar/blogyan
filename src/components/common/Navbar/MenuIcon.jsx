import React, { useState } from "react";

const MenuIcon = ({open,toogleOpen}) => {
  return (
    <div className="inline-block cursor-pointer" onClick={toogleOpen}>
      <div className={`h-1 w-8 my-1 bg-primary transition-all duration-500 ${open?'translate-y-2 rotate-45':''}`}></div>
      <div className={`h-1 w-8 my-1 bg-white transition-all duration-500 ${open?'opacity-0':''}`}></div>
      <div className={`h-1 w-8 my-1 bg-secondary transition-all duration-500 ${open?'-translate-y-2 -rotate-45':''}`}></div>
    </div>
  );
};

export default MenuIcon;
