"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 15, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Technologies", suffix: "+" },
  { value: 100, label: "Client Satisfaction", suffix: "%" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(timers[index]);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, interval);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary-500 mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
