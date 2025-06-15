'use client';
import React from 'react';
import  "../partywise-balance/party.css";

type Party = {
  name: string;
  balance: number;
  type: 'Dr' | 'Cr';
};
const leftParties: Party[] = [
  { name: 'KS PTL', balance: -428078, type: 'Dr' },
  { name: 'MANGI', balance: -290454, type: 'Dr' },
  { name: 'PAWAN PTL', balance: -378516, type: 'Dr' },
  { name: 'VICKY BARETA', balance: -341397, type: 'Dr' },
  { name: 'VICKY KHD', balance: -33749, type: 'Dr' },
  { name: 'VICKY LEHRA', balance: -1059251, type: 'Dr' },
];

const rightParties: Party[] = [
  { name: 'GOPAL', balance: 2540599, type: 'Cr' },
  { name: 'KS COMM', balance: 93668, type: 'Cr' },
];

export default function PartyBalances() {
  const leftTotal = leftParties.reduce((acc, p) => acc + p.balance, 0);
  const rightTotal = rightParties.reduce((acc, p) => acc + p.balance, 0);
  const netBalance = rightTotal + leftTotal;

  return (
    <>
    <div className="h-175 bg-sky-200 p-2 text-[13px] font-sans">

          {/* Controls Bar */}
          <div className="bg-gray ">
          <div className="bg-yellow-400 relative bottom-10 right-2 h-5 w-40 text-center text-sm font-bold">Partywise Balances</div>

          <div className="bg-black p-1 flex flex-wrap  items-center justify-between">
            <div className="flex flex-wrap gap-1">
              <button className="bg-green-500 text-white px-5 py-1 text-sm border border-white">Print</button>
              <button className="bg-purple-800 text-white px-4 py-1 text-sm  border border-white">Preview</button>
              <button className="bg-blue-400 text-white px-4 py-1 text-sm  border border-white">Period</button>
              <button className="bg-yellow-500 text-white px-4 py-1 text-sm  border border-white">5 Columns</button>
              <button className="bg-pink-900 text-white px-4 py-1 text-sm  border border-white">E-Mail</button>
              <button className="bg-pink-700 text-white px-4 py-2 text-sm  border border-white">Close</button>
            </div>
            <div className="flex gap-1 items-center">
              <div>
              <div className="bg-green-700 text-white text-xs px-1 py-0.5">Stop / Running</div>
              <select className="text-sm bg-white text-black border border-gray-300">
                <option>Running Only</option>
                <option>Stop Only</option>
              </select>
              </div>
              <div>
              <div className="bg-green-700 text-white text-xs px-1 py-0.5">Party Groups</div>
              <select className="text-sm bg-white px-2 text-black border border-gray-300 ">
                <option>---All---</option>
              </select>
              </div>
              <div>
              <div className="bg-red-700 text-white text-xs px-2 py-0.5">Net Balance</div>
              <div className="bg-white text-black text-sm font-bold px-2">99222.00 Cr.</div>
              </div>
            </div>
          </div>
        {/* Combined Table */}
        <div className="bg-gray-400 border border-black h-150 mt-2">
      <div className=" bg-white overflow-auto w-300">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-cyan-500 text-black text-left">
              <th className="border border-black p-1 w-8">Sr.</th>
              <th className="border border-black p-1">Party (Dr)</th>
              <th className="border border-black p-1">Balance</th>
              <th className="border border-black p-1">T</th>
              <th className="border border-black p-1 w-8">Sr.</th>
              <th className="border border-black p-1">Party (Cr)</th>
              <th className="border border-black p-1">Balance</th>
              <th className="border border-black p-1">T</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.max(leftParties.length, rightParties.length) }).map((_, i) => {
              const left = leftParties[i];
              const right = rightParties[i];
              return (
                <tr key={i}>
                  {/* Left Party */}
                  <td className="border border-black p-1">{left ? i + 1 : ''}</td>
                  <td className="border border-black p-1">{left?.name || ''}</td>
                  <td className="border border-black p-1">
                    {left ? `${Math.abs(left.balance).toLocaleString()} ${left.type}` : ''}
                  </td>
                  <td className="border border-black p-1"></td>

                  {/* Right Party */}
                  <td className="border border-black p-1">{right ? i + 1 : ''}</td>
                  <td className="border border-black p-1">{right?.name || ''}</td>
                  <td className="border border-black p-1">
                    {right ? `${Math.abs(right.balance).toLocaleString()} ${right.type}` : ''}
                  </td>
                  <td className="border border-black p-1"></td>
                </tr>
              );
            })}
            {/* Totals */}
            <tr className="bg-pink-400 font-bold">
              <td colSpan={2} className="border border-black p-1">Grand Total</td>
              <td className="border border-black p-1">{Math.abs(leftTotal).toLocaleString()} Dr.</td>
              <td className="border border-black p-1"></td>
              <td colSpan={2} className="border border-black p-1">Grand Total</td>
              <td className="border border-black p-1">{Math.abs(rightTotal).toLocaleString()} Cr.</td>
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
