import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Contato from './components/Contato'
import Header from './components/ui/Header';
import Home from './components/Home';
import { ThemeProvider } from './hooks/useTheme';

const App = () => {
  return (

    <ThemeProvider>
      <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                {/* <Route path="/sobre" element={<Sobre />} /> */}
              </Routes>
            </main>
        </Router>

    </ThemeProvider>
    
  );
};

export default App
