import Navigation from "@/components/Navigation";
import ResourcesSection from "@/components/Resources";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
