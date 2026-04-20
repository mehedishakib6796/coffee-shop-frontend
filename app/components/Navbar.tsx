"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#1a120b]/90 backdrop-blur-md border-b border-[#d4a373]/20 py-6 px-10 flex justify-between items-center text-white"
    >
      <div className="text-3xl font-black tracking-tighter text-[#d4a373]">
        <Link href="/">CAFFEINE COVE</Link>
      </div>
      
      <ul className="hidden md:flex gap-12 items-center">
        <li><Link href="/" className="text-sm font-black uppercase tracking-widest hover:text-[#d4a373]">Home</Link></li>
        <li><Link href="/menu" className="text-sm font-black uppercase tracking-widest hover:text-[#d4a373]">Menu</Link></li>
        <li><Link href="/about" className="text-sm font-black uppercase tracking-widest hover:text-[#d4a373]">About</Link></li>
      </ul>

      <div className="flex gap-6 items-center">
        <Link href="/login" className="text-xs font-bold uppercase tracking-widest">Login</Link>
        <Link href="/signup" className="bg-[#d4a373] text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all">Join Us</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;