import ComputerContainer from "./computer/computerContainer";
import Shark from "./shark/Shark";
import React from "./react/React";
import "./services.css";
import Counter from "./Counter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const servicesRef = useRef(null);
  const inView = useInView(servicesRef, {
    threshold: 0.6, // 60% of element must be visible
    rootMargin: "0px 0px -20% 0px", // wait until it's closer to center
  });
  console.log("Services in view:", servicesRef.current);
  console.log(inView);

  const services = [
    {
      id: 1,
      img: "/service1.png",
      title: "Web Development",
      counter: 40,
    },
    {
      id: 2,
      img: "/service2.png",
      title: "Web Design",
      counter: 20,
    },
    {
      id: 3,
      img: "/service3.png",
      title: "Full Stack",
      counter: 10,
    },
  ];

  const textvarients = {
    initial: {
      x: -100,
      y: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const listVarients = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="services" ref={servicesRef}>
      <div className="s-Section left">
        <motion.h1
          variants={textvarients}
          initial="initial"
          animate="animate"
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <div className="serviceList">
          {services.map((service) => (
            <div className="sItem" key={service.id}>
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <p>Projects: {service.counter}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="counterList">
          <Counter from={0} to={30} text="Project Completed" />
          <Counter from={0} to={20} text="Tech Stack" />
        </div>
      </div>
      <div className="s-Section right">
        <React />
      </div>
    </div>
  );
};

export default Services;
