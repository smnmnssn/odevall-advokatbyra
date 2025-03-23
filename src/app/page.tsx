import Contact from "@/app/_components/contactform";
import Banner1 from "./_components/banner1";
import Banner2 from "./_components/banner2";
import Footer from "./_components/footer";
import Header from "./_components/header";
import HeroSection from "./_components/herosection";
import AboutUs from "./about-us/page";

export default function Home() {
  return (
    <div className="w-full max-w-screen overflow-hidden ">
      <Header />
      <HeroSection />
      <Banner1 />
      <Banner2 />
      <AboutUs />
      <Contact />
      {/* <LawFields /> */}
      <Footer />
    </div>
  );
}
