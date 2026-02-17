"use client";

import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Python",
      "Authentication",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Drizzle ORM " ,"Redis"],
  },
  {
    title: "Tools / DevOps",
    skills: [
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "AWS",
      "CI/CD",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Skills() {
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
      id="skills"
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
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-400">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-300 flex items-center group"
                    >
                      <span className="text-primary-500 mr-2 group-hover:translate-x-1 transition-transform">
                        •
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
