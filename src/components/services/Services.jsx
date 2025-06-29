import ComputerContainer from "./computer/computerContainer";
import Shark from "./shark/Shark";
import React from "./react/React";
import "./services.css";
import Counter from "./Counter";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true, // This will ensure the animation only triggers once when the element comes into view
    margin: "-100px 0px -100px 0px", // Adjust this margin as needed to trigger the animation earlier or later
  });

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
        staggerChildren: 0.5,
      },
    },
  };

  const [serviceId, setServiceId] = useState(1)

  return (
    <div className="services" ref={ref}>
      <div className="s-Section left">
        <motion.h1
          variants={textvarients}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div variants={listVarients} animate={inView ? "animate" : "initial"} className="serviceList">
          {services.map((service) => (
            <motion.div variants={listVarients} className="sItem" key={service.id} onClick={() => setServiceId(service.id)}>
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <p>Projects: {service.counter}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={30} text="Project Completed" />
          <Counter from={0} to={20} text="Tech Stack" />
        </div>
      </div>
      <div className="s-Section right">
        {serviceId == 1 ? (<ComputerContainer/>) : serviceId == 2 ? (<React/>) : (<Shark/>) }
      </div>
    </div>
  );
};

export default Services;
