import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Medical Website",
    img: "/portfolio-dev/1.png",
    desc: "Developed a fully customized WordPress website with advanced features, unique design theme, SEO optimization, and multilingual support, tailored to the client's specific branding and user experience needs.",
    url: "https://gulglamclinics.ae/",
  },
  {
    id: 2,
    title: "Modern Admin Panel",
    img: "/portfolio-dev/2.png",
    desc: "Developed a modern Admin Dashboard using React JS, Tremor, and Tailwind CSS, featuring interactive charts, data visualizations, and optimized code for efficient data management and decision-making.",
    url: "https://nbboudjije.github.io/modern-admin/",
  },
  {
    id: 3,
    title: "Landing Page",
    img: "/portfolio-dev/3.png",
    desc: "A cutting-edge, responsive landing page built with React JS and Tailwind CSS, featuring a dynamic, minimalist design crafted to make a powerful impact.",
    url: "https://nbboudjije.github.io/modernLP/",
  },
  {
    id: 4,
    title: "Room Chat App",
    img: "/portfolio-dev/4.png",
    desc: "Engineered a real-time Chat Room Website with React JS and Firebase, featuring instant messaging, group discussions, user authentication, and live chat functionality with real-time updates.",
    url: "https://mychat-67c1c.web.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank"><button>Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
