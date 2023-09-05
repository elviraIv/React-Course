/* eslint-disable jsx-a11y/anchor-is-valid */
import { HeroSection } from "./components/HeroSection";
import { FurnitureSection } from "./components/FurnitureSection";
import { AboutSection } from "./components/AboutSection";
import { BlogSection } from "./components/BlogSection";
import { ClientSection } from "./components/ClientSection";
import { ContactSection } from "./components/ContactSection";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";

function App() {
  return (
     <div>
      <HeroSection/>
      <FurnitureSection/>
      <AboutSection/>
      <BlogSection/>
      <ClientSection/>
      <ContactSection/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
