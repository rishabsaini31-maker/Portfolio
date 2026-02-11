"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Solutions Inc",
    content:
      "Rishab delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    image:
      "https://ui-avatars.com/api/?name=Sarah+Johnson&background=2563eb&color=fff&size=128",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Digital Innovations",
    content:
      "Working with Rishab was a great experience. He understood our requirements perfectly and delivered a scalable solution on time. Highly recommended!",
    image:
      "https://ui-avatars.com/api/?name=Michael+Chen&background=2563eb&color=fff&size=128",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartupHub",
    content:
      "Rishab's full-stack development skills are outstanding. He built our entire platform from scratch and it's been running flawlessly. A true professional!",
    image:
      "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=2563eb&color=fff&size=128",
  },
];

export default function Testimonials() {
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

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Client <span className="text-primary-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            What clients say about working with me
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10"
              >
                <div className="flex items-center mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-4 flex text-primary-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
