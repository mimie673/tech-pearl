import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Resources = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about new resources.",
      });
      setEmail("");
    } else {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const resources = [
    {
      icon: BookOpen,
      title: "Learning Materials",
      description: "Curated tutorials and guides for beginners",
      items: [
        "Introduction to Programming",
        "Web Development Basics",
        "Mobile App Development",
        "Data Science Fundamentals",
      ],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video courses",
      items: [
        "Python for Beginners",
        "HTML & CSS Masterclass",
        "JavaScript Essentials",
        "React Development",
      ],
    },
    {
      icon: FileText,
      title: "Career Guides",
      description: "Resources for your tech career",
      items: [
        "Resume Building Tips",
        "Interview Preparation",
        "Networking Strategies",
        "Salary Negotiation",
      ],
    },
  ];

  return (
    <section id="resources" className="py-12 md:py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Learning <span className="text-primary">Resources</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Access our curated collection of learning materials, tutorials, and
            career guidance to support your tech journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 md:mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
                <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-hero">
                  <resource.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{resource.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  {resource.description}
                </p>
                <ul className="space-y-2 mb-4 md:mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-xs md:text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full text-sm md:text-base group" onClick={() => toast({ title: `Opening ${resource.title}...` })}>
                  View Resources
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-soft bg-gradient-hero max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary-foreground">
              Need More Resources?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-base md:text-lg">
              Our resource library is constantly growing. Sign up to get notified
              when new materials are added.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md text-foreground text-sm md:text-base"
              />
              <Button size="lg" variant="secondary" onClick={handleSubscribe} className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resources;
