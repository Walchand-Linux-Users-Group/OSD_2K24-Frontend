import MainOSD from "../pages/MainOSD";
import AboutUS from "../pages/AboutUS";
import Git from "../pages/Git";
import Github from "../pages/Github";
import CICD from "../pages/CICD";
import Register from "../pages/Register";
import VidSection from "@/pages/VidSection";

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
      <MainOSD />
      <VidSection />
      <Git />
      <Github />
      <CICD />
      <Register />
      {/* <AboutUS /> */}
    </div>
  );
}
