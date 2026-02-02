"use client";

import HeroSection from "@/components/HeroSection";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import ContactForm from "@/components/ContactForm";
import { PRACTICE_AREAS } from "@/lib/data";
import { motion } from "framer-motion";

export default function PracticeAreasPage() {
  return (
    <>
      <HeroSection
        variant="subpage"
        title="Our Practice Areas"
        subtitle="Comprehensive legal representation across all areas of personal injury, employment rights, and class action litigation."
        breadcrumb={[{ label: "Practice Areas", href: "/practice-areas" }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area, i) => (
              <PracticeAreaCard key={area.slug} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Injury types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-navy mb-8 text-center"
          >
            Types of Injuries We Handle
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Neck Injuries", "Broken Bone Injuries", "Catastrophic Injuries", "Spine Injuries", "Brain Injuries", "Burn Injuries"].map((injury, i) => (
              <motion.span
                key={injury}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white px-5 py-3 rounded-xl border border-gray-200 text-navy font-medium text-sm hover:border-gold/30 hover:shadow-md transition-all"
              >
                {injury}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm variant="dark" title="Not Sure Which Area Fits Your Case?" subtitle="Tell us what happened and we'll connect you with the right attorney. Free, confidential consultation." />
        </div>
      </section>
    </>
  );
}
