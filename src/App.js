import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import BlogPage from './components/Suggestion/BlogPage';
import Suggestion from './components/Suggestion/Suggestion';

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/suggestions" element={<Suggestion />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
