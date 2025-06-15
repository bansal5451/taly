
  'use client';
  import React from 'react';
  import  "../partywise-balance/party.css";
  import { useState } from 'react';


  export default function TrialBalances() {
  
    const data = {
      left: [
        { sr: 1, party: "CASH", balance: "-99,222.00 Dr." },
        { sr: 2, party: "Total Debtors", balance: "-2,535,045.00 Dr." },
      ],
      right: [
        { sr: 1, party: "Total Creditors", balance: "2,634,267.00 Cr." },
      ],
    };
    const [fromDate, setFromDate] = useState('');
        const [toDate, setToDate] = useState('');
  
    return (
      <>
      <div className="h-175 bg-sky-200 p-2 text-[13px] font-sans">
  
            {/* Controls Bar */}
            <div className="bg-gray ">
            <button className="bg-green-400 relative bottom-10 right-1 h-5 w-40 text-center text-sm font-bold">Partiwise Balances</button>

            <button className="bg-yellow-400 relative bottom-10  h-5 w-40 text-center text-sm font-bold">Trail Balances</button>
  
            <div className="bg-black p-1 flex flex-wrap  relative bottom-4 items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <button className="bg-green-500 text-white px-5 py-1 text-sm border border-white">Print</button>
                <button className="bg-purple-800 text-white px-4 py-1 text-sm  border border-white">Preview</button>
                <button className="bg-blue-400 text-white px-4 py-1 text-sm  border border-white">Period</button>
                <button className="bg-yellow-500 text-white px-4 py-1 text-sm  border border-white">Full Period</button>
                <button className="bg-pink-900 text-white px-4 py-1 text-sm  border border-white">E-Mail</button>
                <button className="bg-pink-700 text-white px-4 py-2 text-sm  border border-white">Close</button>
              </div>
              <div className="flex gap-67 items-center mt-1">
              <div className="relative left-130">
                <div className="bg-green-600 w-30 text-white text-xs py-0.5 text-center">From Date:</div>
                <div className="bg-white  w-30 text-black text-xs  font-bold text-center">
                  <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}/>
                 </div>
              </div>
            
            <div className=" relative left-65 ">
                <div className="bg-green-600 w-30 text-white text-xs py-0.5 text-center">To Date:</div>
                <div className="bg-white  w-30 text-black text-xs  font-bold text-center">
                  <input className="" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}/>
                 </div>
              </div>
                    <div className="">
                    <div className="bg-blue-900 w-30 text-white text-xs py-0.5 text-center">Total Balance</div>
                     <div className="bg-white  w-30 text-black text-xs  font-bold text-center">NIL</div>
                     </div>
                     </div>
            </div>
          {/* Combined Table */}
          <div className="bg-gray-400  relative bottom-4 border border-black h-150 mt-2">
        <div className=" bg-white overflow-auto w-300">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-cyan-500 text-black text-left">
                <th className="border border-black p-1 w-8">Sr.</th>
                <th className="border border-black p-1">Party </th>
                <th className="border border-black p-1">Balance</th>
                <th className="border border-black p-1">T</th>
                <th className="border border-black p-1 w-8">Sr.</th>
                <th className="border border-black p-1">Party</th>
                <th className="border border-black p-1">Balance</th>
                <th className="border border-black p-1">T</th>
              </tr>
            </thead>
            <tbody>
  {Array.from({ length: Math.max(data.left.length, data.right.length) }).map((_, index) => {
    const leftItem = data.left[index] || { sr: "", party: "", balance: "" };
    const rightItem = data.right[index] || { sr: "", party: "", balance: "" };

    return (
      <tr key={index}>
        {/* Left Side */}
        <td className="border border-black p-1">{leftItem.sr}</td>
        <td className="border border-black p-1">{leftItem.party}</td>
        <td className="border border-black p-1">{leftItem.balance}</td>
        <td className="border border-black p-1"></td>

        {/* Right Side */}
        <td className="border border-black p-1">{rightItem.sr}</td>
        <td className="border border-black p-1">{rightItem.party}</td>
        <td className="border border-black p-1">{rightItem.balance}</td>
        <td className="border border-black p-1"></td>
      </tr>
     
    );
  })}
   <tr>
      <td className="border border-black p-2"></td>
      <td className="border border-black p-1"></td>
      <td className="border border-black p-1"></td>
      <td className="border border-black p-1"></td>

      <td className="border border-black p-1"></td>
      <td className="border border-black p-1"></td>
      <td className="border border-black p-1"></td>
      <td className="border border-black p-1"></td>
    </tr>

  {/* Grand Total Row */}
  <tr className="bg-pink-400 font-bold">
    <td colSpan={2} className="border border-black p-1">Grand Total</td>
    <td className="border border-black p-1">-2,634,267.00 Dr.</td>
    <td className="border border-black p-1"></td>
    <td colSpan={2} className="border border-black p-1">Grand Total</td>
    <td className="border border-black p-1">2,634,267.00 Cr.</td>
    <td className="border border-black p-1"></td>
  </tr>
</tbody>

          </table>
        </div>
        </div>
      </div>
      </div>
      </>
    );
  }
  