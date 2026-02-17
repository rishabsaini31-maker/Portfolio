"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
    title:
      "Remote Work Productivity: Lessons from 3 Years of Working from Home",
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
];

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Latest <span className="text-primary-500">Blog Posts</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10 hover:-translate-y-1"
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

                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 hover:text-primary-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

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

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              View All Posts
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
