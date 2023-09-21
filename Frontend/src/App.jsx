import {
  About,
  Education,
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
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
