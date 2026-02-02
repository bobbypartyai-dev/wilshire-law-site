"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Hammer, Heart, Scale, Crown, DollarSign, Award, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import StatsBar from "@/components/StatsBar";
import { BILL_OF_RIGHTS, AWARDS, FIRM } from "@/lib/data";

const billIcons = [Shield, Eye, Hammer, Heart, Scale, Crown, DollarSign];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        variant="subpage"
        title="About Wilshire Law Firm"
        subtitle="Since 2007, we've been walking side by side with our clients — fighting for justice, one case at a time."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      <StatsBar />

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                {FIRM.yearsInBusiness}+ Years of Fighting for Justice
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2007, Wilshire Law Firm has grown from a small practice to one of the most
                  powerful personal injury firms in California. Our mission has always been simple: to provide
                  world-class legal representation to injury victims who need it most.
                </p>
                <p>
                  Today, our team of over 500 legal professionals has recovered more than $2 billion in
                  compensation for our clients. We&apos;ve been named &ldquo;Best Law Firms&rdquo; by U.S. News &amp; World
                  Report for seven consecutive years, and we&apos;ve won more Top 100 personal injury settlements
                  in California than any other firm.
                </p>
                <p>
                  But what truly sets us apart isn&apos;t our size or our accolades — it&apos;s our commitment to
                  walking side by side with every client, providing not just legal expertise, but genuine care,
                  support, and dedication throughout their journey to justice.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { year: "2007", event: "Wilshire Law Firm founded in Los Angeles" },
                { year: "2015", event: "Surpassed $500 million in recoveries" },
                { year: "2020", event: "First 'Best Law Firms' recognition by U.S. News" },
                { year: "2022", event: "Team grows to 500+ legal professionals" },
                { year: "2024", event: "More Top 100 settlements than any CA firm" },
                { year: "2025", event: "Over $2 Billion recovered for clients" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-navy text-gold font-bold text-sm px-3 py-2 rounded-lg flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex-1">
                    <p className="text-gray-700 text-sm font-medium">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Bill of Rights */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold text-sm uppercase tracking-wider"
            >
              Our Promise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3"
            >
              Client Bill of Rights
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {BILL_OF_RIGHTS.map((right, i) => {
              const Icon = billIcons[i] || Shield;
              return (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{right.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{right.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-semibold text-sm uppercase tracking-wider"
            >
              Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3"
            >
              Awards &amp; Honors
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <Award className="w-8 h-8 text-gold flex-shrink-0" />
                <p className="text-navy font-medium text-sm">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Office</span>
              <h2 className="text-3xl font-bold text-navy mt-3 mb-4">Los Angeles Headquarters</h2>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-gray-700 font-medium">{FIRM.address}</p>
                  <p className="text-gray-600">{FIRM.city}, {FIRM.state} {FIRM.zip}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Located in the heart of downtown Los Angeles, our Sky Lobby headquarters provides a
                professional and welcoming environment for clients and attorneys alike. We serve clients
                throughout all of California.
              </p>
              <ContactForm variant="compact" />
            </div>
            <div className="bg-navy rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Map Placeholder</p>
                <p className="text-gray-500 text-xs mt-1">660 S. Figueroa Street, Los Angeles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
