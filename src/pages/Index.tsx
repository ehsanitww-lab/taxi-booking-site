import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import TablePrices from "@/components/home/tableprices";
import ExtraDetails from "@/components/home/paymentssection";
import PaymentsSection from "@/components/home/paymentssection";
import Orangesection from "@/components/home/Orangesection";
import FaqSection from "@/components/home/Faqs";
import BookTaxiSection from "@/components/home/CTA";
import LogosSection from "@/components/home/whitelogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TablePrices />
        <PaymentsSection />
        <Orangesection />
        <ExtraDetails />
        <Testimonials />
        <LogosSection />
        <BookTaxiSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
