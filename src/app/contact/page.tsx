"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validations';
import { Input } from '@/components/ui/Input';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { z } from 'zod';

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [serverStatus, setServerStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

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
        setServerStatus({ type: 'success', message: 'Thank you for reaching out! We will get back to you soon.' });
        reset();
      } else {
        setServerStatus({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch (err) {
      setServerStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to plan a custom tour? We're here to help you craft your perfect Sri Lankan adventure.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="p-8 sm:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {serverStatus && (
                <div className={`p-4 rounded-xl text-sm font-medium ${serverStatus.type === 'success' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {serverStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  id="name"
                  placeholder="John Doe"
                  error={errors.name?.message}
                  {...register('name')}
                  disabled={isSubmitting}
                />
                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  {...register('email')}
                  disabled={isSubmitting}
                />
              </div>

              <Input
                label="Subject"
                id="subject"
                placeholder="How can we help you?"
                error={errors.subject?.message}
                {...register('subject')}
                disabled={isSubmitting}
              />

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your plans..."
                  className={`appearance-none block w-full px-4 py-3 border ${
                    errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-emerald-500'
                  } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors disabled:opacity-50 resize-none`}
                  {...register('message')}
                  disabled={isSubmitting}
                />
                <ErrorMessage message={errors.message?.message} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:transform-none"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
