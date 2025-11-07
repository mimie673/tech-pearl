import Navigation from "@/components/Navigation";
import BlogSection from "@/components/Blog";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
