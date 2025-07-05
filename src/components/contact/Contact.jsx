import AnimatedInput from './animation/AnimatedInput';
import './contact.css';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion, useInView } from 'motion/react';
import ContactSvg from './ContactSvg';

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};


const Contact = () => {

  const form = useRef();
  const isInView = useInView(form, { margin: "-200px" });


  //button Suceess
  const [sucess, setSucess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSucess(true)
    form.current.reset();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          setSucess(false)
        },
        (error) => {
          toast.error("Failed to send message. 😢");
          console.error("FAILED...", error.text);
          setSucess(false)
        }
      );
  };

  return (
    <div className="contact">
      <div className="cSection">
        <motion.form
          action=""
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 className="cTitle">Let&#39;s Keep in touch</motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <AnimatedInput label="Name" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <AnimatedInput label="Email" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <AnimatedInput label="Message" isTextarea={true} />
          </motion.div>
          <motion.button className="button type1" disabled={sucess}>
            <span className="btn-txt">
              {sucess ? <span className="loader"></span> : <span>Send</span>}
            </span>
          </motion.button>
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
}

export default Contact
