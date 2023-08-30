

import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skills/Skill';
import Works from './components/Works/Works';
import Intro from './components/intro/Intro';
import "./styles.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      
      <Skill />
      <Works/>
    </div>
  );
}

export default App;
