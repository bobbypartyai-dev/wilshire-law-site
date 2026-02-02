"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ContactForm from "@/components/ContactForm";
import { SETTLEMENTS } from "@/lib/data";

const additionalResults = [
  { amount: 12.5, type: "Construction Accident" },
  { amount: 10.8, type: "Premises Liability" },
  { amount: 9.2, type: "Medical Malpractice" },
  { amount: 8.5, type: "Defective Product" },
  { amount: 7.3, type: "Workplace Injury" },
  { amount: 6.1, type: "Bicycle Accident" },
];

export default function ResultsPage() {
  return (
    <>
      <HeroSection
        variant="subpage"
        title="Our Case Results"
        subtitle="Over $2 billion recovered. More Top 100 personal injury settlements in California than any other firm."
        breadcrumb={[{ label: "Results", href: "/results" }]}
      />

      {/* Hero stat */}
      <section className="py-16 bg-navy text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="text-6xl md:text-8xl font-bold text-gold mb-4">
            <AnimatedCounter value={2} prefix="$" suffix=" Billion+" decimals={0} duration={2.5} />
          </div>
          <p className="text-gray-300 text-xl">Total Recovered for Our Clients</p>
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-400">
            <span>✓ #1 in California — TopVerdict.com</span>
            <span>✓ Best Law Firms — 7 Years Running</span>
            <span>✓ AV-Preeminent Rated</span>
          </div>
        </motion.div>
      </section>

      {/* Notable Settlements */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Record-Setting</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3">Notable Settlements</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SETTLEMENTS.map((settlement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-10 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="text-5xl md:text-6xl font-bold text-gold mb-4">
                  <AnimatedCounter value={settlement.amountNum} prefix="$" suffix="M" decimals={1} duration={1.5} />
                </div>
                <div className="w-16 h-px bg-gold/30 mx-auto mb-4" />
                <p className="text-gray-300 font-medium">{settlement.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">More Case Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalResults.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-gray-500 text-sm">{result.type}</p>
                </div>
                <div className="text-2xl font-bold text-gold">
                  <AnimatedCounter value={result.amount} prefix="$" suffix="M" decimals={1} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400 text-center">
            Past results do not guarantee a similar outcome. Each case is unique and must be evaluated on its own merits.
            The amounts listed represent gross settlements before fees and costs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-gradient">
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm
            variant="dark"
            title="Want Results Like These?"
            subtitle="Get a free, confidential case review. Our team has recovered over $2 billion — let us fight for you."
          />
        </div>
      </section>
    </>
  );
}
