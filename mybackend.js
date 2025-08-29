const express = require('express');
const app = express();
const port = 3000;

// Root route returns "hello"
app.get('/', (req, res) => {
  res.send('hello');
});

// Resume route returns a link to your resume
app.get('/resume', (req, res) => {
  const resumeUrl = 'file:///C:/Users/Nishit/OneDrive/Pictures/Nishit_Nayak_Resume%20(1).pdf'; // Replace with your actual resume URL
  res.send(`<a href="${resumeUrl}" target="_blank">View my Resume</a>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
