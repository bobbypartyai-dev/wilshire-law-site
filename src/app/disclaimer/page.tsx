import { FIRM } from "@/lib/data";

export const metadata = {
  title: `Disclaimer | ${FIRM.name}`,
  description: "Legal disclaimers, advertising disclosures, and SB37 compliance information.",
};

export default function DisclaimerPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">
          Legal Disclaimer &amp; Advertising Disclosure
        </h1>

        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Attorney Advertising (CA SB37 Compliance)</h2>
            <p className="text-gray-600">
              This website constitutes attorney advertising pursuant to California Business and Professions Code §§ 6157–6158.7, as amended by Senate Bill 37 (2025). {FIRM.name} is responsible for the content of this advertisement.
            </p>
            <p className="text-gray-600">
              <strong>Principal Office:</strong> {FIRM.fullAddress}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">No Guarantee of Results</h2>
            <p className="text-gray-600">
              Past results do not guarantee, warrant, or predict future case outcomes. The settlement and verdict amounts referenced on this website represent gross amounts recovered and do not reflect attorneys&apos; fees, litigation costs, or case expenses deducted from those amounts. Each case is unique, and its outcome depends on the specific facts and legal issues involved. No representation is made that the quality of legal services to be performed is greater than the quality of legal services performed by other lawyers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Awards &amp; Recognition Disclaimer</h2>
            <p className="text-gray-600">
              Awards, honors, and recognitions referenced on this website — including but not limited to &quot;Best Law Firms&quot; by U.S. News &amp; World Report/Best Lawyers®, Super Lawyers, American Board of Trial Advocates (ABOTA), Multi-Million Dollar Advocates Forum, and TopVerdict.com rankings — are subject to the following disclosures:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>These recognitions are not conferred by virtue of being a member of the awarding organization.</li>
              <li>The awarding organizations do not charge or solicit a fee, cost, or payment for conferring recognition or the award itself.</li>
              <li>These awards and recognitions are not intended to imply superiority over other attorneys or law firms.</li>
              <li>The criteria for these awards vary by organization and may include peer nominations, practice area focus, years in practice, case results, and other factors. Individual award details are available from the respective organizations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">No Attorney-Client Relationship</h2>
            <p className="text-gray-600">
              The information on this website is for general informational purposes only and does not constitute legal advice. Viewing this website, submitting a contact form, or communicating with the firm through this site does not create an attorney-client relationship. An attorney-client relationship is only formed through a signed retainer agreement. Do not send confidential information through this website until a formal attorney-client relationship has been established.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Testimonials</h2>
            <p className="text-gray-600">
              Client testimonials and endorsements on this website reflect the experiences of those particular clients. Individual results vary. Testimonials are not intended to guarantee, warrant, or predict the outcome of any particular case. Testimonials do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Contingency Fee Basis</h2>
            <p className="text-gray-600">
              &quot;No Fees Unless You Get Paid&quot; refers to the firm&apos;s contingency fee arrangement for personal injury and certain other case types. Under a contingency fee arrangement, the client does not pay attorney fees upfront; instead, fees are calculated as a percentage of any recovery obtained. If no recovery is obtained, no attorney fees are owed. However, clients may still be responsible for litigation costs and expenses as outlined in the retainer agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Jurisdiction</h2>
            <p className="text-gray-600">
              {FIRM.name} is licensed to practice law in the State of California. This website is not intended to solicit clients in jurisdictions where the firm&apos;s attorneys are not licensed to practice, except to the extent permitted by applicable rules of professional conduct.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Contact</h2>
            <p className="text-gray-600">
              For questions regarding this disclaimer or any information on this website, please contact us at {FIRM.phoneFormatted} or visit our office at {FIRM.fullAddress}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
