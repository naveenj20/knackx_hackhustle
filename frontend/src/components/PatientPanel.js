import { useState } from "react";

export default function PatientPanel({ onMatch }) {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [asset, setAsset] = useState("");

  const handleSubmit = () => {
    if (!name || !condition) return;

    const patient = {
  id: Date.now(),
  name,
  condition,
  required_assets: asset ? [asset] : [],
  location: { lat: 13.0827, lng: 80.2707 } // default patient location
};
    onMatch(patient);
  };

  return (
    <div className="card">
      <h2 className="section-title">Patient Intake</h2>

      <input
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Condition (e.g. nephrology)"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />

      <input
        placeholder="Required asset (optional, e.g. dialysis)"
        value={asset}
        onChange={(e) => setAsset(e.target.value)}
      />

      <button className="button" onClick={handleSubmit}>
        Find Hospitals
      </button>
    </div>
  );
}