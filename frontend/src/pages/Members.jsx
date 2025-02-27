import { useState } from "react";

const Members = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [registrationMessage, setRegistrationMessage] = useState(""); // For registration messages

  const handleFileChange = (e) => {
    setFileName(e.target.files[0] ? e.target.files[0].name : "No file chosen");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const password = e.target.password.value;

    if (!name || !password) {
      setRegistrationMessage("All fields are required!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some(user => user.name === name)) {
      setRegistrationMessage("User already exists!");
      return;
    }

    const newUser = { name, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    setRegistrationMessage("User registered successfully!");
    e.target.reset(); // Clear the form
  };

  const handleClearUsers = () => {
    localStorage.removeItem("users");
    setRegistrationMessage("User data cleared!"); // Update message after clearing
  };

  return (    
    <div className="members-page">
      <h2>Members Page</h2>
      <div className="form-container">
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>{registrationMessage}</p> {/* Display registration message */}

        <form>
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="file-upload-label">
            Choose File
          </label>
          <span id="file-name">{fileName}</span>
          <button type="button">Upload</button> {/* You'll need to implement the upload logic */}
        </form>

        <button onClick={handleClearUsers}>Clear All Users</button>
      </div>
    </div>
  );
};

export default Members;