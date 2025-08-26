import { UserCheck, Globe, Microscope } from "lucide-react";
import medicalTraining from "../../../attached_assets/medicaltraining.png";
import globalOutreach from "../../../attached_assets/globaloutreach.png";
import collaborative from "../../../attached_assets/collaborative.png";

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ime-blue mb-6">Our Programs</h2>
          <p className="text-xl text-ime-gray max-w-3xl mx-auto">Building a healthier future for all through comprehensive healthcare initiatives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Medical Training */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-ime-light-blue text-5xl mb-6">
              <UserCheck className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-ime-blue mb-4">Medical Training</h3>
            <p className="text-ime-gray mb-6">We provide education and hands-on training programs for healthcare professionals in underserved areas, focusing on capacity building and knowledge transfer.</p>
            <img 
              src={medicalTraining} 
              alt="African medical professionals using advanced technology in training" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>

          {/* Global Outreach */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-ime-green text-5xl mb-6">
              <Globe className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-ime-blue mb-4">Global Outreach</h3>
            <p className="text-ime-gray mb-6">Our initiatives focus on delivering essential medical support to improve public health outcomes across African nations and underserved U.S. communities.</p>
            <img 
              src={globalOutreach} 
              alt="African doctor providing compassionate care in community outreach" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>

          {/* Collaborative Research */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-ime-gold text-5xl mb-6">
              <Microscope className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-ime-blue mb-4">Collaborative Research</h3>
            <p className="text-ime-gray mb-6">We foster partnerships to conduct research that addresses global health challenges, with a focus on AI-powered solutions and innovative healthcare delivery.</p>
            <img 
              src={collaborative} 
              alt="African medical research teams collaborating" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
