import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Activities from "./components/Activities";
import Products from "./components/Products";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Products />
      <ContactBanner />
      <Footer />
    </>
  );
}

export default App;