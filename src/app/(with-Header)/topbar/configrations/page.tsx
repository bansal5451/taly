
"use client";
import { useState } from 'react';

export default function MatchConfigurations() {
  const [formData, setFormData] = useState({
    matchBets: true,
    sessionBets: true,
    playerBets: false,
    meterBets: false,
    khaddaBets: false,
    lkInSessionBets: false,
    lkInPlayerBets: false,
    playerCommission: false,
    playerCommissionBoth: false,
    refreshOnAdd: false,
    rememberLastRate: false,
    tabStopRate: false,
    showPartyLimitChart: true,
    fixedLKComm: false,
    entry60D: true,
    freezeUpto: '1,000',
    decimalForAmt: 2,
    showCurrentBalance: false,
    disallowBetsNoLimit: false,
    stopAddCommission: false,
    showBookPartners: false,
    showMondayFinal: false,
    tallyAccount: false,
    addPartyBalance: false,
    noTrfrComm: false,
    noSelfPatti: false,
    oneDayPartyLimit: true
  });

  const handleChange = (e:any) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Configurations saved:', formData);
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-black flex flex-col items-center py-10 px-4">
    <form 
    onSubmit={handleSubmit} 
    className="bg-yellow-50 w-full max-w-5xl p-10 rounded-2xl shadow-lg space-y-10 ">
      <div className="text-xs bg-white relative bottom-10 shadow-xl  shadow-gray/100 rounded-lg right-10  w-[1023px]">
              <p className="relative left-8 h-6 w-full p-1">Configrations</p>
            </div><div  className="text-sm bg-black bottom-20 text-white font-bold  h-10 justify-center flex items-center text-center relative right-10 w-[1024px]">
        <span>Match Configurations</span>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative bottom-28 divide-x-3 h-100 divide-solid divide-black ">
        <div className="space-y-3 font-bold ">
          {[
            { label: 'Match Bets (As Party)', name: 'matchBets' },
            { label: 'Session Bets (As Party)', name: 'sessionBets' },
            { label: 'Player Bets', name: 'playerBets' },
            { label: 'Meter Bets', name: 'meterBets' },
            { label: 'Khadda Bets', name: 'khaddaBets' },
            { label: 'L/K In Session Bets', name: 'lkInSessionBets' },
            { label: 'L/K In Player Bets', name: 'lkInPlayerBets' },
            { label: 'Player Commission (% wise)', name: 'playerCommission' },
            { label: 'Player Commission Both Side Y/N', name: 'playerCommissionBoth' },
            { label: 'Refresh Bets on Add', name: 'refreshOnAdd' },
            { label: 'Remember Last Rate in Session Bets', name: 'rememberLastRate' },
            { label: 'Tab stop on rate', name: 'tabStopRate' },
            { label: 'Show Party Limit Chart', name: 'showPartyLimitChart' },
            { label: 'Fixed L/K Comm. when Rate > 0.10', name: 'fixedLKComm' },
            { label: '60D Entry Allow', name: 'entry60D' }
          ].map(opt => (
            <label key={opt.name} className="block ">
              <input type="checkbox" name={opt.name}  checked={formData[opt.name as keyof typeof formData] as boolean} onChange={handleChange} 
              className="form-checkbox h-4 w-8 accent-blue-900" />

              {opt.label}
            </label>
          ))}
        </div>

 {/* Right Section */}
        <div className="space-y-3 font-bold  ">
          <div className='grid-cols-2 '>
          <label className=" gap-2   mx-3">
          Freeze Up To:</label>
          <label className="gap-2 mx-10 text-lg">
            1000
           </label>
          <label className="gap-3 relative left-11">
          Decimal for Amt: 
           </label>
          
          </div>
          <div className='grid-cols-3 '>
            <input type="text" name="freezeUpto" value={formData.freezeUpto} onChange={handleChange} 
             className="text-black px-3 rounded border border-gray-200 w-28 bg-white   mx-2" />

            <select name="data" 
            className=" text-black px-1 w-28  rounded bg-white border border-gray-200 mx-6">
              <option value={0}>1000</option>
              <option value={1}>2000</option>
              <option value={2}>3000</option>
            </select>
       
            <select name="decimalForAmt" value={formData.decimalForAmt} onChange={handleChange} 
            className=" text-black px-1 w-28  rounded bg-white border border-gray-200  mx-1 ">
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
       
          </div>
          {[
            { label: 'Show Current Balance in match summary', name: 'showCurrentBalance' },
            { label: 'Don’t Allow Bets of Party without Limit', name: 'disallowBetsNoLimit' },
            { label: 'Stop Add Commission Automatic', name: 'stopAddCommission' },
            { label: 'Show Book Partners in party Balances', name: 'showBookPartners' },
            { label: 'Show Monday Final in Match Summary', name: 'showMondayFinal' },
            { label: 'Tally Account from Match Summary', name: 'tallyAccount' },
            { label: 'Add Party Balance in Party Limit', name: 'addPartyBalance' },
            { label: 'No Trfr. Comm. Calculate', name: 'noTrfrComm' },
            { label: 'No Self Patti Calculate', name: 'noSelfPatti' },
            { label: 'One Day Party Limit', name: 'oneDayPartyLimit' }
          ].map(opt => (
            <label key={opt.name} className="block flex items-center gap-2">
              <input type="checkbox" name={opt.name} checked={formData[opt.name]} onChange={handleChange}
               className="mr-2 form-checkbox h-4 w-4 accent-blue-900" />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
      <div className="bg-black  flex flex-wrap mt-1  items-center justify-start h-12 relative right-10 gap-2 top-10  w-[1024px]">
        <button type="submit" className="bg-green-600 w-20 hover:bg-green-700 px-6 py-2 text-white relative left-1 font-semibold border border-white">OK</button>
        <button type="button" className="bg-pink-600 hover:bg-pink-700 px-6 py-2 text-white font-semibold border border-white">Close</button>
      </div>
    </form>
    </div>
    
  );
}
