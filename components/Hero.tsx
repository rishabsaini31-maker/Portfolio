"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
          Rishab Saini
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
          Full Stack Developer | Building Scalable Web Applications
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting production-ready applications with modern technologies.
          Focused on clean code, scalable architecture, and delivering real
          business value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-600/50 text-center"
          >
            View Projects
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
