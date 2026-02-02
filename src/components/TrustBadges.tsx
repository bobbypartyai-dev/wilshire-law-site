"use client";

import { motion } from "framer-motion";
import { Award, Shield, Star, Trophy, Medal, Scale } from "lucide-react";

const badges = [
  { icon: Trophy, label: "Best Law Firms", sub: "U.S. News 2020–2026" },
  { icon: Shield, label: "AV-Preeminent", sub: "Martindale-Hubbell" },
  { icon: Star, label: "Top 100 Settlements", sub: "TopVerdict.com 2024" },
  { icon: Award, label: "Super Lawyers", sub: "Rising Stars" },
  { icon: Medal, label: "Multi-Million Dollar", sub: "Advocates Forum" },
  { icon: Scale, label: "ABOTA", sub: "Member" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-2 transition-colors">
                <badge.icon className="w-7 h-7 text-navy/60 group-hover:text-gold transition-colors" />
              </div>
              <p className="text-xs font-bold text-navy">{badge.label}</p>
              <p className="text-[10px] text-gray-500">{badge.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
