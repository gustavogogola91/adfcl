import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './components/Contato'
import Header from './components/ui/Header';
import Home from './components/Home';
import { ThemeProvider } from './hooks/useTheme';
import Projetos from './components/Projetos';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projetos />} />
              </Routes>
            </main>
        </Router>

    </ThemeProvider>
  );
};

export default App
