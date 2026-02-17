"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  category: "Personal" | "Freelance";
}

const projects: Project[] = [
  {
    id: "inventory-main",
    title: "Inventory Main",
    description:
      "A comprehensive inventory management system designed for businesses to track stock, manage orders, and analyze inventory data in real-time.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "Real-time stock tracking",
      "Order management system",
      "Analytics dashboard",
      "Multi-user access control",
    ],
    demoUrl: "https://inventory-main-flax.vercel.app/",
    githubUrl: "#",
    image:
      "https://v1.screenshot.11ty.dev/https%3A%2F%2Finventory-main-flax.vercel.app%2F/opengraph/",
    category: "Personal",
  },
  {
    id: "orgo-bloom",
    title: "Orgo Bloom",
    description:
      "Full-featured e-commerce platform with secure payment integration, product management, and seamless shopping experience.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    features: [
      "Secure payment processing",
      "Product catalog & search",
      "Shopping cart & checkout",
      "Order tracking system",
    ],
    demoUrl: "https://orgo-bloom.vercel.app/",
    githubUrl: "#",
    image:
      "https://v1.screenshot.11ty.dev/https%3A%2F%2Forgo-bloom.vercel.app%2F/opengraph/",
    category: "Freelance",
  },
  {
    id: "ebook-web-app",
    title: "Ebook Web App",
    description:
      "Digital reading platform with book management, reading progress tracking, and bookmarking capabilities for an enhanced reading experience.",
    techStack: ["React", "Firebase", "Redux", "Material-UI"],
    features: [
      "Digital book reader",
      "Progress tracking",
      "Bookmarks & notes",
      "Library management",
    ],
    demoUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    category: "Personal",
  },
  {
    id: "wholesale-landing-page",
    title: "Wholesale Landing Page",
    description:
      "High-converting landing page for wholesale business with modern design, lead capture forms, and mobile-responsive layout.",
    techStack: ["HTML", "JavaScript", "CSS"],
    features: [
      "Responsive design",
      "Lead capture forms",
      "Product showcase",
      "SEO optimized",
    ],
    demoUrl: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Freelance",
  },
];

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Personal" | "Freelance"
  >("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-primary-500 transition-colors"
            >
              Rishab Saini
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <Link
                href="/projects"
                className="text-primary-500 font-medium transition-colors"
              >
                Projects
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
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            My <span className="text-primary-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto text-lg">
            A collection of production-ready web applications showcasing my
            expertise in full-stack development
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setSelectedCategory("Personal")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === "Personal"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setSelectedCategory("Freelance")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === "Freelance"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Freelance
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image - Clickable */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group overflow-hidden"
                >
                  <div className="aspect-video w-full bg-gray-800 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold px-6 py-3 bg-primary-600 rounded-lg">
                        View Live Project →
                      </span>
                    </div>
                  </div>
                </a>

                {/* Project Details */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-400 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-primary-400 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-300 text-sm flex items-center"
                        >
                          <span className="text-primary-500 mr-2">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 text-center hover:scale-105"
                      >
                        View Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 text-center border border-gray-700 hover:border-gray-600 hover:scale-105"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
