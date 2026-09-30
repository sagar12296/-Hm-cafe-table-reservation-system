const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static assets (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for SPA routing if needed
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`HM Cafe Frontend UI Server running on http://localhost:${PORT}`);
    console.log(`=======================================================`);
});
