"use client";

import { useEffect, useRef, useState } from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications with cutting-edge technologies",
    features: [
      "React & Next.js Applications",
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "Creating robust server-side solutions with scalable architecture and secure APIs",
    features: [
      "RESTful API Development",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Server Configuration",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce platforms with payment integration and inventory management",
    features: [
      "Custom Shopping Cart",
      "Payment Gateway Integration",
      "Order Management",
      "Admin Dashboard",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Implementation",
    description:
      "Transforming designs into pixel-perfect, interactive user interfaces",
    features: [
      "Figma to Code",
      "Interactive Components",
      "Smooth Animations",
      "Mobile-First Approach",
    ],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Services I <span className="text-primary-500">Offer</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-500 text-xs flex items-center"
                    >
                      <span className="text-primary-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
