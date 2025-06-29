import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 1,
      }}
      className="bubble-container"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Code meets design",
            1000,
            "Full Stack Dev with a UX eye.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </div>
      <img src="/boy.png" alt="" />
    </motion.div>
  );
};

export default Speech;
