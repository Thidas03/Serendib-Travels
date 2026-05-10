import Link from 'next/link';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Review from '@/models/Review';
import User from '@/models/User';
import BookingWidget from '@/components/BookingWidget';
import ReviewSection from '@/components/ReviewSection';

export default async function DestinationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  let destination;
  let reviews = [];
  let averageRating = 0;
  
  try {
    const { id } = await params;
    destination = await Destination.findById(id);
    
    if (destination) {
      // Ensure User model is loaded
      User.init();
      
      reviews = await Review.find({ destination: id })
        .populate('user', 'name')
        .sort({ createdAt: -1 });
        
      if (reviews.length > 0) {
        const sum = reviews.reduce((acc, rev) => acc + rev.rating, 0);
        averageRating = Number((sum / reviews.length).toFixed(1));
      }
    }
  } catch (error) {
    // If ID is invalid
    notFound();
  }

  if (!destination) {
    notFound();
  }

  // Use dynamic rating or fallback to destination.rating if no reviews
  const displayRating = reviews.length > 0 ? averageRating : destination.rating;

  // Serialize reviews for client component
  const serializedReviews = reviews.map(rev => ({
    _id: rev._id.toString(),
    rating: rev.rating,
    comment: rev.comment,
    user: rev.user ? { name: rev.user.name } : undefined,
    createdAt: rev.createdAt.toISOString()
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link href="/destinations" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium mb-8 group transition-colors">
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Destinations
        </Link>

        <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
          
          {/* Image Header */}
          <div className="relative h-96 md:h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="inline-block px-4 py-1.5 bg-emerald-600 text-white rounded-full text-sm font-bold tracking-wider uppercase mb-4 shadow-md">
                {destination.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
                {destination.name}
              </h1>
              <div className="flex items-center text-gray-200 drop-shadow-md">
                <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg font-medium">{destination.location}</span>
                <span className="mx-3 text-gray-400">•</span>
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-lg font-medium">{displayRating} {reviews.length > 0 ? `(${reviews.length} reviews)` : ''}</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12">
            
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                About this destination
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow ml-6"></div>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {destination.description}
              </p>
              
              {/* Additional Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Duration</h4>
                  <div className="text-gray-900 dark:text-white font-semibold">Flexible</div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Group Size</h4>
                  <div className="text-gray-900 dark:text-white font-semibold">Unlimited</div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Tour Type</h4>
                  <div className="text-gray-900 dark:text-white font-semibold">{destination.category}</div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Rating</h4>
                  <div className="flex items-center text-gray-900 dark:text-white font-semibold">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {displayRating}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="w-full md:w-1/3">
              <BookingWidget destinationId={destination._id.toString()} price={destination.price} />
            </div>
            
          </div>
          
          <div className="px-8 pb-8 md:px-12 md:pb-12">
             <ReviewSection destinationId={destination._id.toString()} reviews={serializedReviews} />
          </div>

        </div>
      </div>
    </div>
  );
}
