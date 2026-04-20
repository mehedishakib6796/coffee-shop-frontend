"use client";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    Swal.fire({
      title: 'Order Confirmed!',
      text: 'Your coffee is being prepared with love.',
      icon: 'success',
      background: '#120d0a',
      color: '#fff',
      confirmButtonColor: '#d4a373',
      confirmButtonText: 'Perfect!',
      customClass: {
        popup: 'rounded-[2rem] border border-[#d4a373]/20'
      }
    }).then(() => {
      router.push("/menu");
    });
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0a0705] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a373]/5 blur-[120px] rounded-full" />
        
        <h2 className="text-4xl font-black uppercase opacity-20 mb-8 tracking-tighter">Empty Cart</h2>
        <Link href="/menu" className="relative group z-10">
          <div className="absolute -inset-1 bg-[#d4a373] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <button className="relative bg-[#d4a373] text-black px-12 py-4 rounded-2xl font-black uppercase text-xs tracking-widest">
            Back to Menu
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0a07] text-white pt-24 pb-20 px-6 font-sans selection:bg-[#d4a373]/30">
     
      <div className="fixed inset-0 bg-gradient-to-b from-[#d4a373]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16 text-center md:text-left">
          <Link href="/menu" className="group text-[#d4a373] text-[10px] font-black uppercase tracking-[0.4em] mb-4 inline-flex items-center gap-2">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Continue Shopping
          </Link>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#f5e1c8]">Selection</span>
          </h1>
        </header>
        
        <div className="grid gap-6">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div 
                key={item.id} 
                layout 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#1a120b]/40 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#d4a373]/20 transition-all group shadow-xl"
              >
                <div className="flex items-center gap-8 w-full md:w-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2a1d12] to-[#1a120b] rounded-[1.8rem] flex items-center justify-center text-4xl border border-white/10 shadow-inner group-hover:scale-105 transition-transform">
                    ☕
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-[#d4a373] transition-colors">{item.name}</h3>
                    <p className="text-[#d4a373] font-black text-xl flex items-center gap-2">
                      <span className="text-[10px] text-gray-500 font-medium">Unit Price:</span> ৳{item.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto gap-8">
                  <div className="flex items-center gap-6 bg-black/40 px-6 py-3 rounded-2xl border border-white/5">
                    <button onClick={() => updateQuantity(item.id, -1)} className="text-[#d4a373] hover:text-white text-2xl font-black transition-colors">-</button>
                    <span className="font-black text-lg w-6 text-center tabular-nums">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="text-[#d4a373] hover:text-white text-2xl font-black transition-colors">+</button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="p-4 rounded-2xl bg-red-500/5 hover:bg-red-500/20 text-red-500/40 hover:text-red-500 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      
        <div className="mt-16 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a373]/20 to-[#1a120b] blur-2xl opacity-20"></div>
          <div className="relative bg-[#1a120b]/80 backdrop-blur-2xl p-10 rounded-[3.5rem] border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-500 uppercase text-[10px] font-black tracking-[0.5em] mb-2">Total Payable</p>
              <h2 className="text-7xl font-black text-[#d4a373] tracking-tighter drop-shadow-2xl">
                ৳{totalPrice.toFixed(2)}
              </h2>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="bg-gradient-to-br from-[#f5e1c8] to-[#d4a373] text-black px-16 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(212,163,115,0.2)]"
            >
              Finish Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}