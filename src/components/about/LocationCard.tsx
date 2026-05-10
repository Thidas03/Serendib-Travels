import React from 'react';
import Link from 'next/link';

interface LocationCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export default function LocationCard({ image, title, category, description }: LocationCardProps) {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute top-4 left-4 z-20 bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
        {category}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
          {title}
        </h3>
        <p className="text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {description}
        </p>
      </div>
    </div>
  );
}
