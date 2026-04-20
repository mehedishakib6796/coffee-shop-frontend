"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0a07] text-white relative overflow-hidden">
      <Navbar />

     
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#d4a373] rounded-full blur-[120px]"
        />
      </div>

      
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <Image 
              src="/coffee-shop.jpg" 
              alt="Caffeine Cove" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent opacity-60" />
          </motion.div>

         
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-[#d4a373]/10 text-[#d4a373] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-[#d4a373]/20">
                Our Story
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter"
            >
              Caffiene  <span className="text-[#d4a373]">Cove</span>
            </motion.h1>

            <p className="text-gray-400 text-xl leading-relaxed font-light border-l-2 border-[#d4a373]/30 pl-6">
              Launched in 2025, Caffeine Cove is not just a coffee shop, it is a haven for coffee lovers. Beans sourced directly from the finest gardens and each cup is crafted with love.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-4xl font-black text-[#d4a373]">15+</h4>
                <p className="text-gray-500 uppercase text-[10px] tracking-widest mt-2">Coffee Variety</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#d4a373]">5000+</h4>
                <p className="text-gray-500 uppercase text-[10px] tracking-widest mt-2">Happy customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <footer className="py-20 px-6 border-t border-white/5 bg-black/30 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
       
          <div className="space-y-4">
            <h4 className="text-[#d4a373] font-bold uppercase tracking-widest text-sm">Location</h4>
            <p className="text-[#efedea] leading-relaxed text-sm">
              Road-1,Nikunja-2,khilkhet<br /></p>
              <p>Dhaka, Bangladesh</p>
            
          </div>

         
          <div className="space-y-4">
            <h4 className="text-[#d4a373] text-1xl font-bold uppercase tracking-widest text-sm">Contact Us</h4>
            <p className="text-[#efedea]text-sm">Cell: +880 1XXX-XXXXXX</p>
            <p className="text-[#efedea] text-sm">Email:caffeinecove@gmail.com</p>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-[#d4a373]  text-2xl font-bold uppercase tracking-widest text-sm">Opening Hours</h4>
            <p className="text-[#efedea]  text-sm italic">Saturday - Thrusday: 10 AM - 11 PM</p>
            <p className="text-[#efedea] text-sm italic">Friday: 3 PM - 11 PM</p>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-[#d4a373] text-1xl font-bold uppercase tracking-widest text-sm">Follow Us</h4>
            <div className="flex gap-4">
              {['FB', 'IG', 'WEB'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-[#d4a373] hover:text-black transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>

      
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
            © 2026 Caffeine Cove. Developed by Mehedi Shakib.
          </p>
        </div>
      </footer>
    </main>
  );
}