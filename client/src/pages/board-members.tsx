import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";

type Member = {
  name: string;
  title?: string;
  image?: string | null;
  location?: string;
  fullBio?: string;
};

const directors: Member[] = [
  {
    name: "Dr. Henry M. Musenge",
    title: "Co-Chairman, IME",
    image: "/assets/profilepics/henry.jpg",

    fullBio: "Dr. Henry M. Musenge brings extensive experience in healthcare management and consulting across African markets. As Managing Consultant at Delmore Consultants Zambia Ltd and Chairperson of Tobaka Investments Zambia Ltd, he has led numerous initiatives in healthcare infrastructure development and policy formulation. His published works focus on sustainable healthcare delivery models in resource-constrained environments."
  },
  {
    name: "Dr. Basil F. Olisa",
    title: "Co-Chairman and CEO, IME",
    image: "/assets/profilepics/basil.jpg",
    fullBio: "Basil F. Olisa is the visionary leader behind IME's expansion and strategic direction. Based in Silver Spring, Maryland, he has orchestrated partnerships across multiple continents and spearheaded the organization's evolution from medical missions to comprehensive AI-driven healthcare initiatives. Under his leadership, IME has established partnerships with leading academic institutions and international health organizations."
  },
  {
    name: "Dr. Sylvanus A. Ayeni",
    title: "Honorary Medical Director, IME",
    image: "/assets/profilepics/sylvanus.jpg",
    fullBio: "Dr. Sylvanus A. Ayeni is a distinguished neurosurgeon whose career spans decades of clinical excellence and advocacy work. As President and Founder of Pan Africa Children Advocacy Watch, he has championed healthcare access for children across the continent. His medical expertise and commitment to Pan-African health initiatives provide crucial clinical oversight for IME's programs."
  },
  {
    name: "Dr. Doris Browne",
    title: "Board Member, IME",
    image: "/assets/profilepics/doris.png",
    fullBio: "Dr. Doris Browne brings exceptional leadership credentials as Past President of the National Medical Association and current President and CEO of Browne and Associates, Inc. Her dual expertise in medicine and public health, combined with her extensive network within the African-American medical community, strengthens IME's mission of cross-continental healthcare collaboration."
  },
];

const advisors: Member[] = [
  { name: "Mr. Donald M. Temple", image: "/assets/profilepics/donald.jpg" },
  { name: "Dr. Nkaki S. Matlala", image: "/assets/profilepics/nkaki.jpg" },
  { name: "Prof. S. Yunkap Kwankam", image: "/assets/profilepics/yunkap.jpg" },
  { name: "Ms.Huguette Diakabana", image: "/assets/profilepics/huguette.jpg" },
  { name: "Dr. James W. Nyikal", image: "/assets/profilepics/james.jpg" },
];

const council: Member[] = [
  { name: "Mr. Conrad A. Clyburn", image: "/assets/profilepics/conrad.png" },
  { name: "Prof. Modest Mulenga", image: "/assets/profilepics/modest.png" },
  { name: "Dr. Lynette Moretlo Molefi", image: "/assets/profilepics/lynette.png" },
  { name: "Dr. Randall C. Morgan, Jr.", image: "/assets/profilepics/randall.png" },
  { name: "Dr. Robert Nettey", image: "/assets/profilepics/robert.png" },
  { name: "Dr. Raymond T. Terry Sr.", image: "/assets/profilepics/raymond.png" },
  { name: "Dr. Shawna Novak", image: "/assets/profilepics/shawna.png" },
  { name: "Dr. Lejeune Y. Lockett", image: "/assets/profilepics/lejeune.png" },
  { name: "Prof. Sababu K. Shabaka", image: "/assets/profilepics/sababu.png" },
  { name: "Ms. Marang Matlala", image: "/assets/profilepics/marang.jpg" },
  { name: "Dr. Rajeev Rao Eashwari", image: "/assets/profilepics/rajeev.jpg" },
  { name: "Dr. Marlon D. Joseph", image: "/assets/profilepics/marlon.jpeg" },
  { name: "Dr. Ghazal Hassan", image: "/assets/profilepics/Ghazal.jpg" },
  { name: "Mr. Leroy Ngoma", image: "/assets/profilepics/leroy.jpg" },
  { name: "Mr. Omphemetse Kgomongwe", image: "/assets/profilepics/omphemetse.png" },
  { name: "Dr. Jocelyn Turner-Musa", image: "/assets/profilepics/jocelyn.jpg" },
  { name: "Dr. Michael T. Nettles", image: "/assets/profilepics/michael.png" },
];

export default function BoardMembers() {
  const Section = ({ title, members }: { title: string; members: Member[] }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-ime-blue mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <Card key={`${title}-${index}`} className="hover:shadow-lg transition-shadow">
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
              {member.title && (
                <p className="text-ime-gold text-center font-semibold mb-2">{member.title}</p>
              )}
              {member.location && (
                <p className="text-sm text-ime-gray text-center">{member.location}</p>
              )}

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full border-ime-light-blue text-ime-light-blue hover:bg-ime-light-blue hover:text-white mt-4">
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
                      {member.title && (
                        <p className="text-ime-gold font-semibold text-lg">{member.title}</p>
                      )}
                      {member.location && (
                        <p className="text-ime-gray">{member.location}</p>
                      )}
                    </div>
                    {member.fullBio ? (
                      <div>
                        <h4 className="font-semibold text-ime-blue mb-2">Biography:</h4>
                        <p className="text-ime-gray leading-relaxed">{member.fullBio}</p>
                      </div>
                    ) : (
                      <p className="text-ime-gray italic">Biography coming soon.</p>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/#board" className="inline-flex items-center text-ime-blue hover:text-ime-light-blue mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-ime-blue mb-4">Board & Advisors</h1>
            <p className="text-xl text-ime-gray max-w-3xl mx-auto">
              Dedicated individuals committed to addressing escalating health challenges facing African populations
            </p>
          </div>

          <Section title="Board of Directors" members={directors} />
          <Section title="Board of Advisors" members={advisors} />
          <Section title="Intercontinental AI and Program Advisory Council" members={council} />
        </div>
      </div>

      <Footer />
    </div>
  );
}