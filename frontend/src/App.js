import React, { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

useEffect(() => {
  axios.get("http://localhost:5000/hospitals")
    .then(res => setHospitals(res.data));
}, []);

import { hospitalsData, patientData } from "./data";
import { matchHospitals } from "./utils";

import HospitalList from "./components/HospitalList";
import MatchResults from "./components/MatchResults";
import PatientPanel from "./components/PatientPanel";

function App() {
  const [hospitals, setHospitals] = useState(hospitalsData);
  const [matches, setMatches] = useState([]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHospitals(prev =>
        prev.map(h => ({
          ...h,
          assets: {
            ...h.assets,
            ICU_beds: Math.max(
              0,
              h.assets.ICU_beds - Math.floor(Math.random() * 2)
            )
          }
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMatch = (patient) => {
  const result = matchHospitals(patient, hospitals);
  setMatches(result);
};

  return (
    <div className="app-container">
      <h1 className="title">🏥 Smart Hospital Dashboard</h1>

      <PatientPanel onMatch={handleMatch} />

      <div className="grid">
        <HospitalList hospitals={hospitals} />
        <MatchResults matches={matches} />
      </div>
    </div>
  );
}



export default App;