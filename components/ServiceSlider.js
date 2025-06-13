import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import {
  FaHtml5,
  FaWordpress,
  FaLaravel,
  FaShopify,
} from "react-icons/fa";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

// Your projects data
const serviceData = [
  {
    icon: <FaLaravel color="red" />,
    title: "Bussiness Insurance",
    technplpgy: "Laravel Orchid",
    description: "Made dynamic section using Laravel Orchid.",
    Link: "http://laravel.gwcabinet.com/",
  },
  {
    icon: <FaLaravel color="red" />,
    title: "Listit",
    technplpgy: "Laravel, MySQL",
    description: "Made some changes using Laravel, JavaScript.",
    Link: "https://github.com/kashyap-credsoft/",
  },
  {
    icon: <FaWordpress color="blue" />,
    title: "Phonestation",
    technplpgy: "Elementor",
    description: "Modified fonts & sections in WordPress (Genesis Theme).",
    Link: "https://www.phonestationplus.com/",
  },
  {
    icon: <FaWordpress color="blue" />,
    title: "CSAT African",
    technplpgy: "WordPress",
    description: "Built all pages using Kentwood theme.",
    Link: "https://csatafrique.org",
  },


];

const ServiceGrid = () => {
  return (
    <div className="px-4 xl:px-0">
      <h2 className="hidden md:block  text-2xl font-semibold mb-6 text-center xl:text-left">
        Company Projects Where I Worked
      </h2>

      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`bg-[rgba(65,47,123,0.15)] rounded-lg p-3 flex flex-col gap-4 group hover:bg-[rgba(89,169,0.15)] transition-all duration-300 
              ${index > 1 ? 'hidden md:flex' : ''}`}          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">Technology - {item.technplpgy}</p>
              <p className="text-sm">{item.description}</p>
            </div>
            {item.Link && (
              <div className="text-3xl self-end">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent cursor-pointer"
                  onClick={() => window.open(item.Link)}
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceGrid;
