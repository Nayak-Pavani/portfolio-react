
import './App.css';
import Navbar from './components/Navbar/navbar.js'
import Intro from './components/Intro/intro.js'
import Skills from './components/Skills/skills.js'
import Footer from './components/Footer/footer.js'
// import BackgroundAnimation from './components/BackgroundAnimation/backgroundAnimation.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Footer/>
      {/* <BackgroundAnimation/> */}

     
    </div>
  );
}

export default App;
