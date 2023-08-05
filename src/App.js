import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';



disableReactDevTools();


function App() {
 

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="App">
      {loading ? (
        <div style={style}>
          <ClimbingBoxLoader
            color={"#ff8800"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Header />
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
