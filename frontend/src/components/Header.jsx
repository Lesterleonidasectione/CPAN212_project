import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ loggedInUser, setLoggedInUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (name && password) {
      localStorage.setItem("loggedInUser", name);
      setLoggedInUser(name);
      setName("");
      setPassword("");
    } else {
      alert("Please enter both name and password.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <header className="header">
      <div className="header-title">Baby Led Weaning</div>
      <div className="sign-in">
        {loggedInUser ? (
          <>
            <span>Welcome, {loggedInUser}!</span>
            <button className="sign-in-btn" onClick={handleSignOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="sign-in-btn" onClick={handleSignIn}>
              Sign In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  loggedInUser: PropTypes.string,
  setLoggedInUser: PropTypes.func.isRequired,
};

export default Header;