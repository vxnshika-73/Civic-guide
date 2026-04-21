const Tesseract = require("tesseract.js");

/**
 * Extract structured data from OCR text
 */
const extractAadhaarDetails = (text) => {
  const cleanedText = text.replace(/\n/g, " ").toLowerCase();

  // Try multiple patterns for name (handles OCR mistakes like 'nave')
  const nameMatch =
    cleanedText.match(/name[:\s]*([a-z]+)/i) ||
    cleanedText.match(/n[a-z]{2,4}[:\s]*([a-z]+)/i); // fallback

  // DOB (flexible)
  const dobMatch = cleanedText.match(/dob[:\s]*([\d\/-]+)/i);

  // Aadhaar number (very flexible)
  const aadhaarMatch = cleanedText.match(/\d{4}\s*\d{4}\s*\d{4}/);

  return {
    documentType: "Aadhaar",
    name: nameMatch ? nameMatch[1] : null,
    dob: dobMatch ? dobMatch[1] : null,
    aadhaarNumber: aadhaarMatch ? aadhaarMatch[0] : null
  };
};

/**
 * Main OCR Function
 */
const extractTextFromImage = async (imagePath) => {
  try {
    const result = await Tesseract.recognize(imagePath, "eng");

    const rawText = result.data.text;

    // Extract structured data
    const structuredData = extractAadhaarDetails(rawText);

    return {
      rawText,
      structuredData
    };

  } catch (error) {
    console.error("OCR Error:", error);
    throw new Error("Failed to extract text");
  }
};

module.exports = { extractTextFromImage };