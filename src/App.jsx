import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <section className="section">
        <Navbar />
        <Hero />
        <Sidebar />
      </section>
      <section className="section services">
        <Parallax type="services" />
      </section>
      <section className="section">
        <Services />
        what is your name bro!!!!
      </section>
      <section className="section">
        {" "}
        <Parallax type="portfolio" />
      </section>
      <section className="section"> svg</section>
    </div>
  );
};

export default App;
