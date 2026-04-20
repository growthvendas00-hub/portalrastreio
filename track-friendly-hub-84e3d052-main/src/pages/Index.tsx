import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import StatsBanner from "@/components/StatsBanner";
import TransparencySection from "@/components/TransparencySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <section id="como-funciona">
        <HowItWorks />
      </section>
      <section id="diferenciais">
        <FeaturesSection />
      </section>
      <StatsBanner />
      <section id="transparencia">
        <TransparencySection />
      </section>
    </main>
    <Footer />
  </div>
);

export default Index;
