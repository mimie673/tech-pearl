import Navigation from "@/components/Navigation";
import ProgramsSection from "@/components/Programs";
import Footer from "@/components/Footer";

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
