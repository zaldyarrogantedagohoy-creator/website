import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import CoreExpertise from "../components/CoreExpertise";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <CoreExpertise />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;