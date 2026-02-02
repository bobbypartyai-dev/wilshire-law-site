"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AttorneyCard from "@/components/AttorneyCard";
import ContactForm from "@/components/ContactForm";
import { ATTORNEYS } from "@/lib/data";

export default function AttorneysPage() {
  const [filter, setFilter] = useState<"all" | "Senior Partner" | "Partner">("all");

  const filtered = filter === "all" ? ATTORNEYS : ATTORNEYS.filter((a) => a.role === filter);

  return (
    <>
      <HeroSection
        variant="subpage"
        title="Our Attorneys"
        subtitle="Meet the experienced legal professionals who fight tirelessly for our clients' rights."
        breadcrumb={[{ label: "Attorneys", href: "/attorneys" }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-3 mb-12"
          >
            {(["all", "Senior Partner", "Partner"] as const).map((role) => (
              <button
                key={role}
                onClick={() => setFilter(role)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  filter === role
                    ? "bg-navy text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {role === "all" ? "All Attorneys" : `${role}s`}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((attorney, i) => (
              <AttorneyCard key={attorney.name} attorney={attorney} index={i} />
            ))}
          </div>

          {/* Team stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-navy rounded-3xl p-10 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">A Powerhouse Legal Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Beyond our partners, Wilshire Law Firm employs over 500 legal professionals including
                  associate attorneys, paralegals, case managers, and support staff — all dedicated to
                  achieving the best possible outcomes for our clients.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { num: "500+", label: "Legal Professionals" },
                  { num: "18+", label: "Years in Practice" },
                  { num: "$2B+", label: "Total Recovered" },
                  { num: "24/7", label: "Availability" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-gold">{stat.num}</div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm title="Speak With an Attorney Today" subtitle="Our team is available 24/7 to discuss your case. Free, confidential consultation." />
        </div>
      </section>
    </>
  );
}
