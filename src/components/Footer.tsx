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

      {/* SB37 Compliance Disclaimer */}
      <div className="border-t border-white/10 bg-navy-dark/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-gray-500 text-[11px] leading-relaxed mb-3">
            <strong className="text-gray-400">IMPORTANT DISCLAIMER:</strong> The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this site. Past results do not guarantee, warrant, or predict future case outcomes. Each case is unique and must be evaluated on its own merits. The amounts listed on this website represent gross settlement or verdict amounts and do not reflect attorneys&apos; fees, costs, or case expenses. Results depend on unique case facts and legal issues.
          </p>
          <p className="text-gray-500 text-[11px] leading-relaxed mb-3">
            <strong className="text-gray-400">ADVERTISING DISCLOSURE (CA SB37):</strong> This website constitutes attorney advertising. {FIRM.name} is responsible for the content of this advertisement. Principal office: {FIRM.fullAddress}. Awards and recognitions referenced on this site, including &quot;Best Law Firms&quot; by U.S. News &amp; World Report/Best Lawyers®, are not conferred by virtue of membership in any organization, nor does the awarding organization charge or solicit a fee for such recognition. No representation is made that the quality of legal services to be performed is greater than the quality of legal services performed by other lawyers. Certifications, specializations, and awards are not intended to imply superiority over other attorneys.
          </p>
          <p className="text-gray-500 text-[11px] leading-relaxed">
            Licensed to practice in California. Free consultation available 24/7. Hablamos Español.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
