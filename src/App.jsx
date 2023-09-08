import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
