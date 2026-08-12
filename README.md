# 🌍 wanderSoul AI — Backend

Backend API for **wanderSoul AI**, an AI-powered travel planning application that generates personalized travel itineraries based on the user's destination, budget, duration, interests, transportation, and number of travelers.

## 🚀 Features

* 🤖 AI-powered travel itinerary generation
* 📍 Destination-based trip planning
* 💰 Budget-aware recommendations
* 🗓️ Day-wise travel plans
* 👥 Supports multiple travelers
* 🚗 Transportation preferences
* 🎯 Personalized recommendations based on interests
* 🔐 Environment variable support for API keys
* ⚡ REST API built with Node.js and Express

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **Groq API**
* **Llama 3.3 70B**
* **JavaScript**
* **dotenv**
* **CORS**

## 📁 Project Structure

```text
wanderSoul-backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── prompts/
│
├── .env
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd wanderSoul-backend
```

Install dependencies:

```bash
npm install
```


## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

## 📡 API

### Generate Trip

**POST**

```text
/api/trip/generate
```

### Request Body

```json
{
  "destination": "Paris",
  "days": 5,
  "budget": 50000,
  "travelers": 2,
  "transport": "Public Transport",
  "interests": [
    "History",
    "Food",
    "Photography"
  ]
}
```

### Response

The API returns a structured JSON response containing:

* Trip summary
* Estimated budget
* Day-wise itinerary
* Activities
* Places to visit
* Food recommendations
* Travel suggestions

## 🤖 AI Integration

wanderSoul AI uses the **Groq API** with the **Llama 3.3 70B** model to generate personalized travel plans.

The backend sends structured trip information to the AI and returns the generated itinerary as JSON.

## 🔒 Security

* API keys are stored in environment variables.
* `.env` is excluded from Git using `.gitignore`.
* Sensitive credentials should never be committed to the repository.

## 🌐 Frontend

The backend is designed to work with the wanderSoul AI frontend.

Frontend → REST API → Express Backend → Groq AI → JSON Response → Frontend

## 📌 Future Improvements

* User authentication
* Save generated trips
* Trip history
* Google Maps integration
* Hotel and flight recommendations
* Weather-based itinerary adjustments
* Database integration

## 👨‍💻 Author

**Anupam Anand Ojha**

Built with ❤️ using **MERN + AI**
