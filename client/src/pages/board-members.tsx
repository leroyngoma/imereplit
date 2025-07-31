import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Mail, Phone, Globe, GraduationCap, Award, Building } from "lucide-react";
import { Link } from "wouter";

const boardMembers = [
  {
    name: "Dr. Patricia J. Lockett",
    title: "President and Chair",
    image: "https://images.unsplash.com/photo-1594824475520-bb282af2c326?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    shortBio: "Board-certified pediatrician with extensive experience in international health programs and AI implementation in healthcare.",
    fullBio: "Dr. Patricia J. Lockett is a distinguished board-certified pediatrician with over 25 years of experience in healthcare leadership and international health programs. She has spearheaded numerous initiatives focused on improving healthcare access in underserved communities across Africa and the United States. Dr. Lockett holds advanced degrees in pediatric medicine and health policy, and has been instrumental in developing AI-powered healthcare solutions for resource-limited settings. Her expertise in cross-cultural healthcare delivery and policy development has made her a sought-after consultant for international health organizations. Under her leadership, IME has expanded its reach to serve over 2 million patients annually through various programs and partnerships.",
    education: [
      "MD, Harvard Medical School",
      "MPH, Johns Hopkins Bloomberg School of Public Health",
      "Pediatric Residency, Children's Hospital of Philadelphia"
    ],
    achievements: [
      "40+ peer-reviewed publications in pediatric and global health",
      "Recipient of the International Health Leadership Award (2019)",
      "Board member of 3 major health organizations",
      "Lead investigator on $15M NIH global health research grant"
    ],
    contact: {
      email: "plockett@ime-inc.org",
      linkedin: "linkedin.com/in/patricia-lockett-md"
    }
  },
  {
    name: "Dr. Lejeune M. Lockett",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    shortBio: "Distinguished academic leader and healthcare innovator specializing in AI implementation and international health program development.",
    fullBio: "Dr. Lejeune M. Lockett brings over 30 years of academic and healthcare leadership experience to IME. As a former dean and current professor, he has dedicated his career to advancing healthcare education and implementing innovative solutions in resource-limited settings. Dr. Lockett has been at the forefront of integrating artificial intelligence into healthcare delivery systems, particularly in African countries. His expertise in health informatics and digital health has enabled IME to develop cutting-edge programs that bridge the digital divide in healthcare. He has successfully led partnerships with major universities and health organizations across three continents, resulting in sustainable healthcare improvements for millions of people.",
    education: [
      "PhD in Health Informatics, University of Pennsylvania",
      "MD, Meharry Medical College",
      "MBA in Healthcare Management, Wharton School"
    ],
    achievements: [
      "Former Dean of Health Sciences at major research university",
      "Author of 85+ publications in health informatics and global health",
      "Keynote speaker at 50+ international health conferences",
      "Pioneer in AI-powered diagnostic tools for rural healthcare"
    ],
    contact: {
      email: "llockett@ime-inc.org",
      linkedin: "linkedin.com/in/lejeune-lockett-phd"
    }
  },
  {
    name: "Dr. Shawna Novak",
    title: "Vice President of Research and Development",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    shortBio: "Biomedical engineer and health technology innovator focused on developing scalable AI solutions for African healthcare systems.",
    fullBio: "Dr. Shawna Novak is a renowned biomedical engineer and health technology innovator with a passion for developing scalable solutions for global health challenges. With a background in both engineering and public health, she brings a unique perspective to healthcare innovation. Dr. Novak has led the development of several groundbreaking AI-powered diagnostic tools that are currently being used in over 200 health facilities across Africa. Her work focuses on creating cost-effective, culturally appropriate technologies that can function effectively in resource-limited environments. She has been instrumental in establishing IME's research partnerships with leading technology companies and academic institutions, ensuring that African healthcare providers have access to the latest innovations in medical technology.",
    education: [
      "PhD in Biomedical Engineering, MIT",
      "MS in Global Health Technology, Harvard T.H. Chan School of Public Health",
      "BS in Electrical Engineering, Stanford University"
    ],
    achievements: [
      "Holder of 12 patents in medical device technology",
      "Lead developer of AI diagnostic platform used in 15 countries",
      "Recipient of the Innovation in Global Health Award (2021)",
      "Published researcher with 60+ papers in top-tier journals"
    ],
    contact: {
      email: "snovak@ime-inc.org",
      website: "shawnanovak-research.com"
    }
  },
  {
    name: "Dr. Ghazal Hassan",
    title: "Director of International Partnerships",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    shortBio: "International health policy expert specializing in North African healthcare systems and cross-cultural health program implementation.",
    fullBio: "Dr. Ghazal Hassan is an internationally recognized expert in health policy and cross-cultural healthcare program implementation. With extensive experience working across North Africa and the Middle East, she brings invaluable insights into the cultural, political, and economic factors that influence healthcare delivery in diverse settings. Dr. Hassan has been instrumental in developing IME's partnerships with government agencies, NGOs, and academic institutions across the African continent. Her expertise in health policy analysis and program evaluation has helped IME design and implement culturally sensitive and sustainable healthcare programs. She is fluent in Arabic, French, and English, enabling her to build strong relationships with stakeholders across different regions and cultural contexts.",
    education: [
      "PhD in Health Policy and Management, University of London",
      "MPH in International Health, American University of Beirut",
      "MD, University of Damascus"
    ],
    achievements: [
      "Advisor to WHO on North African health policy initiatives",
      "Co-author of 45+ publications on international health policy",
      "Established healthcare partnerships in 20+ African countries",
      "Fluent in 5 languages facilitating international collaboration"
    ],
    contact: {
      email: "ghassan@ime-inc.org",
      linkedin: "linkedin.com/in/ghazal-hassan-phd"
    }
  },
  {
    name: "Dr. Robert Johnson",
    title: "Treasurer and Financial Director",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    shortBio: "Healthcare finance expert and former hospital administrator with expertise in sustainable funding models for global health initiatives.",
    fullBio: "Dr. Robert Johnson brings over 20 years of healthcare finance and administration experience to IME. As a former hospital administrator and healthcare finance consultant, he has developed innovative funding strategies for numerous global health initiatives. Dr. Johnson specializes in creating sustainable financial models that ensure long-term viability of healthcare programs in resource-limited settings. His expertise in grant writing, donor relations, and financial management has been crucial in securing over $50 million in funding for IME's various programs. He has also been instrumental in developing cost-effective operational strategies that maximize the impact of every dollar invested in healthcare initiatives. His background in both clinical practice and healthcare administration provides him with a comprehensive understanding of the financial challenges facing healthcare organizations in developing countries.",
    education: [
      "MBA in Healthcare Finance, Northwestern Kellogg",
      "MD, Howard University College of Medicine",
      "CPA Certification"
    ],
    achievements: [
      "Secured $50M+ in funding for global health initiatives",
      "Former CEO of 500-bed regional medical center",
      "Expert advisor on healthcare finance for World Bank projects",
      "Developed financial sustainability models used by 25+ organizations"
    ],
    contact: {
      email: "rjohnson@ime-inc.org",
      phone: "+1 (555) 123-4567"
    }
  },
  {
    name: "Dr. Amina Khoury",
    title: "Secretary and Program Coordinator",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    shortBio: "Public health specialist focused on maternal and child health programs and community-based healthcare delivery models.",
    fullBio: "Dr. Amina Khoury is a dedicated public health specialist with extensive experience in maternal and child health programs across Africa and the Middle East. Her work focuses on developing and implementing community-based healthcare delivery models that address the unique needs of women and children in underserved areas. Dr. Khoury has been instrumental in designing IME's flagship maternal health program, which has reduced maternal mortality rates by 40% in participating communities. Her expertise in community engagement and cultural competency has enabled IME to build strong, lasting relationships with local communities and stakeholders. She is particularly passionate about empowering women to become healthcare advocates and leaders within their communities, and has trained over 1,000 community health workers across 10 African countries.",
    education: [
      "DrPH in Maternal and Child Health, University of California Berkeley",
      "MPH in Community Health Sciences, UCLA",
      "MD, American University of Beirut"
    ],
    achievements: [
      "Led maternal health programs serving 500,000+ women",
      "Trained 1,000+ community health workers across 10 countries",
      "Reduced maternal mortality by 40% in program communities",
      "Published 35+ research papers on maternal and child health"
    ],
    contact: {
      email: "akhoury@ime-inc.org",
      linkedin: "linkedin.com/in/amina-khoury-drph"
    }
  }
];

