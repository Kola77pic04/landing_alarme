import HeroHome from "../components/Home/Hero";
import MainLayout from './layout';
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import { SecondPart } from "../components/Home/SecondPart";
import { ThirdPart } from "../components/Home/ThirdPart";
import { FourthPart } from "../components/Home/FourthPart";
import { FifthPart } from "../components/Home/FifthPart";
import { SixthPart } from "../components/Home/SixthPart";
import { SeventhPart } from "../components/Home/SeventhPart";
import { EighthPart } from "../components/Home/EighthPart";

export default function Home() {
  return (
    <MainLayout>
      <AppHeader />
      <HeroHome />
      <main className="max-w-6xl mx-auto bg-white">
        <SecondPart />
        <ThirdPart />
        <FourthPart />
        <FifthPart />
        <SixthPart />
      </main>
        <SeventhPart />
        <EighthPart />
      <AppFooter />
    </MainLayout>
  );
}
