import React from "react";

const TableRow = ({ rowData, isClicked, onClick}) => {
    
  function convertToFloat(value) {
    return parseFloat(value).toFixed(2);
  }

    return (
      <>
    <tr onClick={onClick} className="flex justify-evenly  ">
      <td className="w-[2%]">{rowData.rank}</td>
      <td className="w-[20%] text-left">{rowData.name}</td>
      <td className="w-[14.8%]">{convertToFloat(rowData.priceUsd)}</td>
      <td className="w-[14.8%]">{convertToFloat(rowData.marketCapUsd)}</td>
      <td className="w-[14.8%]">{convertToFloat(rowData["vwap24Hr"])}</td>
      <td className="w-[14.8%]">{convertToFloat(rowData.supply)}</td>
      <td className="w-[14.8%]">{convertToFloat(rowData["volumeUsd24Hr"])}</td>
      <td
        className={`w-[4%] ${rowData["changePercent24Hr"] > 0 ? "green" : "red"}`}>
        {convertToFloat(rowData["changePercent24Hr"])}
      </td>
      </tr>
            <hr />
            </>
  );
};

export default TableRow;
