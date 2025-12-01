import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppShowcase } from './components/AppShowcase';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { AiDemo } from './components/AiDemo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <Features />
        <HowItWorks />
        <AiDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;