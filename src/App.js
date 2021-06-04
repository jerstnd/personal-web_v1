import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Landing from './components/landing/Landing.js';
import Box from './components/box/Box.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Box />
    </div>
  );
}

export default App;
