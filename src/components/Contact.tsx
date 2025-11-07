import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [newsletter, setNewsletter] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
      newsletter: "",
    };

    let isValid = true;

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateContactForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "", newsletter: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(newsletter)) {
      setErrors({ ...errors, newsletter: "Please enter a valid email address" });
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
    setNewsletter("");
    setErrors({ ...errors, newsletter: "" });
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          <Card className="border-none shadow-soft">
            <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setErrors({ ...errors, name: "" });
                    }}
                    required
                    className={`text-sm md:text-base ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-xs md:text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                    required
                    className={`text-sm md:text-base ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-xs md:text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setErrors({ ...errors, message: "" });
                    }}
                    required
                    className={`text-sm md:text-base ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-xs md:text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full text-sm md:text-base">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8">
            <Card className="border-none shadow-soft">
              <CardContent className="pt-4 md:pt-6 px-4 md:px-6 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm md:text-base break-all">techpearlmw1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+265 88 18 74 766</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 8AM-5PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">P O Box x95, Crossroads</p>
                    <p className="text-muted-foreground">Lilongwe, Malawi</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://web.facebook.com/techpearlmw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com/techpearlmw?t=Rjjqg49BEbM_pGaHV3y4Lg&s=08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/techpearl-malawi-405682201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft overflow-hidden">
              <div className="h-64 bg-accent/50 flex items-center justify-center relative">
                <MapPin className="w-12 h-12 text-muted-foreground/30" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="text-center px-4">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="font-semibold">TechPearl MW Office</p>
                    <p className="text-sm text-muted-foreground">P O Box x95, Crossroads, Lilongwe, Malawi</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => window.open('https://maps.google.com/?q=Crossroads,Lilongwe,Malawi', '_blank')}
                    >
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-none shadow-soft bg-gradient-hero">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary-foreground">
                  Join Our Newsletter
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Stay updated with our latest programs, events, and opportunities.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={newsletter}
                      onChange={(e) => {
                        setNewsletter(e.target.value);
                        setErrors({ ...errors, newsletter: "" });
                      }}
                      className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 ${
                        errors.newsletter ? "border-red-300" : ""
                      }`}
                      required
                    />
                    {errors.newsletter && (
                      <p className="text-sm text-primary-foreground/90">{errors.newsletter}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full"
                  >
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
