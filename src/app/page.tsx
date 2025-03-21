import Banner from "./_components/banner";
import LawFields from "./_components/fieldsoflaw";
import Header from "./_components/header";
import HeroSection from "./_components/herosection";
import Contact from './_components/contact';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <LawFields />
      <Banner />
      <Contact />
    </div>
  );
}
