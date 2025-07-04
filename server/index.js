const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const seoHeadlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Hidden Gem of Mumbai's Bakery Scene",
  "How Cake & Co Became the Talk of the Town in 2025",
  "Mumbai's Dessert Revolution Starts at Cake & Co",
  "Cake & Co: Where Every Bite Tells a Story"
];

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  const raw = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
  const personalized = raw
    .replace(/Cake & Co/g, name)
    .replace(/Mumbai/g, location);

  res.json({
    rating: 4.3,
    reviews: 127,
    headline: personalized,
  });
});

// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name = "Your Brand", location = "Your City" } = req.query;

  const raw = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
  const personalized = raw
    .replace(/Cake & Co/g, name)
    .replace(/Mumbai/g, location);

  res.json({ headline: personalized });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
