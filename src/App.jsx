import { Portfolio, Hero, Contact, Services } from "./components"
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        {/* <section id="portfolio"> */}
        <Portfolio />
        {/* </section> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App
