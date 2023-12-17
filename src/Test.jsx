import "./test.scss";
import { motion } from "framer-motion";

function Test() {
  return (
    <div className='test'>
      <motion.div
      className='box'
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 2 }}
        initial={{ scale: 0, opacity: 0 }}
      >
      </motion.div>
    </div>
  );
}

export default Test;
