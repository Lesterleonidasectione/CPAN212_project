import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Members from './pages/Members.jsx';
import Comments from './pages/Comments.jsx';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem('loggedInUser')
  );

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/members" element={<Members />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;