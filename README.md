# 🚀 GrowthProAI – Full Stack Intern Assignment

A **Mini Local Business Dashboard** built with **React + Tailwind CSS** (frontend) and **Node.js + Express** (backend).  
This simulates how local businesses view their SEO content and Google Business data — a core use case for GrowthProAI.

## 📁 Project Structure
growthproai-dashboard/
├── client/ # React + Tailwind CSS (frontend)
└── server/ # Node.js + Express (backend)

---

## ⚙️ Features

✅ Business Name + Location input  
✅ Simulated Google Rating and Reviews  
✅ Dynamic, personalized AI-style SEO Headline  
✅ Regenerate headline with a single click  
✅ Fully responsive UI with Tailwind CSS  
✅ No database — all data simulated  
✅ Clean UI and modular codebase  

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/bharath-3107/GrowthPro-AI-company-Assessment.git
cd growthproai-dashboard

2. Start the Backend
bash
Copy
Edit
cd server
npm install
npm start
Runs at: http://localhost:5000

3. Start the Frontend
bash
Copy
Edit
cd client
npm install
npm start
Runs at: http://localhost:3000




🔌 API Endpoints
POST /business-data
Payload:

json
Copy
Edit
{ "name": "Cake & Co", "location": "Mumbai" }
Response:

json
Copy
Edit
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
GET /regenerate-headline?name=...&location=...
Response:

json
Copy
Edit
{
  "headline": "Cake & Co: Where Every Bite Tells a Story"
}
