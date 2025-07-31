import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const newsletterSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  frequency: z.enum(["weekly", "monthly", "quarterly"], {
    required_error: "Please select email frequency",
  }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const interestOptions = [
  "AI4African Health Initiative Updates",
  "General Health Programs and Initiatives",
  "Partnership and Collaboration Opportunities",
  "Research and Publications",
  "Webinars and Educational Content",
  "Fundraising Events and Campaigns",
  "Board Updates and Leadership News",
  "Community Success Stories",
];

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      interests: [],
      frequency: "monthly",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend/email service
      console.log("Newsletter subscription:", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
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
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ime-blue mb-2">Welcome to Our Newsletter!</h2>
                <p className="text-ime-gray">
                  Thank you for subscribing to IME's newsletter. You'll receive your first update soon 
                  with the latest news about our healthcare initiatives and AI4African Health program.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full bg-ime-blue hover:bg-ime-blue/90">
                    Return to Homepage
                  </Button>
                </Link>
                <Link href="/#webinars">
                  <Button variant="outline" className="w-full">
                    Explore Our Webinars
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
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/#contact" className="inline-flex items-center text-ime-blue hover:text-ime-light-blue mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            
            <div className="mb-6">
              <Mail className="w-12 h-12 text-ime-blue mx-auto mb-4" />
            </div>
            
            <h1 className="text-4xl font-bold text-ime-blue mb-4">Subscribe to Our Newsletter</h1>
            
            <p className="text-lg text-ime-gray max-w-xl mx-auto">
              Stay informed about IME's latest healthcare initiatives, AI4African Health program updates, 
              research developments, and partnership opportunities.
            </p>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Subscription</CardTitle>
              <CardDescription>
                Choose your preferences to receive personalized updates about our work in global health and AI innovation.
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

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization or company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  {/* Email Frequency */}
                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Frequency *</FormLabel>
                        <div className="flex flex-col space-y-2 mt-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="weekly"
                              value="weekly"
                              checked={field.value === "weekly"}
                              onChange={() => field.onChange("weekly")}
                              className="w-4 h-4 text-ime-blue"
                            />
                            <label htmlFor="weekly" className="text-sm font-medium">
                              Weekly - Stay up to date with all our activities
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="monthly"
                              value="monthly"
                              checked={field.value === "monthly"}
                              onChange={() => field.onChange("monthly")}
                              className="w-4 h-4 text-ime-blue"
                            />
                            <label htmlFor="monthly" className="text-sm font-medium">
                              Monthly - Get our comprehensive monthly roundup (Recommended)
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="quarterly"
                              value="quarterly"
                              checked={field.value === "quarterly"}
                              onChange={() => field.onChange("quarterly")}
                              className="w-4 h-4 text-ime-blue"
                            />
                            <label htmlFor="quarterly" className="text-sm font-medium">
                              Quarterly - Major updates and impact reports only
                            </label>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-ime-gray">
                      <strong>Privacy Notice:</strong> We respect your privacy and will never share your information 
                      with third parties. You can unsubscribe at any time using the link provided in our emails. 
                      Your data is used solely for sending you updates about IME's healthcare initiatives and programs.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-ime-blue hover:bg-ime-blue/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Newsletter Benefits */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>What You'll Receive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-ime-blue rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-ime-blue">Program Updates</h4>
                        <p className="text-sm text-ime-gray">Latest developments in our healthcare programs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-ime-light-blue rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-ime-light-blue">AI4African Health News</h4>
                        <p className="text-sm text-ime-gray">Exclusive updates on our flagship AI initiative</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-ime-green rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-ime-green">Partnership Opportunities</h4>
                        <p className="text-sm text-ime-gray">Collaboration and funding opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-ime-gold rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-ime-gold">Impact Stories</h4>
                        <p className="text-sm text-ime-gray">Success stories from our global health work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}