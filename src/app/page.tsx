import Link from 'next/link';

const destinations = [
  {
    title: 'Sigiriya Rock Fortress',
    description: 'An ancient rock fortress and palace ruin, Sigiriya is one of the most valuable historical monuments of Sri Lanka.',
    image: '/images/sigiriya.jpg',
  },
  {
    title: 'Nine Arch Bridge, Ella',
    description: 'Experience the breathtaking beauty of the colonial-era railway bridge nestled among lush green tea fields in the central highlands.',
    image: '/images/nine-arch-bridge.jpg',
  },
  {
    title: 'Mirissa Beach',
    description: 'Relax on the golden sands of Mirissa, famous for its vibrant nightlife, excellent surfing spots, and spectacular whale watching.',
    image: '/images/mirissa.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Hero background image showing Sri Lanka */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
            Explore Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Discover the pearl of the Indian Ocean. From ancient ruins to pristine beaches, your unforgettable journey starts here.
          </p>
          <div className="flex justify-center">
            <Link href="/destinations" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Exploring
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Featured Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Handpicked locations that showcase the diverse beauty and rich culture of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{dest.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                    {dest.description}
                  </p>
                  <Link href={`/destinations`} className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center group-hover:underline">
                    View Details
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
