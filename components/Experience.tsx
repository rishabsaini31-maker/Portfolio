"use client";

import { useEffect, useRef, useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Tech Startup Inc.",
    period: "2024 - Present",
    description:
      "Leading development of scalable web applications using Next.js and Node.js",
    achievements: [
      "Built and deployed 5+ production-ready applications",
      "Improved application performance by 40%",
      "Mentored junior developers in best practices",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - 2024",
    description:
      "Developed custom web solutions for various clients across different industries",
    achievements: [
      "Successfully delivered 10+ client projects",
      "Maintained 100% client satisfaction rate",
      "Specialized in e-commerce and inventory systems",
    ],
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    description:
      "Created responsive websites and web applications for diverse clientele",
    achievements: [
      "Developed 15+ responsive websites",
      "Implemented SEO best practices",
      "Collaborated with design team on UX improvements",
    ],
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-[#0a0a0a] hidden md:block" />

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-primary-500 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-gray-300 font-semibold mb-3">
                      {exp.company}
                    </h4>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-primary-400 mb-2">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-primary-500 mr-2 mt-1">
                              ▹
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
