"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validations';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { z } from 'zod';
import Link from 'next/link';

type ContactFormValues = z.infer<typeof contactSchema>;

const faqs = [
  {
    category: 'Travel',
    question: 'Do I need a visa to visit Sri Lanka?',
    answer: 'Yes, most foreign nationals require an Electronic Travel Authorization (ETA) or visa to enter Sri Lanka. You can easily apply for it online prior to your arrival. It is usually processed within 24 to 48 hours.'
  },
  {
    category: 'Travel',
    question: 'What is the best time of year to visit Sri Lanka?',
    answer: 'Sri Lanka is a year-round destination! The best time depends on the region: the southwest coast is best from December to April, while the east coast is dry and sunny from May to September.'
  },
  {
    category: 'Destinations',
    question: 'What are the must-see cultural sites in Sri Lanka?',
    answer: 'The famous Cultural Triangle is a must. It includes Sigiriya Rock Fortress, the ancient cave temples of Dambulla, the historical city of Polonnaruwa, and the sacred Temple of the Tooth Relic in Kandy.'
  },
  {
    category: 'Destinations',
    question: 'How do I travel between cities in Sri Lanka?',
    answer: 'Scenic trains are highly recommended, especially the famous route from Kandy to Ella. For absolute comfort and flexibility, Serendib Travels provides private luxury vehicles with experienced English-speaking chauffeur-guides.'
  },
  {
    category: 'Safety',
    question: 'Is it safe to travel in Sri Lanka?',
    answer: 'Absolutely. Sri Lanka is exceptionally welcoming and safe for international travelers. As with any travel destination, we recommend keeping valuables secure, using registered guides, and respecting local customs.'
  },
  {
    category: 'Safety',
    question: 'What health precautions should I take?',
    answer: 'No specific vaccines are legally mandated unless traveling from a yellow fever zone. We highly advise drinking bottled mineral water, wearing quality sunscreen, and using mosquito repellent in tropical rainforest areas.'
  }
];

