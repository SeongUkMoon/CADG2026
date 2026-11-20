'use client';

import { type CSSProperties, useEffect, useRef } from 'react';
import type { Direction, LatLngTuple, Map as LeafletMap } from 'leaflet';

type RouteKind = 'walk' | 'shuttle' | 'bus';

type RouteMarker = {
  position: LatLngTuple;
  label: string;
  detail: string;
  direction?: Direction;
};

type RouteSegment = {
  positions: LatLngTuple[];
  color: string;
  dashArray?: string;
  label: string;
};

type RouteDefinition = {
  ariaLabel: string;
  caption: string;
  markers: RouteMarker[];
  segments: RouteSegment[];
};

const hoam: LatLngTuple = [37.46764, 126.96014];
const familyHousing: LatLngTuple = [37.46637, 126.95771];
const dormitoryArea: LatLngTuple = [37.46057, 126.95673];
const advancedMaterials: LatLngTuple = [37.45356, 126.95022];
const venue: LatLngTuple = [37.45486, 126.95054];

const walkingPath: LatLngTuple[] = [
  hoam,
  [37.4671, 126.9592],
  familyHousing,
  [37.4645, 126.9576],
  [37.4624, 126.9574],
  dormitoryArea,
  [37.4589, 126.9553],
  [37.4572, 126.9545],
  [37.4551, 126.9545],
  [37.4542, 126.9539],
  advancedMaterials,
  venue,
];

const shuttlePath: LatLngTuple[] = [
  hoam,
  [37.4681, 126.9574],
  familyHousing,
  [37.4632, 126.9581],
  [37.4614, 126.958],
  dormitoryArea,
  [37.45511, 126.95452],
  [37.4542, 126.95394],
  [37.45337, 126.95244],
  advancedMaterials,
];

const busPath: LatLngTuple[] = [
  hoam,
  familyHousing,
  [37.4651, 126.9578],
  [37.4632, 126.9574],
  dormitoryArea,
  [37.45886, 126.95527],
  [37.45511, 126.95452],
  [37.4542, 126.95394],
  [37.45337, 126.95244],
  advancedMaterials,
];

const shortWalk: LatLngTuple[] = [advancedMaterials, [37.45415, 126.95038], venue];

const routes: Record<RouteKind, RouteDefinition> = {
  walk: {
    ariaLabel: 'Interactive campus map showing the walking route from Hoam Faculty House to Building 38',
    caption: 'Approximate walking route shown on OpenStreetMap. Check the SNU campus map before departure.',
    markers: [
      { position: hoam, label: '1. Hoam Faculty House', detail: 'Start at Building 125.', direction: 'top' },
      { position: dormitoryArea, label: '2. Dormitory area', detail: 'Continue toward the Engineering College.', direction: 'right' },
      { position: venue, label: '3. Building 38', detail: 'Global Education Center for Engineers.', direction: 'top' },
    ],
    segments: [{ positions: walkingPath, color: '#34784e', dashArray: '8 7', label: 'Walking route' }],
  },
  shuttle: {
    ariaLabel: 'Interactive campus map showing the shuttle route from Hoam Faculty House and the final walk to Building 38',
    caption: 'Approximate shuttle and walking route shown on OpenStreetMap. Check the current SNU shuttle schedule before departure.',
    markers: [
      { position: hoam, label: '1. Hoam Faculty House', detail: 'Board the reverse-direction campus shuttle.', direction: 'top' },
      { position: advancedMaterials, label: '2. Advanced Materials', detail: 'Get off the shuttle.', direction: 'left' },
      { position: venue, label: '3. Building 38', detail: 'Walk to the conference venue.', direction: 'right' },
    ],
    segments: [
      { positions: shuttlePath, color: '#694fa3', label: 'Campus shuttle' },
      { positions: shortWalk, color: '#34784e', dashArray: '8 7', label: 'Walk' },
    ],
  },
  bus: {
    ariaLabel: 'Interactive campus map showing the Gwanak 02-1 bus route from Hoam Faculty House and the final walk to Building 38',
    caption: 'Approximate Gwanak 02-1 and walking route shown on OpenStreetMap. Confirm the bus direction before boarding.',
    markers: [
      { position: hoam, label: '1. Hoam Faculty House', detail: 'Board Gwanak 02-1 toward the SNU campus.', direction: 'top' },
      { position: advancedMaterials, label: '2. Advanced Materials', detail: 'Get off the bus.', direction: 'left' },
      { position: venue, label: '3. Building 38', detail: 'Walk to the conference venue.', direction: 'right' },
    ],
    segments: [
      { positions: busPath, color: '#193889', label: 'Gwanak 02-1' },
      { positions: shortWalk, color: '#34784e', dashArray: '8 7', label: 'Walk' },
    ],
  },
};

export function CampusRouteMap({ route }: { route: RouteKind }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const definition = routes[route];

  useEffect(() => {
    let map: LeafletMap | undefined;
    let cancelled = false;

    void import('leaflet').then((leaflet) => {
      if (cancelled || !mapContainer.current) return;

      map = leaflet.map(mapContainer.current, {
        scrollWheelZoom: false,
        preferCanvas: true,
      });

      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      definition.segments.forEach((segment) => {
        leaflet.polyline(segment.positions, {
          color: segment.color,
          weight: 6,
          opacity: 0.88,
          dashArray: segment.dashArray,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map!).bindTooltip(segment.label);
      });

      definition.markers.forEach((marker, index) => {
        const color = index === definition.markers.length - 1 ? '#b23a48' : definition.segments[0].color;
        const icon = leaflet.divIcon({
          className: 'campus-route-marker-shell',
          html: `<span class="campus-route-marker" style="--marker-color:${color}">${index + 1}</span>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        });

        leaflet.marker(marker.position, { icon })
          .addTo(map!)
          .bindPopup(`<strong>${marker.label}</strong><br>${marker.detail}`);

        leaflet.tooltip({
          permanent: true,
          direction: marker.direction ?? 'top',
          className: 'campus-route-tooltip',
          offset: marker.direction === 'right' ? [18, 0] : marker.direction === 'left' ? [-18, 0] : [0, -18],
        }).setLatLng(marker.position).setContent(marker.label).addTo(map!);
      });

      const bounds = leaflet.latLngBounds(definition.segments.flatMap((segment) => segment.positions));
      map.fitBounds(bounds, { padding: [42, 42], maxZoom: 16 });
      window.requestAnimationFrame(() => map?.invalidateSize());
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [definition]);

  return (
    <figure className="campus-route-map-figure">
      <div className="campus-route-map-shell">
        <div ref={mapContainer} className="campus-route-map" role="region" aria-label={definition.ariaLabel} tabIndex={0} />
        <div className="campus-route-map-legend" aria-hidden="true">
          {definition.segments.map((segment) => (
            <span key={segment.label}><i style={{ '--legend-color': segment.color, '--legend-style': segment.dashArray ? 'dashed' : 'solid' } as CSSProperties} />{segment.label}</span>
          ))}
        </div>
      </div>
      <figcaption>{definition.caption}</figcaption>
    </figure>
  );
}
