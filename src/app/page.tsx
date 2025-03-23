import Banner1 from "./_components/banner1";
import Banner2 from "./_components/banner2";
import LawFields from "./_components/fieldsoflaw";
import Header from "./_components/header";
import HeroSection from "./_components/herosection";

export default function Home() {
  return (
    <div className="w-full max-w-screen overflow-hidden ">
      <Header />
      <HeroSection />
      <Banner1 />
      <Banner2 />
      {/* <LawFields /> */}
    </div>
  );
}
