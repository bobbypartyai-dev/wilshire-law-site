"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TrustBadges from "@/components/TrustBadges";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import SettlementHighlights from "@/components/SettlementHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import { PRACTICE_AREAS, ATTORNEYS } from "@/lib/data";
import AttorneyCard from "@/components/AttorneyCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection variant="home" />

      {/* Stats Bar */}
      <StatsBar />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Practice Areas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold text-sm uppercase tracking-wider"
            >
              How We Help
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4"
            >
              Our Practice Areas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              From motor vehicle accidents to employment rights, our team of over 500 legal professionals
              has the expertise to handle your case.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area, i) => (
              <PracticeAreaCard key={area.slug} area={area} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
            >
              View All Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Settlement Highlights */}
      <SettlementHighlights />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Attorney Spotlight */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold text-sm uppercase tracking-wider"
            >
              Our Leadership
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4"
            >
              Meet Our Attorneys
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTORNEYS.slice(0, 4).map((attorney, i) => (
              <AttorneyCard key={attorney.name} attorney={attorney} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/attorneys"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
            >
              View All Attorneys <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Injured? Get the Compensation You Deserve.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg mb-8 leading-relaxed"
              >
                Don&apos;t wait to get the help you need. Our team of 500+ legal professionals is available 24/7
                to review your case — completely free. No fees unless we win.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-4 text-sm text-gray-400"
              >
                {["✓ Free Case Review", "✓ No Upfront Fees", "✓ Available 24/7", "✓ Hablamos Español"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm variant="dark" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
