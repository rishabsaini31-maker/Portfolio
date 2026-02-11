"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a full-stack developer with a startup mindset, passionate
              about building scalable web applications that solve real problems.
              My approach goes beyond writing code&mdash;I focus on
              understanding business needs and architecting solutions that grow
              with your product.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With expertise in modern web technologies, I specialize in
              creating production-ready applications with clean, maintainable
              code. From concept to deployment, I ensure every project is built
              with scalability, performance, and user experience at its core.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on solving complex technical challenges and turning ideas
              into functional, impactful products. Whether it&apos;s building
              e-commerce platforms, inventory systems, or custom web
              solutions&mdash;I deliver results that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
