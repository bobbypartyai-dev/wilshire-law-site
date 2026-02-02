"use client";

import { motion } from "framer-motion";
import type { Attorney } from "@/lib/data";

interface AttorneyCardProps {
  attorney: Attorney;
  index: number;
}

export default function AttorneyCard({ attorney, index }: AttorneyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Avatar */}
      <div className="h-56 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-gold/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-gold">{attorney.initials}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
          {attorney.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{attorney.title}</p>
        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
          attorney.role === "Senior Partner"
            ? "bg-gold/10 text-gold-dark"
            : "bg-navy/5 text-navy"
        }`}>
          {attorney.role}
        </span>
      </div>
    </motion.div>
  );
}
