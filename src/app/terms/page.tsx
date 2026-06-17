import Link from 'next/link';

const sections = [
  { id: 'acceptance-of-terms', title: 'Acceptance of Terms' },
  { id: 'website-usage', title: 'Website Usage' },
  { id: 'user-responsibilities', title: 'User Responsibilities' },
  { id: 'content-accuracy', title: 'Content Accuracy' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'privacy', title: 'Privacy' },
  { id: 'termination', title: 'Termination' },
  { id: 'changes-to-terms', title: 'Changes to Terms' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact-information', title: 'Contact Information' },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white/90">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Terms of Service
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Serendib Travels Terms of Service
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              These terms govern your use of our website and services. Please read them carefully before continuing to browse or book with Serendib Travels.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-sm text-slate-500">Last updated: June 3, 2026</p>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-300" />
              <Link href="/contact" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[320px_1fr] xl:gap-14">
          <aside className="hidden xl:block">
            <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Table of contents</p>
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
            <section id="acceptance-of-terms" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>1</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Acceptance of Terms</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  By accessing or using the Serendib Travels website and services, you agree to comply with these terms. If you do not agree, please discontinue use immediately.
                </p>
              </div>
            </section>

            <section id="website-usage" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>2</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Website Usage</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  Use the website for personal, non-commercial purposes only. You agree not to misuse the platform or interfere with its operation, including by introducing harmful content or software.
                </p>
              </div>
            </section>

            <section id="user-responsibilities" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>3</span>
                  <h2 className="text-2xl font-semibold text-slate-950">User Responsibilities</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  You are responsible for maintaining the confidentiality of your account information and for all activity that occurs under your account. Please keep your login credentials secure.
                </p>
                <p className="text-slate-600 leading-8">
                  You agree to provide accurate information when booking and to update details as needed to ensure a smooth travel experience.
                </p>
              </div>
            </section>

            <section id="content-accuracy" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>4</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Content Accuracy</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  While we strive to provide accurate and up-to-date information, all content on the website is provided &quot;as is.&quot; We do not guarantee that descriptions, pricing, or availability are error-free.
                </p>
                <p className="text-slate-600 leading-8">
                  Any images, descriptions, or recommendations are illustrative and may change without notice.
                </p>
              </div>
            </section>

            <section id="intellectual-property" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>5</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Intellectual Property</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  All content on this site, including text, graphics, logos, and images, is owned by Serendib Travels or its licensors. You may not reproduce or use this content without permission.
                </p>
                <p className="text-slate-600 leading-8">
                  Unauthorized use of our intellectual property may result in legal action.
                </p>
              </div>
            </section>

            <section id="third-party-links" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>6</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Third-Party Links</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  The website may contain links to third-party sites. These links are provided for convenience only and are not endorsed by Serendib Travels.
                </p>
                <p className="text-slate-600 leading-8">
                  We are not responsible for the content or practices of external websites, and your use of those sites is subject to their terms.
                </p>
              </div>
            </section>

            <section id="limitation-of-liability" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>7</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Limitation of Liability</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  To the fullest extent permitted by law, Serendib Travels is not liable for indirect or consequential damages arising from your use of the website or services.
                </p>
                <p className="text-slate-600 leading-8">
                  Our total liability for claims related to your use of the site is limited to the amount paid for the relevant booking or service.
                </p>
              </div>
            </section>

            <section id="privacy" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>8</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Privacy</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  Your privacy is important to us. Our Privacy Policy governs the collection and use of personal information and is incorporated by reference into these terms.
                </p>
                <p className="text-slate-600 leading-8">
                  Please review the Privacy Policy for details on how your data is handled and protected.
                </p>
              </div>
            </section>

            <section id="termination" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>9</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Termination</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We may suspend or terminate access to the website at any time for violations of these terms or for operational reasons, without prior notice.
                </p>
                <p className="text-slate-600 leading-8">
                  You may also stop using the website if you no longer agree with these terms.
                </p>
              </div>
            </section>

            <section id="changes-to-terms" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>10</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Changes to Terms</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  We may update these terms periodically. Continued use of the website after changes indicates acceptance of the revised terms.
                </p>
                <p className="text-slate-600 leading-8">
                  We encourage you to review this page regularly to stay informed of the latest terms.
                </p>
              </div>
            </section>

            <section id="governing-law" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>11</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Governing Law</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  These terms are governed by the laws of Sri Lanka, without regard to conflict of law principles.
                </p>
                <p className="text-slate-600 leading-8">
                  Any legal action arising from these terms will be resolved in the courts of Sri Lanka, unless otherwise required by law.
                </p>
              </div>
            </section>

            <section id="contact-information" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold">
                  <span>12</span>
                  <h2 className="text-2xl font-semibold text-slate-950">Contact Information</h2>
                </div>
                <p className="text-slate-600 leading-8">
                  If you have questions about these Terms of Service, please reach out to our support team using the details below.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
                    <p className="mt-2 text-base font-semibold text-slate-950">support@serendibtravels.com</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
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
