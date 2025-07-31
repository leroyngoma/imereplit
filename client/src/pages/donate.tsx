import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Heart, DollarSign, ArrowLeft, CreditCard, Banknote } from "lucide-react";
import { Link } from "wouter";

const donationSchema = z.object({
  amount: z.string().min(1, "Please select or enter a donation amount"),
  donationType: z.enum(["one-time", "monthly"], {
    required_error: "Please select donation frequency",
  }),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  message: z.string().optional(),
  anonymous: z.boolean().default(false),
  newsletter: z.boolean().default(false),
  taxReceipt: z.boolean().default(true),
});

type DonationFormData = z.infer<typeof donationSchema>;

const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"];

export default function Donate() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");

  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: "",
      donationType: "one-time",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      message: "",
      anonymous: false,
      newsletter: false,
      taxReceipt: true,
    },
  });

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would integrate with payment processor (Stripe, PayPal, etc.)
      console.log("Donation submitted:", data);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing
      setIsSubmitted(true);
    } catch (error) {
      console.error("Donation processing error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    form.setValue("amount", amount);
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
    form.setValue("amount", value);
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
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ime-blue mb-2">Thank You!</h2>
                <p className="text-ime-gray">
                  Your generous donation will make a real difference in improving healthcare 
                  access across Africa and underserved communities. You will receive a 
                  confirmation email shortly with your tax receipt.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full bg-ime-blue hover:bg-ime-blue/90">
                    Return to Homepage
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" onClick={() => window.print()}>
                  Print Receipt
                </Button>
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/#donate" className="inline-flex items-center text-ime-blue hover:text-ime-light-blue mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            
            <div className="mb-6">
              <Heart className="w-12 h-12 text-ime-blue mx-auto mb-4" />
            </div>
            
            <h1 className="text-4xl font-bold text-ime-blue mb-4">Support IME's Mission</h1>
            
            <p className="text-lg text-ime-gray max-w-2xl mx-auto">
              Your donation helps us continue our vital work in transforming healthcare across Africa 
              and underserved communities through innovative programs, AI initiatives, and capacity building.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Donation</CardTitle>
                  <CardDescription>
                    Choose your donation amount and frequency to support our healthcare initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Donation Amount */}
                      <div>
                        <FormLabel className="text-base font-semibold">Donation Amount *</FormLabel>
                        <div className="grid grid-cols-3 gap-3 mt-2 mb-4">
                          {predefinedAmounts.map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant={selectedAmount === amount ? "default" : "outline"}
                              className={`h-12 ${selectedAmount === amount ? "bg-ime-blue" : ""}`}
                              onClick={() => handleAmountSelect(amount)}
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-ime-gray" />
                          <Input
                            type="number"
                            placeholder="Enter custom amount"
                            value={customAmount}
                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                            min="1"
                            step="0.01"
                          />
                        </div>
                      </div>

                      {/* Donation Type */}
                      <FormField
                        control={form.control}
                        name="donationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Donation Frequency *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="one-time">One-time donation</SelectItem>
                                <SelectItem value="monthly">Monthly recurring</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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

                      {/* Address */}
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Street address (optional)" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input placeholder="City (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State/Province</FormLabel>
                                <FormControl>
                                  <Input placeholder="State (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ZIP/Postal Code</FormLabel>
                                <FormControl>
                                  <Input placeholder="ZIP (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

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
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any message or dedication for your donation..."
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Preferences */}
                      <div className="space-y-3">
                        <FormField
                          control={form.control}
                          name="anonymous"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Make this donation anonymous</FormLabel>
                                <p className="text-sm text-muted-foreground">
                                  Your name will not be published in any donor recognition.
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />
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
                          name="taxReceipt"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Send tax receipt via email</FormLabel>
                                <p className="text-sm text-muted-foreground">
                                  You'll receive an official tax receipt for your donation.
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-ime-blue hover:bg-ime-blue/90 text-white py-3 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Complete Donation"}
                        <CreditCard className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Impact Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Banknote className="w-5 h-5 mr-2 text-ime-gold" />
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-ime-blue pl-4">
                    <h4 className="font-semibold text-ime-blue">$25</h4>
                    <p className="text-sm text-ime-gray">Provides medical supplies for 5 patients</p>
                  </div>
                  <div className="border-l-4 border-ime-light-blue pl-4">
                    <h4 className="font-semibold text-ime-light-blue">$100</h4>
                    <p className="text-sm text-ime-gray">Funds AI health training for 1 healthcare worker</p>
                  </div>
                  <div className="border-l-4 border-ime-green pl-4">
                    <h4 className="font-semibold text-ime-green">$500</h4>
                    <p className="text-sm text-ime-gray">Supports a community health program for 1 month</p>
                  </div>
                  <div className="border-l-4 border-ime-gold pl-4">
                    <h4 className="font-semibold text-ime-gold">$1,000</h4>
                    <p className="text-sm text-ime-gray">Enables telemedicine access for rural clinic</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tax Deductible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ime-gray">
                    IME is a 501(c)(3) nonprofit organization. Your donation is tax-deductible 
                    to the full extent allowed by law. Tax ID: [Tax ID Number]
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secure Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ime-gray">
                    Your donation is processed securely through encrypted connections. 
                    We never store your payment information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}