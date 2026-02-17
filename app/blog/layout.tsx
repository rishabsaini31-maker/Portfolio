import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rishab Saini",
  description:
    "Thoughts, tutorials, and insights on web development and technology",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
