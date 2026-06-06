"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import BookingInquiryModal from '@/components/BookingInquiryModal';
import { categories, tourPackages } from '@/lib/tours';

const faqs = [
  {
    question: 'Can I customize a tour package?',
    answer: 'Yes. Every tour can be tailored to your schedule, accommodation style, and activity preferences for a fully bespoke experience.',
  },
  {
    question: 'Are flights included in the package price?',
    answer: 'Package pricing covers accommodations, guided experiences, transfers, and most meals. International flights are available on request.',
  },
  {
    question: 'What is the booking and cancellation policy?',
    answer: 'A small deposit secures your booking. Full details are provided during reservation, with flexible cancellation terms for peace of mind.',
  },
];

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFaq, setActiveFaq] = useState<string>('');
  const [selectedTour, setSelectedTour] = useState<{ id: string; name: string } | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredPackages = useMemo(() => {
    return tourPackages.filter((pack) => {
      const matchesCategory = selectedCategory === 'All' || pack.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || pack.name.toLowerCase().includes(query) || pack.location.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPackage = tourPackages.find((pack) => pack.featured) ?? tourPackages[0];

  return (
    <div className="bg-[#f8fafc] text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.16),_transparent_44%)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.36em] text-emerald-600 font-semibold mb-4">Serendib Travels</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-950 mb-6">
              Tours & Packages
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-8">
              Discover our luxury curated journeys across Sri Lanka, designed for travelers who want immersive culture, scenic escapes, and unforgettable adventure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[32px] bg-white/95 border border-slate-200 shadow-xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Explore top packages</h2>
              <p className="text-sm text-slate-500">Search by destination, duration, or category to find a journey that matches your travel style.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 border border-slate-200 shadow-xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Luxury comfort</h2>
              <p className="text-sm text-slate-500">Handpicked hotels, private transfers, and seamless service for a premium travel experience.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 border border-slate-200 shadow-xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Local expertise</h2>
              <p className="text-sm text-slate-500">Guides and local hosts who reveal Sri Lanka’s hidden stories, culture, and nature.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="rounded-3xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200 overflow-hidden">
            <div className="relative h-96 overflow-hidden">
              <img
                src={featuredPackage.image}
                alt={featuredPackage.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="inline-flex rounded-full bg-emerald-500/95 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] shadow-lg">
                  Featured</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">{featuredPackage.name}</h2>
                <p className="mt-2 text-sm text-slate-100 max-w-xl">{featuredPackage.description}</p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-700">{featuredPackage.duration}</span>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-700">{featuredPackage.location}</span>
                <span className="rounded-full bg-emerald-600 px-3 py-2 text-white">{featuredPackage.category}</span>
              </div>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">From</p>
                  <p className="text-3xl font-semibold text-slate-950">${featuredPackage.price}</p>
                </div>
                <button onClick={() => { setSelectedTour({ id: featuredPackage.id, name: featuredPackage.name }); setIsBookingOpen(true); }} className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-950 mb-6">Search & Filter</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Search packages</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search by destination or tour name"
                      className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition"
                    />
                    <span className="absolute inset-y-0 right-5 inline-flex items-center text-slate-400">🔍</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700 mb-3">Category</p>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                          selectedCategory === category
                            ? 'bg-slate-950 text-white shadow-lg shadow-slate-200/50'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Showing</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{filteredPackages.length} packages</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-950 mb-6">Why choose our tours?</h3>
              <div className="space-y-5">
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900">Tailored luxury journeys</h4>
                  <p className="mt-2 text-slate-600">Every itinerary is crafted for comfort, authenticity, and unforgettable local encounters.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900">Dedicated local experts</h4>
                  <p className="mt-2 text-slate-600">Our guides open doors to hidden temples, private beaches, and the best of culinary culture.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900">Seamless service</h4>
                  <p className="mt-2 text-slate-600">From transfers to dining, every detail is managed for a relaxed and inspiring holiday.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 lg:px-8">
        <div className="rounded-[40px] bg-white shadow-[0_32px_90px_rgba(15,23,42,0.08)] border border-slate-200 p-8">
          <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-600 font-semibold mb-4">Tour packages</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-950 mb-6">Discover our signature Sri Lanka journeys</h2>
              <p className="text-slate-600 leading-8">Browse thoughtfully designed packages for culture seekers, coastal lovers, mountain adventurers, and wildlife explorers.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredPackages.map((pack) => (
                <article key={pack.id} className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img src={pack.image} alt={pack.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900 shadow-sm">
                      {pack.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-sm text-slate-500 mb-4">
                      <span>{pack.duration}</span>
                      <span>{pack.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 mb-3">{pack.name}</h3>
                    <p className="text-sm text-slate-600 mb-5 leading-6">{pack.description}</p>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Price</p>
                        <p className="text-2xl font-semibold text-slate-950">${pack.price}</p>
                      </div>
                      <Link href={`/tours/${pack.id}`} className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[32px] bg-slate-950 text-white p-10 shadow-[0_24px_50px_rgba(15,23,42,0.25)]">
            <p className="uppercase tracking-[0.32em] text-emerald-400 font-semibold mb-4">Frequently asked questions</p>
            <h2 className="text-3xl font-semibold mb-6">Get confident before you travel</h2>
            <p className="text-slate-300 leading-7">Our team is here to ensure your journey is smooth, secure, and tailored to your expectations.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <button
                type="button"
                key={item.question}
                onClick={() => setActiveFaq(activeFaq === item.question ? '' : item.question)}
                className="w-full rounded-[28px] border border-slate-200 bg-white px-6 py-5 text-left shadow-sm transition hover:border-emerald-500"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                  </div>
                  <span className="text-2xl text-emerald-600">{activeFaq === item.question ? '−' : '+'}</span>
                </div>
                {activeFaq === item.question && (
                  <p className="mt-4 text-slate-600 leading-7">{item.answer}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-400 font-semibold mb-3">Ready to travel?</p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Secure your luxury itinerary today.</h2>
              <p className="max-w-2xl text-slate-300 leading-8">Connect with our travel specialists now to craft a premium journey through Sri Lanka’s most iconic and secluded experiences.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <button className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 transition">
                Contact us
              </button>
              <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white hover:bg-white/15 transition">
                Request brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {isBookingOpen && selectedTour && (
        <BookingInquiryModal tourId={selectedTour.id} tourName={selectedTour.name} onClose={() => setIsBookingOpen(false)} />
      )}
    </div>
  );
}
