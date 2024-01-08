import { motion } from "framer-motion";

import "./hero.scss";

function Hero() {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        duration: 20,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="hero">
      <div className="first">
        <span>Harvey Tyler</span>
        <h1 className="section-content">Web developer and UI designer</h1>
        <div className="buttons">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
        </div>
      </div>
      <motion.h1
        className="animated-text"
        initial="initial"
        animate="animate"
        variants={sliderVariants}
      >
        FrontEnd Developer
      </motion.h1>
      <div className="image">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
