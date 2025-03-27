import Contact from "@/app/_components/contact";
import Banner1 from "./_components/banner1";
import Banner2 from "./_components/banner2";
import Footer from "./_components/footer";
import Header from "./_components/header";
import HeroSection from "./_components/herosection";
import AboutUs from "./about-us/page";
// import FieldsOfLaw from "./_components/fieldsoflaw";
import ServicesSection from "./_components/services";

export default function Home() {
  return (
    <div className="w-full max-w-screen overflow-hidden min-h-screen bg-[url('/assets/texturewhite.jpg')] bg-cover bg-center bg-no-repeat ">
      <Header />
      <HeroSection />
      <Banner1 />
      <Banner2 />
      <ServicesSection />
      <AboutUs />
      {/* <FieldsOfLaw /> */}
      <Contact />
      <Footer />
    </div>
  );
}
