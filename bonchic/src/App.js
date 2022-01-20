import './App.css';
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import Presentation from './components/presentationSection/Presentation'
import ReactNavbar from './components/nav/navigation'
import Animation from './components/animationSection/animation'
import gsap from 'gsap';

// gsap.registerPlugin(MotionPathPlugin, TextPlugin, MorphSVGPlugin);

function App() {
  return (
      <div className="App">
          {/* <ReactNavbar/> */}
          <Header/>
          <Animation/>
          <Presentation/>
         
      </div>
  );
}

export default App;
