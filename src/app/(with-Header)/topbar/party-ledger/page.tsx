"use client";
import React, { useState } from 'react';
import { ledgerData } from '../party-dummy/page';

const ITEMS_PER_PAGE = 10;

export default function PartyLedger() {
  const [party, setParty] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ledgerData.length / ITEMS_PER_PAGE);

  const paginatedData = ledgerData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
 const [fromDate, setFromDate] = useState('');
        const [toDate, setToDate] = useState('');
  return (
    <div className="min-h-150 bg-sky-200 p-2 text-[13px] font-sans">
                <div className="bg-yellow-400 relative bottom-10 right-2 h-5 w-26 text-center text-sm font-bold">Party Ledger</div>

      {/* Controls Bar */}
      <div className="bg-black p-1 flex flex-wrap items-center justify-between relative bottom-6">
        <div className="flex flex-wrap gap-1">
          <button className="bg-green-500 text-white px-5 py-1 text-sm border border-white">Print</button>
          <button className="bg-purple-800 text-white px-4 py-1 text-sm  border border-white">Preview</button>
          <button className="bg-blue-400 text-white px-4 py-1 text-sm  border border-white">Period</button>
          <button className="bg-yellow-500 text-white px-4 py-1 text-sm  border border-white">Full Period</button>
          <button className="bg-purple-400 text-white px-4 py-2 text-sm  border border-white">A/c Tally</button>
          <button className="bg-purple-500 text-white px-4 py-2 text-sm  border border-white">Monday Final</button>
          <button className="bg-sky-600 text-white px-4 py-2 text-sm  border border-white">Transfer Entry</button>
          <button className="bg-pink-300 text-white px-4 py-2 text-sm  border border-white">Find Value</button>
          <button className="bg-pink-900 text-white px-4 py-1 text-sm  border border-white">E-Mail</button>
          <button className="bg-yellow-500 text-white px-4 py-1 text-sm  border border-white">Voucher</button>
          <button className="bg-pink-700 text-white px-4 py-2 text-sm  border border-white">Close</button>
          
        </div>
        <div className="flex gap-1 items-center">
          <div>
          <div className="bg-red-700 text-white text-xs px-2 py-0.5">Net Balance</div>
          <div className="bg-white text-black text-sm font-bold px-2">99222.00 Cr.</div>
          </div>
        </div>
      </div>
      <div className="bg-white relative bottom-4 p-1 text-sm h-8 w-26 text-center  font-bold">Party Ledger</div>
      {/* main  */}
      <div className="bg-yellow-50 p-1 shadow relative bottom-4 h-150 flex flex-wrap border border-gray-200 items-center justify-between">
      <div className="bg-yellow-50 p-1 shadow relative bottom-10 w-570 flex flex-wrap border border-gray-200 items-center justify-between">
            <div className="flex flex-wrap gap-1 ">
              <div className="bg-sky-400  text-black px-5 py-1 text-lg font-bold ">Party:</div>
              <input className="bg-white border border-gray-200 shadow font-bold relative w-90 border" type='text'></input>
              <div>
              <input type="checkbox" className='relative left-28 top-2  h-5 w-5'></input>
              <span className="relative left-29 font-bold text-lg  top-1 "> Show Transfer Entries</span>
            </div>
            <div>
              <input type="checkbox" className='relative left-40 top-2  h-5 w-5'></input>
              <span className="relative left-41 font-bold text-lg  top-1 "> Hide Match Entries</span>
            </div>
            </div>
            
            <div className="flex gap-2 items-center">
            <div className="relative shadow">
                <div className="bg-green-600 w-30 text-white text-sm py-1 text-center">From Date:</div>
                <div className="bg-white  w-30 text-black text-sm  font-bold text-center">
                  <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}/>
                 </div>
              </div>
              <div className=" relative shadow ">
                <div className="bg-green-600 w-30 text-white  py-1 text-sm text-center">To Date:</div>
                <div className="bg-white  w-30 text-black text-sm  font-bold text-center">
                  <input className="" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}/>
                 </div>
              </div>
              
            </div>
          </div>
          <div className="overflow-x-auto relative bg-yellow-50 bottom-30 h-9 w-470">
            <div className=" grid grid-cols-2 font-bold p-1 text-lg bg-cyan-400 relative w-336 " >Ledger</div>
          <div className=" relative left-337 bottom-9 bg-cyan-400 text-lg h-10 w-122 ">
          </div>
          </div>
        {/* content */}
          <div className="overflow-x-auto relative bottom-52">
      <div className="grid grid-cols-2 border text-sm font-semibold ">
      <table className="w-full h-40 table  text-sm text-start">
          <thead className="bg-sky-400">
            <tr className='text-start'>
              <th className="border border-gray-200  text-xl px-10 text-start ">Date</th>
              <th className="border border-gray-200 p-2  text-xl px-59">Narration</th>
              <th className="border border-gray-200 p-2  text-xl px-14 ">Debit</th>
              <th className="border border-gray-200 p-2  text-xl px-14 ">Credit</th>
              <th className="border border-gray-200 p-2  text-xl px-16 ">Balance</th>
              <th className="border border-gray-200 p-2  text-xl px-10 ">Tally</th>
            </tr>
          </thead>
          
          <tbody className="bg-gray-100 ">
          {paginatedData.map((entry, idx) => (
            <tr key={idx} className="even:bg-gray-50">
              <td className="border border-gray-300 px-3">{entry.date}</td>
              <td className="border border-gray-300 px-3">{entry.narration}</td>
              <td className="border border-gray-300 px-3 text-right">{entry.debit}</td>
              <td className="border border-gray-300 px-3 text-right">{entry.credit}</td>
              <td className="border border-gray-300 px-3  text-right font-medium">{entry.balance}</td>
              <td className="border border-gray-300 px-3  text-right font-medium">{entry.tally}</td>

            </tr>
          ))}
          </tbody>
        </table>
        
        <div className="grid grid-cols-2  border text-sm ml-105 relative bg-gray-400 font-semibold  text-center">
      <table className="w-full table-auto  text-sm">
          <thead className="bg-sky-400">
            <tr>
              <th className=" p-2 border border-gray-200  text-xl px-22 ">Date</th>
              <th className=" p-2  border border-gray-200 text-xl px-22 ">Balance</th>
            </tr>
          </thead>
          <tbody className="bg-gray-400 h-40">
            <tr>
              <td className=" p-2" colSpan="8"></td>
            </tr>
          </tbody>
        </table>
        </div>
         </div>
      </div>
 </div>
    </div>
  );
}