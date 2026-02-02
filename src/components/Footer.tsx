import Link from "next/link";
import { Phone, Mail, MapPin, Scale, Clock, Globe } from "lucide-react";
import { FIRM, PRACTICE_AREAS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-white font-bold text-lg tracking-tight block">WILSHIRE LAW</span>
                <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold">Firm</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {FIRM.motto}. With over {FIRM.yearsInBusiness} years of experience and {FIRM.recovered} recovered, we fight for the justice you deserve.
            </p>
            <div className="flex items-center gap-2 text-gold text-sm font-semibold">
              <Clock className="w-4 h-4" />
              Available 24/7
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
              <Globe className="w-4 h-4" />
              Hablamos Español
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Practice Areas</h3>
            <ul className="space-y-2.5">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About the Firm" },
                { href: "/attorneys", label: "Our Attorneys" },
                { href: "/results", label: "Case Results" },
                { href: "/contact", label: "Contact Us" },
                { href: "/practice-areas", label: "All Practice Areas" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <a href={FIRM.phoneTel} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 text-gold group-hover:text-white transition-colors" />
                <div>
                  <p className="text-sm font-semibold text-white">{FIRM.phoneFormatted}</p>
                  <p className="text-xs">Free Consultation</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-gold" />
                <p className="text-sm">{FIRM.email}</p>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-gold" />
                <div className="text-sm">
                  <p>{FIRM.address}</p>
                  <p>{FIRM.city}, {FIRM.state} {FIRM.zip}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-lg font-semibold text-sm transition-all"
              >
                Get Your Free Case Review
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved. The information on this website is for general information purposes only.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
