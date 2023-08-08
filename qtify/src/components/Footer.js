import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import {CiTwitter} from 'react-icons/ci';
const Footer = () => {
  return (
    <div className="flex justify-evenly w-100 bg-[#4d77ce] p-10 text-white">
      <div className="flex flex-col w-[22%]">
        <p className="font-bold">COINCAP.IO</p>
        <h6 className="text-xs text-slate-400 font-medium  py-[8px]">
          Methodology
        </h6>
        <h6 className="text-xs text-slate-400 font-medium  py-[2px]">
          Support
        </h6>
        <h6 className="text-xs text-slate-400 font-medium  py-[2px]">
          Our API
        </h6>
        <h6 className="text-xs text-slate-400 font-medium py-[2px]">
          Rate Comparison
        </h6>
        <h6 className="text-xs text-slate-400 font-medium py-[2px]">Careers</h6>
      </div>
      <div className="flex flex-col w-[32%]">
        <p className="font-bold">LEGALS</p>
        <h6 className="text-xs text-slate-400  font-medium py-[8px]">
          Terms of Service
        </h6>
        <h6 className="text-xs text-slate-400 font-medium">Privacy Policy</h6>
        <h6 className="font-bold py-[12px]">DISCLAIMER</h6>
        <p className="text-xs text-slate-400 font-medium">
          Neither ShapeShift AG nor CoinCap are in any way associated with
          CoinMarketCap, LLC or any of its goods and services.
        </p>
      </div>
      <div className="flex flex-col w-[22%]">
        <p className="font-bold">FOLLOW US</p>
        <div className="flex">
          <CiTwitter className="h-[40px] w-[30px] ml-[4px]" />
          <AiFillFacebook className="h-[40px] w-[30px]" />
        </div>
      </div>
      <div className="flex flex-col w-[22%]">
        <p>COINCAP APP AVAILABLE ON</p>
        <div className="flex flex-col py-[6%]">
          <img
            src="https://coincap.io/static/images/stores/google_play.svg"
            className="h-[40%] w-[60%] m-[4%]"
          />

          <img
            src="https://coincap.io/static/images/stores/apple_store.svg"
            className="h-[40%] w-[60%] m-[4%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer