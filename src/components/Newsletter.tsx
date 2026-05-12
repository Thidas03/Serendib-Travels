"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema } from '@/lib/validations';
import { ErrorMessage } from './ui/ErrorMessage';
import { z } from 'zod';

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
        Subscribe to our Newsletter
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
        Get the latest travel updates, tips, and exclusive offers delivered straight to your inbox.
      </p>

      {status === 'success' ? (
        <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 p-3 rounded-lg text-sm font-medium animate-in fade-in zoom-in duration-300">
          Thanks for subscribing! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 relative">
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className={`w-full pl-4 pr-32 py-3 rounded-xl border ${
                errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 dark:border-gray-800 focus:ring-emerald-500'
              } bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:ring-2 focus:outline-none transition-shadow`}
              {...register('email')}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-1 top-1 bottom-1 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </div>
          <ErrorMessage message={errors.email?.message} />
          {status === 'error' && <ErrorMessage message="Failed to subscribe. Try again." />}
        </form>
      )}
    </div>
  );
}
