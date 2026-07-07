import Container from "@/components/Container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Strengths from "@/components/Strengths";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <section id="about" className="min-h-screen pt-32 md:pt-40">
        <Container>
          <Hero />
        </Container>
      </section>

      <section id="about-me" className="py-12 md:py-20">
        <Container>
          <About />
        </Container>
      </section>

      <section id="strengths" className="py-20 md:py-28">
        <Container>
          <Strengths />
        </Container>
      </section>

      <section id="projects" className="py-20 md:py-28">
        <Container>
          <FeaturedProjects />
        </Container>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <Container>
          <Contact />
        </Container>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
