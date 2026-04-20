"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// ১. আইটেমের ধরন বা ইন্টারফেস
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Hydration এরর এড়াতে

  // ২. লোড হওয়ার সময় লোকাল স্টোরেজ থেকে ডেটা আনা
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("caffeine_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Cart parsing error:", error);
      }
    }
  }, []);

  // ৩. কার্ট পরিবর্তন হলে লোকাল স্টোরেজে সেভ করা
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("caffeine_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // ৪. সার্ভার সাইড রেন্ডারিং সমস্যা এড়াতে
  if (!isMounted) return null;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};