import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import {motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/pic1.png",
    title: "Youtube  - Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "/pic2.png",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: "/pic3.png",
    title: "Tshirt3D  - Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: "/pic4.png",
    title: "Real time chat - Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: "/pic5.png",
    title: "Restaurant Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const imgVarients = {
  initial : {
    x : -500,
    y : 500,
    opacity : 0
  },
  animate : {
    x : 0,
    y : 0,
    opacity : 1,
    transition : {
      duration : 0.5,
      ease : "easeInOut"
    }
  }
}

const textVarients = {
  initial : {
    x : 500,
    y : 500,
    opacity : 0
  },
  animate : {
    x : 0,
    y : 0,
    opacity : 1,
    transition : {
      duration : 0.5,
      ease : "easeInOut",
      staggerChildren : 0.05
    }
  }
}


const List = (({item}) => {
  const listRef = useRef();
  const isInViewHook = useInView(listRef, {
    margin : "-100px"
  })
  return (
    <div className="pItem" ref={listRef}>
      <motion.div
        variants={imgVarients}
        animate={isInViewHook ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item?.img} alt="image" />
      </motion.div>
      <motion.div
        variants={textVarients}
        animate={isInViewHook ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVarients}>{item?.title}</motion.h1>
        <motion.p variants={textVarients}>{item?.desc}</motion.p>
        <motion.a variants={textVarients} href={item?.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
})

const Portfolio = () => {
  //containerDistance
  const [containerDistance, setContainerDistance] = useState(0)
  //ref hook
  const ref = useRef(null)

  //useEffect
  useEffect(() => {
    if(ref.current){
      const rect = ref.current.getBoundingClientRect()
      console.log(rect)
      setContainerDistance(rect.left)
    }
  }, [])

  //useScroll hook
  const {scrollYProgress} = useScroll({target: ref})
  //translate x
  const xTranslate = useTransform(scrollYProgress, [0,1], [0, -window.innerWidth * items.length])
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        {items.map((ele) => (
          <List item={ele} key={ele?.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#555"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Portfolio
