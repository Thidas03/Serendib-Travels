import Link from 'next/link';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use-information', title: 'How We Use Information' },
  { id: 'cookies-and-tracking', title: 'Cookies and Tracking Technologies' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'third-party-services', title: 'Third-Party Services' },
  { id: 'user-rights', title: 'User Rights' },
  { id: 'childrens-privacy', title: "Children's Privacy" },
  { id: 'changes-to-this-policy', title: 'Changes to This Policy' },
  { id: 'contact-information', title: 'Contact Information' },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Privacy Policy
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Serendib Travels Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              This policy explains how we collect, use, and protect your personal information when you explore our tours and travel services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-sm text-slate-500">Last updated: June 3, 2026</p>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <Link href="/contact" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                Contact our privacy team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[320px_1fr] xl:gap-14">
          <aside className="hidden xl:block">
            <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">On this page</p>
              <nav className="mt-6 space-y-3 text-sm">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-2xl px-3 py-2 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-12">
            <section id="introduction" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>1</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Introduction</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  At Serendib Travels, your privacy is a top priority. This policy describes the information we collect, how we use it, and the steps we take to keep your data secure as you plan your next luxury journey.
                </p>
              </div>
            </section>

            <section id="information-we-collect" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>2</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Information We Collect</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We collect information you provide directly when you inquire about our tours, create an account, or book a package. This may include your name, email, phone number, travel preferences, payment details, and special requests.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900">Personal details</h3>
                    <p className="mt-3 text-slate-600 leading-7">Name, contact details, travel dates, accommodation preferences, and traveler profiles.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900">Usage data</h3>
                    <p className="mt-3 text-slate-600 leading-7">Website interactions, search behavior, and engagement with tour listings.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-we-use-information" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>3</span>
                  <h2 className="text-2xl font-semibold text-slate-950">How We Use Information</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  Your information helps us provide personalized travel recommendations, complete bookings, send confirmations, and improve the overall experience of Serendib Travels.
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 leading-7 list-disc list-inside">
                  <li>Process reservations and manage your itinerary.</li>
                  <li>Send important trip updates and customer support messages.</li>
                  <li>Enhance our website with relevant offers and tailored destinations.</li>
                  <li>Protect against fraud and ensure secure transactions.</li>
                </ul>
              </div>
            </section>

            <section id="cookies-and-tracking" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>4</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Cookies and Tracking Technologies</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We use cookies and similar technologies to deliver a seamless experience, remember your preferences, and analyze site performance. This helps us refine our services and show relevant travel content.
                </p>
                <p className="text-slate-600 leading-8">
                  You may manage cookie preferences through your browser settings, and certain features may be limited if cookies are disabled.
                </p>
              </div>
            </section>

            <section id="data-security" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>5</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Data Security</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We employ industry-standard security controls to protect your personal information. Our systems are regularly reviewed to guard against unauthorized access, loss, or misuse.
                </p>
                <p className="text-slate-600 leading-8">
                  Please remember that no method of transmission over the internet is completely secure, so we encourage you to keep your account information safe.
                </p>
              </div>
            </section>

            <section id="third-party-services" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>6</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Third-Party Services</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We may share information with trusted service providers who support our booking engine, email communications, payment processing, and analytics.
                </p>
                <p className="text-slate-600 leading-8">
                  These partners are carefully selected and required to handle your data in accordance with applicable privacy laws.
                </p>
              </div>
            </section>

            <section id="user-rights" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>7</span>
                  <h2 className="text-2xl font-semibold text-slate-950">User Rights</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  You have the right to access, correct, or delete the personal information we hold about you. You can also opt out of marketing communications at any time.
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 leading-7 list-disc list-inside">
                  <li>Request access to your personal data.</li>
                  <li>Ask us to update inaccurate information.</li>
                  <li>Withdraw consent where applicable.</li>
                </ul>
              </div>
            </section>

            <section id="childrens-privacy" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>8</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Children&apos;s Privacy</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  Serendib Travels is intended for travelers aged 18 and older. We do not knowingly collect personal information from children under the age of 16 without parental consent.
                </p>
                <p className="text-slate-600 leading-8">
                  If you believe we have collected information from a child, please contact us immediately and we will remove it promptly.
                </p>
              </div>
            </section>

            <section id="changes-to-this-policy" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>9</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Changes to This Policy</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We may update this privacy policy from time to time. When we do, we will revise the date at the top of the page and announce material changes through our website or direct communication.
                </p>
                <p className="text-slate-600 leading-8">
                  Please review this page periodically to stay informed of how your information is protected.
                </p>
              </div>
            </section>

            <section id="contact-information" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>10</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Contact Information</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  If you have questions or concerns about this policy, please reach out to our privacy team using the contact details below.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
                    <p className="mt-2 text-base font-semibold text-slate-950">privacy@serendibtravels.com</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Support</p>
                    <p className="mt-2 text-base font-semibold text-slate-950">+94 11 123 4567</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex w-fit rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition">
                  Visit our contact page
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
