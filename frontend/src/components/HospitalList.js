export default function HospitalList({ hospitals }) {
  return (
    <div>
      <h2 className="section-title">Hospitals</h2>

      {hospitals.map(h => (
        <div key={h.id} className="card hospital-card">
          <h3>{h.name}</h3>

          <p>
            ICU Beds:{" "}
            <span className={h.assets.ICU_beds > 2 ? "good" : "low"}>
              {h.assets.ICU_beds}
            </span>
          </p>

          <p>Ventilators: {h.assets.ventilators}</p>
          <p>Dialysis: {h.assets.dialysis}</p>
        </div>
      ))}
    </div>
  );
}