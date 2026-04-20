"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { fullMenu } from "../page";
import Swal from 'sweetalert2';

export default function ItemDetails() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const [count, setCount] = useState(1);

  const item = fullMenu.find((coffee) => coffee.id === id);

  if (!item) return <div className="text-white text-center pt-40 font-black tracking-[0.5em]">ITEM NOT FOUND</div>;

  const numericPrice = typeof item.price === 'string' 
    ? parseInt(item.price.replace(/[^0-9]/g, '')) 
    : item.price;

  // লগইন চেক ফাংশন
  const checkLoginStatus = () => {
    return !!localStorage.getItem("user");
  };

  const handleConfirmOrder = () => {
    // লগইন না থাকলে পপআপ দেখাবে
    if (!checkLoginStatus()) {
      Swal.fire({
        title: 'Login Required!',
        text: 'Please login to confirm your order.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login Now',
        cancelButtonText: 'Later',
        background: '#0f0a07',
        color: '#fff',
        confirmButtonColor: '#d4a373',
        customClass: {
          popup: 'rounded-[2rem] border border-white/5'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
      return;
    }

    // লগইন থাকলে অর্ডার কনফার্ম হবে
    Swal.fire({
      title: 'Brewing Your Happiness!',
      html: `
        <div style="margin-top: 15px;">
          <p style="color: #a3a3a3; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Order Summary</p>
          <p style="color: #ffffff; font-size: 22px; font-weight: 900; text-transform: uppercase; margin-top: 5px;">${count}x ${item.name}</p>
          <div style="height: 1px; background: rgba(212,163,115,0.2); width: 60%; margin: 20px auto;"></div>
          <p style="color: #d4a373; font-size: 26px; font-weight: 900;">Total: ৳${numericPrice * count}</p>
        </div>
      `,
      icon: 'success',
      iconColor: '#d4a373',
      background: 'radial-gradient(circle, #1a120b 0%, #0f0a07 100%)',
      color: '#ffffff',
      confirmButtonText: 'Great, Thanks!',
      buttonsStyling: false,
      customClass: {
        popup: 'rounded-[3rem] border border-white/5 shadow-[0_0_60px_rgba(212,163,115,0.1)]',
        title: 'text-[#d4a373] font-black uppercase tracking-widest text-2xl pt-8',
        confirmButton: 'bg-[#d4a373] text-black font-black uppercase px-12 py-4 rounded-2xl hover:bg-white transition-all duration-300 mt-4 mb-8 shadow-lg text-[10px] tracking-widest'
      }
    });
  };

  return (
    <main className="min-h-screen bg-[#0a0705] text-white font-sans selection:bg-[#d4a373] selection:text-black">
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#d4a373]/5 rounded-full blur-[150px] pointer-events-none" />
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">
        <Link href="/menu" className="group inline-flex items-center gap-2 mb-10 text-[#d4a373]/60 text-xs font-black uppercase tracking-[0.3em] hover:text-[#d4a373] transition-all">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Menu
        </Link>
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full lg:w-1/2 relative group">
            <div className="relative h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" priority />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm shadow-2xl">
              <span className="text-[#d4a373] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Artisan Selection</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">{item.name}</h1>
              <p className="text-3xl font-black text-[#d4a373] mb-8">৳{numericPrice}</p>
              <p className="text-gray-400 text-lg leading-relaxed font-medium mb-10">{item.desc}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center bg-black/40 border border-white/10 rounded-2xl p-1.5 shadow-inner">
                  <button onClick={() => count > 1 && setCount(count - 1)} className="w-10 h-10 flex items-center justify-center text-xl font-bold hover:text-[#d4a373] transition-colors">−</button>
                  <span className="w-10 text-center text-lg font-black">{count}</span>
                  <button onClick={() => setCount(count + 1)} className="w-10 h-10 flex items-center justify-center text-xl font-bold hover:text-[#d4a373] transition-colors">+</button>
                </div>
                <button onClick={handleConfirmOrder} className="flex-1 w-full bg-[#d4a373] text-black py-4.5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-[0_10px_30px_rgba(212,163,115,0.2)] hover:bg-white transition-all active:scale-95">
                  Confirm Order — ৳{numericPrice * count}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}