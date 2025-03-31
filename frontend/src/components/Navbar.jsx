import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/members">Members</Link>
      <Link to="/comments">Comments</Link>
      <Link to="/community">Community</Link>
    </nav>
  );
};

export default Navbar;
