import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Brain, Users, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization name is required"),
  position: z.string().min(2, "Position/title is required"),
  country: z.string().min(2, "Country is required"),
  phone: z.string().optional(),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  message: z.string().optional(),
  newsletter: z.boolean().default(false),
  updates: z.boolean().default(false),
});

type SignupFormData = z.infer<typeof signupSchema>;

const interestOptions = [
  "Healthcare AI Development",
  "Medical Technology Innovation",
  "Grant Funding Opportunities",
  "Partnership Development",
  "Research Collaboration",
  "Implementation Support",
  "Training and Capacity Building",
  "Policy and Regulation",
];

export default function AI4AfricanSignup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, navigate] = useLocation();
  
  // Get signup type from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const signupType = urlParams.get('type');
  const isPartnership = signupType === 'partnership';

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      position: "",
      country: "",
      phone: "",
      interests: [],
      message: "",
      newsletter: false,
      updates: false,
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      console.log("Form submitted:", { ...data, signupType });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    const currentInterests = form.getValues("interests");
    if (checked) {
      form.setValue("interests", [...currentInterests, interest]);
    } else {
      form.setValue("interests", currentInterests.filter(i => i !== interest));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ime-blue to-ime-light-blue">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-ime-green rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ime-blue mb-2">Thank You!</h2>
                <p className="text-ime-gray">
                  Your interest in the AI4African Health Initiative has been recorded. 
                  Our team will contact you within 48 hours with more information.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full bg-ime-blue hover:bg-ime-blue/90">
                    Return to Homepage
                  </Button>
                </Link>
                <Link href="/#ai4african">
                  <Button variant="outline" className="w-full">
                    Back to AI4African Section
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/#ai4african" className="inline-flex items-center text-ime-blue hover:text-ime-light-blue mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI4African Health Initiative
            </Link>
            
            <div className="mb-6">
              {isPartnership ? (
                <Users className="w-12 h-12 text-ime-blue mx-auto mb-4" />
              ) : (
                <Brain className="w-12 h-12 text-ime-blue mx-auto mb-4" />
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-ime-blue mb-4">
              {isPartnership ? "Partnership Inquiry" : "Learn More About AI4African Health"}
            </h1>
            
            <p className="text-lg text-ime-gray max-w-2xl mx-auto">
              {isPartnership 
                ? "Join us in transforming African healthcare through AI innovation. Partner with IME to create lasting impact across the continent."
                : "Get detailed information about our flagship AI4African Health Initiative. Learn about investment opportunities, implementation plans, and how you can be part of this revolutionary healthcare transformation."
              }
            </p>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Please provide your details so our team can follow up with relevant information about the AI4African Health Initiative.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Professional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization *</FormLabel>
                          <FormControl>
                            <Input placeholder="Company, institution, or organization" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position/Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your role or job title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Optional" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Areas of Interest */}
                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <FormLabel>Areas of Interest *</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                          {interestOptions.map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest}
                                onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                              />
                              <label htmlFor={interest} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {interest}
                              </label>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={isPartnership 
                              ? "Tell us about your organization and how you'd like to partner with us..." 
                              : "Any specific questions or areas you'd like to learn more about..."
                            }
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Communication Preferences */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="newsletter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Subscribe to IME Newsletter</FormLabel>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about our healthcare initiatives and programs.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="updates"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>AI4African Health Initiative Updates</FormLabel>
                            <p className="text-sm text-muted-foreground">
                              Get exclusive updates about the AI4African Health Initiative progress.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-ime-blue hover:bg-ime-blue/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : 
                     isPartnership ? "Submit Partnership Inquiry" : "Request Information"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}