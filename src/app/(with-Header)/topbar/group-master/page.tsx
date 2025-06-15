"use client";
import React from "react";

export default function groupMaster() {
    return (
  <div className="min-h-150 bg-sky-200 p-2 text-[13px] font-sans">
          <div className="bg-yellow-400 relative bottom-11 right-2 h-7 w-33 text-left text-lg font-bold">Group Master</div>

       <div className="flex items-start gap-1">
          {/* Left box (yellow background, text content) */}
          <div className="bg-black text-white p-1 w-248 h-13">
          <h2 className="p-3 ml-20">List of Group Master</h2>
          </div>

          {/* Right box (black background, buttons & net block) */}
          <div className="bg-black p-1 flex flex-wrap w-1000 justify-between">
            <div className="flex flex-wrap gap-1">
              <button className="bg-sky-500 text-white px-5 py-1 text-sm border border-white">New</button>
              <button className="bg-purple-500 text-white px-4 py-1 text-sm border border-white">Modify</button>
              <button className="bg-red-600 text-white px-4 py-1 text-sm border border-white">Delete</button>
              <button className="bg-yellow-500 text-white px-4 py-1 text-sm border border-white">Find</button>
              <button className="bg-pink-700 text-white px-4 py-2 text-sm border border-white">Close</button>
            </div>
            <div className="flex gap-1 items-center mt-1">
              <div className="w-24">
                <div className="bg-white text-white text-xs px-2 py-0.5">Net</div>
                <div className="bg-yellow-400 text-black text-sm font-bold px-4 text-center">1/1</div>
              </div>
            </div>
          </div>
      </div>

  <div className="flex border-t gap-1 border-gray-400">
    {/* Sidebar */}
    <div className="w-1/5 h-100 bg-gray-500 ">
        <ul>
          <li className="p-1 w-70 bg-gray-100">DEFAULT</li>

        </ul>
    </div>

    {/* Content */}
    <div className="w-4/5 bg-yellow-50">
    <div className=" bg-white w-24 fw-bold mb-1 shadow">
      <span>Group Master</span></div>
      <div className=" p-4 ">
        <label className="block text-gray-700 font-semibold mb-2">Group Name:</label>
        <input
          type="text"
          value="DEFAULT"
          disabled
          className="w-80 p-2  rounded bg-gray-200 text-gray-600"
        />
      </div>
    </div>
  </div>
</div>
 );
    
}