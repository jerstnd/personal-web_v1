import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Landing from './components/landing/Landing.js';
import Box from './components/box/Box.js';
import Portfolio from './components/portfolio/Portfolio.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Box />
      <Portfolio />
    </div>
  );
}

export default App;
