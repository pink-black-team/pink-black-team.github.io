'use client';

export const dynamic = 'force-dynamic';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Invest from '@/components/Invest';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Team />
        <Invest />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
