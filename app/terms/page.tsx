import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apprentadream - Terms & Conditions",
  description:
    "Terms & Conditions for Apprentadream - the fastest growing UK Apprenticeship community.",
  keywords: [
    "Apprentadream",
    "Dreamspire",
    "Join Apprentadream",
    "Apprentadream Terms",
    "Apprentadream Terms and Conditions",
  ],
  authors: [
    { name: "Apprentadream", url: "https://apprentadream.co.uk" },
    { name: "Cenk Mustafa", url: "https://www.linkedin.com/in/cenk-mustafa-41934b251/" },
    { name: "Samuel Forrest", url: "https://samuelforrest.me" },
  ],
  alternates: {
    canonical: "https://apprentadream.co.uk/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprentadream - Terms & Conditions",
    description:
      "Terms & Conditions for Apprentadream - the fastest growing UK Apprenticeship community.",
    creator: "@apprentadream",
    images: ["/og_image.jpg"],
  },
  robots: {
    // Custom for Terms Page
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
    "max-snippet": -1,
  },

  creator: "Apprentadream",
  publisher: "Apprentadream",
  icons: {
    icon: "/og.jpg",
    shortcut: "/og.jpg",
    apple: "/og.jpg",
  },
  metadataBase: new URL("https://apprentadream.co.uk"), //Root URL of Site
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Apprentadream - Terms & Conditions",
    description:
      "Terms & Conditions for Apprentadream - the fastest growing UK Apprenticeship community.",
    url: "https://apprentadream.co.uk/terms",
    siteName: "Apprentadream",
    images: [
      {
        url: "/og_image",
        width: 1200,
        height: 630,
        alt: "Apprentadream - Join the UK's fastest-growing Apprenticeship community",
        type: "image/png",
      },
    ],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Apprentadream - Terms & Conditions",
      url: "https://apprentadream.co.uk/terms",
      description:
        "Terms & Conditions for Apprentadream - the fastest growing UK Apprenticeship community.",
      publisher: {
        "@type": "Organization",
        name: "Apprentadream",
        url: "https://apprentadream.co.uk",
        logo: "https://apprentadream.co.uk/og.jpg",
      },
    }),
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-black w-full">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="mb-14 text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4 transition-colors text-lg font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">Last updated: 20th October 2025</p>
        </div>

        <div className="space-y-8 sm:space-y-12 text-white">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">1. Introduction</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              By submitting this form, you agree to the following Terms & Conditions and Privacy
              Notice. Apprentadream (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
              committed to protecting your personal data and respecting your privacy in accordance
              with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act
              2018.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">2. Data We Collect</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              When you complete the &ldquo;Join Apprentadream&rdquo; form, we collect the following
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-300 ml-4">
              <li>First Name</li>
              <li>Last Name</li>
              <li>Phone Number and Country Code</li>
              <li>Email Address</li>
              <li>Industry of interest</li>
              <li>Degree Apprenticeship level of interest</li>
              <li>Linkedin/Tiktok/Instagram/Twitter/Website/Other URL declared</li>
              <li>Type of student / year</li>
              <li>Educational course</li>
              <li>Your motivation to do an apprenticeship</li>
              <li>Whether you are applying to university</li>
              <li>Whether you have applied to apprenticeships before</li>
              <li>Your confidence level for apprenticeships</li>
              <li>Referral Source</li>
              <li>Referral Source Identifiable Code</li>
              <li>Your own referral code & link </li>
              <li>Who you referred & if you copied your referral link</li>
              <li>Your progress through the form</li>
              <li>The exact date and time you pressed submit</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              3. How We Use Your Data
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              We use this information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-300 ml-4">
              <li>To add you to our Apprentadream member mailing list.</li>
              <li>
                To contact you with updates, events, and relevant apprenticeship or career
                information.
              </li>
              <li>To understand user demographics and improve our services.</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              Your data will not be sold, traded, or shared with third parties for marketing
              purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              4. Legal Basis for Processing
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Our processing of your personal data is based on your consent under Article 6(1)(a) of
              the UK GDPR. You may withdraw your consent at any time by unsubscribing from our
              emails or contacting us directly (see Section 9).
            </p>
          </section>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              4A. Use of Artificial Intelligence
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We may use artificial intelligence (AI) and automated tools to analyse or categorise
              certain personal data you provide — for example, to match your interests to suitable
              apprenticeship opportunities, improve recommendations, or understand user trends. All
              AI processing is conducted under our control, using GDPR-compliant systems. AI tools
              do not make fully automated decisions that have a legal or significant effect on you.
              You can request human review of any automated processing by contacting the Data
              Controller (see Section 9).
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              5. Data Storage and Retention
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-300 ml-4">
              <li>
                Your data is stored securely in encrypted cloud storage accessible only by
                Apprentadream authorised personnel. Data access is restricted and monitored to
                prevent unauthorised use.
              </li>
              <li>
                We retain your personal data only for as long as you remain subscribed to our
                mailing list or until you request deletion.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">6. Your Rights</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              Under the UK GDPR, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-300 ml-4">
              <li>The right to be informed about how your data is used</li>
              <li>The right to access your personal data.</li>
              <li>The right to correct any inaccuracies.</li>
              <li>The right to request deletion (&ldquo;right to be forgotten&rdquo;).</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object to how data is processed in certain circumstances</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              You can exercise these rights at any time by contacting us (see Section 9).
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              7. Data Sharing and Third Parties
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              We do not share your personal information with third parties except where required by
              law or where necessary to operate our services (e.g., secure mailing systems such as
              Mailchimp, Brevo, or similar UK GDPR-compliant providers).
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              All third-party processors used by Apprentadream are contractually bound to protect
              your data and process it only under our instructions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              If any data is transferred outside the United Kingdom or European Economic Area, we
              ensure that appropriate safeguards such as the UK International Data Transfer
              Agreement (IDTA) are in place.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              8. Cookies and Tracking
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              Our website uses a combination of privacy-friendly analytics provided by Vercel and
              Google Analytics 4 (GA4) to understand general usage trends, improve user experience,
              and monitor web performance.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              8A. Vercel Analytics
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Vercel&rsquo;s built-in analytics are privacy-focused and do not use cookies. They do
              not collect personal identifiers or track individual visitors, but gather anonymised
              data such as page views and performance insights.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-white">
              8B. Google Analytics 4 (GA4)
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              We use Google Analytics 4 (GA4) to collect and analyse anonymised audience data,
              including page views, navigation paths, device/browser types, session duration, and
              user interactions. GA4 uses cookies and similar technologies to store a unique
              identifier in your browser.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Google may process this data on servers outside the United Kingdom or European
              Economic Area (e.g. United States). Appropriate safeguards, such as Standard
              Contractual Clauses (SCCs), are in place to protect your data in compliance with the
              UK GDPR and the Data Protection Act 2018.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-6">
              You can manage your cookie preferences, including opting out of GA4 tracking, by
              adjusting your own browser settings at any time.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">9. Contact Us</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding your personal data, please
              contact us:
            </p>
            <div className="border border-white rounded-lg p-6 space-y-2">
              <p className="text-base sm:text-lg text-gray-300">
                <span className="font-semibold text-white">Data Controller:</span> Samuel Forrest
                (on behalf of Apprentadream)
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:sam@samuelforrest.me"
                  className="text-white hover:underline underline-offset-4"
                >
                  sam@samuelforrest.me
                </a>
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              10. Withdrawal of Consent & Unsubscribing
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              You may unsubscribe from our mailing list at any time by clicking the
              &ldquo;Unsubscribe&rdquo; link in any of our emails or by contacting us directly. Once
              unsubscribed, your data will be deleted within 30 days. You can request the removal of
              any of your data from the data controller.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              11. Liability and User Conduct
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              By joining or interacting with the Apprentadream Community, you agree to use the
              platform respectfully and lawfully. You must not submit false, misleading, or
              inappropriate information, or attempt to misuse our referral system or communications.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Apprentadream is not responsible for the accuracy or content of third-party resources,
              apprenticeship listings, or external links shared through our community.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              While we take reasonable steps to maintain secure systems and accurate information,
              Apprentadream shall not be held liable for any indirect, incidental, or consequential
              loss arising from the use of our website, mailing list, or materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              12. Data Protection Statement
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              Apprentadream complies with the UK GDPR and the Data Protection Act 2018.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              13. Changes to This Notice
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We may update these Terms & Conditions from time to time. Any significant changes will
              be communicated via email or posted on our website.
            </p>
          </section>

          {/* Final Notice */}
          <section className="pt-8 border-t border-gray-800">
            <div className="border border-white/50 rounded-lg p-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                By submitting this form to join the Apprentadream Community, you confirm that you
                have read and understood these Terms & Conditions and consent to Apprentadream
                processing your personal data as described above.
              </p>
            </div>
          </section>
        </div>

        {/* Link back to homepage */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4 text-lg font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
