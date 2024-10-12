import MainOSD from "../pages/MainOSD";
import AboutUS from "../pages/AboutUS";
import Git from "../pages/Git";
import Github from "../pages/Github";
import CICD from "../pages/CICD";
import Register from "../pages/Register";
import { AnimatedBeamDemo } from "@/components/ui/Beam";
import { BorderBeamDemo } from "@/components/ui/lightcard";
import Gooey from "@/components/sunnysundown/Gooey";
import MovingText from "@/components/sunnysundown/Movingtext";
import Loader from "@/components/sunnysundown/landing";
import ScratchOffVideo from "@/components/sunnysundown/scratchoffvideo";

export default function Home() {
  return (
    <div>
      {/* <Loader /> */}
      {/* <ScratchOffVideo /> */}
      {/* <MovingText /> */}
      {/* <Gooey /> */}
      <Register />
    </div>
  );
}
