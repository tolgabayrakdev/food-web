"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Tarifler', href: '/tarifler' },
    { name: 'Kategoriler', href: '/kategoriler' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
  ];

  return (
    <nav className="bg-indigo-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">Lezzet Dünyası</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/kategoriler" 
              className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Kategoriler
            </Link>
            <Link 
              href="/tarifler" 
              className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Tarifler
            </Link>
            <Link 
              href="/hakkimizda" 
              className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hakkımızda
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-indigo-700 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-600">
            <Link
              href="/"
              className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/kategoriler"
              className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Kategoriler
            </Link>
            <Link
              href="/tarifler"
              className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tarifler
            </Link>
            <Link
              href="/hakkimizda"
              className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 