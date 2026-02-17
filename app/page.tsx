import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Experience />
      <Skills />
      <Testimonials />
      <Blog />
      <ContactForm />
      <Footer />
    </main>
  );
}
