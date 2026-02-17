"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0a]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="your.email@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                      ? "Message Sent!"
                      : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-500 text-sm text-center">
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-600/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:rishabsainiupw165@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <span className="text-2xl">📧</span>
                    <span>rishabsainiupw165@gmail.com</span>
                  </a>
                  <a
                    href="tel:+917276193438"
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <span className="text-2xl">📱</span>
                    <span>+91 7276193438</span>
                  </a>
                  <a
                    href="https://github.com/rishabsaini31-maker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <span className="text-2xl">💼</span>
                    <span>github.com/rishabsaini31-maker</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishab-saini-8839422b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <span className="text-2xl">🔗</span>
                    <span>linkedin.com/in/rishab-saini-8839422b0</span>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I&apos;ll try my best to get back to you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
