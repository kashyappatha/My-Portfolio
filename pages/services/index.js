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
  return <div className="h-full bg-primary py-36 flex items-center">
    <Circles/>
    <Particles
        className="absolute inset-0 "
        quantity={100}
        ease={80}
        // color={color}
        refresh
      />
      <Bulb/>
       
      <div className="container mx-auto flex xl:flex-row gap-8 items-center">
  {/* Left side: Icon Cloud */}
  <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'>

  <div className="hidden xl:block mb-60">
  {/* <IconCloud iconSlugs={slugs}  /> */}
</div>
</motion.div>


  {/* Right side: Content */}
  {/* <div className="flex-1 xl:mt-8  ">
    <h2 className="h2">My Projects<span className="text-accent"></span></h2>
    <p className="mb-4 max-w-[300px] mx-auto lg:mx-0">
      Bussiness insurance - Where we used Technolody Laravel Orchid Package.Made Dynamic sections.
    </p>
    
  </div> */}
  <ServiceSlider/>
</div>

  </div>;

};

export default Services;
