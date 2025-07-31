import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Globe, Target, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function AI4AfricanSection() {
  return (
    <section id="ai4african" className="py-20 bg-gradient-to-br from-ime-blue to-ime-light-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full mb-6">
            <Brain className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">FLAGSHIP INITIATIVE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">AI4African Health Initiative</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Transforming African Healthcare Through Artificial Intelligence – A $2.5 Million Investment in the Future of Health
          </p>
        </div>

        {/* Vision & Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-15 transition-all">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-ime-gold mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90">
                To harness the power of AI to address Africa's most pressing health challenges while ensuring technological solutions are culturally relevant, linguistically appropriate, and ethically developed with African ownership and leadership.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-15 transition-all">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-ime-green mb-4" />
              <h3 className="text-2xl font-bold mb-4">Expected Impact</h3>
              <p className="text-lg opacity-90">
                By 2027, we project improved health outcomes for <strong>10 million Africans</strong> through AI-enhanced disease surveillance, optimized resource allocation, and strengthened health worker capacity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Components */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Initiative Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-3">Stakeholder Conference</h4>
              <p className="opacity-90">Landmark conference in Johannesburg, South Africa (Spring 2026) bringing together African leaders, healthcare professionals, and AI experts.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-3">AI Pilot Program</h4>
              <p className="opacity-90">Innovative Proof of Concept integrating Large Language Models (LLMs) with Small African Language Models (SLAMs) for health applications.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-3">5-Country Implementation</h4>
              <p className="opacity-90">Initial rollout across 5 African countries, creating a foundation for continent-wide expansion and impact.</p>
            </div>
          </div>
        </div>

        {/* Strategic Alignment */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Strategic Alignment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 opacity-90 text-lg">
                <div>• UN Sustainable Development Goals (SDGs 3, 9, 10, 17)</div>
                <div>• African Union's AI Position Paper</div>
              </div>
              <div className="space-y-2 opacity-90 text-lg">
                <div>• South Africa's G20 presidency priorities</div>
                <div>• Africa Declaration on Artificial Intelligence (April 2025)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Join the AI4African Health Revolution</h3>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Partner with us to transform healthcare delivery across Africa through innovative AI solutions that respect African cultures, languages, and leadership.
          </p>
          <div className="flex justify-center">
            <Link href="/ai4african-signup?type=learn-more">
              <Button size="lg" className="bg-ime-gold hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}