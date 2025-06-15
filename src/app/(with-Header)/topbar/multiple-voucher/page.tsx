"use client";
import { useState } from "react";

const initialVouchers = [
  { id: 1, party: "VICKY BARETA", narration: "VKS81625 +594552", debit: 0, credit: 148638 },
  { id: 2, party: "GOPAL", narration: "VKS81625 +594552", debit: 95128, credit: 0 },
  { id: 3, party: "KS PTL", narration: "KSNAV135 +45359", debit: 0, credit: 15875 },
  { id: 4, party: "GOPAL", narration: "KSNAV135 +45359", debit: 7257, credit: 0 },
];

export default function Home() {
  const [vouchers, setVouchers] = useState(initialVouchers);

  const totalDebit = vouchers.reduce((sum, v) => sum + v.debit, 0);
  const totalCredit = vouchers.reduce((sum, v) => sum + v.credit, 0);
  const difference = totalDebit - totalCredit;

  return (
    <div className="min-h-180 bg-sky-200 text-white font-sans">
           <div className="bg-yellow-300 relative bottom-9 right-1 left-1 h-7 text-black w-40 text-center text-lg font-bold">Multiple Voucher</div>

      {/* Voucher Entry Section */}
    
      <div className="bg-black p-1 flex flex-wrap relative bottom-5 left-1 w-469 justify-between">
            <div className="flex flex-wrap gap-1">
              <button className="bg-sky-600 text-white px-6 py-1 text-sm border border-white">New</button>
              <button className="bg-purple-500 text-white px-5 py-1 text-sm border border-white">Modify</button>
              <button className="bg-red-600 text-white px-5 py-1 text-sm border border-white">Delete</button>
              <button className="bg-yellow-500 text-white px-5 py-1 text-sm border border-white">Find</button>
              <button className="bg-pink-700 text-white px-5 py-2 text-sm border border-white">Close</button>
            </div>
            <div className="flex gap-1 items-center mt-1">
              <div className="w-24">
                <div className="bg-white text-black text-xs px-12 py-0.5">-</div>
                <div className="bg-yellow-400 text-black text-sm font-bold px-4 text-center">1/1</div>
              </div>
            </div>
          </div>
          <div className="bg-white relative left-2 h-7 text-black w-30 text-center text-sm font-bold">Multiple Voucher</div>

        <div className="bg-yellow-50 p-4 relative h-140 shadow">
        <div className="bg-sky-400 relative  h-7 text-black w-80 text-center p-1 text-sm font-bold">Monday-April 14,2025</div>

          <div className="mb-4 flex items-center gap-4 p-2 text-black">
            <div>
              <label className="font-bold mr-2 ">Date:</label>
              <input
                type="date"
                defaultValue="2025-04-14"
                className=" bg-white px-1 border border-gray-200 text-gray-500 relative top-7 right-14"
              />
            </div>
            <div>
              <label className="font-bold mr-2">Type:</label>
              <input
                type="text"
                value="Cash"
                readOnly
                className=" bg-white px-2 w-40 border border-gray-200  text-gray-500 relative top-7 right-14"
              />
            </div>
          </div>
          <div className="bg-yellow-50 flex flex-wrap relative top-3 w-360 h-16 justify-between">
            <div className="flex items-center">
              <div className="w-24 ">
              <div className="bg-black relative text-center text-sm px-5  w-28">S.N</div>
              <input
                type="number"
                defaultValue="5"
                className=" bg-white text-right border border-gray-200 text-gray-500 relative  w-28" /> 
                </div>
            </div>
            <div className="flex items-center">
              <div className="">
              <div className="bg-black relative text-sm text-center px-5  w-74 right-29">Party</div>
              <input
                type="text"
                defaultValue=""
                className=" bg-white text-right border border-gray-200 text-gray-500 relative  w-74 right-29" /> 
                </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 ">
              <div className="bg-black relative text-sm px-5 text-center w-88 right-61">Narration</div>
              <input
                type="text"
                defaultValue=""
                className=" bg-white text-right border border-gray-200 text-gray-500 relative  w-88 right-61" /> 
                </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 ">
              <div className="bg-black relative text-sm px-5  w-45 right-29">Pay(Dr.):</div>
              <input
                type="number"
                defaultValue="5"
                className=" bg-white text-right border border-gray-200 text-gray-500 relative  w-45 right-29" /> 
                </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 ">
              <div className="bg-black relative text-sm px-5  w-50 right-40">Receive(Cr):</div>
              <input
                type="number"
                defaultValue="5"
                className=" bg-white text-right border border-gray-200 text-gray-500 relative w-50 right-40" /> 
                </div>
            </div>
            <button className="bg-green-600 text-black px-6 py-1 font-bold relative h-10 top-4 right-47 text-sm border border-white">Add</button>

          </div>
         
          {/* Table */}
        <div className="bg-gray-400 border border-black relative h-70 top-4 ">
          <table className="w-294 border  text-black text-sm mb-4">
            <thead className="bg-sky-400 text-center relative text-left  ">
              <tr>
                <th className="border border-gray-300  p-2">S.No</th>
                <th className="border border-gray-300 p-2">Party</th>
                <th className="border border-gray-300 p-2">Narration</th>
                <th className="border border-gray-300 p-2">Debit</th>
                <th className="border border-gray-300 p-2">Credit</th>
              </tr>
            </thead>
            <tbody className="bg-white ">
              {vouchers.map((v) => (
                <tr key={v.id} className="hover:bg-blue-500 text-xs ">
                  <td className="border border-gray-400    p-2 text-right">{v.id}</td>
                  <td className="border border-gray-400 p-2">{v.party}</td>
                  <td className="border border-gray-400 p-2">{v.narration}</td>
                  <td className="border border-gray-400 p-2 text-right">{v.debit.toFixed(2)}</td>
                  <td className="border border-gray-400 p-2 text-right">{v.credit.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
          {/* Summary */}
          <div className="flex justify-between items-center relative top-5 bg-black p-2 ">
            <div className="font-bold bg-yellow-400 relative w-40 left-48 text-lg text-center text-black ">
              Difference: 
              </div>
              <div className="bg-yellow-400 relative  text-lg  text-black w-50 right-50 flex">
              <span className={difference >= 0 ? "text-green-800 bg-sky-200 " : " text-black relative font-bold left-17"}>
                {difference.toFixed(2)}</span>  <div className="bg-sky-400 text-center font-bold w-10 relative left-19 "><span>
                {difference >= 0 ? "Cr" : "Dr"} </span> </div> 
            </div>
            <div className="font-bold bg-yellow-400 text-lg text-black relative right-85 px-2 w-35 text-right">{totalDebit.toFixed(2)}</div>
            <div className="font-bold bg-yellow-400 text-lg text-black relative right-183 text-right px-2 w-35">{totalCredit.toFixed(2)}</div>
          </div>
        </div>
      
    </div>
  );
}
