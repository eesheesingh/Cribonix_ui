import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import BlogPage from './components/Suggestion/BlogPage';
import Suggestion from './components/Suggestion/Suggestion';
import Privacy from './components/Privacy/Privacy';
import BlogGrid from './components/Suggestion/BlogGrid';
import Footer from './components/Footer/Footer';
import styles from './style';

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/suggestions" element={<BlogGrid />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<Privacy />} />

        </Routes>
        <div className={`md:mt-[6rem] mt-[2rem] ${styles.paddingX}`}>
            <Footer />
          </div>
      </div>
    </Router>
  );
}

export default App;
