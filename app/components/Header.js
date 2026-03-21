// app/components/Header.js
'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`px-[5%] py-4 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}>
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-[#1565C0]">Nivaan</div>
        <div>
          <ul className="flex gap-8">
            <li>
              <a
                href="#"
                className="text-[#4B5563] hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#sec2"
                className="text-[#4B5563] hover:text-blue-600 transition-colors">
                Crisis
              </a>
            </li>
            <li>
              <a
                href="#sec3"
                className="text-[#4B5563] hover:text-blue-600 transition-colors">
                Solution
              </a>
            </li>
            <li>
              <a
                href="#sec4"
                className="text-[#4B5563] hover:text-blue-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a
                href="#sec5"
                className="text-[#4B5563] hover:text-blue-600 transition-colors">
                App
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#4B5563] hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>

            <li>
              <a
                href="#"
                className="bg-[#1565C0] text-white py-2 px-5 rounded-2xl font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
