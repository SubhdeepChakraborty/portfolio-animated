import "./hero.css";
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hsection left">
        {/* TITLE */}
        <h1 className="htitle">
          Hey there, <br />
          <span>I&apos;m Subhadeep</span>
        </h1>
        {/* SUBTITLE */}
        <div className="awards">
          <h2>Developer here</h2>
          <p>Lorem ipsum dolar sit amet</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* SCROLL */}
        <a href="#services" className="scroll">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hsection right">
        {/* fOLLOW */}
        <div className="follow">
          <a href="/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="/">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="/">
            <img src="/facebook.png" alt="" />
          </a>
          <div className="followTextContainer">
            <div className="followText">Follow me</div>
          </div>
        </div>
        {/* BUUBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <div className="certification">
        <div className="imgContainer">
          <img src="/person.png" alt="" className="img-person" />
        </div>
          fullstack developer
          <br />
          UI /UX designer
        </div>
        {/* CONTACT BUTTON */}
        <a href="/contact" className="contactLink">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100, 100 m -60, 0 a 60, 60 0 1, 1 120, 0 a 60, 60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath xlinkHref="#innerCirclePath">Hire Now</textPath>
              </text>
              <text className="circleText">
                <textPath xlinkHref="#innerCirclePath" startOffset="44%">
                  Contact Me
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox=" 0 0 24 24"
                width={50}
                height={50}
                fill="black"
                stroke="black"
                strokeWidth={2}
              >
                <line x1={6} y1={18} x2={18} y2={6} />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
