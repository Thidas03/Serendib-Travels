"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkLogin();

    // Listen to storage changes to update state reactively
    window.addEventListener('storage', checkLogin);
    return () => {
      window.removeEventListener('storage', checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    alert('Logged out successfully.');
    router.push('/');
  };

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-emerald-100 dark:border-emerald-900 shadow-sm">
                <Image src="/logo.png" alt="Serendib Travels Logo" fill className="object-cover" />
              </div>
              <div>
                <span className="text-emerald-600 dark:text-emerald-400">Serendib</span> Travels
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">About Us</Link>
            <Link href="/destinations" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Destinations</Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-650 hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-sm hover:shadow-md cursor-pointer border-none outline-none"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-sm hover:shadow-md">
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
