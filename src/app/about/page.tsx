import React from 'react';
import Link from 'next/link';
import FeatureCard from '@/components/about/FeatureCard';
import LocationCard from '@/components/about/LocationCard';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      
      {/* 1. Hero Section - Cinematic Full View */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578593139888-39622e2077ef?auto=format&fit=crop&w=1920&q=80" 
            alt="Sri Lanka Sigiriya Full View" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s] ease-out"
          />
          <div className="absolute inset-0 bg-black/45 z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-450 bg-emerald-950/65 backdrop-blur-md rounded-full border border-emerald-800/40">
            Our Legacy
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            About Serendib Travels
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            Discover the breathtaking beauty, rich heritage, and vibrant hospitality of Sri Lanka with your trusted luxury travel partner.
          </p>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-25" />
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center relative z-20">
        <div className="inline-block w-12 h-1 bg-emerald-600 mb-8 rounded-full" />
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Our Story</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto font-medium">
          Serendib Travels was founded with a simple yet profound purpose: to unveil the hidden gems of the teardrop island to the world. We believe that traveling is more than just visiting places; it&apos;s about immersing yourself in the local <span className="text-emerald-600 dark:text-emerald-450 font-bold">culture</span>, witnessing pristine <span className="text-emerald-600 dark:text-emerald-450 font-bold">nature</span>, relaxing on sun-kissed <span className="text-emerald-600 dark:text-emerald-450 font-bold">beaches</span>, exploring ancient <span className="text-emerald-600 dark:text-emerald-450 font-bold">heritage</span>, and embarking on thrilling <span className="text-emerald-600 dark:text-emerald-450 font-bold">adventure</span>. We curate experiences that leave a lasting imprint on your soul.
        </p>
      </section>

      {/* 3. Mission & Vision Section (With Premium Background Glows) */}
      <section className="py-24 px-4 bg-emerald-50/30 dark:bg-emerald-950/10 border-y border-emerald-100/40 dark:border-emerald-900/20 relative overflow-hidden">
        {/* Soft Background blur blobs */}
        <div className="absolute top-12 left-12 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-12 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          {/* Mission Card */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group border border-gray-150 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-100/50 dark:bg-emerald-950/20 rounded-full blur-3xl group-hover:bg-emerald-200/50 dark:group-hover:bg-emerald-900/40 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Our Mission</h3>
              <p className="text-lg text-gray-650 dark:text-gray-305 leading-relaxed">
                To provide authentic, sustainable, and unforgettable travel experiences in Sri Lanka while empowering local communities and preserving the island&apos;s natural, wild, and cultural heritage.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group border border-gray-150 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-100/50 dark:bg-teal-950/20 rounded-full blur-3xl group-hover:bg-teal-200/50 dark:group-hover:bg-teal-900/40 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Our Vision</h3>
              <p className="text-lg text-gray-650 dark:text-gray-305 leading-relaxed">
                To be the premier travel curator that connects global wanderers with the true essence of Sri Lanka, fostering a world where travel bridges cultures and creates lifelong, premium memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4 tracking-tight">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Visual Inspiration
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1 mb-4 tracking-tight">Iconic Locations</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Get a glimpse of the magical, world-famous destinations waiting for your discovery.
              </p>
            </div>
            <Link href="/destinations" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 dark:text-emerald-450 dark:hover:text-emerald-400 transition-colors">
              View all destinations
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LocationCard 
              image="/images/sigiriya.jpg"
              title="Sigiriya"
              category="Heritage"
              description="The towering ancient rock fortress known as the Eighth Wonder of the World."
            />
            <LocationCard 
              image="/images/nine-arch-bridge.jpg"
              title="Ella"
              category="Mountain"
              description="Lush green tea estates, majestic colonial bridges, and cool highland breezes."
            />
            <LocationCard 
              image="/images/galle-fort.jpg"
              title="Galle Fort"
              category="Culture"
              description="A beautifully preserved oceanfront colonial fortress town with cobbled alleys."
            />
            <LocationCard 
              image="/images/mirissa.jpg"
              title="Mirissa"
              category="Beach"
              description="Golden tropical sands, vibrant coastline cafes, and whale watching safaris."
            />
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section className="py-24 px-4 bg-emerald-900 text-center relative overflow-hidden">
        {/* Parallax Coastal Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-emerald-950/85 mix-blend-multiply z-10" />
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1588598126831-8574e318b76d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" 
          />
        </div>

        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-15 z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative z-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-emerald-350 bg-emerald-950/70 rounded-full border border-emerald-800/30">
            Start Your Adventure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Ready for an Adventure?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of luxury travelers who have explored the absolute magic of Sri Lanka with Serendib Travels. Your extraordinary journey starts here.
          </p>
          <Link 
            href="/destinations" 
            className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-emerald-50 active:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

    </div>
  );
}
