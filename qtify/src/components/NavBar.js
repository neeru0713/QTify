import React from "react";
import { BiSearch } from "react-icons/bi";
import { BiBrightness } from "react-icons/bi";
const NavBar = () => {
  return (
    <div className="flex justify-between py-4 w-100">
      <div className="flex justify-between py-4 w-[15%] ml-[12rem] items-center">
        <h4>Coins</h4>
        <h4>Exchanges</h4>
        <h4>Swap</h4>
      </div>
      <div className="flex justify-between">
        <img
          src="https://coincap.io/static/logos/black.svg"
          className="h-[90%] w-[50%]"
        />
      </div>
      <div className="flex justify-between py-2 w-[15%] mr-[12rem] items-center ">
        <p className="">USD</p>
        <p className="">English</p>
        <BiSearch />
        <BiBrightness />
      </div>
    </div>
  );
};

export default NavBar;
