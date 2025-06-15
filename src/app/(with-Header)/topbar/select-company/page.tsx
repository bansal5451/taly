"use client";
import { useState } from "react";
const companies = [
  { name: "PERSONAL", city: "", code: "PERSONAL" },
  { name: "VICKY", city: "", code: "VICKY" },
  { name: "VOUGE", city: "", code: "VOUGE" },
];

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="min-h-180 bg-indigo-950  text-white font-sans">
      {/* Main Content */}
      <div className="flex justify-self-center">
      <div className="py-3 w-150 relative top-8 border border-gray-500 text-center">
        <h1 className="text-xl ">Registered to: 9965200786</h1>
        <p className="text-white-400">Telly version: 4.179</p>
        <p className="text-yellow-400">
          [ Current subscription expires in <span className="text-yellow-400">240 days</span> ]
        </p>
      </div>
      </div>

      {/* Company Selection Modal */}
      {modalOpen && (
        
        <div className="fixed inset-0  bg-opacity-60 flex justify-center items-center relative top-12 z-20">
          <div className="bg-yellow-50 h-99 text-black rounded-xl p-4 w-[700px] shadow-4xl">
            <div className="text-xs bg-white relative bottom-4 shadow-xl  shadow-gray/100 rounded-sm right-4  w-[700px]">
              <p className="relative left-8 h-5 p-1">Select Company</p>
            </div>
             <div> <input type="text" className="bg-white shadow-xl/10 relative bottom-1 mb-1 w-[668px]"></input></div>
            <div className="h-70 bg-white border border-gray-400">
            <table className="w-full bg-white text-sm">
              <thead className="bg-white">
                <tr >
                  <th className="border border-gray-100  text-start ">Company Name</th>
                  <th className="border border-gray-100 w-50  text-start ">City</th>
                  <th className="border border-gray-100  text-start ">Code</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr
                    key={c.code}
                    onClick={() => setSelectedCompany(c)}
                    className={`cursor-pointer hover:bg-blue-500 ${
                      selectedCompany?.code === c.code ? " border border-gray-400" : ""
                    }`}
                  >
                    <td className="px-2 h-1">{c.name}</td>
                    <td className="px-2 h-1">{c.city}</td>
                    <td className=" px-2 h-1">{c.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>           
            
              <div className="bg-black  flex flex-wrap mt-1  items-center justify-end">

            <div className="flex justify-end mx-2">
              <button
                onClick={() => setModalOpen(false)}
                 className="bg-green-500 text-white px-5 m-1 text-sm  border border-white">
                OK
              </button>
              <button
                onClick={() => setModalOpen(false)}
                 className="bg-pink-400 text-white px-5 py-2 m-1 text-sm  border border-white">Close
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
