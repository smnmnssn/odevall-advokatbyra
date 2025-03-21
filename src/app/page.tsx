import Banner from "./_components/banner";
import LawFields from "./_components/fieldsoflaw";
import Header from "./_components/header";
import HeroSection from "./_components/herosection";

export default function Home() {
  return (
    <div className="w-full max-w-screen overflow-hidden">
      <Header />
      <HeroSection />
      <Banner />
      <LawFields />
    </div>
  );
}
