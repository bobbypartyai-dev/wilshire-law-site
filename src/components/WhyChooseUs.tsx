"use client";

import { motion } from "framer-motion";
import { Users, Stethoscope, DollarSign, Car, TrendingUp, Tv } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Stethoscope, DollarSign, Car, TrendingUp, Tv,
};

const items = [
  { title: "Powerhouse Team", description: "500+ legal professionals fighting for your rights with unmatched resources and expertise.", icon: "Users" },
  { title: "Top Medical Care", description: "We connect you with the best medical professionals to ensure you get the treatment you need.", icon: "Stethoscope" },
  { title: "No Money Upfront", description: "You pay absolutely nothing unless we win your case. That's our iron-clad guarantee.", icon: "DollarSign" },
  { title: "Ride Assistance", description: "We provide transportation to and from your medical appointments at no cost.", icon: "Car" },
  { title: "Maximum Compensation", description: "We fight aggressively for every dollar you deserve — we don't settle for less.", icon: "TrendingUp" },
  { title: "As Seen on TV", description: "Featured on major news networks for our landmark cases and legal expertise.", icon: "Tv" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold text-sm uppercase tracking-wider"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6"
            >
              We Walk Side by Side<br />with Our Clients
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Since 2007, Wilshire Law Firm has been the trusted advocate for injury victims throughout California. Our team of over 500 legal professionals has recovered more than $2 billion in compensation, setting records along the way.
            </motion.p>

            {/* Stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { num: "$2B+", label: "Recovered" },
                { num: "500+", label: "Professionals" },
                { num: "18+", label: "Years" },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-gold">{stat.num}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Feature grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((item, i) => {
              const Icon = iconMap[item.icon] || Users;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:border-gold/20 transition-all group"
                >
                  <div className="w-11 h-11 bg-navy/5 group-hover:bg-gold/10 rounded-lg flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
