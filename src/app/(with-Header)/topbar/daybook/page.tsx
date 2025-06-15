'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ledgerData } from '../day-dummyData/page';
const parties = [
  'PERSONAL', 'VICKY', 'VOUGE', 
];

const CompanyMasterPage = () => {
  const router = useRouter();
  const [selectedParty, setSelectedParty] = useState('VICKY LEHRA');
  const [partyDetails, setPartyDetails] = useState({
        address: '',
        city: '',
        refBy: '',
        mobile: '',
        phoneNo: '',
      });
    
      const handleButtonClick = (action: string) => {
        switch (action) {
          case 'New':
            // Reset the form for a new party
            setSelectedParty('');
            setPartyDetails({
              address: '',
              city: '',
              refBy: '',
              mobile: '',
              phoneNo: '',
            });
            break;
          case 'Modify':
            // Logic to modify the selected party
            alert(`Modify party: ${selectedParty}`);
            break;
          case 'Delete':
            // Logic to delete the selected party
            if (window.confirm(`Are you sure you want to delete ${selectedParty}?`)) {
              alert(`Deleted party: ${selectedParty}`);
              setSelectedParty(parties[0]); // Reset to the first party
            }
            break;
          case 'Find':
            // Logic to find a party (for simplicity, just alerting the selected party)
            alert(`Finding party: ${selectedParty}`);
            break;
          case 'Close':
            // Logic to close the page or perform any cleanup
            if (window.confirm(`Are you sure you want to leave this page?`)) {
              router.push('/topbar');//Redirect to home page
            }
              break;
          default:
            break;
        }
      };
      const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
  return (

    <div className="min-h-150 bg-sky-200 p-2 text-[13px] font-sans">
      <div className="bg-yellow-400 relative bottom-10 right-2 h-5 w-20 text-center text-sm font-bold">Day Book</div>
       <div className="flex items-start gap-1 relative bottom-5">
          {/* Right box (black background, buttons & net block) */}
          <div className="bg-black p-1 flex flex-wrap w-1000 justify-between">
            <div className="flex flex-wrap gap-1">
              <button className="bg-green-500 text-white px-6 py-1 text-sm border border-white">Print</button>
              <button className="bg-purple-600 text-white px-5 py-1 text-sm border border-white">Preview</button>
              <button className="bg-sky-400 text-white px-5 py-1 text-sm border border-white">Period</button>
              <button className="bg-red-900 text-white px-5 py-1 text-sm border border-white">Full Period</button>
              <button className="bg-pink-700 text-white px-5 py-2 text-sm border border-white">Close</button>
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
      </div>

      {/* Main Content */}
      <div className="flex  border-gray-300  relative bottom-9">
       
         {/* // Table content */}
         <div className="mt-6  bg-gray-400 shadow overflow-hidden w-full">
            <div className="grid grid-cols-2 text-sm text-left">
            <table  className="w-350 h-150 border-collapse  table-auto  text-sm">
            <thead className="bg-sky-300 border">
                <tr >
                  <th className='border border-gray-300 '>Date</th>
                  <th className='border border-gray-300 '>Account</th>
                  <th className='border border-gray-300 '>Narration</th>
                  <th className='border border-gray-300 '>Debit</th>
                  <th className='border border-gray-300 '>Credit</th>
                </tr>
              </thead>

              <tbody className="bg-white   h-40">
                {ledgerData.map((entry, i) => (
                  <tr key={i} className='border '>
                    <td className='border border-gray-400 '>{entry.date}</td>
                    <td className='border border-gray-400'>{entry.account}</td>
                    <td className='border border-gray-400'>{entry.narration}</td>
                    <td  className='border border-gray-400'>{entry.debit !== null ? entry.debit.toLocaleString() : '-'}</td>
                    <td className='border border-gray-400'>{entry.credit !== null ? entry.credit.toLocaleString() : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
                    </div>
                  </div>
  );
};
export default CompanyMasterPage;
