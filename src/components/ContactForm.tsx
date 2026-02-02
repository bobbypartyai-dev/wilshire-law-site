"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { FIRM } from "@/lib/data";

interface ContactFormProps {
  variant?: "default" | "dark" | "compact";
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  variant = "default",
  title = "Get Your Free Case Review",
  subtitle = "Our team is available 24/7. Tell us about your case and we'll get back to you within minutes.",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${isDark ? "bg-navy-light" : "bg-white shadow-xl border border-gray-100"}`}>
        <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? "text-gold" : "text-green-500"}`} />
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-navy"}`}>
          Thank You!
        </h3>
        <p className={isDark ? "text-gray-300" : "text-gray-600"}>
          We&apos;ve received your information. A member of our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl ${isDark ? "bg-navy-light p-8" : isCompact ? "p-0" : "bg-white shadow-xl border border-gray-100 p-8"}`}>
      {!isCompact && (
        <div className="mb-6">
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-navy"}`}>
            {title}
          </h3>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {subtitle}
          </p>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            required
            className={`w-full px-4 py-3 rounded-lg text-sm transition-all outline-none ${
              isDark
                ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-gold"
                : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gold focus:bg-white"
            }`}
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            className={`w-full px-4 py-3 rounded-lg text-sm transition-all outline-none ${
              isDark
                ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-gold"
                : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gold focus:bg-white"
            }`}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address *"
          required
          className={`w-full px-4 py-3 rounded-lg text-sm transition-all outline-none ${
            isDark
              ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-gold"
              : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gold focus:bg-white"
          }`}
        />
        <select
          className={`w-full px-4 py-3 rounded-lg text-sm transition-all outline-none ${
            isDark
              ? "bg-white/10 border border-white/20 text-gray-400 focus:border-gold"
              : "bg-gray-50 border border-gray-200 text-gray-500 focus:border-gold focus:bg-white"
          }`}
        >
          <option value="">Type of Case</option>
          <option>Motor Vehicle Accident</option>
          <option>Sexual Abuse</option>
          <option>Slip &amp; Fall</option>
          <option>Dog Bite</option>
          <option>Wrongful Death</option>
          <option>Product Liability</option>
          <option>Employment Rights</option>
          <option>Class Action</option>
          <option>Other Personal Injury</option>
        </select>
        <textarea
          rows={3}
          placeholder="Tell us about your case..."
          className={`w-full px-4 py-3 rounded-lg text-sm transition-all outline-none resize-none ${
            isDark
              ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-gold"
              : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gold focus:bg-white"
          }`}
        />

        <button
          type="submit"
          className="w-full bg-gold hover:bg-gold-dark text-white py-3.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Submit Free Case Review
        </button>

        <div className="flex items-center justify-center gap-4 pt-2">
          <a href={FIRM.phoneTel} className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            Or Call {FIRM.phoneFormatted}
          </a>
        </div>

        <p className={`text-[11px] text-center ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          By submitting this form, you agree to our privacy policy. Your information is 100% confidential.
        </p>
      </form>
    </div>
  );
}
