/* eslint-disable jsx-a11y/anchor-is-valid */
import { HeroSection } from "./HeroSection";
import { FurnitureSection } from "./FurnitureSection";
import { AboutSection } from "./AboutSection";
import { BlogSection } from "./BlogSection";
import { ClientSection } from "./ClientSection";
import { ContactSection } from "./ContactSection";
import { InfoSection } from "./InfoSection";
import { Footer } from "./Footer";

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
