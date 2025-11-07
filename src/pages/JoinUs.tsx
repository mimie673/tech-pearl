import Navigation from "@/components/Navigation";
import JoinUsSection from "@/components/JoinUs";
import Footer from "@/components/Footer";

const JoinUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;