export default function ContactPage() {
  const [serverStatus, setServerStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [faqTab, setFaqTab] = useState<'All' | 'Travel' | 'Destinations' | 'Safety'>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const messageText = watch('message') || '';

  const onSubmit = async (data: ContactFormValues) => {
    setServerStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setServerStatus({ 
          type: 'success', 
          message: 'Thank you for reaching out! Your message has been sent successfully. We will get back to you soon.' 
        });
        reset({ name: '', email: '', subject: '', message: '' });
      } else {
        setServerStatus({ 
          type: 'error', 
          message: result.error || 'Failed to send your message. Please try again.' 
        });
      }
    } catch {
      setServerStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please check your connection and try again.' 
      });
    }
  };

  const filteredFaqs = faqs.filter(faq => faqTab === 'All' || faq.category === faqTab);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" 
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/65 backdrop-blur-md rounded-full border border-emerald-800/40">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-xl">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Have questions about destinations, custom packages, or bookings? Our expert Sri Lankan travel curators are standing by to design your dream holiday.
          </p>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-25" />
      </section>

      {/* 2. CONTACT INFORMATION SECTION */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Email */}
          <a 
            href="mailto:info@serendibtravels.com" 
            className="group block p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Email Address</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Email us anytime, we reply within 12 hours.</p>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-450 group-hover:underline">
              info@serendibtravels.com
            </span>
          </a>

          {/* Card 2: Phone */}
          <a 
            href="tel:+94112345678" 
            className="group block p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Phone Number</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Call our expert team for immediate support.</p>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-450 group-hover:underline">
              +94 11 234 5678
            </span>
          </a>

          {/* Card 3: Location */}
          <div className="p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/40 shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 shadow-inner">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Office Location</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">123 Galle Road, Colombo 03,</p>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-450">
              Sri Lanka
            </span>
          </div>

          {/* Card 4: Working Hours */}
          <div className="p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/40 shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 shadow-inner">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Working Hours</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Mon - Sat: 9 AM - 6 PM</p>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-450">
              Closed Sundays & Poya Days
            </span>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & MAP SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form Wrapper (7 Columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-emerald-100 dark:bg-emerald-900/10 rounded-full blur-3xl" />
            
            <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-2 tracking-tight">Send Us a Message</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Feel free to ask any travel question. We are here to guide you.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              {serverStatus && (
                <div 
                  className={`p-5 rounded-2xl text-sm font-medium border animate-in fade-in duration-300 ${
                    serverStatus.type === 'success' 
                      ? 'bg-emerald-50/50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/50' 
                      : 'bg-red-50/50 text-red-800 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/50'
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    {serverStatus.type === 'success' ? (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                    <span>{serverStatus.message}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  id="name"
                  placeholder="e.g. John Doe"
                  error={errors.name?.message}
                  {...register('name')}
                  disabled={isSubmitting}
                />
                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  error={errors.email?.message}
                  {...register('email')}
                  disabled={isSubmitting}
                />
              </div>

              <Input
                label="Subject"
                id="subject"
                placeholder="e.g. Custom 7-Day Tour Inquiry"
                error={errors.subject?.message}
                {...register('subject')}
                disabled={isSubmitting}
              />

              <div className="relative">
                <Textarea
                  label="Message"
                  id="message"
                  rows={5}
                  placeholder="Share details about your dream trip (preferred locations, dates, group size, and any special requests)..."
                  error={errors.message?.message}
                  {...register('message')}
                  disabled={isSubmitting}
                />
                
                {/* Character Counter */}
                <div className="absolute right-0 top-0 text-xs font-semibold flex gap-1">
                  <span className={`${
                    messageText.length < 20 || messageText.length > 1000
                      ? 'text-amber-600 dark:text-amber-500'
                      : 'text-emerald-600 dark:text-emerald-450'
                  }`}>
                    {messageText.length}
                  </span>
                  <span className="text-gray-400">/ 1000 min 20</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="w-full flex justify-center items-center gap-3 py-4 px-6 border border-transparent rounded-2xl shadow-lg text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:-translate-y-0.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 transform rotate-45 -mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Travel Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Office Panel (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-4 overflow-hidden relative group">
              {/* Modern Card Border and Accent */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600" />
              
              <div className="p-4 pb-0">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-1">Our Colombo Head Office</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Pay us a visit to discuss custom tour itineraries in detail.</p>
              </div>

              {/* Embedded Maps */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-gray-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585994273!2d79.7861271615598!3d6.921833504107127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13af3c40027610b!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1716335198000!5m2!1sen!2s" 
                  className="w-full h-[360px] border-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Travel Advisory Callout */}
            <div className="bg-emerald-950/20 dark:bg-emerald-900/10 rounded-3xl p-8 border border-emerald-800/20 text-emerald-900 dark:text-emerald-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-emerald-800">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Travel Planner Advice
              </h4>
              <p className="text-sm leading-relaxed text-emerald-850 dark:text-emerald-300">
                Sri Lanka is on GMT+5:30. If you are contacting us from Europe or the Americas, our specialists are available to organize live consultations during your evening times to fit your calendar.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 dark:text-white mt-2 mb-4 tracking-tight">
              Have Some Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Find instant answers to the most common queries regarding visas, weather, safety, and cultural guidelines.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {(['All', 'Travel', 'Destinations', 'Safety'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setFaqTab(tab);
                    setOpenFaqIndex(null); // Reset open accordion
                  }}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    faqTab === tab 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                      : 'bg-gray-100 text-gray-650 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-750'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Layout */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-gray-100 dark:border-gray-850 bg-gray-50/50 dark:bg-gray-950/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left p-6 font-bold text-gray-950 dark:text-white transition-colors duration-250 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                  >
                    <span className="pr-4 text-base md:text-lg">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-850 flex items-center justify-center text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-450' : ''
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Accordion Body */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-gray-100 dark:border-gray-850 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="p-6 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <p className="text-center text-gray-500 py-12">No questions found in this category.</p>
            )}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-24 px-4 bg-emerald-900 text-center relative overflow-hidden">
        {/* Parallax Landscape Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-emerald-950/85 mix-blend-multiply z-10" />
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1588598126831-8574e318b76d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" 
          />
        </div>

        {/* Abstract Background pattern */}
        <div className="absolute inset-0 z-10 opacity-15">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative z-20 max-w-3xl mx-auto px-4">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-350 bg-emerald-950/70 rounded-full border border-emerald-800/30">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Ready to Discover Sri Lanka?
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Join thousands of adventurous travelers who have explored ancient tea fields, elephant sanctuaries, and legendary surfs with Serendib Travels. Your paradise awaits.
          </p>
          <Link 
            href="/destinations" 
            className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-emerald-50 active:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Explore Custom Tours
          </Link>
        </div>
      </section>

    </div>
  );
}
