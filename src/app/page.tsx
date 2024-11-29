

import Header from "@/app/component/Header";
import HeroSection from "./component/Herosection";
import AboutSection from "./component/AboutSection";
import Service from "./component/Service";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-gradient-to-r from-black to-orange-700 max-w-full lg:max-w-screen-xl mx-auto py-6 px-2">
   <div>
    <Header />
    <HeroSection />
    <AboutSection/>
    <Service />
    <ContactSection />
    <Footer />
    </div>
    </main>
  );
}


