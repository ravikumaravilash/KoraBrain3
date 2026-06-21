const express = require("express");
const path = require("path");

const app = express();

// Serve static files directly from the KoraBrain folder
app.use(express.static(path.join(__dirname)));

// Root route → opening page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Cultures route → cultures.html
app.get("/cultures", (req, res) => {
  res.sendFile(path.join(__dirname, "cultures.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ KORA server running at http://localhost:${PORT}`);
});
