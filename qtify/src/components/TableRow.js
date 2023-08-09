import React, { useState } from "react";

const TableRow = ({ rowData }) => {
  const [isactive, setIsactive] = useState(false);
  function convertToFloat(value) {
    return parseFloat(value).toFixed(2);
  }

  function handleRowClick() {
    console.log("inside the function");
    setIsactive(true);
  }

  return (
    <>
      <tr onClick={handleRowClick} className="flex justify-evenly">
        <td className="w-[2%]">{rowData.rank}</td>
        <td className="w-[20%] text-left">{rowData.name}</td>
        <td className="w-[14.8%]">{convertToFloat(rowData.priceUsd)}</td>
        <td className="w-[14.8%]">{convertToFloat(rowData.marketCapUsd)}</td>
        <td className="w-[14.8%]">{convertToFloat(rowData["vwap24Hr"])}</td>
        <td className="w-[14.8%]">{convertToFloat(rowData.supply)}</td>
        <td className="w-[14.8%]">
          {convertToFloat(rowData["volumeUsd24Hr"])}
        </td>
        <td
          className={`w-[4%] ${
            rowData["changePercent24Hr"] > 0 ? "green" : "red"
          }`}
        >
          {convertToFloat(rowData["changePercent24Hr"])}
        </td>
      </tr>

      {isactive === true ? (
        <tr className="w-[100%] flex">
          <td className="w-[100%]">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="flex w-[60%]">
                  <img
                    src="https://assets.coincap.io/assets/icons/btc@2x.png"
                    class="ui tiny image"
                    className="h-[120%]"
                  />
                  <div className="flex flex-col pl-20">
                    <h2 className="font-semibold text-lg">Bitcoin(BTC)</h2>
                    <p className="pt-2">08August2023</p>
                  </div>
                </div>
                <div className="flex flex-col w-[20%]">
                  <div className="flex pb-4">
                    <h2 className="text-slate-500 font-semibold mr-4">
                      HIGH
                    </h2>
                    <h2 className="text-black-200 font-bold">$29,785.31</h2>
                  </div>
                  <div className="flex">
                    <h2 className="text-slate-500 font-semibold mr-4">
                      LOW
                    </h2>
                    <h2 className="text-black-200 font-bold">$28,887.03</h2>
                  </div>
                </div>
                <div className="flex flex-col w-[20%] ">
                  <div className="flex flex-col">
                    <div className="flex pb-4">
                      <h2 className="text-slate-500 font-semibold mr-4 ">
                        AVERAGE
                      </h2>
                      <h2 className="text-black-200 font-bold">$29,785.31</h2>
                    </div>
                    <div className="flex">
                      <h2 className="text-slate-500 font-semibold mr-4 ">
                        CHANGE
                      </h2>
                      <h2 className="text-emerald-600 font-bold">3.22%%</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </td>
        </tr>
      ) : null}
      <hr />
    </>
  );
};

export default TableRow;
