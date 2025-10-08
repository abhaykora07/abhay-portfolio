import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Add the Navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;