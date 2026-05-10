import React from 'react';

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export default function TeamCard({ image, name, role, bio }: TeamCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-emerald-50 dark:border-emerald-900/30 group-hover:border-emerald-500 transition-colors duration-300 shadow-inner">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {name}
      </h3>
      <div className="text-emerald-600 dark:text-emerald-400 font-medium mb-4 text-sm uppercase tracking-wider">
        {role}
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {bio}
      </p>
      
      {/* Social Icons Placeholder */}
      <div className="flex gap-4 mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
      </div>
    </div>
  );
}
