"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewSchema } from '@/lib/validations';
import { z } from 'zod';
import { ErrorMessage } from './ui/ErrorMessage';

type ReviewFormValues = z.infer<typeof reviewSchema>;

interface ReviewType {
  _id: string;
  rating: number;
  comment: string;
  user?: {
    name: string;
  };
  createdAt: string;
}

interface ReviewSectionProps {
  destinationId: string;
  reviews: ReviewType[];
}

export default function ReviewSection({ destinationId, reviews }: ReviewSectionProps) {
  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      destinationId,
      rating: 5,
      comment: '',
    },
  });

  const onSubmit = async (data: ReviewFormValues) => {
    setServerError('');
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        reset({ destinationId, rating: 5, comment: '' });
        router.refresh(); // Refresh the page to fetch new reviews from the server
      } else {
        setServerError(result.error || 'Failed to submit review');
      }
    } catch (err) {
      console.error(err);
      setServerError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Traveler Reviews</h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        {/* Reviews List */}
        <div className="w-full md:w-2/3 space-y-8">
          {reviews.length === 0 ? (
            <div className="text-gray-500 dark:text-gray-400 py-8 text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              No reviews yet. Be the first to review this destination!
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review._id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                      {review.user?.name ? review.user.name.charAt(0).toUpperCase() : 'G'}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {review.user?.name || 'Guest User'}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {review.createdAt.split('T')[0]}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{review.comment}</p>
              </div>
            ))
          )}
        </div>

        {/* Review Form */}
        <div className="w-full md:w-1/3">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Write a Review</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input type="hidden" {...register('destinationId')} />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Rating</label>
                <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => field.onChange(star)}
                          className="focus:outline-none transition-transform hover:scale-110 disabled:opacity-50"
                          disabled={isSubmitting}
                        >
                          <svg className={`w-8 h-8 ${star <= field.value ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  )}
                />
                <ErrorMessage message={errors.rating?.message} />
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Comment</label>
                <textarea
                  id="comment"
                  rows={4}
                  {...register('comment')}
                  disabled={isSubmitting}
                  placeholder="Share your experience..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.comment ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 dark:border-gray-700 focus:ring-emerald-500'
                  } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 outline-none resize-none transition-shadow shadow-sm disabled:opacity-50`}
                />
                <ErrorMessage message={errors.comment?.message} />
              </div>

              {serverError && <ErrorMessage message={serverError} />}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
