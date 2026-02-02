"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, ShieldAlert, AlertTriangle, Heart, Package, UserCheck, Briefcase, Users } from "lucide-react";
import type { PracticeArea } from "@/lib/data";

// Dog icon as inline SVG since lucide doesn't have Dog
function DogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  ShieldAlert,
  AlertTriangle,
  Dog: DogIcon,
  Heart,
  Package,
  UserCheck,
  Briefcase,
  Users,
};

interface PracticeAreaCardProps {
  area: PracticeArea;
  index: number;
}

export default function PracticeAreaCard({ area, index }: PracticeAreaCardProps) {
  const Icon = iconMap[area.icon] || Car;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Link
        href={`/practice-areas/${area.slug}`}
        className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 h-full"
      >
        <div className="w-14 h-14 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
          <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
        </div>
        <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
          {area.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {area.description}
        </p>
        <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
}
