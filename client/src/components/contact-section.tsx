import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "wouter";

export default function ContactSection() {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleDonationSelect = (value: string) => {
    setDonationAmount(value);
    setShowCustomInput(value === "other");
    if (value !== "other") {
      setCustomAmount("");
    }
  };

  return (
    <section id="contact" className="py-20 bg-ime-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Get Involved</h2>
            <p className="text-xl mb-8 opacity-90">Join us in our mission to improve healthcare access and delivery across Africa and underserved communities in the U.S.</p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-ime-gold w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="opacity-90">info@ime-inc.org</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-ime-gold w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-ime-gold w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="opacity-90">Silver Spring, MD 20914</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/newsletter">
                <Button 
                  className="w-full bg-ime-gold hover:bg-yellow-500 text-white py-3 font-semibold"
                >
                  Subscribe to Our Newsletter
                </Button>
              </Link>
            </div>
          </div>

          {/* Donation Section */}
          <div id="donate" className="bg-white bg-opacity-10 rounded-xl p-8">
            <h3 className="text-3xl font-bold mb-6">Support Our Mission</h3>
            <p className="text-lg mb-8 opacity-90">Your donation helps us expand healthcare access and improve medical training across underserved communities.</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Select Donation Amount</label>
                <Select onValueChange={handleDonationSelect}>
                  <SelectTrigger className="w-full bg-white text-black">
                    <SelectValue placeholder="Choose an amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">$50</SelectItem>
                    <SelectItem value="100">$100</SelectItem>
                    <SelectItem value="250">$250</SelectItem>
                    <SelectItem value="500">$500</SelectItem>
                    <SelectItem value="1000">$1,000</SelectItem>
                    <SelectItem value="2500">$2,500</SelectItem>
                    <SelectItem value="5000">$5,000</SelectItem>
                    <SelectItem value="other">Other Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {showCustomInput && (
                <div>
                  <label className="block text-sm font-medium mb-2">Enter Custom Amount</label>
                  <Input
                    type="number"
                    placeholder="Enter amount in USD"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full bg-white text-black"
                    min="1"
                  />
                </div>
              )}
            </div>
            
            <Link href="/donate">
              <Button 
                className="w-full bg-ime-green hover:bg-green-600 text-white py-4 font-semibold text-lg"
              >
                Donate Now
              </Button>
            </Link>
            
            <p className="text-sm opacity-75 mt-4 text-center">Secure donation processing. Tax-deductible receipts provided.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
