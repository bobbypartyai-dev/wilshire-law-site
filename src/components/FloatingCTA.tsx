"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { FIRM } from "@/lib/data";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile floating bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-3 flex gap-2">
        <a
          href={FIRM.phoneTel}
          className="flex-1 bg-navy text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-gold text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm"
        >
          Free Review
        </Link>
      </div>

      {/* Live chat indicator (desktop) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gold hover:bg-gold-dark text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 group">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </button>
      </div>
    </>
  );
}
