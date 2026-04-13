const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock hospital data
const hospitals = [
  {
    id: 1,
    name: "Apollo Hospital Chennai",
    location: { lat: 13.0475, lng: 80.2076 },
    assets: { ICU_beds: 5, ventilators: 3, dialysis: 2 },
    expertise: ["cardiology", "nephrology"]
  },
  {
    id: 2,
    name: "Fortis Malar",
    location: { lat: 13.0067, lng: 80.2554 },
    assets: { ICU_beds: 2, ventilators: 1, dialysis: 1 },
    expertise: ["orthopedics", "nephrology"]
  }
];

// GET all hospitals
app.get("/hospitals", (req, res) => {
  res.json(hospitals);
});

// GET single patient (mock)
app.get("/patient/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "John Doe",
    condition: "nephrology",
    required_assets: ["dialysis"],
    location: { lat: 13.0827, lng: 80.2707 }
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});