"use client"; 
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link'; 
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      
      <section className="relative h-screen w-full flex items-center justify-start px-10 md:px-24">
        <div className="absolute inset-0 z-0">
          <Image src="/dash.png" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" /> 
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative z-10 text-left max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase leading-tight">
            A New Beginning In A Cap Of Tea
           
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light">
            Start your day with coffee made from our premium Caffeine Cove
          </p>

          <div className="flex flex-wrap gap-5">
           
            <Link href="/menu">
              <button className="bg-[#d4a373] text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg">
                Main Menu
              </button>
            </Link>
            
            <Link href="/signup">
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
                Membersip
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}