import { useRef } from "react";
import "./parallax.scss";
import { useScroll, useTransform, motion } from "framer-motion";

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start, start", "end, start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const stars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.img
        style={{ x: stars }}
        src="./stars.png"
        className="stars"
        alt=""
      />
      <motion.h1 style={{ y: yText }} className="text">
        What We Do
      </motion.h1>
      <img src="./planets.png" className="planets" alt="" />
      <img src="./mountains.png" className="mountains" alt="" />
    </motion.div>
  );
}

export default Parallax;
