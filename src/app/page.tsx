import MainOSD from "../pages/MainOSD";
import AboutUS from "../pages/AboutUS";
import Git from "../pages/Git";
import Github from "../pages/Github";
import CICD from "../pages/CICD";
import Register from "../pages/Register";
import VidSection from "@/pages/VidSection";
import Loader from "@/components/sunnysundown/landing";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <div
      className="
      bg-[#faf8f6]
      dark:bg-black
      dark:text-white
      text-black
      overflow-x-hidden
      overflow-y-auto

      "
    >
      <Loader />
      <MainOSD />
      <VidSection />
      <Git />
      <Github />
      <CICD />
      <Register />
      {/* <AboutUS /> */}
      <Footer />
    </div>
  );
}
