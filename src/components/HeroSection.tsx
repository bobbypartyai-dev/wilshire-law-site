"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, Shield, Star, Clock } from "lucide-react";
import { FIRM } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

interface HeroSectionProps {
  variant?: "home" | "subpage";
  title?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function HeroSection({
  variant = "home",
  title,
  subtitle,
  breadcrumb,
}: HeroSectionProps) {
  if (variant === "subpage") {
    return (
      <section className="bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          {breadcrumb && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-gray-400 mb-6"
            >
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              {breadcrumb.map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-gold">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-gold transition-colors">{item.label}</Link>
                  )}
                </span>
              ))}
            </motion.nav>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
    );
  }

  // Home hero
  return (
    <section className="bg-navy-gradient relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 bg-gold/20 text-gold px-3 py-1.5 rounded-full text-xs font-semibold">
                <Star className="w-3 h-3 fill-gold" />
                #1 in CA — TopVerdict.com
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                <Shield className="w-3 h-3" />
                Best Law Firms 7 Years Running
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Over{" "}
              <span className="text-gold-gradient">
                <AnimatedCounter value={2} prefix="$" suffix=" Billion" decimals={0} />
              </span>
              <br />
              Recovered for Our Clients
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              {FIRM.professionals} legal professionals fighting for maximum compensation.{" "}
              <strong className="text-white">No fees unless you get paid.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                Free Case Review
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={FIRM.phoneTel}
                className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-semibold text-lg"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                {FIRM.phoneFormatted}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold" />
                Available 24/7
              </span>
              <span>Hablamos Español</span>
              <span>Contingency Fee</span>
            </motion.div>
          </div>

          {/* Right side - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 space-y-6">
              <h3 className="text-white font-bold text-xl mb-6">Why Clients Choose Us</h3>
              {[
                { icon: "🏆", label: "Best Law Firms — U.S. News, 7 consecutive years" },
                { icon: "💰", label: "$2 Billion+ recovered for injured clients" },
                { icon: "👥", label: "500+ dedicated legal professionals" },
                { icon: "⚖️", label: "AV-Preeminent rated by Martindale-Hubbell" },
                { icon: "🚗", label: "Free rides to medical appointments" },
                { icon: "💵", label: "No fees unless we win your case" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
