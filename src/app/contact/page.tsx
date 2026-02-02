"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { FIRM } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        variant="subpage"
        title="Contact Us"
        subtitle="Available 24/7. Get your free, confidential case review today."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-navy mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have questions or ready to discuss your case? Our team of 500+ legal professionals
                  is here to help. Reach out anytime — we&apos;re available 24/7.
                </p>

                <div className="space-y-6">
                  <a href={FIRM.phoneTel} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy group-hover:text-gold transition-colors">{FIRM.phoneFormatted}</p>
                      <p className="text-gray-500 text-sm">Free Consultation — Call Anytime</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">{FIRM.email}</p>
                      <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">{FIRM.address}</p>
                      <p className="text-gray-500 text-sm">{FIRM.city}, {FIRM.state} {FIRM.zip}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">Available 24/7</p>
                      <p className="text-gray-500 text-sm">We never close. Call anytime.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">Hablamos Español</p>
                      <p className="text-gray-500 text-sm">Spanish-speaking staff available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">Live Chat</p>
                      <p className="text-gray-500 text-sm">Chat with us on our website</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <ContactForm
                title="Start Your Free Case Review"
                subtitle="Fill out the form below and one of our attorneys will contact you within minutes. Everything you share is 100% confidential."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-navy h-80 flex items-center justify-center relative">
        <div className="text-center z-10">
          <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
          <h3 className="text-white text-xl font-bold mb-2">Visit Our Office</h3>
          <p className="text-gray-400">{FIRM.fullAddress}</p>
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How much does a consultation cost?", a: "Nothing. Your initial consultation is completely free, and there are no fees unless we win your case." },
              { q: "How long do I have to file a personal injury claim?", a: "In California, the statute of limitations for most personal injury cases is 2 years. However, certain cases have shorter deadlines, so it's important to contact us as soon as possible." },
              { q: "What types of cases do you handle?", a: "We handle motor vehicle accidents, sexual abuse cases, slip & fall, dog bites, wrongful death, product liability, employment rights, class actions, and many other personal injury cases." },
              { q: "Do I need to come to your office?", a: "No. We can handle everything remotely, and we even provide transportation to medical appointments when needed." },
              { q: "How much is my case worth?", a: "Every case is unique. Contact us for a free case evaluation and we'll provide an honest assessment of your claim's potential value." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
