// Haversine distance (SAFE VERSION)
export function getDistance(loc1, loc2) {
  if (!loc1 || !loc2) return Infinity;

  const R = 6371;

  const dLat = (loc2.lat - loc1.lat) * Math.PI / 180;
  const dLng = (loc2.lng - loc1.lng) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(loc1.lat * Math.PI / 180) *
    Math.cos(loc2.lat * Math.PI / 180) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// Matching logic
export function matchHospitals(patient, hospitals) {
  return hospitals
    .filter(h =>
      patient.required_assets.every(a => h.assets[a] > 0) &&
      h.expertise.includes(patient.condition)
    )
    .map(h => ({
      ...h,
      distance: getDistance(patient.location, h.location)
    }))
    .sort((a, b) => a.distance - b.distance);
}