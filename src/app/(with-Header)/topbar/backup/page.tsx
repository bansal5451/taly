'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const BackupPage = () => {
  const [sendMail, setSendMail] = useState(false);
  const [email, setEmail] = useState('');

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-indigo-950">
      <div className="bg-white rounded-sm shadow-xl w-[370px] border border-gray-300 relative">
      
        {/* Title bar with icon */}
        <div className="flex items-center bg-[#EDEDED] border-b border-gray-300 px-2 py-1 rounded-t-sm">
          <Image src="/image/icon.png" alt="icon" width={16} height={16} />
          <span className="ml-2 text-xs font-semibold">Backup Utility</span>
        </div>

        {/* Backup image */}
        <div className="flex justify-center p-2">
          <Image
            src="/image/images.jpg"
            alt="Backup Illustration"
            width={330}
            height={150}
            className="rounded"
          />
        </div>

        {/* Checkbox + email */}
        <div className="px-4 pb-4 w-full bg-[#FFFDD0] text-sm px-2 py-1 rounded-sm">
          <label className="flex items-center text-sm mb-2">
            <input
              type="checkbox"
              checked={sendMail}
              onChange={() => setSendMail(!sendMail)}
              className="mr-2"
            />
            Send backup to my mail
          </label>
          <input
            type="email"
            placeholder=""
            className="w-full shadow border-yellow-200 bg-[white] text-sm px-2 py-1 rounded-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Buttons row */}
        <div className="bg-black px-0 py-1 flex justify-start gap-2">
          <button className="bg-green-700 text-white px-5 py-1 p-1 ml-1 text-sm border border-white">backup</button>
          <button className="bg-pink-700 text-white px-5 py-2 text-sm border border-white">Close</button>
        </div>
      </div>
    </div>
  );
};

export default BackupPage;
