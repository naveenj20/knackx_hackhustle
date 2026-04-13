export const hospitalsData = [
  {
    id: 1,
    name: "Apollo Hospital (Chennai)",
    location: { lat: 13.0475, lng: 80.2076 },
    assets: { ICU_beds: 5, ventilators: 3, dialysis: 2 },
    expertise: ["cardiology", "nephrology"]
  },
  {
    id: 2,
    name: "Fortis Malar Hospital",
    location: { lat: 13.0067, lng: 80.2554 },
    assets: { ICU_beds: 2, ventilators: 1, dialysis: 1 },
    expertise: ["orthopedics", "nephrology"]
  },
  {
    id: 3,
    name: "Billroth Hospital",
    location: { lat: 13.0732, lng: 80.2615 },
    assets: { ICU_beds: 4, ventilators: 2, dialysis: 0 },
    expertise: ["cardiology", "general"]
  }
];

export const patientData = {
  id: 101,
  name: "John Doe",
  condition: "nephrology",
  required_assets: ["dialysis"],
  location: { lat: 13.0827, lng: 80.2707 } // Chennai center
};