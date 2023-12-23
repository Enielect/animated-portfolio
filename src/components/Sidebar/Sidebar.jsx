import { useState } from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      duration: 1,
      type: "string",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const listVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      type: "string",
    },
  },
  closed: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ background: "red" }}>
      <motion.div className="sidebar" animate={`${isOpen ? "open" : "closed"}`}>
        <motion.ul className="links" variants={variants}>
          <motion.li variants={listVariants}>Tolani</motion.li>
          <motion.li variants={listVariants}>Bukumi</motion.li>
          <motion.li variants={listVariants}>Lateef</motion.li>
          <motion.li variants={listVariants}>George</motion.li>
        </motion.ul>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              transition={{ duration: 0.5 }}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5", transition: { delay: 0.5 } },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              transition={{ duration: 0.5 }}
              variants={{
                closed: { opacity: 1, transition: { delay: 0.5 } },
                open: { opacity: 0 },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              transition={{ duration: 0.5 }}
              variants={{
                closed: {
                  d: "M 2 16.346 L 20 16.346",
                  transition: { delay: 0.5 },
                },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}

// export default Sidebar;

// import { useState } from "react";
// import { motion } from "framer-motion";
// // import Links from "./links/Links";
// import "./sidebar.scss";

// const variants = {
//   open: {
//     clipPath: "circle(1200px at 50px 50px)",
//     transition: {
//       type: "spring",
//       stiffness: 20,
//     },
//   },
//   closed: {
//     clipPath: "circle(30px at 50px 50px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };
// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     // <div style={{ backgroundColor: "green" }}>
//     <motion.div className="sidebar" animate={open ? "open" : "closed"}>
//       <motion.div className="bg" variants={variants}>
//         <ul>
//           <li>enioa</li>
//           <li>faithful</li>
//           <li>Mathematics</li>
//         </ul>
//       </motion.div>
//       <button

//         onClick={setOpen((prev) => !prev)}
//         className="ball"
//       >
//         button
//       </button>
//     </motion.div>
//     // </div>
//   );
// };

export default Sidebar;
