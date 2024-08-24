const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const fs = require("fs");
const cors = require('cors');

const app = express();
app.use(cors());

// Load data from data.json
const dataPath = path.join(__dirname, "./data.json");
let importData;

try {
    importData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
} catch (error) {
    console.error("Error loading data:", error);
    importData = {}; // Default to an empty object if there's an error
}

app.get("/", (req, res) => {
    res.send("Hello23");
});

app.get("/books", (req, res) => {
    res.send(importData);
});

const port = 3000; // Use a fixed port for local testing
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports.handler = serverless(app); // Export the serverless function
