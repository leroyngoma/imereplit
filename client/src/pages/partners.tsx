import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Partners() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-ime-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Partners & Academic Institutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">Building strong partnerships between governments, non-governmental organizations, corporations, educational institutions, hospitals and clinics, and donor institutions to support healthcare initiatives.</p>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ime-blue text-center mb-16">Academic Collaborations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">Charles R. Drew University</h3>
                <p className="text-ime-gray mb-4">Partnership through Dr. Lejeune Lockett for international programs and HIV/AIDS prevention initiatives in Angola, Belize, and Jamaica.</p>
                <div className="text-sm text-ime-light-blue">Los Angeles, California</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">Harvard Medical School</h3>
                <p className="text-ime-gray mb-4">Collaboration through Dr. Shawna Novak in global health system strengthening and digital health interventions.</p>
                <div className="text-sm text-ime-light-blue">Boston, Massachusetts</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">Royal Institute of Executive Management</h3>
                <p className="text-ime-gray mb-4">Partnership through Dr. Ghazal Hassan for AI in health research and digital health initiatives in Morocco.</p>
                <div className="text-sm text-ime-light-blue">Salé, Morocco</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">University Mohammed VI of Sciences and Health</h3>
                <p className="text-ime-gray mb-4">Precision Medicine and One Health Laboratory collaboration for advanced healthcare research.</p>
                <div className="text-sm text-ime-light-blue">Casablanca, Morocco</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">University of Delaware</h3>
                <p className="text-ime-gray mb-4">Bioinformatics research collaboration and postdoctoral fellowship programs.</p>
                <div className="text-sm text-ime-light-blue">Delaware, USA</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">Southern Illinois University</h3>
                <p className="text-ime-gray mb-4">Advanced bioinformatics and genomics research partnerships.</p>
                <div className="text-sm text-ime-light-blue">Illinois, USA</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government & International Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ime-blue text-center mb-16">Government & International Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">World Health Organization (WHO)</h3>
                <p className="text-ime-gray mb-4">Active participation in AI for Health Regulations Focus Group and Global Initiative on AI for Health (AI4H) led by WHO, ITU, and WIPO.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">African Ministries of Health</h3>
                <p className="text-ime-gray mb-4">Partnerships with 12 African nations' ministries of health, including Zambia, Namibia, and other southern African countries.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">National Institutes of Health</h3>
                <p className="text-ime-gray mb-4">Collaboration with the National Center for Biotechnology Information for advanced genomics research.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">International Society for Telemedicine and eHealth</h3>
                <p className="text-ime-gray mb-4">Board participation and co-chairing the AI for Health Working Group through Dr. Ghazal Hassan.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ime-blue text-center mb-16">Technology & Innovation Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">AI BizHive</h3>
                <p className="text-ime-gray mb-4">Pan-African platform for AI adoption in healthcare, agriculture, and education, co-founded by board member Omphemetse Kgomongwe.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">N2T Technologies</h3>
                <p className="text-ime-gray mb-4">IT consultancy focused on web development, cybersecurity, and digital transformation across African countries.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">Global eHealth Consultants</h3>
                <p className="text-ime-gray mb-4">Leading digital health consultation services through Prof. S. Yunkap Kwankam, Chief Innovation Adviser.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">The Luminous Agency</h3>
                <p className="text-ime-gray mb-4">Digital health innovation and advisory services through WHO's Digital Health Technical Advisory Group member.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">European Bioinformatics Network (Elixir)</h3>
                <p className="text-ime-gray mb-4">Advanced bioinformatics research and data sharing initiatives across African and European institutions.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-4">African Bioinformatics Network (H3ABioNet)</h3>
                <p className="text-ime-gray mb-4">Continental network for bioinformatics capacity building and research collaboration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-ime-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with IME</h2>
          <p className="text-xl mb-8 opacity-90">Join our network of academic institutions, healthcare organizations, and technology partners to improve healthcare delivery across Africa and underserved communities.</p>
          <a href="#contact" className="bg-ime-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Explore Partnership Opportunities
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
