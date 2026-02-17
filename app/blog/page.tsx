"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "remote-work-productivity",
    title: "Remote Work Productivity: Lessons from 3 Years of Working from Home",
    excerpt:
      "Practical tips and strategies I've learned for staying productive, maintaining work-life balance, and avoiding burnout while working remotely.",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=400&fit=crop",
  },
  {
    id: "building-personal-brand",
    title: "Building a Personal Brand as a Developer: Why It Matters",
    excerpt:
      "How creating an online presence through blogging, open source, and social media can accelerate your career and open new opportunities.",
    date: "Feb 8, 2026",
    readTime: "5 min read",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
  },
  {
    id: "freelancing-journey",
    title: "My Freelancing Journey: From First Client to Sustainable Income",
    excerpt:
      "A candid look at my experience transitioning from a full-time job to freelancing, including challenges faced and lessons learned.",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
  },
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt:
      "A comprehensive guide to building modern web applications with Next.js 15, covering the new App Router, Server Components, and more.",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  },
  {
    id: "time-management-developers",
    title: "Time Management for Developers: Strategies That Actually Work",
    excerpt:
      "Proven time management techniques specifically tailored for software developers to boost productivity and reduce stress.",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=400&fit=crop",
  },
  {
    id: "networking-introverts",
    title: "Networking for Introverts: Building Professional Relationships",
    excerpt:
      "How to build meaningful professional connections even if you're naturally introverted. Practical tips that don't require being the loudest person in the room.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=400&fit=crop",
  },
];

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-primary-500 font-medium transition-colors"
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
            My <span className="text-primary-500">Blog</span>
          </h1>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on web development and technology
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-video w-full bg-gray-800 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-white hover:text-primary-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center mt-4 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
