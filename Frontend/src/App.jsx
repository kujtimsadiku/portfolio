import { About, Work, Footer, Header, Projects, Education } from "./containers";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Education />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
