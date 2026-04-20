"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function MembershipPortal() {
  const user = {
    name: "Mehedi Hasan Shakib",
    tier: "Gold Member",
    points: 1250
  };

  return (
    <main className="min-h-screen bg-[#0a0705] text-white">
      <Navbar />
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        
      
        <div className="bg-[#1a120b] border border-[#d4a373]/30 p-10 rounded-[3rem] shadow-2xl flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#d4a373] rounded-2xl flex items-center justify-center text-black text-3xl font-black">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">{user.name}</h2>
              <span className="bg-[#d4a373] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {user.tier}
              </span>
            </div>
          </div>
          <div className="text-center md:text-right mt-6 md:mt-0">
            <p className="text-gray-500 text-[10px] font-black uppercase mb-1">Points Balance</p>
            <h3 className="text-5xl font-black text-[#d4a373]">{user.points}</h3>
          </div>
        </div>

        
        <div className="mt-16">
          <h3 className="text-xl font-black uppercase tracking-widest text-[#d4a373] mb-8 border-l-4 border-[#d4a373] pl-4">Exclusive Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem] flex items-center gap-4 group hover:border-[#d4a373]/50 transition-all">
              <div className="flex-1">
                <h4 className="text-lg font-black uppercase mb-1 text-white">Free Espresso</h4>
                <p className="text-gray-500 text-xs italic">Use code: FREECOFFEE</p>
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase">Redeem</button>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}