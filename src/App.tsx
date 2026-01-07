import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyZeroFee } from './components/WhyZeroFee';
import { ForWhom } from './components/ForWhom';
import { MarketGrowth } from './components/MarketGrowth';
import { NoExperience } from './components/NoExperience';
import { ClientsSystem } from './components/ClientsSystem';
import { Numbers } from './components/Numbers';
import { Transparency } from './components/Transparency';
import { Comparison } from './components/Comparison';
import { LimitedTime } from './components/LimitedTime';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <WhyZeroFee />
        <ForWhom />
        <MarketGrowth />
        <NoExperience />
        <ClientsSystem />
        <Numbers />
        <Transparency />
        <Comparison />
        <LimitedTime />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
