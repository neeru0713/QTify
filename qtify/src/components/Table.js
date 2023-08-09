import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

const Table = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  // stoore offset in state

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets?limit=20&offset=${offset}`,
      );
      const jsonData = await response.json();
      setData([...data, ...jsonData.data]); // Fix: Use 'setData' instead of 'getData'
      // set state of offset  cur val + 20
      setOffset(offset + 20);
    } catch (e) {
      console.log(e);
    }
  }

  function handleButtonClick() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-scroll overflow-x-hidden -mt-[6rem] m-auto w-[85%] bg-white border border-slate-300 shadow-lg shadow-slate-500/40 hover:shadow-blue-500/80 ">
        <table className="flex flex-col text-black text-md pt-6 pl-2 w-[95%] h-100">
          <thead className="flex justify-between text-slate-500 text-xs pt-1 w-[100%] py-4">
            <tr className="flex justify-between w-[100%]">
              <th className="w-[2%] text-left">Rank</th>
              <th className="w-[20%] text-left">Name</th>
              <th className="w-[14.8%] text-left">Price</th>
              <th className="w-[14.8%]">Market Cap</th>
              <th className="w-[14.8%]">VWAP(24Hr)</th>
              <th className="w-[14.8%]">Supply</th>
              <th className="w-[14.8%]">Volume(24Hr)</th>
              <th className="w-[4%]">Change(24Hr)</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            {data.map((item) => (
              <TableRow rowData={item} />
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleButtonClick}
        className="h-[40px] w-[130px] m-auto bg-emerald-500 text-white rounded-full mt-[4%] mb-[4%]"
      >
        View More
      </button>
    </div>
  );
};

export default Table;
