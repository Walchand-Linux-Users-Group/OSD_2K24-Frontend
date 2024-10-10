import MainOSD from "../pages/MainOSD";
import AboutUS from "../pages/AboutUS";
import Git from "../pages/Git";
import Github from "../pages/Github";
import CICD from "../pages/CICD";
import Register from "../pages/Register";
import { AnimatedBeamDemo } from "@/components/ui/Beam";
import { BorderBeamDemo } from "@/components/ui/lightcard";
import MovingText from "@/components/ui/Movingtext";
import Gooey from "@/components/ui/gooey";

export default function Home() {
  return (
    <div>
      OSD
      <Git />
      <Gooey />
      <MovingText />
    </div>
  );
}
