import { Jemaat } from "@/data/jemaat";

// ─── Haversine Distance Formula ───────────────────────────────────────────────
// Calculates the great-circle distance between two lat/lng points in kilometers.

export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth's radius in km
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ─── Format Distance ──────────────────────────────────────────────────────────

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

// ─── Find Nearest Churches ────────────────────────────────────────────────────

export interface JemaatWithDistance extends Jemaat {
  distance: number; // in km
}

export function findNearestChurches(
  userLat: number,
  userLng: number,
  churches: Jemaat[],
  count: number = 5
): JemaatWithDistance[] {
  return churches
    .map((church) => ({
      ...church,
      distance: haversineDistance(userLat, userLng, church.lat, church.lng),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);
}
