import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Certificates />
      <Projects />
    </>
  );
}

export default Home;