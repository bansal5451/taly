
"use client";

import Link from 'next/link';
import { useRouter } from "next/navigation"
import { Button } from "reactstrap";

export default function Navbar() {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        router.push('/login');
      }
       return (
     <>
  <nav className="bg-gray-800">
  <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-10 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-2 sm:block">
          <div className="flex space-x-0">
            <Link href="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >Dashboard</Link>
            <Link href="/contacts" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contacts</Link>
            <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"></Link>
          </div>
        </div>
      </div>
         <button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={handleLogout}>Sign out</button>
     
    </div>
  </div>
</nav>


<nav>
  <header className="bg-purple-200 text-black  flex justify-between items-center"> 
    <h1 className="text-lg font-semibold">Telly - [4.179]</h1> 
    <span>Current subscription expires in 240 days</span> 
  </header>

      <div className="flex space-x-4 bg-purple-300 ">
      <div className="group relative">
        <Button  className="hover:underline cursor-pointer">Masters
        <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-1 hidden group-hover:block z-10">
              <ul className="text-sm-90 whitespace-nowrap">
                <Link href="/topbar/party-master" className="px-4 py-1 hover:bg-gray-200">Party Master (F2)</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Party Groups</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Expense Master</Link><br/>
                <Link  href="/topbar/company-master" className="px-4 py-1 hover:bg-gray-200">Company Master</Link><br></br>
                <Link  href="/topbar/select-company"  className="px-4 py-1 hover:bg-gray-200">Select Company</Link>
              </ul>
            </div>
            </Button>
            </div>
        {/* Ledgers Menu */}
        <div className="group relative">
              <Button className="hover:underline cursor-pointer">Ledgers</Button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-1 hidden group-hover:block z-10">
              <ul className="text-sm-90 whitespace-nowrap">
                  <Link href="/" className="px-4 py-1 hover:bg-gray-200">Single Voucher Entry</Link><br/>
                  <Link href="/topbar/multiple-voucher" className="px-4 py-1 hover:bg-gray-200">Multi Voucher Entry (F9)</Link><br/>
                  <Link href="/topbar/party-ledger" className="px-4 py-1 hover:bg-gray-200">Party Ledger (F10)</Link><br/>
                  <Link href="/topbar/partywise-balance"  className="px-4 py-1 hover:bg-gray-200">Party Balances (F11)</Link><br/>
                  <Link href="/topbar/trial-balance"  className="px-4 py-1 hover:bg-gray-200">Trial Balance (F12)</Link><br/>
                  <Link href="" className="px-4 py-1 hover:bg-gray-200">Committed Amount</Link><br/>
                  <Link href="" className="px-4 py-1 hover:bg-gray-200">Cash Book</Link><br/>
                  <Link href="/topbar/daybook" className="px-4 py-1 hover:bg-gray-200">DayBook</Link>
                </ul>
              </div>
            </div>
               {/* Settings */}
        <div className="group relative">
            <Button className="hover:underline cursor-pointer">Settings</Button>
            <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-1 hidden group-hover:block z-10">
            <ul className="text-sm-90 whitespace-nowrap">
                <Link href="/topbar/configrations" className="px-4 py-1 hover:bg-gray-200">Configurations</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">About Telly</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Hide / Unhide Parties</Link><br/>
                <Link href="/topbar/backup" className="px-4 py-1 hover:bg-gray-200">Backup</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Registration</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Change Password</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">User Master / Permissions</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Import Master</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Remove All Records</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Remove Data Datewise</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Remove All Data Save Last Balances</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Migrate Data</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Check Update (Internet required)</Link><br/>
                <Link href="" className="px-4 py-1 hover:bg-gray-200">Pay Online Payment</Link>
              </ul>
            </div>
            </div>      
            </div>

        <div className="flex space-x-9 p-2 bg-purple-100 border-t border-b">
        <Link href="/topbar/party-master">
          <Button>Party Master</Button>
        </Link>
        <Link href="/topbar/multiple-voucher">
          <Button>Voucher Entry</Button>
        </Link>
        <Link href="/topbar/party-ledger">
          <Button>Party Ledger</Button>
        </Link>
        <Link href="/topbar/partywise-balance">
          <Button>Party Balances</Button>
        </Link>
        <Link href="/topbar/trial-balance">
          <Button>Trail Balances</Button>
        </Link>
        <Link href="/topbar">
          <Button variant="destructive">Exit</Button>
        </Link>
        </div>
        {/* </div> */}
        <div className="flex space-x-9 p-4 bg-black border-t border-b">
         
        </div>       
        <div className="flex space-x-9 p-1 bg-blue-500 border-t border-b">
         
        </div>  
         </nav>
</>
 )
 }

