import MainOSD from "../pages/MainOSD"
import AboutUS from "../pages/AboutUS";
import Git from "../pages/Git"
import Github from "../pages/Github";
import CICD from "../pages/CICD"
import Register from "../pages/Register";
import { AnimatedBeamDemo } from "@/components/ui/Beam";


export default function Home() {
  return (
    <div>
      OSD

      <AnimatedBeamDemo/>

      {/* Pages */}
      <MainOSD></MainOSD>

      <Git></Git>
      
      <Github></Github>
      
      <CICD></CICD>
      
      <Register></Register>
      
      <AboutUS></AboutUS>


    </div>
  );
}
