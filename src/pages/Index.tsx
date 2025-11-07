import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Blog from "@/components/Blog";
import Resources from "@/components/Resources";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Blog />
        <Resources />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
