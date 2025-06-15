"use client";
import React from "react";

export default function Home() {
    return (
      <>
      <div className="min-h-185 bg-indigo-950 text-white flex flex-col">
       
        {/* Center Content */}
        <div className="flex flex-col items-center mb-50 justify-center flex-1 text-center">
          <div className="box-border size-30 border-2 p-4 w-140">
            <div className="text-sm mb-2">Registered to : 9965200786</div>
            <div className="text-sm mb-4">Telly version : 4.179</div>
            <div className="text-yellow-400 mb-8">
            [ Current subscription expires in <span className="font-bold">240 days</span> ]
            </div>
          </div>
          <div className="text-3xl mt-40 font-bold flex items-center gap-2">
            <div className="bg-red-600 px-4 py-3 rounded ">T</div>
            Telly Accounting Software
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="bg-indigo-900 p-2 text-xs flex justify-between">
          <div>🔴 Upcoming Earnings</div>
          <div>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | {new Date().toLocaleDateString()}</div>
        </div>
      </div>
  </>
    );
    
  }