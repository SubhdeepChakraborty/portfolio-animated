import { Portfolio, Hero, Contact, Services } from "./components"

const App = () => {
  return (
    <div className="container">
      <section id="home">
      <Hero />
      </section>
      <section id="portfolio">
      <Portfolio />
      </section>
      <section id="services">
      <Services />
      </section>
      <section id="contact">
      <Contact />
      </section>
    </div>
  );
}

export default App
