'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const parties = [
  'AJAY', 'AVIATOR ID', 'CASH', 'GOPAL', 'HAPPY CAR',
  'JONNY BAKHAR', 'JONNY BARETA', 'KOMAL MANSA', 'KS COMM',
  'KS PTL', 'MANGI', 'MOHIT LEHRA', 'PAMMI', 'PAWAN PTL',
  'RAVI', 'SB', 'VICKY BARETA', 'VICKY KHD', 'VICKY KHD NEW', 'VICKY LEHRA',
];

const PartyMasterPage = () => {
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
  return (

    <div className="min-h-150 bg-sky-200 p-2 text-[13px] font-sans">
      <div className="bg-yellow-400 relative bottom-11 right-2 h-7 w-30 text-center text-lg font-bold">Party Master</div>
       <div className="flex items-start gap-1 relative bottom-5">
          {/* Left box (yellow background, text content) */}
          <div className="bg-black text-white p-1 w-203 h-13">
          <h2 className="p-3 ml-15">List of Group Master</h2>
          </div>

          {/* Right box (black background, buttons & net block) */}
          <div className="bg-black p-1 flex flex-wrap w-1000 justify-between">
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
                <div className="bg-yellow-400 text-black text-sm font-bold px-4 text-center">20/20</div>
              </div>
            </div>
          </div>
      </div>

      {/* Main Content */}
      <div className="flex border border-gray-300 shadow-lg relative bottom-5">
        {/* Left Sidebar */}
        <div className="w-70 bg-gray-400 mt-2 border-r overflow-y-auto h-[calc(100vh-60px)]">
          <ul className="text-sm bg-white w-55 divide-y divide-gray-200">
            {parties.map((name) => (
              <li
                key={name}
                onClick={() => setSelectedParty(name)}
                className={`cursor-pointer px-3 py-1 hover:bg-blue-400 hover:text-white ${
                  selectedParty === name ? 'bg-blue-600 text-white font-semibold' : ''
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Form Section */}
        <span className="bg-white mt-2 mb-200 ml-2 h-7 text-lg font-medium">Party Master</span>
 
        <div className=" w-full flex-1 bg-yellow-50 p-4 grid grid-cols-2 gap-2 mt-8 relative right-27 text-sm">

          <div>
            <label className="block mb-1 font-bold">Name: <span>1019</span></label>
            <input type="text" className="w-108 p-1 bg-gray-100" value={selectedParty} readOnly />
          </div>
          <div>
            <label className="block mb-1 font-bold">Party Grouping:</label>
            <select className="w-70 p-1 bg-gray-100">
              <option>DEFAULT</option>
            </select>
          </div>

          <div className="mb-50">
            <label className="block mb-1 font-bold">Address:</label>
            <input type="text" className="w-108 p-1 bg-gray-100" />
          </div>
          <div >
            <label className="block mb-1 font-bold">Party Status:</label>
            <select className="w-70 p-1 bg-gray-100">
              <option>Running</option>
            </select>
          </div>

          <div className="relative bottom-50">
            <label className="block mb-1 font-bold">City:</label>
            <input type="text" className="w-50 p-1 bg-gray-100" />
          </div>
          <div className="relative bottom-50 right-100">
            <label className="block mb-1 font-bold">Ref By:</label>
            <input type="text" className="w-50 p-1 bg-gray-100" />
          </div>

          <div className="mb-80 relative bottom-50">
            <label className="block mb-1 font-bold">Mobile:</label>
            <input type="text" className="w-50 p-1 bg-gray-100" />
          </div>

          <div className="relative bottom-50 right-100">
            <label className="block mb-1 font-bold">Phone No:</label>
            <input type="text" className="w-50 p-1 bg-gray-100"/>
          </div>
          </div>
        </div>
      </div>
  );
};
export default PartyMasterPage;