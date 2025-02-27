import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();
const PORT = 8000;

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Upload endpoint
app.post("/photos/upload", upload.array("photos", 12), (req, res) => {
  if (!req.files) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  res.json({ message: "Files uploaded successfully!", files: req.files });
});

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
