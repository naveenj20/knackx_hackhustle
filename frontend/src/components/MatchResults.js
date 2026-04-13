export default function MatchResults({ matches }) {
  return (
    <div>
      <h2 className="section-title">Matched Hospitals</h2>

      {matches.length === 0 ? (
        <p>No matches found</p>
      ) : (
        matches.map(h => (
          <div key={h.id} className="card match-card">
            <h3>{h.name}</h3>
            <p>Distance: {h.distance.toFixed(2)} km</p>
          </div>
        ))
      )}
    </div>
  );
}