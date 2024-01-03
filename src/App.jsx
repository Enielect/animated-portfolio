import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <section className="section">
        <Navbar />
        <Hero />
        <Sidebar />
      </section>
      <section className="section">services</section>
      <section className="section">about</section>
      <section className="section"> form</section>
      <section className="section"> svg</section>
    </div>
  );
};

export default App;
