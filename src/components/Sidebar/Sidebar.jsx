import { useState } from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";

const variant = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
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

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.4,
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const ListItems = ["Home", "Portfollio", "Services", "Contact"];
  return (
    <motion.div
      className="sidebar"
      animate={isOpen ? "open" : "closed"}
      variants={variant}
    >
      <button className="button" onClick={() => setIsOpen((c) => !c)}>
        <motion.svg width="23" height="23" viewBox="0 0 23 23" className='svg'>
          <motion.path
            strokeWidth="3"
            stroke="black "
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black "
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            transition={{ duration: 0.7 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black "
            strokeLinecap="round"
            d="M 2 16.346 L 20 16.346"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </motion.svg>
      </button>
      <motion.ul className="item-list" variants={ulVariants}>
        {ListItems.map((item, i) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="item"
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
            key={i}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Sidebar;
