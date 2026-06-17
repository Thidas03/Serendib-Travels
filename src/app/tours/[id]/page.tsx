"use client";

import Link from 'next/link';
import { useState } from 'react';
import BookingInquiryModal from '@/components/BookingInquiryModal';
import { getTourById } from '@/lib/tours';

interface Props {
  params: {
    id: string;
  };
}

export default function TourDetailsPage({ params }: Props) {
  const tour = getTourById(params.id);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#f8fafc] py-24 px-6 text-center text-slate-900">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white p-16 shadow-xl">
          <h1 className="text-4xl font-semibold">Tour not found</h1>
          <p className="mt-4 text-slate-600">We could not locate that tour package. Please return to the Tours & Packages page.</p>
          <Link href="/tours" className="mt-8 inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition">
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const selectedImage = tour.gallery[selectedImageIndex] ?? tour.image;

  return (
    <div className="bg-[#f8fafc] text-slate-900">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${selectedImage})` }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  {tour.category}
                </span>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {tour.name}
                </h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">{tour.description}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-slate-100 px-4 py-2">{tour.duration}</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2">{tour.location}</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2">${tour.price}</span>
                </div>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr] xl:gap-14">
          <div className="space-y-10">
            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">Tour Overview</h2>
              <p className="text-slate-600 leading-8">{tour.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-slate-600">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Duration</p>
                  <p className="mt-3 text-base font-semibold text-slate-900">{tour.duration}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Destinations</p>
                  <p className="mt-3 text-base font-semibold text-slate-900">{tour.destinations.join(', ')}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Price</p>
                  <p className="mt-3 text-base font-semibold text-emerald-600">${tour.price}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">Gallery</h2>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[32px] bg-slate-100">
                  <img
                    src={selectedImage}
                    alt={`${tour.name} photo ${selectedImageIndex + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {tour.gallery.map((image, index) => (
                    <button
                      key={`${tour.id}-thumb-${index}`}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`overflow-hidden rounded-[24px] border p-0 transition ring-offset-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        selectedImageIndex === index ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1} for ${tour.name}`}
                        className="h-24 w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">Destination Information</h2>
              <div className="space-y-6">
                {tour.destinationInfo.map((destination) => (
                  <div key={destination.name} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-2xl font-semibold text-slate-950">{destination.name}</h3>
                    <p className="mt-3 text-slate-600 leading-7">{destination.overview}</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Top attractions</p>
                        <ul className="mt-3 space-y-2 text-slate-700">
                          {destination.attractions.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Recommended activities</p>
                        <ul className="mt-3 space-y-2 text-slate-700">
                          {destination.activities.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Travel tips</p>
                        <ul className="mt-3 space-y-2 text-slate-700">
                          {destination.travelTips.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">Tour Highlights</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {tour.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-slate-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">Detailed Itinerary</h2>
              <div className="space-y-5">
                {tour.itinerary.map((step) => (
                  <div key={step.day} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-600 font-semibold">{step.day}</p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-slate-600 leading-7">{step.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">What’s Included</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {tour.includes.map((item) => (
                  <li key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700">{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-950 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {tour.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                    <p className="mt-3 text-slate-600 leading-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-950 mb-4">Tour Information</h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Duration</p>
                  <p className="mt-2 font-medium text-slate-900">{tour.duration}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Destinations</p>
                  <p className="mt-2 font-medium text-slate-900">{tour.destinations.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Price</p>
                  <p className="mt-2 text-3xl font-semibold text-emerald-600">${tour.price}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-950 mb-4">Need help?</h3>
              <p className="text-slate-600 leading-7">If you’d like a custom itinerary or special arrangements, our team is ready to assist.</p>
              <button
                onClick={() => setBookingOpen(true)}
                className="mt-6 w-full rounded-full bg-emerald-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition"
              >
                Submit Inquiry
              </button>
              <Link href="/tours" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                ← Return to Packages
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {bookingOpen && (
        <BookingInquiryModal tourId={tour.id} tourName={tour.name} onClose={() => setBookingOpen(false)} />
      )}
    </div>
  );
}
