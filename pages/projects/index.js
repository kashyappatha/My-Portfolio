import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Particles from "@/components/ui/particles";


import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import IconCloud from "@/components/ui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const Services = () => {
  return (
    <div className="h-full bg-primary py-10 lg:py-20 px-5 lg:px-20 flex items-center justify-center relative">
      <Circles />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
      <Bulb />
  
      {/* Responsive Grid Wrapper */}
      <div className="overflow-y-auto md:overflow-visible max-h-[500px] md:max-h-full">
        {/* Left side: Icon Cloud */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="min-w-[300px]"
        >
          
        </motion.div>
  
        {/* Right side: Service Slider */}
        <div className="min-w-[300px]">
          <ServiceSlider />
        </div>
  
        {/* Optional: Add more items if needed */}
        {/* <div className="min-w-[300px]">Another Item</div> */}
      </div>
    </div>
  );
  

};

export default Services;
