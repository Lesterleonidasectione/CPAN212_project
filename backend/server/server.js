import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 8000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Ensure the uploads directory exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer for File Upload
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Handle File Uploads
app.post("/photos/upload", upload.array("photos", 12), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  res.json({
    message: "Files uploaded successfully!",
    files: req.files.map((file) => file.filename),
  });
});

// Serve Static Files
app.use("/uploads", express.static(uploadDir));

// API to List Uploaded Files
app.get("/uploads/list", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ message: "Error reading files" });
    res.json(files);
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
