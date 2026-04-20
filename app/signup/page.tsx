"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Swal from "sweetalert2"; 
import { useRouter } from "next/navigation"; 

export default function SignUpPage() {
  const router = useRouter(); 
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    Swal.fire({
      title: 'Success!',
      text: 'Create Account Successfully',
      icon: 'success',
      iconColor: '#d4a373',
      background: '#1a120b',
      color: '#ffffff',
      confirmButtonText: 'Perfect',
      confirmButtonColor: '#d4a373',
      customClass: {
        popup: 'rounded-[2.5rem] border border-white/10 shadow-2xl',
        title: 'text-[#d4a373] font-black uppercase tracking-widest',
        confirmButton: 'rounded-xl font-black uppercase px-10 py-3 shadow-lg'
      }
    }).then((result) => {
    
      if (result.isConfirmed) {
        router.push("/login");
      }
    });
  };

  return (
    <main className="min-h-screen bg-[#0f0a07] text-white flex overflow-hidden font-sans">
      
    
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex lg:w-1/2 relative bg-[#1a120b] items-center justify-center p-20 border-r border-white/5"
      >
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-24 border-2 border-[#d4a373] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(212,163,115,0.15)]"
          >
            <span className="text-5xl font-black text-[#d4a373] tracking-tighter">C</span>
          </motion.div>
          
          <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Experience <br />
            Pure <span className="text-[#d4a373]">Coffee</span>
          </h1>
          <p className="text-gray-500 max-w-sm mx-auto text-lg font-light leading-relaxed">
            Join our community to discover the art of perfect brewing and exclusive member rewards.
          </p>
        </div>

        <div className="absolute bottom-12 left-12 opacity-5 text-[10px] uppercase tracking-[1.5em] font-bold">
          Caffeine Cove Premium
        </div>
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-16 relative bg-[#0f0a07]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#d4a373]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[400px] relative z-10">
          <div className="mb-12">
            <span className="text-[#d4a373] text-[10px] font-black uppercase tracking-[0.5em] block mb-3">
              Member Registration
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">Sign Up</h2>
            <p className="text-gray-600 text-sm font-medium uppercase tracking-widest">Start your journey today</p>
          </div>

          <form className="space-y-6" onSubmit={handleSignUp}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#d4a373] transition-all text-sm text-white placeholder:text-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#d4a373] transition-all text-sm text-white placeholder:text-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#d4a373] transition-all text-sm text-white placeholder:text-gray-700"
                required
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-[#d4a373] text-black py-4.5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-14"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
              Already have an account?{" "}
              <Link href="/login" className="text-[#d4a373] font-black hover:text-white transition-colors ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      <Link href="/" className="absolute top-10 right-10 text-gray-600 hover:text-[#d4a373] transition-all text-[10px] font-black uppercase tracking-[0.3em] z-50 flex items-center gap-2 group">
        <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span> Home
      </Link>
    </main>
  );
}