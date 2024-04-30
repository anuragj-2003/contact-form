// src/server.js
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up Multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Define the route to handle form submissions
app.post('/submit-form', upload.single('cv'), (req, res) => {
  try {
    // Extract form data from the request
    const { username, email, message } = req.body;
    const cv = req.file;

    // Check if CV file is provided
    if (!cv) {
      return res.status(400).json({ error: 'CV file is required' });
    }

    // Validate file type (PDF, DOC, DOCX)
    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(cv.mimetype)) {
      return res.status(400).json({ error: 'Invalid file format. Please upload a PDF, DOC, or DOCX file.' });
    }

    // Save form data to Excel sheet
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet([{ username, email, message }]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Submissions');
    xlsx.writeFile(workbook, 'submissions.xlsx');

    // Move uploaded file to a permanent location
    fs.renameSync(cv.path, `uploads/${cv.originalname}`);

    // Send success response
    res.status(200).json({ success: true });
  } catch (error) {
    // Handle server error
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
