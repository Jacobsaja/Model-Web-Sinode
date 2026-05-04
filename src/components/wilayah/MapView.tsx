"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Jemaat } from "@/data/jemaat";

// ─── Custom Marker Icons ───────────────────────────────────────────────────────

const createPinIcon = (
  fill: string,
  size: number = 34,
  pulse: boolean = false
) => {
  const pulseRing = pulse
    ? `<span style="
        position:absolute; inset:-6px;
        border-radius:50%;
        border:2px solid ${fill};
        animation: mapPulse 1.6s ease-out infinite;
        opacity:0.7;
      "></span>`
    : "";

  return L.divIcon({
    html: `
      <div style="position:relative; width:${size}px; height:${size}px;">
        ${pulseRing}
        <svg viewBox="0 0 24 32" width="${size}" height="${Math.round(size * 1.33)}" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 8.25 12 20 12 20S24 20.25 24 12C24 5.373 18.627 0 12 0z" fill="${fill}"/>
          <circle cx="12" cy="12" r="5" fill="white" opacity="0.9"/>
        </svg>
      </div>`,
    className: "",
    iconSize: [size, Math.round(size * 1.33)],
    iconAnchor: [size / 2, Math.round(size * 1.33)],
    popupAnchor: [0, -(Math.round(size * 1.33) + 4)],
  });
};

const icons = {
  default: createPinIcon("#2C5F8A"),
  selected: createPinIcon("#6FA8DC", 40),
  nearest: createPinIcon("#6FA8DC", 38, true),
  user: L.divIcon({
    html: `<div style="
      width:16px; height:16px; border-radius:50%;
      background:#2C5F8A; border:3px solid white;
      box-shadow:0 0 0 4px rgba(44,95,138,0.3);
    "></div>`,
    className: "",
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  }),
};

// ─── Map Fly-To Controller ─────────────────────────────────────────────────────

interface FlyToProps {
  lat: number | null;
  lng: number | null;
  zoom?: number;
}

function FlyToLocation({ lat, lng, zoom = 14 }: FlyToProps) {
  const map = useMap();
  useEffect(() => {
    if (lat !== null && lng !== null) {
      map.flyTo([lat, lng], zoom, { duration: 1.2 });
    }
  }, [lat, lng, zoom, map]);
  return null;
}

// ─── Map FitBounds Controller ──────────────────────────────────────────────────

function FitBoundsController({ churches }: { churches: Jemaat[] }) {
  const map = useMap();
  useEffect(() => {
    if (churches.length > 0 && churches.length <= 10) {
      const bounds = L.latLngBounds(churches.map(c => [c.lat, c.lng]));
      map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 14, duration: 1.2 });
    } else if (churches.length === 0) {
       // Optional: reset view if no results, but leaving as is might be better
    }
  }, [churches, map]);
  return null;
}

// ─── Map View Component ────────────────────────────────────────────────────────

export interface MapViewProps {
  churches: Jemaat[];
  selectedId: string | null;
  nearestIds: string[];
  userLocation: { lat: number; lng: number } | null;
  flyTo: { lat: number; lng: number; zoom?: number } | null;
  onMarkerClick: (jemaat: Jemaat) => void;
}

export default function MapView({
  churches,
  selectedId,
  nearestIds,
  userLocation,
  flyTo,
  onMarkerClick,
}: MapViewProps) {
  const getIcon = (id: string) => {
    if (id === selectedId) return icons.selected;
    if (nearestIds.includes(id)) return icons.nearest;
    return icons.default;
  };

  return (
    <>
      {/* Pulse animation keyframes */}
      <style>{`
        @keyframes mapPulse {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .leaflet-container { font-family: inherit; }
        .leaflet-popup-content-wrapper {
          background: #162A40;
          border: 1px solid #2A3F57;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          padding: 0;
          overflow: hidden;
        }
        .leaflet-popup-tip-container { display: none; }
        .leaflet-popup-content { margin: 0; }
        .cluster-icon {
          background: #2C5F8A;
          border: 2px solid white;
          border-radius: 50%;
          color: white;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
      `}</style>

      <MapContainer
        center={[-2.5, 118.0]}
        zoom={5}
        style={{ height: "100%", width: "100%", background: "#0F1E2E" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {flyTo && (
          <FlyToLocation lat={flyTo.lat} lng={flyTo.lng} zoom={flyTo.zoom} />
        )}
        
        <FitBoundsController churches={churches} />

        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={icons.user}
          />
        )}

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={(cluster: { getChildCount: () => number }) => {
            const count = cluster.getChildCount();
            const size = count >= 50 ? 52 : count >= 20 ? 44 : 36;
            return L.divIcon({
              html: `<div class="cluster-icon" style="width:${size}px;height:${size}px;">${count}</div>`,
              className: "",
              iconSize: [size, size],
            });
          }}
        >
          {churches.map((jemaat) => (
            <Marker
              key={jemaat.id}
              position={[jemaat.lat, jemaat.lng]}
              icon={getIcon(jemaat.id)}
              eventHandlers={{
                click: () => onMarkerClick(jemaat),
              }}
            >
              <Popup closeButton={false}>
                <PopupCard jemaat={jemaat} onDetail={() => onMarkerClick(jemaat)} />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

// ─── Popup Card ───────────────────────────────────────────────────────────────

function PopupCard({
  jemaat,
  onDetail,
}: {
  jemaat: Jemaat;
  onDetail: () => void;
}) {
  return (
    <div style={{ minWidth: 220, maxWidth: 260 }}>
      <div
        style={{
          background: "linear-gradient(135deg, #2C5F8A 0%, #1E3F5A 100%)",
          padding: "12px 16px 10px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6FA8DC",
          }}
        >
          {jemaat.kota} · {jemaat.provinsi}
        </p>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: 14,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.3,
          }}
        >
          {jemaat.nama}
        </p>
      </div>
      <div style={{ padding: "10px 16px 12px", background: "#162A40" }}>
        <p
          style={{
            margin: "0 0 2px",
            fontSize: 12,
            color: "#94A3B8",
          }}
        >
          {jemaat.pendeta}
        </p>
        <p style={{ margin: "0 0 10px", fontSize: 11, color: "#64748B" }}>
          {jemaat.alamat}
        </p>
        <button
          onClick={onDetail}
          style={{
            width: "100%",
            padding: "7px 0",
            background: "#6FA8DC",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Lihat Detail →
        </button>
      </div>
    </div>
  );
}
