import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Calendar, Users } from "lucide-react";
import digitalHealthInfra from "../../../attached_assets/digitalhealthinfra.png";
import collaborativeThumb from "../../../attached_assets/collaborative.png";

const webinars = [
  {
    title: "AI in African Healthcare: Opportunities and Challenges",
    description: "Exploring the transformative potential of artificial intelligence in addressing Africa's healthcare challenges while ensuring ethical implementation.",
    date: "March 15, 2024",
    duration: "90 minutes",
    participants: "250+ healthcare professionals",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225"
  },
  {
    title: "Digital Health Infrastructure in Sub-Saharan Africa",
    description: "Examining the current state and future prospects of digital health infrastructure development across Sub-Saharan Africa.",
    date: "February 28, 2024",
    duration: "75 minutes", 
    participants: "180+ policy makers",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    thumbnail: digitalHealthInfra
  },
  {
    title: "Partnership Models for African Health Innovation", 
    description: "Successful partnership strategies between African institutions, international organizations, and technology companies in health innovation.",
    date: "January 20, 2024",
    duration: "60 minutes",
    participants: "320+ stakeholders",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    thumbnail: collaborativeThumb
  }
];

export default function WebinarsSection() {
  return (
    <section id="webinars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ime-blue mb-6">Webinars & Educational Resources</h2>
          <p className="text-xl text-ime-gray max-w-3xl mx-auto">
            Access our library of expert-led webinars covering the latest developments in African healthcare, AI implementation, and partnership strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={webinar.thumbnail} 
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    size="lg" 
                    className="bg-ime-light-blue hover:bg-blue-600 text-white"
                    onClick={() => window.open(webinar.youtubeUrl, '_blank')}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Now
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {webinar.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ime-blue mb-3 line-clamp-2">{webinar.title}</h3>
                <p className="text-ime-gray mb-4 line-clamp-3">{webinar.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-ime-gray">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{webinar.participants}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-ime-light-blue text-ime-light-blue hover:bg-ime-light-blue hover:text-white"
                  onClick={() => window.open(webinar.youtubeUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-ime-gray mb-6">Stay updated on upcoming webinars and educational content</p>
          <Button size="lg" className="bg-ime-blue hover:bg-blue-800 text-white px-8 py-3">
            Subscribe to Our Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
}