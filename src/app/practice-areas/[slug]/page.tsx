"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import { PRACTICE_AREAS, FIRM } from "@/lib/data";

export default function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <HeroSection
        variant="subpage"
        title={area.title}
        subtitle={area.description}
        breadcrumb={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.shortTitle, href: `/practice-areas/${area.slug}` },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-gold-dark text-sm font-semibold mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Practice Areas
                </Link>

                <h2 className="text-3xl font-bold text-navy mb-6">
                  {area.title} Attorneys in Los Angeles
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-10">
                  <p>{area.longDescription}</p>
                </div>

                {/* Subtypes */}
                {area.subtypes && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-navy mb-4">Cases We Handle</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {area.subtypes.map((sub) => (
                        <div key={sub} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Settlements */}
                {area.relatedSettlements && area.relatedSettlements.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-navy mb-4">Related Settlements</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {area.relatedSettlements.map((s, i) => (
                        <div key={i} className="bg-navy rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-gold mb-2">
                            <AnimatedCounter value={s.amountNum} prefix="$" suffix="M" decimals={1} />
                          </div>
                          <p className="text-gray-400 text-xs">{s.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why choose us for this area */}
                <div className="bg-cream rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-navy mb-4">
                    Why Choose Wilshire Law for Your {area.shortTitle} Case?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      `${FIRM.professionals} legal professionals`,
                      `${FIRM.recovered} recovered`,
                      "No fees unless you win",
                      "Free medical care coordination",
                      "Available 24/7",
                      "Hablamos Español",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <ContactForm
                  title={`Free ${area.shortTitle} Case Review`}
                  subtitle="Tell us about your case. We'll review it for free."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
