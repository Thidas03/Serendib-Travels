"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BookingWidgetProps {
  destinationId: string;
  price: number;
}

export default function BookingWidget({ destinationId, price }: BookingWidgetProps) {
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const totalPrice = price * travelers;

  const handleBook = async () => {
    if (!date) {
      setError('Please select a date.');
      return;
    }
    
    setError('');
    setIsBooking(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destinationId,
          date,
          travelers,
          totalPrice,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Booking confirmed!');
        router.push('/destinations');
      } else {
        setError(data.error || 'Failed to book.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while booking.');
    } finally {
      setIsBooking(false);
    }
  };

  // Get tomorrow's date for the min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm sticky top-24">
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">${price}</span>
        <span className="text-gray-500 dark:text-gray-400 font-medium">/ person</span>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Date</label>
          <input
            type="date"
            id="date"
            min={minDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Travelers</label>
          <input
            type="number"
            id="travelers"
            min="1"
            max="20"
            value={travelers}
            onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
          <span className="font-semibold text-gray-900 dark:text-white">Total</span>
          <span className="font-bold text-xl text-emerald-600 dark:text-emerald-400">${totalPrice}</span>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      
      <button 
        onClick={handleBook}
        disabled={isBooking}
        className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isBooking ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now
          </>
        )}
      </button>
      
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        You won't be charged yet.
      </p>
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Free cancellation before 48 hours</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 mt-3">
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Instant confirmation</span>
        </div>
      </div>
    </div>
  );
}
