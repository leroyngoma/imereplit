import { Card, CardContent } from "@/components/ui/card";
import academicImg from "../../../attached_assets/academic.png";

const newsItems = [
  {
    title: "IME Launches New Health Initiative in West Africa",
    description: "Our latest initiative focuses on strengthening healthcare infrastructure and training local professionals in West African nations.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "African healthcare professionals using AI technology"
  },
  {
    title: "AI-Powered Healthcare Solutions Symposium",
    description: "Join us for a comprehensive symposium on implementing AI solutions for sustainable healthcare delivery in African communities.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "African healthcare leaders discussing technology implementation"
  },
  {
    title: "Partnership with Leading Academic Institutions",
    description: "IME announces new partnerships with universities to expand medical training programs across the African continent.",
    image: academicImg,
    alt: "African doctor engaged in medical education and training"
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ime-blue mb-6">Latest News & Initiatives</h2>
          <p className="text-xl text-ime-gray max-w-3xl mx-auto">Stay updated on our latest healthcare initiatives and impact across Africa and underserved communities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-3">{item.title}</h3>
                <p className="text-ime-gray mb-4">{item.description}</p>
                <a href="#" className="text-ime-light-blue font-semibold hover:underline">Read More</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
