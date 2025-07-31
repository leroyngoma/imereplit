import Navigation from "@/components/navigation";
import HeroCarousel from "@/components/hero-carousel";
import TrustIndicators from "@/components/trust-indicators";
import AI4AfricanSection from "@/components/ai4african-section";
import AboutSection from "@/components/about-section";
import ProgramsSection from "@/components/programs-section";
import BoardSection from "@/components/board-section";
import WebinarsSection from "@/components/webinars-section";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <TrustIndicators />
      <AI4AfricanSection />
      <AboutSection />
      <ProgramsSection />
      <BoardSection />
      
      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ime-blue mb-6">The History of IME</h2>
              <p className="text-lg text-ime-gray mb-6">IME originated from a series of medical missions to Africa organized by Basil Medical Corporation (BMC), a U.S.-based company founded in 1991. Our focus was on procuring and supplying medical equipment and technology products.</p>
              <p className="text-lg text-ime-gray mb-6">In response to requests from host governments, African-American physicians were recruited by BMC to travel to various African nations, sharing their expertise with local healthcare professionals and contributing to regional capacity-building efforts.</p>
              <p className="text-lg text-ime-gray">International Medical Exchange, Inc. was officially incorporated as a nonprofit organization on January 16, 1997.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" alt="African healthcare leaders in international collaboration meeting" className="rounded-xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      <WebinarsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
