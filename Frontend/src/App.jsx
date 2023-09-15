import React from "react";

import {
  About,
  Education,
  Experiences,
  Footer,
  Header,
  Projects,
  Skills,
} from "./containers";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
