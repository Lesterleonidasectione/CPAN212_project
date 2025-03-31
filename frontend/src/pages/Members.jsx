import { useState, useEffect } from "react";

const Members = () => {
  // State for user registration
  const [registrationMessage, setRegistrationMessage] = useState("");
  
  // State for file uploads
  const [fileNames, setFileNames] = useState("No files chosen");
  const [files, setFiles] = useState(null);

  // State for uploaded files list
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      const names = Array.from(selectedFiles).map((file) => file.name).join(", ");
      setFileNames(names);
      setFiles(selectedFiles);
    } else {
      setFileNames("No files chosen");
      setFiles(null);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!files) {
      alert("Please select files first!");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }

    try {
      const response = await fetch("http://localhost:8000/photos/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("✅ Files uploaded successfully!");
        console.log("Uploaded files:", result.files);
        setFileNames("No files chosen");
        setFiles(null);
        fetchUploadedFiles(); 
      } else {
        alert(` Failed to upload files: ${result.message}`);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      alert(" Error uploading files! Check the console.");
    }
  };

  // Fetch uploaded files from the server
  const fetchUploadedFiles = async () => {
    try {
      const response = await fetch("http://localhost:8000/uploads/list");
      const data = await response.json();
      setUploadedFiles(data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Fetch uploaded files on component mount
  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  // Handle user registration
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
    e.target.reset();
  };

  // Handle clearing all users from localStorage
  const handleClearUsers = () => {
    localStorage.removeItem("users");
    setRegistrationMessage("User data cleared!");
  };

  return (
    <div className="members-page">
      <h2>Members Page</h2>

      {/* User Registration Form */}
      <div className="form-container">
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>{registrationMessage}</p> 
        <button onClick={handleClearUsers}>Clear All Users</button>
      </div>

      {/* File Upload Section */}
      <div className="form-container">
        <input
          type="file"
          id="file-upload"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="file-upload-label">
          Choose Files
        </label>
        <span id="file-names">{fileNames}</span>
        <button type="button" onClick={handleUpload}>Upload</button> 
      </div>

      {/* Uploaded Files List */}
      <div className="uploaded-files">
        <h3>Uploaded Files</h3>
        {uploadedFiles.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <a href={`http://localhost:8000/uploads/${file}`} target="_blank" rel="noopener noreferrer">
                  {file}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Members;
