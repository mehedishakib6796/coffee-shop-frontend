"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const fullMenu = [
  { id: 1, name: "Classic Espresso", category: "Hot", price: 250, desc: "A bold and intense shot of pure coffee brewed from freshly ground beans.", img: "/coffee1.jpg" },
  { id: 2, name: "Ice Caramel Latte", category: "Cold", price: 420, desc: "A perfect blend of chilled espresso and sweet caramel syrup over ice.", img: "/coffee3.jpg" },
  { id: 3, name: "Hazelnut Latte", category: "Hot", price: 380, desc: "Smooth steamed milk mixed with premium espresso and nutty hazelnut notes.", img: "/coffee2.jpg" },
  { id: 4, name: "Affogato Special", category: "Special", price: 550, desc: "A luxurious fusion of creamy vanilla ice cream topped with a hot espresso shot.", img: "/coffee1.jpg" },
  { id: 5, name: "Cold Brew", category: "Cold", price: 300, desc: "Our signature smooth coffee, cold-steeped for 12 hours for maximum flavor.", img: "/coffee2.jpg" },
  { id: 6, name: "Cappuccino", category: "Hot", price: 350, desc: "The classic balance of espresso, steamed milk, and a thick layer of foam.", img: "/coffee3.jpg" },
  { id: 7, name: "Mocha Choco", category: "Hot", price: 450, desc: "Indulgent chocolate and espresso combined with velvety steamed milk.", img: "/coffee1.jpg" },
  { id: 8, name: "Irish Coffee", category: "Special", price: 600, desc: "A premium European-style signature coffee for a truly sophisticated taste.", img: "/coffee2.jpg" },
];

export default function MenuPage() {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();
  const router = useRouter();

  const filteredItems = filter === "All" 
    ? fullMenu 
    : fullMenu.filter(item => item.category === filter);

  // লগইন চেক ফাংশন
  const checkLoginStatus = () => {
    const user = localStorage.getItem("user"); // বা আপনার টোকেন কী
    return !!user;
  };

  const handleAddToCart = (item: any) => {
    // লগইন চেক করা হচ্ছে
    if (!checkLoginStatus()) {
      Swal.fire({
        title: 'Login Required!',
        text: 'Please login to add items to your cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login Now',
        cancelButtonText: 'Later',
        background: '#1a120b',
        color: '#fff',
        confirmButtonColor: '#d4a373',
        cancelButtonColor: '#333',
        customClass: {
            popup: 'rounded-[2rem] border border-white/10'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login"); // আপনার লগইন পেজের পাথ
        }
      });
      return;
    }

    // লগইন থাকলে কার্টে যোগ হবে
    addToCart(item);
    Swal.fire({
      title: 'Added!',
      text: `${item.name} has been added to your cart.`,
      icon: 'success',
      iconColor: '#d4a373',
      background: '#1a120b',
      color: '#ffffff',
      showCancelButton: true,
      confirmButtonText: 'View Cart',
      cancelButtonText: 'Continue Shopping',
      confirmButtonColor: '#d4a373',
      customClass: {
        popup: 'rounded-[2rem] border border-white/10 shadow-2xl',
        title: 'text-[#d4a373] font-black uppercase tracking-widest',
        confirmButton: 'rounded-xl font-black uppercase px-6 py-3',
        cancelButton: 'rounded-xl font-black uppercase px-6 py-3 text-white'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/cart");
      }
    });
  };

  return (
    <main className="min-h-screen bg-[#0f0a07] text-white overflow-x-hidden font-sans">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#d4a373] uppercase tracking-tighter"
          >
            OUR <span className="text-white">MENU</span>
          </motion.h1>
          <div className="w-24 h-1 bg-[#d4a373] mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(212,163,115,0.4)]" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Hot", "Cold", "Special"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full font-bold border transition-all duration-300 text-xs uppercase tracking-widest ${
                filter === cat 
                ? "bg-[#d4a373] text-black border-[#d4a373] shadow-[0_0_20px_rgba(212,163,115,0.3)]" 
                : "border-white/10 text-gray-500 hover:border-[#d4a373]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-[#1a120b]/80 backdrop-blur-md rounded-[2.5rem] p-5 border border-white/5 hover:border-[#d4a373]/30 transition-all shadow-2xl group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden rounded-[2rem] mb-6">
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[#d4a373] text-[10px] font-black px-4 py-1.5 rounded-full border border-[#d4a373]/20 uppercase tracking-widest">
                      {item.category}
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-xl font-black text-white group-hover:text-[#d4a373] transition-colors truncate uppercase tracking-tighter">{item.name}</h3>
                    <p className="text-[#d4a373] font-black text-2xl mt-1 mb-3">৳{item.price}</p>
                    <p className="text-gray-400 text-[12px] leading-relaxed h-10 overflow-hidden mb-8 font-medium italic opacity-80">{item.desc}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link href={`/menu/${item.id}`} className="flex-1">
                    <button className="w-full bg-white/5 border border-white/10 py-3.5 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 text-[10px] font-black uppercase tracking-widest">Details</button>
                  </Link>
                  <button onClick={() => handleAddToCart(item)} className="flex-[1.8] bg-[#d4a373] text-black py-3.5 rounded-2xl hover:bg-white transition-all duration-300 text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95">Add to Cart</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}