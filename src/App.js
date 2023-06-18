import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import IDEPage from './pages/IDEPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/compiler" element={<IDEPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  )
}

export default App;
