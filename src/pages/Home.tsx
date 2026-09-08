import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Works } from "../components/Works";

export function Home() {
  return (
    <div id="top" className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero>
          <Experience />
          <Services />
        </Hero>
        <Works />
      </main>
      <Footer />
    </div>
  );
}
