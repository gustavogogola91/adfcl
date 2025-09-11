import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Contato from './components/Contato'
import Header from './components/ui/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <main style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            {/* <Route path="/sobre" element={<Sobre />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App
