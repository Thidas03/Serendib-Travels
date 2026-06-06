"use client";

import { useEffect, useState } from 'react';

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  travelers: string;
  date: string;
  notes: string;
};

type Props = {
  tourName: string;
  tourId: string;
  onClose: () => void;
};

const initialForm: BookingForm = {
  name: '',
  email: '',
  phone: '',
  travelers: '1',
  date: '',
  notes: '',
};

const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
const validatePhone = (value: string) => /^\+?[0-9\s-]{7,20}$/.test(value);

export default function BookingInquiryModal({ tourName, tourId, onClose }: Props) {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [savedInquiry, setSavedInquiry] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tourInquirySaved');
    setSavedInquiry(saved === 'true');
  }, []);

  const validate = () => {
    const nextErrors: Partial<Record<keyof BookingForm, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Full name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!validateEmail(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.';
    else if (!validatePhone(form.phone)) nextErrors.phone = 'Please enter a valid phone number.';
    if (!form.travelers.trim() || Number(form.travelers) < 1) nextErrors.travelers = 'Please enter the number of travelers.';
    if (!form.date.trim()) nextErrors.date = 'Preferred travel date is required.';
    else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) nextErrors.date = 'Travel date cannot be in the past.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tourId, tourName, ...form }),
      });

      if (!response.ok) {
        throw new Error('Unable to send inquiry. Please try again later.');
      }

      const stored = JSON.parse(localStorage.getItem('tourInquiries') || '[]');
      localStorage.setItem('tourInquiries', JSON.stringify([...stored, { tourId, tourName, ...form, createdAt: new Date().toISOString() }]));
      localStorage.setItem('tourInquirySaved', 'true');
      setSuccess(true);
    } catch (error) {
      setErrors({ date: (error as Error).message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
        <div className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">Inquiry submitted</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Thank you for your interest.</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Our team will contact you shortly regarding your tour inquiry for <span className="font-semibold">{tourName}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-[32px] bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-600 font-semibold">Booking Inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">{tourName}</h2>
            <p className="mt-2 text-slate-600 leading-7">Share your travel preferences and we’ll follow up with a personalized itinerary proposal.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-4 py-3 text-slate-600 transition hover:bg-slate-200"
          >
            ✕
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Full Name
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Phone Number
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Number of Travelers
              <input
                type="number"
                min="1"
                value={form.travelers}
                onChange={(event) => setForm({ ...form, travelers: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
              {errors.travelers && <p className="text-sm text-red-600">{errors.travelers}</p>}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Preferred Travel Date
              <input
                type="date"
                value={form.date}
                onChange={(event) => setForm({ ...form, date: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
              {errors.date && <p className="text-sm text-red-600">{errors.date}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Additional Notes
              <textarea
                value={form.notes}
                onChange={(event) => setForm({ ...form, notes: event.target.value })}
                rows={4}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">All fields are validated before submission.</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