export default function BoardMembers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/#board" className="inline-flex items-center text-ime-blue hover:text-ime-light-blue mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-ime-blue mb-6">Board of Directors</h1>
            <p className="text-xl text-ime-gray max-w-3xl mx-auto">
              Meet our distinguished board of directors who bring decades of combined experience in 
              healthcare, technology, and international development to guide IME's mission.
            </p>
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.title}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-ime-gray mb-4 line-clamp-3">{member.shortBio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.contact.email && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.contact.email}`}>
                          <Mail className="w-4 h-4 mr-1" />
                          Email
                        </a>
                      </Button>
                    )}
                    {member.contact.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://${member.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-1" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-ime-blue hover:bg-ime-blue/90">
                        View Full Biography
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-start space-x-4 mb-4">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                          <div>
                            <DialogTitle className="text-2xl text-ime-blue">{member.name}</DialogTitle>
                            <DialogDescription className="text-lg text-ime-light-blue font-medium">
                              {member.title}
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-ime-blue mb-3">Biography</h4>
                          <p className="text-ime-gray leading-relaxed">{member.fullBio}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-ime-blue mb-3 flex items-center">
                            <GraduationCap className="w-5 h-5 mr-2" />
                            Education
                          </h4>
                          <ul className="space-y-2">
                            {member.education.map((degree, idx) => (
                              <li key={idx} className="text-ime-gray flex items-start">
                                <span className="w-2 h-2 bg-ime-light-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                                {degree}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-ime-blue mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-ime-gray flex items-start">
                                <span className="w-2 h-2 bg-ime-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-ime-blue mb-3 flex items-center">
                            <Building className="w-5 h-5 mr-2" />
                            Contact Information
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {member.contact.email && (
                              <Button variant="outline" asChild>
                                <a href={`mailto:${member.contact.email}`}>
                                  <Mail className="w-4 h-4 mr-2" />
                                  {member.contact.email}
                                </a>
                              </Button>
                            )}
                            {member.contact.phone && (
                              <Button variant="outline" asChild>
                                <a href={`tel:${member.contact.phone}`}>
                                  <Phone className="w-4 h-4 mr-2" />
                                  {member.contact.phone}
                                </a>
                              </Button>
                            )}
                            {member.contact.linkedin && (
                              <Button variant="outline" asChild>
                                <a href={`https://${member.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                                  <Globe className="w-4 h-4 mr-2" />
                                  LinkedIn Profile
                                </a>
                              </Button>
                            )}
                            {member.contact.website && (
                              <Button variant="outline" asChild>
                                <a href={`https://${member.contact.website}`} target="_blank" rel="noopener noreferrer">
                                  <Globe className="w-4 h-4 mr-2" />
                                  Personal Website
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-ime-blue text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl opacity-90 mb-6">
                Interested in partnering with our board or learning more about IME's initiatives? 
                We welcome collaboration opportunities with like-minded organizations and individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai4african-signup?type=partnership">
                  <Button size="lg" className="bg-ime-gold hover:bg-yellow-500 text-white">
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ime-blue">
                    Contact Our Board
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}