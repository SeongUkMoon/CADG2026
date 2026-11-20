'use client';

import { type CSSProperties, useEffect, useRef } from 'react';
import type { Direction, LatLngTuple, Map as LeafletMap } from 'leaflet';

type CampusRouteKind = 'walk' | 'shuttle' | 'bus';
type AirportRouteKind = 'limousine' | 'arex' | 'taxi';
type RouteKind = CampusRouteKind | AirportRouteKind;

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
const hoamTransitStop: LatLngTuple = [37.4682578, 126.9578128];
const dormitoryArea: LatLngTuple = [37.46153, 126.95657];
const advancedMaterials: LatLngTuple = [37.4534963, 126.9502262];
const venue: LatLngTuple = [37.45486, 126.95054];
const incheonAirportT1: LatLngTuple = [37.46019, 126.4407];
const hongikUniversity: LatLngTuple = [37.55736, 126.92507];
const seoulNationalUniversityStation: LatLngTuple = [37.48123, 126.95275];
const engineeringCollegeEntrance: LatLngTuple = [37.455818, 126.949182];

const walkingPath: LatLngTuple[] = [
  hoam,
  [37.467516, 126.959881],
  [37.467303, 126.960043],
  [37.467068, 126.959297],
  [37.466528, 126.959193],
  [37.466373, 126.958878],
  [37.466305, 126.958792],
  [37.4661, 126.958952],
  [37.465625, 126.95894],
  [37.465405, 126.959001],
  [37.465058, 126.959248],
  [37.464926, 126.959057],
  [37.464799, 126.958786],
  [37.464717, 126.958535],
  [37.464697, 126.958392],
  [37.464643, 126.958407],
  [37.464628, 126.958251],
  [37.464601, 126.95811],
  [37.464509, 126.958061],
  [37.464246, 126.95811],
  [37.463991, 126.958149],
  [37.463827, 126.958127],
  [37.463702, 126.958096],
  [37.463619, 126.958096],
  [37.463493, 126.958043],
  [37.463114, 126.95795],
  [37.462903, 126.957878],
  [37.46267, 126.957738],
  [37.46253, 126.957589],
  [37.462323, 126.957385],
  [37.462193, 126.957221],
  [37.462071, 126.957097],
  [37.461854, 126.956876],
  [37.461669, 126.956745],
  [37.461507, 126.956656],
  [37.461528, 126.956569],
  [37.461549, 126.956483],
  [37.461449, 126.956429],
  [37.461381, 126.956326],
  [37.461368, 126.956179],
  [37.461435, 126.955964],
  [37.461307, 126.955912],
  [37.46136, 126.955699],
  [37.46137, 126.955489],
  [37.461038, 126.955174],
  [37.461153, 126.954796],
  [37.461023, 126.954701],
  [37.460941, 126.954571],
  [37.46096, 126.954358],
  [37.461029, 126.954113],
  [37.461007, 126.953966],
  [37.460982, 126.953948],
  [37.460281, 126.953443],
  [37.459839, 126.952889],
  [37.459596, 126.952592],
  [37.45888, 126.951669],
  [37.458626, 126.951499],
  [37.458266, 126.951332],
  [37.457879, 126.951141],
  [37.457749, 126.951081],
  [37.45757, 126.951161],
  [37.45737, 126.951063],
  [37.457244, 126.950991],
  [37.457118, 126.951047],
  [37.4569, 126.951089],
  [37.456158, 126.951211],
  [37.45612, 126.95091],
  [37.45533, 126.951033],
  [37.455292, 126.950664],
  [37.455187, 126.950559],
  [37.455089, 126.950545],
  venue,
];

const hoamToTransitStopWalk: LatLngTuple[] = [
  hoam,
  [37.467515, 126.959882],
  [37.467831, 126.959642],
  [37.467682, 126.959215],
  [37.467617, 126.959045],
  [37.467611, 126.958923],
  [37.467638, 126.958815],
  [37.467675, 126.958741],
  [37.467735, 126.958667],
  [37.467801, 126.958652],
  [37.467873, 126.957968],
  [37.46789, 126.957807],
  hoamTransitStop,
];

