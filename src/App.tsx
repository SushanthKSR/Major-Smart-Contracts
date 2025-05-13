import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import LiveContract from './components/LiveContract';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "SmartContract - Self-Executing Blockchain Contracts";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LiveContract />
        <UseCases />
        <FAQ />
        <Resources />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;