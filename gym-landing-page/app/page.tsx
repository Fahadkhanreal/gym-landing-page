import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Hero from '@/sections/hero';
import Features from '@/sections/features';
import Pricing from '@/sections/pricing';
import Trainers from '@/sections/trainers';
import Testimonials from '@/sections/testimonials';
import Contact from '@/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
