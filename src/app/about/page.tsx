import React from 'react';
import Link from 'next/link';
import FeatureCard from '@/components/about/FeatureCard';
import LocationCard from '@/components/about/LocationCard';
import TeamCard from '@/components/about/TeamCard';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="Sri Lanka landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            About Serendib Travels
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Discover the breathtaking beauty, rich heritage, and vibrant culture of Sri Lanka with your trusted travel partner.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Serendib Travels was founded with a simple yet profound purpose: to unveil the hidden gems of the teardrop island to the world. We believe that traveling is more than just visiting places; it's about immersing yourself in the local <span className="font-semibold text-emerald-600 dark:text-emerald-400">culture</span>, witnessing pristine <span className="font-semibold text-emerald-600 dark:text-emerald-400">nature</span>, relaxing on sun-kissed <span className="font-semibold text-emerald-600 dark:text-emerald-400">beaches</span>, exploring ancient <span className="font-semibold text-emerald-600 dark:text-emerald-400">heritage</span>, and embarking on thrilling <span className="font-semibold text-emerald-600 dark:text-emerald-400">adventure</span>. We curate experiences that leave a lasting imprint on your soul.
        </p>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/40 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide authentic, sustainable, and unforgettable travel experiences in Sri Lanka while empowering local communities and preserving the island's natural and cultural heritage.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the premier travel platform that seamlessly connects global wanderers with the true essence of Sri Lanka, fostering a world where travel bridges cultures and creates lifelong memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We go above and beyond to ensure your journey is seamless, luxurious, and perfectly tailored to your desires.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
            title="Curated Destinations"
            description="Handpicked locations that showcase the very best of Sri Lanka's diverse landscapes and culture."
          />
          <FeatureCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            title="Local Insights"
            description="Benefit from the deep knowledge of our local guides who reveal hidden secrets and authentic experiences."
          />
          <FeatureCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
            title="Beautiful Experience"
            description="A modern, easy-to-use platform designed to make booking your dream vacation an absolute pleasure."
          />
          <FeatureCard 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            title="Trusted Information"
            description="Transparent pricing, genuine reviews, and reliable support available whenever you need it."
          />
        </div>
      </section>

      {/* 5. Featured Sri Lankan Locations */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Iconic Locations</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Get a glimpse of the magical destinations waiting for you.
              </p>
            </div>
            <Link href="/destinations" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View all destinations
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LocationCard 
              image="/images/sigiriya.jpg"
              title="Sigiriya"
              category="Heritage"
              description="The ancient rock fortress known as the Eighth Wonder of the World."
            />
            <LocationCard 
              image="/images/nine-arch-bridge.jpg"
              title="Ella"
              category="Mountain"
              description="Lush green tea estates, majestic waterfalls, and cool mountain breezes."
            />
            <LocationCard 
              image="/images/galle-fort.jpg"
              title="Galle Fort"
              category="Culture"
              description="A beautifully preserved colonial town with cobbled streets and ocean views."
            />
            <LocationCard 
              image="/images/mirissa.jpg"
              title="Mirissa"
              category="Beach"
              description="Golden sands, vibrant nightlife, and spectacular whale watching."
            />
          </div>
        </div>
      </section>



      {/* 7. Call To Action Section */}
      <section className="py-24 px-4 bg-emerald-900 text-center relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for an Adventure?</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Join thousands of travelers who have explored the magic of Sri Lanka with Serendib Travels. Your extraordinary journey starts here.
          </p>
          <Link href="/destinations" className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
            Explore Destinations
          </Link>
        </div>
      </section>

    </div>
  );
}
