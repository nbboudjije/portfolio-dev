import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nadjib Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/nbboudjije">
            <img src="/portfolio-dev/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nadjib-boudjidj">
            <img src="/portfolio-dev/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
