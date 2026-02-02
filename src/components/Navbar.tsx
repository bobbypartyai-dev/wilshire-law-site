"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Scale, Globe } from "lucide-react";
import { FIRM } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Hablamos Español
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gold font-semibold">No Fees Unless You Get Paid</span>
            <a href={FIRM.phoneTel} className="flex items-center gap-1.5 hover:text-gold transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5" />
              {FIRM.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-navy font-bold text-lg tracking-tight block">WILSHIRE LAW</span>
              <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold">Firm</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy rounded-lg hover:bg-gray-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={FIRM.phoneTel} className="flex items-center gap-1.5 text-navy font-bold text-sm hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              {FIRM.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <a href={FIRM.phoneTel} className="p-2 text-navy">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-navy hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gold hover:bg-gold-dark text-white px-5 py-3 rounded-lg font-semibold transition-all"
                >
                  Free Consultation
                </Link>
              </div>
              <div className="flex items-center justify-center gap-4 pt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  24/7 Available
                </span>
                <span>Hablamos Español</span>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
