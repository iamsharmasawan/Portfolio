import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/education";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Contact/>
     <Footer/>
     <Education/>
     <ParticlesBackground/>

    </div>
  );
}


export default App;
