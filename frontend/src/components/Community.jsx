import { useState, useEffect } from "react";

const Community = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/uploads/list")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched files:", data);
        setFiles(data);
      })
      .catch((err) => console.error("Error fetching files:", err));
  }, []);

  return (
    <div>
      <h1>Community Page</h1>
      <p>Here are the uploaded files. Click to view them.</p>

      <div className="file-container">
        {files.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          files.map((file, index) => (
            <div key={index} className="file-item">
              <a href={`http://localhost:8000/uploads/${file}`} target="_blank" rel="noopener noreferrer">
                {file}
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;
