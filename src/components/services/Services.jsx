import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your busniess grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/portfolio-dev/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>ABOUT ME</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Summary</h2>
          <p>
          Skilled Web Developer with 3+ years of experience, including almost one year in Dubai and nearly 2 years freelancing. Specializing in React.js, Tailwind CSS, AI API integration, Express.js, and MongoDB, built websites optimized for SEO, and responsive design, ensuring a seamless user experience.
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <p>
          Bachelor's in Information Technology from University Constantine 02 and Master's in Security and Technology Web from University Khenchela.
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skills</h2>
          <p>
          CMS expertise in WordPress, Shopify, Clickfunnels. Proficient in front-end (HTML5, CSS3, JS, React, Tailwind CSS, MUI) and back-end (Firebase, Node.js, Express.js, PHP) technologies. Skilled in responsive design, SEO, Git, Figma, debugging, and social media management.
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Languages</h2>
          <p>
          Native Arabic speaker, fluent in English, and intermediate in French.
          </p>
          <button></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
