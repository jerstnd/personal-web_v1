import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Landing from './components/landing/Landing.js';
import Box from './components/box/Box.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <div className="App">
      <div className='content' >
        <Navbar />
        <Landing />
        <Box />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
