import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewVideoForm from './pages/NewVideoForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideoForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
