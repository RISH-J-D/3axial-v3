import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ArrowLeft } from 'lucide-react';

export interface CountryProject {
  id: string;
  title: string;
  location: string;
  tonnage: string;
  sector: string;
  codeStandard: string;
  description: string;
  image: string;
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  lat: number;
  lon: number;
  isHQ?: boolean;
  codeStandard: string;
  tagline: string;
  projects: CountryProject[];
}

export const COUNTRIES_DATA: CountryData[] = [
  {
    id: 'hq-bangalore',
    name: 'Bangalore (HQ)',
    flag: 'IND',
    lat: 12.9716,
    lon: 77.5946,
    isHQ: true,
    codeStandard: 'Global Engineering Headquarters',
    tagline: '120+ Tekla detailers delivering shop-ready fabrication models worldwide',
    projects: [
      {
        id: 'in-1',
        title: '3Axial Global Engineering Headquarters',
        location: 'Electronic City, Bengaluru, Karnataka, India',
        tonnage: 'Global HQ Facility',
        sector: 'Engineering Operations',
        codeStandard: 'AISC / CISC / Eurocode / AS 4100',
        description: 'Global engineering headquarters at Electronic City, Bengaluru, managing worldwide detailing operations, BIM automation, and connection design.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/3axial-Elements.jpg'
      }
    ]
  },
  {
    id: 'branch-coimbatore',
    name: 'Coimbatore (Branch)',
    flag: 'IND',
    lat: 11.0168,
    lon: 76.9558,
    codeStandard: 'India Branch Operations',
    tagline: 'Engineering branch office for 3D modeling and pre-bid estimation',
    projects: [
      {
        id: 'in-2',
        title: '3Axial Coimbatore Branch Office',
        location: 'Peelamedu, Coimbatore, Tamil Nadu, India',
        tonnage: 'Branch Facility',
        sector: 'Engineering Operations',
        codeStandard: 'AISC / CISC / Eurocode',
        description: 'Engineering branch office at Peelamedu, Coimbatore, supporting commercial and industrial fabrication detailing.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/3axial-Elements.jpg'
      }
    ]
  },
  {
    id: 'usa',
    name: 'Austin, TX (US Branch)',
    flag: 'USA',
    lat: 30.2672,
    lon: -97.7431,
    codeStandard: 'AISC 360-16 / AISC 341 Seismic',
    tagline: 'North American engineering coordination, commercial & industrial builds',
    projects: [
      {
        id: 'us-1',
        title: 'Industrial Process Facility Phase II',
        location: 'Texas, USA',
        tonnage: '4,200 Tons',
        sector: 'Industrial Petrochem',
        codeStandard: 'AISC 360-16 / ASD & LRFD',
        description: 'Chemical process building with platform walkways, vessel supports, and automated NC1 exports.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Industrial-Process-Facility.jpg'
      },
      {
        id: 'us-2',
        title: 'Graymont Industrial Plant',
        location: 'USA',
        tonnage: '2,400 Tons',
        sector: 'Industrial Processing',
        codeStandard: 'AISC 360-16 Specification',
        description: 'Heavy industrial lime processing plant steel detailing with pipe racks, chutes, and storage hoppers.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Graymont.jpg'
      },
      {
        id: 'us-3',
        title: 'Oklahoma Children Hospital',
        location: 'Oklahoma, USA',
        tonnage: '1,800 Tons',
        sector: 'Healthcare Infrastructure',
        codeStandard: 'AISC 341 Seismic Special',
        description: 'Multi-story hospital facility detailing adhering to stringent seismic resistance and moment frames.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Oklahoma-Children-Hospital.jpg'
      },
      {
        id: 'us-4',
        title: 'Bryn Mawr Substation',
        location: 'Pennsylvania, USA',
        tonnage: '850 Tons',
        sector: 'Utility Infrastructure',
        codeStandard: 'AISC 360-16 / IEEE Specs',
        description: 'High-voltage electrical substation support framing and equipment gantries for power utilities.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Bryn-Mawr-Substation.jpg'
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: 'CAN',
    lat: 56.13,
    lon: -106.35,
    codeStandard: 'CISC S16 Steel Design Standard',
    tagline: 'Multi-family residential, cold-climate structures & collegiate academies',
    projects: [
      {
        id: 'ca-1',
        title: 'CSSPI Ecole Francois La Bernarde',
        location: 'Quebec, Canada',
        tonnage: '1,100 Tons',
        sector: 'Educational',
        codeStandard: 'CISC S16 Canadian Metric',
        description: 'Educational complex featuring wide-span gymnasium roof trusses and exposed architectural steel.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/CSSPI-Ecole-Francois-La-Bernarde.jpg'
      },
      {
        id: 'ca-2',
        title: 'Lethbridge Housing Complex',
        location: 'Alberta, Canada',
        tonnage: '950 Tons',
        sector: 'Commercial Residential',
        codeStandard: 'CISC S16 Standard',
        description: 'Multi-family residential steel structure with architectural balconies and modular stair towers.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Lethbridge-Housing.jpg'
      },
      {
        id: 'ca-3',
        title: 'St. Clair College Welcome Centre',
        location: 'Ontario, Canada',
        tonnage: '780 Tons',
        sector: 'Educational Atrium',
        codeStandard: 'CISC S16 Standards',
        description: 'Architectural entrance atrium framing featuring cantilevered canopies and exposed structural steel.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/St.-Clair-College-Welcome-Centre.jpg'
      }
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: 'GBR',
    lat: 53.0,
    lon: -1.5,
    codeStandard: 'BS EN 1993 (Eurocode 3)',
    tagline: 'Commercial high-rises, transit stations & architectural steelwork',
    projects: [
      {
        id: 'uk-1',
        title: 'London Express Transit Portal',
        location: 'London, UK',
        tonnage: '1,650 Tons',
        sector: 'Infrastructure Transit',
        codeStandard: 'BS EN 1993 (Eurocode 3)',
        description: 'Heavy structural canopy, platform screen framing, and passenger interchange steelwork.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/medium-vecteezy_london-uk-november-24-2016-heathrow-express-train-to_16108060_medium-1080x675.jpg'
      }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: 'DEU',
    lat: 51.16,
    lon: 10.45,
    codeStandard: 'Eurocode 3 / DIN EN 1090',
    tagline: 'Automated distribution hubs, heavy industrial & plant framing',
    projects: [
      {
        id: 'de-1',
        title: 'Frankfurt Logistic Distribution Hub',
        location: 'Frankfurt, Germany',
        tonnage: '2,200 Tons',
        sector: 'Industrial Logistics',
        codeStandard: 'DIN EN 1090 / Eurocode 3',
        description: 'High-bay automated distribution center with multi-tier conveyor framing and mezzanine platforms.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Industrial-Process-Facility.jpg'
      }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: 'AUS',
    lat: -25.27,
    lon: 133.77,
    codeStandard: 'AS 4100 Steel Structures Code',
    tagline: 'Mining facilities, stadiums & commercial office towers',
    projects: [
      {
        id: 'au-1',
        title: 'Sydney Metro Station Concourse',
        location: 'Sydney, Australia',
        tonnage: '1,350 Tons',
        sector: 'Infrastructure & Rail',
        codeStandard: 'AS 4100 / AS/NZS 5131',
        description: 'Complex architectural steel arches, pedestrian overpass bridges, and high-tensile bolted connections.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Cays-Buliding.jpg'
      }
    ]
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: 'NZL',
    lat: -40.9,
    lon: 174.88,
    codeStandard: 'NZS 3404 Seismic Steel Structures',
    tagline: 'Ductile moment frames & earthquake-resilient structures',
    projects: [
      {
        id: 'nz-1',
        title: 'Auckland Commercial Tower',
        location: 'Auckland, New Zealand',
        tonnage: '980 Tons',
        sector: 'Commercial High-Rise',
        codeStandard: 'NZS 3404 Seismic Resilient',
        description: 'Ductile moment-resisting frame engineering, slotted bolted connections, and shop fabrication packages.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Campbell-Bldg.jpg'
      }
    ]
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: 'UAE',
    lat: 24.0,
    lon: 54.0,
    codeStandard: 'AISC / British Standard Hybrid',
    tagline: 'Complex canopies, curved steelwork & commercial mega-structures',
    projects: [
      {
        id: 'ae-1',
        title: 'Dubai Commercial Logistics Canopy',
        location: 'Dubai, UAE',
        tonnage: '1,500 Tons',
        sector: 'Commercial Logistics',
        codeStandard: 'AISC & BS Standards',
        description: 'Architecturally exposed structural steel (AESS) canopy with long-span curved trusses and spatial joints.',
        image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Concrete-Factory.jpg'
      }
    ]
  }
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function createLabelSprite(text: string, flag: string, isHQ = false): THREE.Sprite {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  canvas.width = 512;
  canvas.height = 128;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const pillX = 14;
  const pillY = 14;
  const pillW = canvas.width - 28;
  const pillH = canvas.height - 28;
  const radius = pillH / 2;

  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.28)';
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 6;

  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, radius);
  ctx.fillStyle = isHQ ? '#e8250e' : '#fdfdfe';
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, radius);
  ctx.lineWidth = isHQ ? 4 : 3;
  ctx.strokeStyle = isHQ ? '#ff4d36' : '#b5c1cb';
  ctx.stroke();

  ctx.font = 'bold 36px "Archivo Black", Archivo, sans-serif';
  ctx.fillStyle = isHQ ? '#ffffff' : '#0f172a';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${flag}  ${text}`, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(3.0, 0.75, 1);
  return sprite;
}

export const InteractiveGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [projectIndex, setProjectIndex] = useState(0);

  // References for camera, zoom & rotation animation
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);
  const targetCameraZRef = useRef<number>(18.0);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const clickableObjectsRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight || 560;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18.0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. High-Clarity Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.4);
    sunLight.position.set(20, 20, 25);
    scene.add(sunLight);

    const frontFillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    frontFillLight.position.set(-20, 5, 20);
    scene.add(frontFillLight);

    const slateLight = new THREE.PointLight(0x0099ff, 2.2, 60);
    slateLight.position.set(0, -15, 15);
    scene.add(slateLight);

    // 3. Globe Main Group: centered in view for optimal mask alignment
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 0);
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Bigger globe scale that fits prominently within the view
    const GLOBE_RADIUS = 7.6;

    // 4. Earth Continents Sphere
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth-texture.jpg');
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    const earthSpecular = textureLoader.load('/earth-specular.jpg');

    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      specularMap: earthSpecular,
      specular: new THREE.Color(0x0099ff),
      shininess: 30,
      bumpMap: earthTexture,
      bumpScale: 0.08,
      color: new THREE.Color(0xffffff),
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 5. Glowing Atmospheric Halo (Clean seamless atmosphere without graticule wireframe grid)
    const atmosphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.03, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0099ff,
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    globeGroup.add(new THREE.Mesh(atmosphereGeometry, atmosphereMaterial));

    // 7. Clickable Objects array
    const clickableObjects: THREE.Object3D[] = [];
    clickableObjectsRef.current = clickableObjects;

    // 8. Bangalore Headquarters Pin & 3D Anchored Label
    const hqData = COUNTRIES_DATA.find((c) => c.isHQ)!;
    const hqPos = latLonToVector3(hqData.lat, hqData.lon, GLOBE_RADIUS);

    const hqPinGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const hqPinMat = new THREE.MeshBasicMaterial({ color: 0xe8250e });
    const hqPin = new THREE.Mesh(hqPinGeo, hqPinMat);
    hqPin.position.copy(hqPos);
    hqPin.userData = { countryData: hqData };
    globeGroup.add(hqPin);
    clickableObjects.push(hqPin);

    // Pulsing Radar Wave
    const ringGeo = new THREE.RingGeometry(0.25, 0.55, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe8250e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const hqRing = new THREE.Mesh(ringGeo, ringMat);
    hqRing.position.copy(hqPos);
    hqRing.lookAt(0, 0, 0);
    globeGroup.add(hqRing);

    // HQ 3D Label Sprite
    const hqSprite = createLabelSprite(hqData.name, hqData.flag, true);
    hqSprite.position.copy(hqPos).multiplyScalar(1.09);
    hqSprite.userData = { countryData: hqData };
    globeGroup.add(hqSprite);
    clickableObjects.push(hqSprite);

    // 9. Served Countries Pins, 3D Geodesic Arcs & 3D Anchored Labels
    const photonPackets: { curve: THREE.QuadraticBezierCurve3; mesh: THREE.Mesh; progress: number; speed: number }[] = [];

    COUNTRIES_DATA.filter((c) => !c.isHQ).forEach((country, idx) => {
      const destPos = latLonToVector3(country.lat, country.lon, GLOBE_RADIUS);

      const destPinGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const destPinMat = new THREE.MeshBasicMaterial({ color: 0x0099ff });
      const destPin = new THREE.Mesh(destPinGeo, destPinMat);
      destPin.position.copy(destPos);
      destPin.userData = { countryData: country };
      globeGroup.add(destPin);
      clickableObjects.push(destPin);

      // Destination Aura Ring
      const destRingGeo = new THREE.RingGeometry(0.2, 0.38, 24);
      const destRingMat = new THREE.MeshBasicMaterial({
        color: 0x0099ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const destRing = new THREE.Mesh(destRingGeo, destRingMat);
      destRing.position.copy(destPos);
      destRing.lookAt(0, 0, 0);
      globeGroup.add(destRing);

      // 3D Country Name Label Sprite
      const countrySprite = createLabelSprite(country.name, country.flag, false);
      countrySprite.position.copy(destPos).multiplyScalar(1.09);
      countrySprite.userData = { countryData: country };
      globeGroup.add(countrySprite);
      clickableObjects.push(countrySprite);

      // 3D Geodesic Arc from Bangalore HQ to this Country or Branch
      const distance = hqPos.distanceTo(destPos);
      const midPoint = new THREE.Vector3().addVectors(hqPos, destPos).multiplyScalar(0.5);
      const arcAltitude = GLOBE_RADIUS + Math.max(1.5, distance * 0.32);
      midPoint.normalize().multiplyScalar(arcAltitude);

      const curve = new THREE.QuadraticBezierCurve3(hqPos, midPoint, destPos);
      const curvePoints = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);

      const curveMat = new THREE.LineBasicMaterial({
        color: 0x0099ff,
        transparent: true,
        opacity: 0.75,
      });
      const lineMesh = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(lineMesh);

      // Animated Light Pulse
      const photonGeo = new THREE.SphereGeometry(0.10, 8, 8);
      const photonMat = new THREE.MeshBasicMaterial({ color: 0xe8250e });
      const photonMesh = new THREE.Mesh(photonGeo, photonMat);
      globeGroup.add(photonMesh);

      photonPackets.push({
        curve,
        mesh: photonMesh,
        progress: (idx * 0.14) % 1.0,
        speed: 0.0035 + (idx % 3) * 0.001,
      });
    });

    // Initial View Centered on India
    globeGroup.rotation.y = -Math.PI / 1.7;
    globeGroup.rotation.x = 0.22;

    // 10. Interaction, Raycasting & 4-Second Idle Auto-Spin Resumption
    let isDragging = false;
    let isAutoSpinning = true;
    let resumeSpinTimeout: ReturnType<typeof setTimeout> | null = null;
    let pointerDownPos = { x: 0, y: 0 };
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const resetResumeTimer = () => {
      isAutoSpinning = false;
      if (resumeSpinTimeout) {
        clearTimeout(resumeSpinTimeout);
      }
      // Resume spinning after 4 seconds of idle time
      resumeSpinTimeout = setTimeout(() => {
        isAutoSpinning = true;
      }, 4000);
    };

    const triggerRaycast = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickableObjectsRef.current, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData && hit.userData.countryData) {
          handleSelectCountry(hit.userData.countryData);
          return true;
        }
      }
      return false;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      resetResumeTimer();
      pointerDownPos = { x: e.clientX, y: e.clientY };
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      resetResumeTimer();
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;
      globeGroup.rotation.x = Math.max(-Math.PI / 2.3, Math.min(Math.PI / 2.3, globeGroup.rotation.x));

      dragVelocity = { x: deltaX * 0.003, y: deltaY * 0.003 };
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = (e: MouseEvent) => {
      isDragging = false;
      resetResumeTimer();

      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist < 6) {
        triggerRaycast(e.clientX, e.clientY);
      }
    };

    let initialPinchDistance = 0;
    let initialPinchTargetZ = 18.0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        resetResumeTimer();
        pointerDownPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        isDragging = false;
        resetResumeTimer();
        initialPinchDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialPinchTargetZ = targetCameraZRef.current;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && initialPinchDistance > 0) {
        resetResumeTimer();
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (currentDist > 0) {
          const factor = initialPinchDistance / currentDist;
          targetCameraZRef.current = Math.max(13.2, Math.min(24.0, initialPinchTargetZ * factor));
        }
        return;
      }

      if (!isDragging || e.touches.length !== 1) return;
      resetResumeTimer();
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;
      globeGroup.rotation.x = Math.max(-Math.PI / 2.3, Math.min(Math.PI / 2.3, globeGroup.rotation.x));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        initialPinchDistance = 0;
      }
      if (e.touches.length === 0) {
        isDragging = false;
        resetResumeTimer();
      }

      if (e.changedTouches.length === 1 && !isDragging) {
        const touch = e.changedTouches[0];
        const dist = Math.hypot(touch.clientX - pointerDownPos.x, touch.clientY - pointerDownPos.y);
        if (dist < 8) {
          triggerRaycast(touch.clientX, touch.clientY);
        }
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      resetResumeTimer();
      // Directly modify targetCameraZRef with safe zoom clamping so sphere never clips into edges
      const zoomDelta = e.deltaY * 0.012;
      targetCameraZRef.current = Math.max(13.2, Math.min(24.0, targetCameraZRef.current + zoomDelta));
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // 11. Animation Loop with Dynamic Camera Zoom
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera zoom
      camera.position.z += (targetCameraZRef.current - camera.position.z) * 0.08;

      // Smooth rotation targeting when country is selected
      if (targetRotationRef.current) {
        globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * 0.06;
        globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * 0.06;

        if (
          Math.abs(targetRotationRef.current.y - globeGroup.rotation.y) < 0.004 &&
          Math.abs(targetRotationRef.current.x - globeGroup.rotation.x) < 0.004
        ) {
          targetRotationRef.current = null;
        }
      } else if (!isDragging) {
        globeGroup.rotation.y += dragVelocity.x;
        globeGroup.rotation.x += dragVelocity.y;
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;

        if (isAutoSpinning) {
          globeGroup.rotation.y += 0.0016;
        }
      }

      // Pulse Bangalore HQ radar wave
      const ringScale = 1.0 + Math.sin(elapsedTime * 3) * 0.35;
      hqRing.scale.set(ringScale, ringScale, 1);
      (hqRing.material as THREE.MeshBasicMaterial).opacity = 0.85 - (ringScale - 1.0) * 0.7;

      // Animate flowing photons along geodesic flight arcs
      photonPackets.forEach((p) => {
        p.progress = (p.progress + p.speed) % 1.0;
        const pos = p.curve.getPoint(p.progress);
        p.mesh.position.copy(pos);
      });

      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height || 520;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (resumeSpinTimeout) clearTimeout(resumeSpinTimeout);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      domElement.removeEventListener('wheel', onWheel);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleSelectCountry = (country: CountryData) => {
    setSelectedCountry(country);
    setProjectIndex(0);

    // Exact spherical rotation to center selected country directly in the camera view
    const targetY = -((country.lon + 90) * (Math.PI / 180));
    const targetX = (country.lat * (Math.PI / 180)) * 0.9;
    targetRotationRef.current = { x: targetX, y: targetY };

    // Zoom camera in towards the country cleanly without any clipping
    targetCameraZRef.current = 15.2;
  };

  const handleCloseProject = () => {
    setSelectedCountry(null);
    targetRotationRef.current = { x: 0.22, y: -Math.PI / 1.7 };
    targetCameraZRef.current = 18.0;
  };

  return (
    <div className="w-full h-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between py-2 select-none">
      
      {/* MAIN VIEWPORT: Grid separates Left Globe & Right Project Panel completely */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 min-h-0">

        {/* LEFT COLUMN: 3D Globe Viewport with Soft Feathered Edge Blend */}
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ${selectedCountry ? 'lg:col-span-6 min-h-[520px] max-h-[600px]' : 'lg:col-span-12 min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]'
            }`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.12)_0%,transparent_68%)] z-0"
          />

          {/* Mount Container with Smooth Radial Mask - Eliminates any abrupt square clipping */}
          <div
            ref={mountRef}
            className="w-full h-full cursor-grab active:cursor-grabbing select-none relative z-10 [mask-image:radial-gradient(ellipse_82%_82%_at_50%_50%,#000_50%,rgba(0,0,0,0.85)_68%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_82%_82%_at_50%_50%,#000_50%,rgba(0,0,0,0.85)_68%,transparent_96%)]"
          />
        </motion.div>

        {/* RIGHT COLUMN: Country Specific Projects Showcase Panel */}
        <AnimatePresence mode="wait">
          {selectedCountry && (
            <motion.div
              key={selectedCountry.id}
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-sm relative flex flex-col justify-between max-h-[580px] overflow-hidden"
            >
              {/* Back to Center / Close Button */}
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100 flex-shrink-0">
                <button
                  onClick={handleCloseProject}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#0099ff] hover:text-[#e8250e] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Full Globe</span>
                </button>
                <button
                  onClick={handleCloseProject}
                  className="p-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200"
                  title="Close and center globe"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Country Header Info */}
              <div className="flex-shrink-0 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-[#fdfdfe] font-mono font-medium text-xs">{selectedCountry.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-heading font-medium text-slate-900">
                        {selectedCountry.name}
                      </h3>
                      {selectedCountry.isHQ && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-extrabold bg-[#e8250e]/10 text-[#e8250e] border border-[#e8250e]/30">
                          GLOBAL HQ
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#0099ff]">
                      {selectedCountry.codeStandard}
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Project Card */}
              {selectedCountry.projects.length > 0 ? (
                <div className="space-y-2 flex-1 flex flex-col justify-between min-h-0">
                  {(() => {
                    const currentProj = selectedCountry.projects[projectIndex] || selectedCountry.projects[0];
                    return (
                      <div className="border border-[#b5c1cb] rounded-xl overflow-hidden bg-[#fdfdfe] shadow-xs flex flex-col flex-1 min-h-0">
                        <div className="relative aspect-[16/9] max-h-[220px] w-full overflow-hidden bg-slate-900 flex-shrink-0">
                          <img
                            src={currentProj.image}
                            alt={currentProj.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-[#e8250e] text-white px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium shadow-md">
                            {currentProj.tonnage}
                          </div>
                          <div className="absolute top-2 right-2 bg-[#0099ff] text-white px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium shadow-sm">
                            {currentProj.sector}
                          </div>
                        </div>

                        <div className="p-3 space-y-1.5 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-heading font-medium text-sm sm:text-base text-slate-900 leading-snug">
                              {currentProj.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-sans-clean line-clamp-2 mt-0.5">
                              {currentProj.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-1.5 border-t border-[#b5c1cb] text-[11px] font-mono text-slate-500">
                            <span className="flex items-center gap-1 text-[#e8250e] font-medium">
                              <MapPin className="w-3 h-3" />
                              {currentProj.location}
                            </span>
                            <span className="font-semibold text-[#0099ff]">
                              {currentProj.codeStandard}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Multiple Projects Switcher */}
                  {selectedCountry.projects.length > 1 && (
                    <div className="flex items-center gap-1.5 pt-1 overflow-x-auto pb-0.5 flex-shrink-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">
                        Projects ({selectedCountry.projects.length}):
                      </span>
                      {selectedCountry.projects.map((p, idx) => (
                        <button
                          key={p.id}
                          onClick={() => setProjectIndex(idx)}
                          className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium transition-all ${projectIndex === idx
                            ? 'bg-[#0099ff] text-white shadow-sm'
                            : 'bg-[#fdfdfe] text-[#0099ff] border border-[#b5c1cb] hover:bg-slate-100'
                            }`}
                        >
                          {idx + 1}. {p.title.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 text-xs text-slate-500 font-mono">
                  Active connection design and modeling projects underway for this region.
                </div>
              )}

              {/* Bottom Quick Switcher between other countries */}
              <div className="mt-2 pt-2 border-t border-[#b5c1cb]/60 flex items-center justify-between flex-shrink-0">
                <span className="text-[10px] font-mono text-slate-400">Switch Country:</span>
                <div className="flex items-center gap-1 flex-wrap">
                  {COUNTRIES_DATA.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleSelectCountry(c)}
                      className={`text-xs px-2 py-0.5 rounded font-mono font-medium transition-all ${selectedCountry.id === c.id
                        ? 'bg-slate-900 text-white ring-1 ring-[#e8250e] shadow-xs'
                        : 'bg-[#fdfdfe] text-slate-700 border border-[#b5c1cb] hover:bg-slate-100'
                        }`}
                      title={c.name}
                    >
                      {c.flag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
