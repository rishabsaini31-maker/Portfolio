# Rishab Saini - Portfolio Website

A modern, minimal, and professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and minimal design
- 🎨 Dark theme with blue accents
- 📱 Fully responsive across all devices
- ⚡ Optimized performance
- 🔍 SEO optimized with proper metadata
- 🎯 Smooth scroll and subtle animations
- 🧩 Component-based architecture
- 💼 Production-ready code

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel-ready

## Project Structure

```
rishab-portfolio/
├── app/
│   ├── favicon.svg
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Sections

1. **Hero** - Introduction with name, title, and CTA buttons
2. **About** - Professional summary and background
3. **Projects** - Showcase of featured projects with tech stack
4. **Skills** - Technical skills organized by category
5. **Contact** - Contact information and social links
6. **Footer** - Copyright and quick links

## Customization

### Update Personal Information

Edit the following components with your information:

- `components/Hero.tsx` - Name and title
- `components/About.tsx` - Bio and description
- `components/Projects.tsx` - Project details
- `components/Skills.tsx` - Technical skills
- `components/Contact.tsx` - Contact information

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata, title, and description.

### Update Colors

Modify `tailwind.config.ts` to change the color scheme.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

Vercel automatically detects Next.js and optimizes the build.

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Email:** rishab.saini@example.com
- **GitHub:** [@rishabsaini](https://github.com/rishabsaini)
- **LinkedIn:** [Rishab Saini](https://linkedin.com/in/rishabsaini)
