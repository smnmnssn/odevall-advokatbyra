import Banner from "./_components/banner";
import LawFields from "./_components/fieldsoflaw";
import Header from "./_components/header";
import HeroSection from "./_components/herosection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Banner />
      <LawFields />
    </div>
  );
}
