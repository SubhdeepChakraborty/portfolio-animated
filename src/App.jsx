import { Portfolio, Hero, Contact, Services } from "./components"

const App = () => {
  return (
    <>
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Services />
        </section>
        <section id="services">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App
