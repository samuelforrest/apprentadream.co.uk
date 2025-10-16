import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black w-full">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-14 text-left">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4 transition-colors text-lg font-medium"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Last updated: October 2025
          </p>
        </div>


        {/* Content */}
        <div className="space-y-8 sm:space-y-12 text-white">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              1. Introduction
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              By submitting this form, you agree to the following Terms & Conditions and Privacy Notice. 
              Apprentadream (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal data and 
              respecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) 
              and the Data Protection Act 2018.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              2. Data We Collect
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              When you complete the &ldquo;Join Apprentadream&rdquo; form, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-300 ml-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Type of Student (status)</li>
              <li>Referral Source</li>
              <li>LinkedIn Username or Profile Link</li>
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
              <li>To contact you with updates, events, and relevant apprenticeship or career information.</li>
              <li>To understand user demographics and improve our services.</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
              Your data will not be sold, traded, or shared with third parties for marketing purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              4. Legal Basis for Processing
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Our processing of your personal data is based on your consent under Article 6(1)(a) of the UK GDPR. 
              You may withdraw your consent at any time by unsubscribing from our emails or contacting us directly 
              (see Section 9).
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              5. Data Storage and Retention
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-300 ml-4">
              <li>Your data is stored securely on a private spreedsheet with strict access privileges, accessible only by Appretadream.</li>
              <li>We retain your personal data only for as long as you remain subscribed to our mailing list or until you request deletion.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              6. Your Rights
            </h2>
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
              We do not share your personal information with third parties except where required by law or where 
              necessary to operate our services (e.g., secure mailing systems such as Mailchimp, Brevo, or similar 
              UK GDPR-compliant providers).
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              All third-party processors used by Apprentadream are contractually bound to protect your data and 
              process it only under our instructions.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              8. Cookies and Tracking
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              This form itself does not use cookies. However, our website may use cookies to improve user experience. 
              You can adjust your browser settings to block or delete cookies at any time.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              9. Contact Us
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding your personal data, please contact us:
            </p>
            <div className="border border-white rounded-lg p-6 space-y-2">
              <p className="text-base sm:text-lg text-gray-300">
                <span className="font-semibold text-white">Data Controller:</span> Apprentadream
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href="mailto:privacy@apprentadream.co.uk" className="text-white hover:underline underline-offset-4">
                  privacy@apprentadream.co.uk
                </a>
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                <span className="font-semibold text-white">Registered Address:</span> [Insert your registered address once confirmed]
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              10. Withdrawal of Consent & Unsubscribing
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              You may unsubscribe from our mailing list at any time by clicking the &ldquo;Unsubscribe&rdquo; link in any of 
              our emails or by contacting us directly. Once unsubscribed, your data will be deleted within 30 days.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              11. Changes to This Notice
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We may update these Terms & Conditions from time to time. Any significant changes will be communicated 
              via email or posted on our website.
            </p>
          </section>

          {/* Final Notice */}
          <section className="pt-8 border-t border-gray-800">
            <div className="border border-white/50 rounded-lg p-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                By submitting this form, you confirm that you have read and understood these Terms & Conditions 
                and consent to Apprentadream processing your personal data as described above.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4 text-lg font-medium"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}