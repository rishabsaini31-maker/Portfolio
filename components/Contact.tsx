"use client";

import { useEffect, useRef, useState } from "react";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

const contactInfoList: ContactInfo[] = [
  {
    icon: "📧",
    label: "Email",
    value: "rishabsainiupw165@gmail.com",
    link: "mailto:rishabsainiupw165@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: "💼",
    label: "GitHub",
    value: "@rishabsaini31-maker",
    link: "https://github.com/rishabsaini31-maker",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "Rishab Saini",
    link: "https://www.linkedin.com/in/rishab-saini-8839422b0",
  },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Looking to collaborate or have a project in mind? Feel free to reach
            out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfoList.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10 hover:-translate-y-1 group"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-primary-400 group-hover:text-primary-300 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
