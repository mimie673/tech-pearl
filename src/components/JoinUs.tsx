import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Heart, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
  
  const ways = [
    {
      icon: UserPlus,
      title: "Become a Member",
      description:
        "Join our community of aspiring tech professionals. Get access to workshops, events, and networking opportunities.",
      action: "Join Now",
    },
    {
      icon: Heart,
      title: "Volunteer as a Mentor",
      description:
        "Share your expertise and experience to guide the next generation of female tech leaders in Malawi.",
      action: "Become a Mentor",
    },
    {
      icon: Briefcase,
      title: "Partner with Us",
      description:
        "Support our mission through sponsorships, partnerships, or by providing opportunities for our community members.",
      action: "Partner with Us",
    },
  ];

  const handleAction = (title: string) => {
    navigate("/contact");
  };

  return (
    <section id="join" className="py-12 md:py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Get <span className="text-primary">Involved</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            There are many ways to join our mission of empowering women in tech.
            Choose the path that fits you best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {ways.map((way, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-glow transition-all duration-300 text-center"
            >
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6">
                <div className="mb-4 md:mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-hero">
                  <way.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{way.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {way.description}
                </p>
                <Button
                  onClick={() => handleAction(way.title)}
                  className="w-full text-sm md:text-base"
                  variant={index === 0 ? "default" : "outline"}
                >
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
