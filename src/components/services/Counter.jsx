import { animate } from "motion";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from = 0, to = 0, text = "" }) => {
  const [count, setCount] = useState(from);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  useEffect(() => {
    if (!inView) return;
    const animation = animate(from, to, {
      duration: 2,
      easing: "ease",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => animation.stop();
  }, [inView, from, to]);

  return (
    <div className="counter" ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </div>
  );
};

export default Counter;
