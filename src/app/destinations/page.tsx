"use client";

import { useState } from 'react';
import Link from 'next/link';

const MOCK_DESTINATIONS = [
  {
    id: '1',
    name: 'Sigiriya Rock Fortress',
    location: 'Central Province',
    price: 30,
    category: 'Heritage',
    image: '/images/sigiriya.jpg',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Mirissa Beach',
    location: 'Southern Province',
    price: 45,
    category: 'Beach',
    image: '/images/mirissa.jpg',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Nine Arch Bridge',
    location: 'Ella, Uva Province',
    price: 15,
    category: 'Mountain',
    image: '/images/nine-arch-bridge.jpg',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Yala National Park',
    location: 'Southern Province',
    price: 60,
    category: 'Wildlife',
    image: '/images/yala.jpg',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Temple of the Tooth',
    location: 'Kandy, Central Province',
    price: 20,
    category: 'Heritage',
    image: '/images/temple-of-the-tooth.jpg',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Unawatuna Beach',
    location: 'Galle, Southern Province',
    price: 40,
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80',
    rating: 4.5,
  },
];

const CATEGORIES = ['All', 'Beach', 'Mountain', 'Heritage', 'Wildlife'];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDestinations = MOCK_DESTINATIONS.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Discover Destinations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the perfect place for your next adventure in Sri Lanka.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all shadow-sm"
            />
          </div>
          
          <div className="w-full md:w-auto flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-emerald-500 hover:text-emerald-600 shadow-sm hover:shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div key={dest.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 flex flex-col transform hover:-translate-y-1">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5 shadow-sm">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {dest.rating}
                  </div>
                  <div className="absolute top-4 left-4 z-20 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {dest.category}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{dest.name}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                    <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-1">{dest.location}</span>
                  </div>

                  <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Price per night</span>
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${dest.price}</div>
                    </div>
                    <Link href={`/destinations/${dest.id}`} className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white transition-colors shadow-sm">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No destinations found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search query or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-6 text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
