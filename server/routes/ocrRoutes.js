const express = require("express");
const router = express.Router();
const multer = require("multer");

const { uploadDocument } = require("../controllers/ocrController");

// Configure file upload
const upload = multer({
  dest: "uploads/"
});

// POST /ocr/upload
router.post("/upload", upload.single("file"), uploadDocument);

module.exports = router;