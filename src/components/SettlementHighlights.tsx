"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SETTLEMENTS } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function SettlementHighlights() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-semibold text-sm uppercase tracking-wider"
          >
            Proven Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4"
          >
            Record-Setting Settlements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We&apos;ve won more Top 100 personal injury settlements in California than any other firm. Here are some of our notable recoveries.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SETTLEMENTS.map((settlement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-center group hover:from-navy-light hover:to-navy transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-3">
                <AnimatedCounter
                  value={settlement.amountNum}
                  prefix="$"
                  suffix="M"
                  decimals={1}
                  duration={1.5}
                />
              </div>
              <div className="w-12 h-px bg-gold/30 mx-auto mb-3" />
              <p className="text-gray-300 text-sm font-medium">{settlement.type}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            View All Case Results <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
