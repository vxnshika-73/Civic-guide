const { extractTextFromImage } = require("../services/ocrService");

/**
 * Handle document upload and OCR processing
 */
const uploadDocument = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }

    // Get file path
    const filePath = req.file.path;

    // Call OCR service
    const result = await extractTextFromImage(filePath);

    // Send response
    res.status(200).json({
      success: true,
      rawText: result.rawText,
      structuredData: result.structuredData
    });

  } catch (error) {
    console.error("OCR Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "OCR processing failed"
    });
  }
};

module.exports = { uploadDocument };