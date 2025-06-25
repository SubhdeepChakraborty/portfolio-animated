import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className="bubble-container">
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
      <img src="/man.png" alt="" />
    </div>
  );
};

export default Speech;
