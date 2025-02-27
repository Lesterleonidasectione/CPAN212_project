import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Members from "./pages/Members.jsx";
import Comments from "./pages/Comments.jsx";
import Upload from "./components/Upload.jsx";
import SignIn from "./components/SignIn.jsx"; 

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check for a logged-in user on page load
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <div className="container">
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/members" element={<Members />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signin" element={<SignIn setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
