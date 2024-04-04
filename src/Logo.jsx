import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";

export const Logo = () => {
    const { scrollYProgress } = useScroll();
    const logoScale = useTransform(
        scrollYProgress,
        [0,0.5],
        [1,0.25]
    )
    const logoTranslateY = useTransform(
      scrollYProgress,
      [0,0.5],
      [1,-270]
  )
  return (
    <div className="flex items-center justify-center h-screen z-20">
    <motion.div className="flex justify-center w-2/5 fixed z-10"
    style={{ scale: logoScale, y:logoTranslateY}}
    
    
    >
      <Link to="itemsList" 
      smooth={true} 
      offset={-100} 
      duration={1800} >

      <img className="cursor-pointer "  src="/logo-ovb-noir-resize-sans-fond.png" alt="Logo of OVB corporation" />
      </Link>
      
      </motion.div>
      </div>
  );
}