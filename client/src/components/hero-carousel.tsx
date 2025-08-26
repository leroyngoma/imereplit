import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import slide2Img from "../../../attached_assets/slide2.jpg";
import slide3Img from "../../../attached_assets/slide3.jpg";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "African healthcare professionals using AI technology",
    title: "AI4African Health Initiative",
    subtitle: "Transforming African Healthcare Through Artificial Intelligence",
    buttonText: "Learn About AI4African Health",
    buttonHref: "/ai4african-signup?type=learn-more"
  },
  {
    image: slide2Img,
    alt: "African doctor examining patient with compassion",
    title: "Empowerment through Health",
    subtitle: "85+ Years of Combined Industry Experience",
    buttonText: "Our Mission",
    buttonHref: "#about"
  },
  {
    image: slide3Img,
    alt: "African medical team collaborating on healthcare solutions",
    title: "Drive Change, Improve Healthcare for All",
    subtitle: "Bridging Healthcare Gaps Across Africa and the U.S.",
    buttonText: "Support Our Mission",
    buttonHref: "/donate"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="carousel-container relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                {slide.buttonHref.startsWith('#') ? (
                  <Button asChild size="lg" className="bg-ime-light-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                    <a href={slide.buttonHref}>{slide.buttonText}</a>
                  </Button>
                ) : (
                  <Link href={slide.buttonHref}>
                    <Button size="lg" className="bg-ime-light-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                      {slide.buttonText}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-opacity ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            } hover:opacity-100`}
          />
        ))}
      </div>
    </section>
  );
}
