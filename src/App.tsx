import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import HobbiesPage from './pages/HobbiesPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/hobbies" element={<HobbiesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;