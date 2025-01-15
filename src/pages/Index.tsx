import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import NewSections from "@/components/landing/NewSections";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <NewSections />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;