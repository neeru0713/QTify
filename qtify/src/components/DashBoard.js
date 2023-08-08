import React from "react";

const DashBoard = () => {
  return (
    <div className="flex justify-evenly dashboard h-[15rem] w-100 bg-[#4d77ce] py-4 text-white">
      <div>
        <p>MARKET CAP</p>
        <h4>$1.19T</h4>
      </div>
      <div>
        <p>EXCHANGE VOL</p>
        <h4>$23.67B</h4>
      </div>
      <div>
        <p>ASSETS</p>
        <h4>2,296</h4>
      </div>
      <div>
        <p>EXCHANGES</p>
        <h4>73</h4>
      </div>
      <div>
        <p>MARKETS</p>
        <h4>11,370</h4>
      </div>
      <div>
        <p>BTC DOM INDEX</p>
        <h4>48.0%</h4>
      </div>
    </div>
  );
};

export default DashBoard;
