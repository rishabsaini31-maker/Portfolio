"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

const blogPosts: Record<string, BlogPost> = {
  "remote-work-productivity": {
    id: "remote-work-productivity",
    title:
      "Remote Work Productivity: Lessons from 3 Years of Working from Home",
    excerpt:
      "Practical tips and strategies I've learned for staying productive, maintaining work-life balance, and avoiding burnout while working remotely.",
    content: `
## Introduction

After three years of working remotely, I've learned that productivity isn't about working more hours—it's about working smarter. In this post, I'll share the strategies that have helped me stay focused and maintain a healthy work-life balance.

## Setting Up Your Space

### Create a Dedicated Workspace

One of the biggest mistakes I made early on was working from my bed or couch. Having a dedicated workspace signals to your brain that it's time to focus. This doesn't mean you need a separate room—even a specific corner of a room with a proper desk and chair makes a huge difference.

### Invest in Good Equipment

- **A comfortable chair** - Your back will thank you
- **A second monitor** - Productivity boost is real
- **Good lighting** - Reduces eye strain and improves mood
- **Quality headphones** - Essential for video calls and focus time

## Time Management Strategies

### The Pomodoro Technique

I use a modified version of the Pomodoro Technique: 50 minutes of focused work followed by a 10-minute break. This helps maintain energy throughout the day.

### Time Blocking

Schedule your day in blocks:
- **Morning** - Deep work tasks requiring maximum focus
- **Afternoon** - Meetings and collaborative work
- **Late afternoon** - Administrative tasks and emails

## Avoiding Burnout

### Set Clear Boundaries

When your home is your office, work can easily bleed into personal time. I have a strict rule: no work emails after 7 PM. This boundary helps me disconnect and recharge.

### Take Real Breaks

Step away from your desk during lunch. Go for a walk, prepare a proper meal, or just sit outside. These breaks are essential for mental health.

## Staying Connected

Remote work can feel isolating. I make it a point to:
- Have regular video calls with teammates
- Join online communities related to my field
- Attend local meetups when possible

## Conclusion

Remote work offers incredible flexibility, but it requires discipline and intentionality. By creating the right environment, managing your time effectively, and setting boundaries, you can be productive while maintaining your well-being.
    `,
    date: "Feb 12, 2026",
    readTime: "6 min read",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=400&fit=crop",
    author: {
      name: "Rishab Saini",
      avatar:
        "https://ui-avatars.com/api/?name=Rishab+Saini&background=2563eb&color=fff&size=128",
    },
  },
  "building-personal-brand": {
    id: "building-personal-brand",
    title: "Building a Personal Brand as a Developer: Why It Matters",
    excerpt:
      "How creating an online presence through blogging, open source, and social media can accelerate your career and open new opportunities.",
    content: `
## Why Personal Branding Matters

In today's competitive tech industry, your skills alone aren't always enough. A strong personal brand can:

- **Attract job opportunities** - Recruiters often search for candidates online
- **Build credibility** - Establish yourself as an expert in your field
- **Create networking opportunities** - Connect with like-minded professionals
- **Open doors to speaking engagements** - Conferences and meetups look for known voices

## Getting Started

### Define Your Niche

Don't try to be everything to everyone. I focus on full-stack development with an emphasis on React and Node.js. This specificity helps me stand out.

### Create Valuable Content

Start sharing what you learn:
- **Blog posts** - Write about problems you've solved
- **Tutorials** - Teach others what you know
- **Project showcases** - Share your work on GitHub
- **Social media** - Engage with the developer community

## Building Your Online Presence

### GitHub

Your GitHub profile is your portfolio. Make it count:
- Pin your best projects
- Write clear README files
- Contribute to open source
- Keep your activity consistent

### LinkedIn

LinkedIn isn't just for job hunting:
- Share industry insights
- Engage with others' content
- Write articles about your expertise
- Connect with professionals in your field

### Twitter/X

Many developers underestimate Twitter:
- Follow thought leaders in your field
- Share quick tips and insights
- Engage in technical discussions
- Build relationships with other developers

## Consistency is Key

Building a personal brand takes time. I committed to:
- One blog post per week
- Daily engagement on social media
- Regular GitHub contributions
- Monthly newsletter

## Conclusion

Your personal brand is an investment in your future. Start small, be consistent, and focus on providing value to others. The opportunities will follow.
    `,
    date: "Feb 8, 2026",
    readTime: "5 min read",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
    author: {
      name: "Rishab Saini",
      avatar:
        "https://ui-avatars.com/api/?name=Rishab+Saini&background=2563eb&color=fff&size=128",
    },
  },
  "freelancing-journey": {
    id: "freelancing-journey",
    title: "My Freelancing Journey: From First Client to Sustainable Income",
    excerpt:
      "A candid look at my experience transitioning from a full-time job to freelancing, including challenges faced and lessons learned.",
    content: `
## The Decision to Go Freelance

Two years ago, I made the scary decision to leave my stable full-time job and pursue freelancing. It wasn't an impulsive decision—I had been planning for months. Here's what I learned along the way.

## Before Taking the Leap

### Build Your Safety Net

I saved 6 months of expenses before quitting. This financial cushion gave me the freedom to be selective about clients and not panic during slow months.

### Start While Employed

I took on small freelance projects while still working my day job. This helped me:
- Build a portfolio
- Understand client expectations
- Learn to manage projects independently
- Develop a client acquisition process

## Finding Clients

### Where to Look

- **Your network** - Let friends and former colleagues know you're freelancing
- **Freelance platforms** - Upwork, Fiverr (good for starting out)
- **Social media** - LinkedIn and Twitter can bring unexpected opportunities
- **Local businesses** - Many need web development but don't know where to look

### My First Client

My first client came through a friend's referral. The project was small—a landing page for a local business. But it led to two more referrals, and my network started growing.

## Pricing Your Services

This was one of the hardest aspects. My advice:

1. **Don't underprice** - Low prices attract difficult clients
2. **Value-based pricing** - Charge based on the value you provide, not just hours
3. **Be transparent** - Clear pricing builds trust
4. **Raise rates gradually** - As your skills and reputation grow, so should your rates

## Challenges I Faced

### Feast or Famine Cycle

Some months were overwhelming with work; others were worryingly quiet. I learned to:
- Maintain a pipeline of potential clients
- Ask for referrals from satisfied clients
- Build long-term relationships for recurring work

### Managing Everything Alone

As a freelancer, you're not just a developer—you're also:
- Sales person
- Project manager
- Accountant
- Customer support

I eventually learned to outsource accounting and use tools for project management.

## Conclusion

Freelancing isn't for everyone, but for me, the freedom and variety of work make it worthwhile. If you're considering it, prepare thoroughly, start small, and be patient with yourself.
    `,
    date: "Feb 3, 2026",
    readTime: "8 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
    author: {
      name: "Rishab Saini",
      avatar:
        "https://ui-avatars.com/api/?name=Rishab+Saini&background=2563eb&color=fff&size=128",
    },
  },
  "getting-started-with-nextjs": {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt:
      "A comprehensive guide to building modern web applications with Next.js 15, covering the new App Router, Server Components, and more.",
    content: `
## Introduction

Next.js 15 represents a significant milestone in the evolution of React frameworks. With its powerful features and developer-friendly approach, it has become the go-to choice for building modern web applications.

## What's New in Next.js 15?

### App Router

The App Router is the new way to build applications in Next.js. It provides:

- **Server Components by default** - Better performance with server-side rendering
- **Nested layouts** - Share UI between routes while preserving state
- **Streaming** - Progressive rendering for faster perceived load times
- **Built-in SEO support** - Automatic sitemap generation and metadata API

### Server Components

Server Components are a game-changer for React applications. They allow you to:

\`\`\`tsx
// This component runs on the server
async function BlogPost({ slug }: { slug: string }) {
  const post = await getPost(slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### Improved Performance

Next.js 15 includes several performance improvements:

1. **Faster builds** - Incremental compilation
2. **Smaller bundles** - Better tree shaking
3. **Optimized images** - Automatic image optimization

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 15 is a powerful framework that makes building modern web applications a breeze. Whether you're building a simple blog or a complex enterprise application, Next.js has you covered.
    `,
    date: "Jan 28, 2026",
    readTime: "5 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    author: {
      name: "Rishab Saini",
      avatar:
        "https://ui-avatars.com/api/?name=Rishab+Saini&background=2563eb&color=fff&size=128",
    },
  },
  "time-management-developers": {
    id: "time-management-developers",
    title: "Time Management for Developers: Strategies That Actually Work",
    excerpt:
      "Proven time management techniques specifically tailored for software developers to boost productivity and reduce stress.",
    content: `
## The Developer's Time Challenge

As developers, we face unique time management challenges:
- Constant interruptions from Slack, emails, and meetings
- Complex tasks that require deep focus
- Context switching between projects
- Debugging sessions that can go on for hours

## Strategies That Work

### 1. Protect Your Deep Work Time

I block out 2-3 hours every morning for deep work. During this time:
- Slack is set to "Do Not Disturb"
- Phone is on silent
- No meetings are scheduled

This protected time is when I tackle the hardest coding challenges.

### 2. The Two-Minute Rule

If a task takes less than two minutes, do it immediately. This prevents small tasks from piling up and becoming overwhelming.

### 3. Batch Similar Tasks

Group similar activities together:
- Respond to all emails at set times (e.g., 10 AM and 4 PM)
- Schedule meetings on specific days
- Review PRs in dedicated time blocks

### 4. Use the Right Tools

My productivity toolkit:
- **Todoist** - Task management
- **Notion** - Documentation and notes
- **RescueTime** - Track where my time goes
- **Pomodoro Timer** - Maintain focus sessions

## Dealing with Interruptions

### The "Not Now" List

When someone interrupts with a request, I add it to my "Not Now" list instead of addressing it immediately. I review this list during my designated admin time.

### Communication is Key

Let your team know your focus hours. Most people respect this when they understand why it matters.

## Avoiding the Overtime Trap

Working more hours doesn't mean better output. In fact, studies show that after 50 hours per week, productivity drops significantly. I stick to a 40-hour week and find I'm more productive than when I used to work 60 hours.

## Conclusion

Time management isn't about squeezing more work into your day—it's about being intentional with your time. These strategies have helped me become more productive while actually working fewer hours.
    `,
    date: "Jan 20, 2026",
    readTime: "7 min read",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=400&fit=crop",
    author: {
      name: "Rishab Saini",
      avatar:
        "https://ui-avatars.com/api/?name=Rishab+Saini&background=2563eb&color=fff&size=128",
    },
  },
  "networking-introverts": {
    id: "networking-introverts",
    title: "Networking for Introverts: Building Professional Relationships",
    excerpt:
      "How to build meaningful professional connections even if you're naturally introverted. Practical tips that don't require being the loudest person in the room.",
    content: `
## The Introvert's Networking Challenge

As an introvert, traditional networking advice never worked for me. "Work the room" and "collect business cards" felt exhausting and inauthentic. But I've learned that networking doesn't have to mean being the life of the party.

## Redefining Networking

Networking is simply building relationships. It's not about:
- Collecting the most contacts
- Being the loudest voice
- Attending every event

It IS about:
- Building genuine connections
- Providing value to others
- Maintaining relationships over time

## Strategies for Introverts

### 1. Start Online

Online networking is often easier for introverts:
- Engage thoughtfully on LinkedIn posts
- Participate in Twitter/X tech discussions
- Join Discord or Slack communities
- Write blog posts that showcase your expertise

### 2. Quality Over Quantity

Focus on building deeper relationships with fewer people rather than shallow connections with many. I aim to have meaningful conversations with 2-3 people at events rather than trying to meet everyone.

### 3. Prepare Talking Points

Before events or calls, I prepare:
- 2-3 topics I can discuss comfortably
- Questions to ask others
- A brief introduction of myself

This preparation reduces anxiety and helps conversations flow naturally.

### 4. Follow Up Meaningfully

After meeting someone, I send a personalized follow-up:
- Reference something specific we discussed
- Share a relevant resource
- Suggest a way to stay in touch

### 5. Create Your Own Opportunities

Instead of waiting to be invited to speak or contribute, I:
- Write articles on topics I'm passionate about
- Offer to help on open source projects
- Host small online meetups on specific topics

## Energy Management

Networking drains introverts. I've learned to:
- Schedule downtime after networking events
- Set a time limit for social interactions
- Have an exit strategy for events

## Conclusion

You don't need to change your personality to be good at networking. By playing to your strengths—listening, thoughtfulness, and authenticity—you can build a strong professional network while staying true to yourself.
    `,
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=400&fit=crop",
    author: {
      name: "Rishab Saini",
      avatar:
        "https://ui-avatars.com/api/?name=Rishab+Saini&background=2563eb&color=fff&size=128",
    },
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const post = blogPosts[params.id as string];

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-400 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors"
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
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Hero Image */}
          <div className="aspect-video w-full rounded-xl overflow-hidden mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center mb-8 pb-8 border-b border-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-gray-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(
                    /## (.*)/g,
                    '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>'
                  )
                  .replace(
                    /### (.*)/g,
                    '<h3 class="text-xl font-semibold text-white mt-6 mb-3">$1</h3>'
                  )
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-white">$1</strong>'
                  )
                  .replace(
                    /`([^`]+)`/g,
                    '<code class="bg-gray-800 text-primary-400 px-2 py-1 rounded text-sm">$1</code>'
                  )
                  .replace(
                    /```tsx\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm text-gray-300">$1</code></pre>'
                  )
                  .replace(
                    /```sql\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm text-gray-300">$1</code></pre>'
                  )
                  .replace(
                    /```json\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm text-gray-300">$1</code></pre>'
                  )
                  .replace(
                    /```css\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm text-gray-300">$1</code></pre>'
                  )
                  .replace(
                    /```bash\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm text-gray-300">$1</code></pre>'
                  )
                  .replace(/- (.*)/g, '<li class="text-gray-300 ml-4">$1</li>')
                  .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4">')
                  .replace(/^(.+)$/gm, (match) => {
                    if (
                      match.startsWith("<h2") ||
                      match.startsWith("<h3") ||
                      match.startsWith("<pre") ||
                      match.startsWith("<li") ||
                      match.startsWith("<p")
                    ) {
                      return match;
                    }
                    return match;
                  }),
              }}
            />
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://rishabsaini.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://rishabsaini.com/blog/${post.id}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
