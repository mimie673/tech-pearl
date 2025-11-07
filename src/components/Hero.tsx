import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/tech1.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Empowering{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Girls & Women
            </span>{" "}
            in Tech
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            TechPearl Malawi is dedicated to inspiring and equipping the next
            generation of female tech leaders through education, mentorship, and
            community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/join-us")}
              className="shadow-glow hover:shadow-soft transition-all duration-300 w-full sm:w-auto"
            >
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/programs")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