// Both services follow the campus road from Hoam to Gwanaksan Intersection.
const hoamToGwanaksanIntersection: LatLngTuple[] = [
  [37.468259, 126.957852],
  [37.466573, 126.957701],
  [37.466226, 126.957705],
  [37.464865, 126.957824],
  [37.464643, 126.957915],
  [37.464011, 126.958042],
  [37.463098, 126.957811],
  [37.462782, 126.957673],
  [37.461819, 126.956718],
  [37.461413, 126.956514],
  [37.461178, 126.956357],
  [37.460941, 126.956553],
  [37.460288, 126.956911],
];

// The 02-1 turns into Beodeulgol, loops around the turnaround, retraces the
// access road to Gwanaksan Intersection, and then joins the outer campus road.
const beodeulgolTurnaround: LatLngTuple[] = [
  [37.460137, 126.956706],
  [37.459114, 126.955655],
  [37.458906, 126.955393],
  [37.458844, 126.955243],
  [37.458884, 126.955171],
  [37.458861, 126.955068],
  [37.458812, 126.955035],
  [37.458734, 126.955062],
  [37.458712, 126.955195],
  [37.458785, 126.955261],
  [37.458859, 126.955228],
  [37.458885, 126.955132],
  [37.458861, 126.955068],
  [37.458844, 126.955243],
  [37.458906, 126.955393],
  [37.459114, 126.955655],
  [37.460137, 126.956706],
  [37.460288, 126.956911],
];

// Shared outer road past Faculty Club, the Computer Research Institute, and
// the Semiconductor Research Institute, ending at Advanced Materials.
const outerResearchRoad: LatLngTuple[] = [
  [37.460142, 126.957002],
  [37.459953, 126.957096],
  [37.459827, 126.95714],
  [37.459704, 126.957182],
  [37.459597, 126.95721],
  [37.45947, 126.957207],
  [37.459328, 126.957168],
  [37.459184, 126.957084],
  [37.458585, 126.956663],
  [37.458442, 126.956609],
  [37.458257, 126.956547],
  [37.457515, 126.956353],
  [37.457331, 126.956297],
  [37.457124, 126.956199],
  [37.456965, 126.956078],
  [37.456831, 126.955947],
  [37.455989, 126.955211],
  [37.455025, 126.954507],
  [37.454484, 126.954122],
  [37.454291, 126.953991],
  [37.454214, 126.953938],
  [37.453795, 126.953634],
  [37.45368, 126.953572],
  [37.453384, 126.953379],
  [37.453293, 126.953086],
  [37.453246, 126.95283],
  [37.453307, 126.952452],
  [37.453429, 126.952237],
  [37.453689, 126.951957],
  [37.453771, 126.951824],
  [37.453849, 126.951599],
  [37.45388, 126.951282],
  [37.453881, 126.950233],
  [37.453498, 126.950267],
];

const shuttlePath: LatLngTuple[] = [
  ...hoamToGwanaksanIntersection,
  ...outerResearchRoad,
];

const busPath: LatLngTuple[] = [
  ...hoamToGwanaksanIntersection,
  ...beodeulgolTurnaround,
  ...outerResearchRoad,
];

const shortWalk: LatLngTuple[] = [
  advancedMaterials,
  [37.453562, 126.950261],
  [37.453881, 126.950233],
  [37.4541, 126.950165],
  [37.454115, 126.950257],
  [37.454276, 126.950208],
  [37.454508, 126.950138],
  [37.454916, 126.950002],
  [37.455006, 126.949983],
  [37.455062, 126.950005],
  [37.4551, 126.950081],
  [37.455143, 126.950492],
  [37.45518, 126.950487],
  [37.455184, 126.950527],
  [37.455089, 126.950545],
  venue,
];

const airportLimousinePath: LatLngTuple[] = [
  incheonAirportT1,
  [37.4892, 126.4739],
  [37.5244, 126.5594],
  [37.5682, 126.7117],
  [37.5569, 126.8036],
  [37.4975, 126.8647],
  [37.4864, 126.8872],
  [37.482, 126.9291],
  [37.4769, 126.952],
  hoam,
];

const arexPath: LatLngTuple[] = [
  incheonAirportT1,
  [37.4584, 126.4775],
  [37.4928, 126.4937],
  [37.5113, 126.5248],
  [37.5566, 126.6246],
  [37.5691, 126.6742],
  [37.5714, 126.7365],
  [37.5622, 126.8019],
  [37.5668, 126.827],
  [37.576, 126.9008],
  hongikUniversity,
];

