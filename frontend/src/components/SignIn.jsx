import { useState } from "react";
import PropTypes from "prop-types";

const SignIn = ({ setLoggedInUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (name && password) {
      localStorage.setItem("loggedInUser", name);
      setLoggedInUser(name);
    } else {
      alert("Please enter both name and password.");
    }
  };

  return (
    <div className="sign-in">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

SignIn.propTypes = {
  setLoggedInUser: PropTypes.func.isRequired,
};

export default SignIn;
