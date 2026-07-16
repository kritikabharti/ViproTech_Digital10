import { motion } from "framer-motion";
import logo from "../assets/lll.png";
import "./Loader.css";

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={logo}
        alt="VProTech"
        className="loader-logo"
        initial={{
          scale: 0.2,
          opacity: 0,
          rotate: -20,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}