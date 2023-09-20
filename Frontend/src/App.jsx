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
      <Projects />
      <Experiences />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
