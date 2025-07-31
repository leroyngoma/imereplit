import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const boardMembers = [
  {
    name: "Henry M. Musenge, Ph.D.",
    title: "Co-Chairman, IME",
    image: "https://ime-inc.org/wp-content/uploads/2023/10/dr_henry_musenge_co-chairman_ime_page-0001-copy.jpg",
    roles: [
      "Managing Consultant, Delmore Consultants Zambia Ltd",
      "Chairperson, Tobaka Investments Zambia Ltd",
      "Author"
    ],
    fullBio: "Dr. Henry M. Musenge brings extensive experience in healthcare management and consulting across African markets. As Managing Consultant at Delmore Consultants Zambia Ltd and Chairperson of Tobaka Investments Zambia Ltd, he has led numerous initiatives in healthcare infrastructure development and policy formulation. His published works focus on sustainable healthcare delivery models in resource-constrained environments."
  },
  {
    name: "Basil F. Olisa",
    title: "Co-Chairman and CEO, IME",
    image: "https://ime-inc.org/wp-content/uploads/2023/10/basil_olisa_co-chair_and_ceo_ime-817x1024.jpg",
    location: "Silver Spring, MD 20914",
    fullBio: "Basil F. Olisa is the visionary leader behind IME's expansion and strategic direction. Based in Silver Spring, Maryland, he has orchestrated partnerships across multiple continents and spearheaded the organization's evolution from medical missions to comprehensive AI-driven healthcare initiatives. Under his leadership, IME has established partnerships with leading academic institutions and international health organizations."
  },
  {
    name: "Sylvanus A. Ayeni, M.D.",
    title: "Honorary Medical Director, IME",
    roles: [
      "Neurosurgeon (Retired) and Author",
      "President and Founder, Pan Africa Children Advocacy Watch"
    ],
    fullBio: "Dr. Sylvanus A. Ayeni is a distinguished neurosurgeon whose career spans decades of clinical excellence and advocacy work. As President and Founder of Pan Africa Children Advocacy Watch, he has championed healthcare access for children across the continent. His medical expertise and commitment to Pan-African health initiatives provide crucial clinical oversight for IME's programs."
  },
  {
    name: "Doris Browne, M.D., MPH",
    title: "President and CEO",
    roles: [
      "Browne and Associates, Inc., Washington, D.C.",
      "Past President, National Medical Association (NMA), U.S."
    ],
    fullBio: "Dr. Doris Browne brings exceptional leadership credentials as Past President of the National Medical Association and current President and CEO of Browne and Associates, Inc. Her dual expertise in medicine and public health, combined with her extensive network within the African-American medical community, strengthens IME's mission of cross-continental healthcare collaboration."
  },
  {
    name: "Omphemetse Kgomongwe",
    title: "Co-Founder and Executive Director of AI BizHive",
    image: "https://ime-inc.org/wp-content/uploads/2025/06/Screenshot-2025-06-06-172227.png",
    roles: [
      "AI BizHive",
      "20+ years executive leadership experience"
    ],
    fullBio: "Omphemetse Kgomongwe is the Co-Founder and Executive Director of AI BizHive, a pan-African platform dedicated to accelerating AI adoption in healthcare, agriculture, and education. With over 20 years of executive leadership experience across mining, energy, agriculture, and technology sectors, he brings invaluable expertise to IME's AI4African Health Initiative. He has served on South Africa's Minerals and Petroleum Board and currently leads strategic partnerships for AI implementation across African markets."
  },
  {
    name: "Dr. Ghazal Hassan, PhD",
    title: "Professor",
    image: "https://ime-inc.org/wp-content/uploads/2025/06/Screenshot-2025-06-06-163707.png",
    roles: [
      "Royal Institute of Executive Management, Morocco",
      "WHO AI for Health Focus Group Member"
    ],
    fullBio: "Dr. Ghazal Hassan is a Professor at the Royal Institute of Executive Management in Salé, Morocco, and serves on the WHO's AI for Health Regulations Focus Group. With expertise in bioinformatics, genomics, and digital health, he co-chairs the AI for Health Working Group at the International Society for Telemedicine and eHealth. His research bridges science, policy, and innovation to promote equitable AI-powered health systems across Africa and globally."
  }
];

export default function BoardSection() {
  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ime-blue mb-6">Board of Directors</h2>
          <p className="text-xl text-ime-gray max-w-3xl mx-auto">Dedicated individuals committed to addressing escalating health challenges facing African populations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-ime-light-blue flex items-center justify-center">
                    <User className="text-white w-16 h-16" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-ime-blue text-center mb-2">{member.name}</h3>
                <p className="text-ime-gold text-center font-semibold mb-3">{member.title}</p>
                {member.roles && (
                  <ul className="text-sm text-ime-gray space-y-1 mb-4">
                    {member.roles.map((role, roleIndex) => (
                      <li key={roleIndex}>• {role}</li>
                    ))}
                  </ul>
                )}
                {member.location && (
                  <p className="text-sm text-ime-gray text-center mb-4">{member.location}</p>
                )}
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-ime-light-blue text-ime-light-blue hover:bg-ime-light-blue hover:text-white mt-2">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-ime-blue">{member.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      {member.image && (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-40 h-40 rounded-full mx-auto object-cover"
                        />
                      )}
                      <div className="text-center">
                        <p className="text-ime-gold font-semibold text-lg">{member.title}</p>
                        {member.location && (
                          <p className="text-ime-gray">{member.location}</p>
                        )}
                      </div>
                      
                      {member.roles && (
                        <div>
                          <h4 className="font-semibold text-ime-blue mb-2">Current Positions:</h4>
                          <ul className="text-ime-gray space-y-1">
                            {member.roles.map((role, roleIndex) => (
                              <li key={roleIndex}>• {role}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {member.fullBio && (
                        <div>
                          <h4 className="font-semibold text-ime-blue mb-2">Biography:</h4>
                          <p className="text-ime-gray leading-relaxed">{member.fullBio}</p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/board-members">
            <Button size="lg" className="bg-ime-light-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
              View All Board Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
