import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import {motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const List = (({item}) => {
  return (
    <div className="pItem">
      <div className="pImg">
        <img src={item?.img} alt="image" />
      </div>
      <div className="pText">
        <h1>{item?.title}</h1>
        <p>{item?.desc}</p>
        <a href={item?.link} >
          <button>
            View Project
          </button>
        </a>
      </div>
    </div>
  )
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
    <div className="portfolio" ref={ref} >
      <motion.div className="pList" style={{x : xTranslate}} >
        <div className="empty" style={{ width: window.innerWidth - containerDistance}} />
        {items.map((ele) => (
          <List item={ele} key={ele?.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
    </div>
  )
}

export default Portfolio
