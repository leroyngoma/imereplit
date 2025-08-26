import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";

type Member = {
  name: string;
  title: string;
  image?: string | null;
  location?: string;
};

const directors: Member[] = [
  {
    name: "Basil F. Olisa",
    title: "Co-Chairman and CEO, IME",
    location: "Silver Spring, MD 20914",
    image: "https://ime-inc.org/wp-content/uploads/2023/10/basil_olisa_co-chair_and_ceo_ime-817x1024.jpg",
  },
  {
    name: "Henry M. Musenge, Ph.D.",
    title: "Co-Chairman, IME",
    location: "Lusaka, Zambia",
    image: "https://ime-inc.org/wp-content/uploads/2023/10/dr_henry_musenge_co-chairman_ime_page-0001-copy.jpg",
  },
  {
    name: "Sylvanus A. Ayeni, M.D.",
    title: "Honorary Medical Director, IME",
    location: "Cumberland, MD",
    image: null,
  },
  {
    name: "Doris Browne, M.D., MPH",
    title: "President and CEO",
    location: "Browne & Associates, Inc., Washington, D.C.",
    image: null,
  },
];

const advisors: Member[] = [
  { name: "Donald M. Temple, Esq.", title: "The Law Offices of Donald M. Temple, P.C., Washington, D.C.", location: "Washington, D.C.", image: null },
  { name: "Nkaki S. Matlala, M.D., FCS", title: "Chairman, Phodiso Home and Hospital Services (Pty) Ltd, Pretoria, South Africa", location: "Pretoria, South Africa", image: null },
  { name: "Prof. S. Yunkap Kwankam, PhD", title: "Chief Innovation Adviser, IME, Inc.", location: "CEO, Global eHealth Consultants s.a.r.l. (GeHCs), Lisbon, Portugal", image: null },
  { name: "Huguette Diakabana", title: "Member, WHO's Digital Health Technical Advisory Group", location: "Geneva, Switzerland", image: null },
  { name: "James W. Nyikal, M.D.", title: "Chairman, Medical Practitioners and Dentists Board", location: "Nairobi, Kenya", image: null },
];

const council: Member[] = [
  { name: "Conrad A. Clyburn, M.S.", title: "U.S. Army Retired", image: null },
  { name: "Prof. Modest Mulenga", title: "MD", image: null },
  { name: "Dr. Lynette Moretlo Molefi, MD", title: "MD", image: null },
  { name: "Dr. Randall C. Morgan, Jr., MD, MBA,", title: "MD", image: null },
  { name: "Dr. Robert Nettey MD", title: "MD", image: null },
  { name: "Dr. Raymond T. Terry Sr., Ph.D.", title: "Director, Office of Global Health Equity – Morgan State University School of Community Health & Policy", image: null },
  { name: "Dr. Shawna Novak MD, MA, MM Sc-GHD, EdD(c), FRSPH", title: "", image: null },
  { name: "Dr. Lejeune Y. Lockett, DM, MSPHda", title: "", image: null },
  { name: "Prof. Sababu K. Shabaka", title: "Events Logistics and Communications Manager, IME, Inc.", image: null },
  { name: "Marang Matlala, MSc", title: "", image: null },
  { name: "Dr. Rajeev Rao Eashwari, MD", title: "", image: null },
  { name: "Dr. Marlon D. Joseph, PhD, MPH,", title: "", image: null },
  { name: "Dr. Ghazal Hassan, PhD", title: "Professor, Royal Institute of Executive Management in Salé; Center for Scientific and Technological Research in Rabat, Morocco.", image: "https://ime-inc.org/wp-content/uploads/2025/06/Screenshot-2025-06-06-163707.png" },
  { name: "Mr. Leroy Ngoma", title: "Co-Founder and Chief Technology Officer N2T Technologies, Gauteng, South Africa", image: null },
  { name: "Mr. Omphemetse Kgomongwe", title: "Co-Founder and Executive Director of AI BizHive", image: "https://ime-inc.org/wp-content/uploads/2025/06/Screenshot-2025-06-06-172227.png" },
  { name: "Jocelyn Turner-Musa", title: "Professor", image: null },
  { name: "Michael T. Nettles", title: "Professor", image: null },
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
              <p className="text-ime-gold text-center font-semibold mb-2">{member.title}</p>
              {member.location && (
                <p className="text-sm text-ime-gray text-center">{member.location}</p>
              )}
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