const lineTwoPath: LatLngTuple[] = [
  hongikUniversity,
  [37.5494, 126.9135],
  [37.5349, 126.9028],
  [37.5088, 126.8913],
  [37.4853, 126.9014],
  [37.4842, 126.9297],
  seoulNationalUniversityStation,
];

const bus5513Path: LatLngTuple[] = [
  seoulNationalUniversityStation,
  [37.4798, 126.9523],
  [37.4754, 126.9522],
  [37.4692, 126.9506],
  [37.4633, 126.9495],
  engineeringCollegeEntrance,
];

const engineeringCollegeWalk: LatLngTuple[] = [
  engineeringCollegeEntrance,
  [37.455836, 126.949265],
  [37.455876, 126.949332],
  [37.455905, 126.949333],
  [37.456393, 126.949289],
  [37.456443, 126.949336],
  [37.456035, 126.949462],
  [37.455509, 126.949627],
  [37.455208, 126.949726],
  [37.45523, 126.949819],
  [37.45525, 126.949907],
  [37.455184, 126.949951],
  [37.455121, 126.949972],
  [37.455136, 126.950024],
  [37.45518, 126.950487],
  [37.455184, 126.950527],
  [37.455089, 126.950545],
  venue,
];

const airportDrivePath: LatLngTuple[] = [
  incheonAirportT1,
  [37.4892, 126.4739],
  [37.5244, 126.5594],
  [37.5682, 126.7117],
  [37.557, 126.8036],
  [37.5271, 126.8557],
  [37.4994, 126.891],
  [37.4802, 126.9221],
  [37.4692, 126.9506],
  venue,
];

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
    ariaLabel: 'Interactive campus map showing the yellow Hoam reverse-direction shuttle from Hoam Faculty House along the outer campus road to Advanced Materials and the walk to Building 38',
    caption: 'Approximate yellow Hoam reverse-direction shuttle and walking route shown on OpenStreetMap. The shuttle follows the outer campus road; ask the driver to let you off at Advanced Materials.',
    markers: [
      { position: hoam, label: '1. Hoam Faculty House', detail: 'Walk to the nearby campus shuttle stop.', direction: 'top' },
      { position: hoamTransitStop, label: '2. Hoam shuttle stop', detail: 'Board the yellow Hoam reverse-direction shuttle.', direction: 'right' },
      { position: advancedMaterials, label: '3. Advanced Materials', detail: 'Tell the driver in advance that you need to get off here.', direction: 'left' },
      { position: venue, label: '4. Building 38', detail: 'Walk to the Global Education Center for Engineers.', direction: 'right' },
    ],
    segments: [
      { positions: hoamToTransitStopWalk, color: '#34784e', dashArray: '8 7', label: 'Walk to shuttle stop' },
      { positions: shuttlePath, color: '#694fa3', label: 'Hoam reverse-direction shuttle' },
      { positions: shortWalk, color: '#34784e', dashArray: '8 7', label: 'Walk to Building 38' },
    ],
  },
  bus: {
    ariaLabel: 'Interactive campus map showing the Gwanak 02-1 bus route from Hoam Faculty House and the final walk to Building 38',
    caption: 'Approximate Gwanak 02-1 and walking route shown on OpenStreetMap. Confirm the bus direction before boarding.',
    markers: [
      { position: hoam, label: '1. Hoam Faculty House', detail: 'Walk to the nearby Gwanak 02-1 stop.', direction: 'top' },
      { position: hoamTransitStop, label: '2. Hoam Faculty House stop', detail: 'Stop 21882: board toward Seoul National University New Engineering Building.', direction: 'right' },
      { position: advancedMaterials, label: '3. Advanced Materials', detail: 'Get off after 10 stops.', direction: 'left' },
      { position: venue, label: '4. Building 38', detail: 'Walk to the conference venue.', direction: 'right' },
    ],
    segments: [
      { positions: hoamToTransitStopWalk, color: '#34784e', dashArray: '8 7', label: 'Walk to bus stop' },
      { positions: busPath, color: '#193889', label: 'Gwanak 02-1' },
      { positions: shortWalk, color: '#34784e', dashArray: '8 7', label: 'Walk to Building 38' },
    ],
  },
  limousine: {
    ariaLabel: 'Interactive map showing Airport Limousine 6017 from Incheon Airport Terminal 1 to Hoam Faculty House, the walk to the Gwanak 02-1 stop, and the local bus route to Building 38',
    caption: 'Approximate recommended route shown on OpenStreetMap. From Hoam Faculty House, walk to stop 21882 and follow the same Gwanak 02-1 route shown in the Hoam-to-venue section. Confirm the current 6017 timetable and boarding platform before departure.',
    markers: [
      { position: incheonAirportT1, label: '1. Incheon Airport T1', detail: 'Board Airport Limousine Bus 6017.', direction: 'right' },
      { position: hoam, label: '2. Hoam Faculty House', detail: 'Get off bus 6017 and walk to the nearby Gwanak 02-1 stop.', direction: 'right' },
      { position: hoamTransitStop, label: '3. Hoam Faculty House stop', detail: 'Stop 21882: board Gwanak 02-1 toward Seoul National University New Engineering Building.', direction: 'right' },
      { position: advancedMaterials, label: '4. Advanced Materials', detail: 'Get off the local bus and continue on foot.', direction: 'left' },
      { position: venue, label: '5. Building 38', detail: 'Global Education Center for Engineers.', direction: 'right' },
    ],
    segments: [
      { positions: airportLimousinePath, color: '#c35a1d', label: 'Airport Limousine 6017' },
      { positions: hoamToTransitStopWalk, color: '#34784e', dashArray: '8 7', label: 'Walk to Gwanak 02-1 stop' },
      { positions: busPath, color: '#193889', label: 'Gwanak 02-1' },
      { positions: shortWalk, color: '#34784e', dashArray: '8 7', label: 'Walk to Building 38' },
    ],
  },
  arex: {
    ariaLabel: 'Interactive map showing the recommended AREX, subway, bus, and walking route from Incheon Airport Terminal 1 to Building 38',
    caption: 'Approximate map of recommended Route 1. Routes 2 and 3 remain listed above as alternatives.',
    markers: [
      { position: incheonAirportT1, label: '1. Incheon Airport T1', detail: 'Take an AREX all-stop train.', direction: 'right' },
      { position: hongikUniversity, label: '2. Hongik Univ.', detail: 'Transfer from AREX to Subway Line 2.', direction: 'top' },
      { position: seoulNationalUniversityStation, label: '3. SNU Station', detail: 'Use Exit 3 and board bus 5513.', direction: 'left' },
      { position: engineeringCollegeEntrance, label: '4. Engineering College', detail: 'Get off bus 5513 and continue on foot.', direction: 'left' },
      { position: venue, label: '5. Building 38', detail: 'Global Education Center for Engineers.', direction: 'right' },
    ],
    segments: [
      { positions: arexPath, color: '#1595b6', label: 'AREX' },
      { positions: lineTwoPath, color: '#2f9b4b', label: 'Subway Line 2' },
      { positions: bus5513Path, color: '#193889', label: 'Bus 5513' },
      { positions: engineeringCollegeWalk, color: '#34784e', dashArray: '8 7', label: 'Walk' },
    ],
  },
  taxi: {
    ariaLabel: 'Interactive map showing an approximate driving route from Incheon Airport Terminal 1 to Building 38',
    caption: 'Approximate driving route shown on OpenStreetMap. The navigation route and travel time will vary with traffic.',
    markers: [
      { position: incheonAirportT1, label: '1. Incheon Airport T1', detail: 'Taxi and private-car pickup area.', direction: 'right' },
      { position: venue, label: '2. Building 38', detail: 'Global Education Center for Engineers.', direction: 'right' },
    ],
    segments: [{ positions: airportDrivePath, color: '#5d4777', label: 'Approximate drive' }],
  },
};

function RouteMap({ route }: { route: RouteKind }) {
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

export function CampusRouteMap({ route }: { route: CampusRouteKind }) {
  return <RouteMap route={route} />;
}

export function AirportRouteMap({ route }: { route: AirportRouteKind }) {
  return <RouteMap route={route} />;
}
