import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Rishab Saini | Full Stack Developer",
  description:
    "Explore my portfolio of production-ready web applications including inventory management, e-commerce platforms, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
