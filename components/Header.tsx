"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-primary-500 transition-colors"
          >
            Rishab Saini
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/projects"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              Blogs
            </Link>
            <a
              href="https://github.com/rishabsaini31-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rishab-saini-8839422b0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rishabsainiupw165@gmail.com"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-primary-500 transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-primary-500 transition-colors py-2"
            >
              Blogs
            </Link>
            <a
              href="https://github.com/rishabsaini31-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-primary-500 transition-colors py-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rishab-saini-8839422b0"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-primary-500 transition-colors py-2"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rishabsainiupw165@gmail.com"
              className="block text-gray-400 hover:text-primary-500 transition-colors py-2"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              download
              className="block w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 text-center"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
