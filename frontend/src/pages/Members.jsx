import React, { useState } from "react";
import axios from "axios";

const Members = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile ? selectedFile.name : "No file chosen");
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed.");
    }
  };

  return (
    <div className="members-page">
      <h2>Members Page</h2>
      <div className="form-container">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
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
          <button type="button" onClick={handleUpload}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Members;