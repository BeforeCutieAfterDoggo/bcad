import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BoxHelper } from "three";

const FloatingLand: React.FC = () => {
  const [showRoseModal, setShowRoseModal] = useState(false);
  const [roseHovered, setRoseHovered] = useState(false);
  const [roseBushLoaded, setRoseBushLoaded] = useState(false);
  const [redRoseLoaded, setRedRoseLoaded] = useState(false);
  const roseBushRef = useRef<THREE.Object3D | null>(null);
  const redRoseRef = useRef<THREE.Object3D | null>(null);
  const modalCanvasRef = useRef<HTMLDivElement>(null);
  const mainCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const landRef = useRef<THREE.Mesh | null>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // --- SKY DOME GRADIENT (moved here for scope) ---
    // Define gradient color stops for top and bottom at key times
    const skyGradientStops = [
      { t: 0.0, top: 0x0a0a2a, bottom: 0x1a237e }, // midnight
      { t: 0.18, top: 0xffb347, bottom: 0xffccff }, // sunrise
      { t: 0.25, top: 0xffe082, bottom: 0xfff3e0 }, // early morning
      { t: 0.32, top: 0x87ceeb, bottom: 0xb3e5fc }, // blue morning
      { t: 0.5, top: 0x87ceeb, bottom: 0xb3e5fc }, // midday
      { t: 0.68, top: 0x81d4fa, bottom: 0x4fc3f7 }, // afternoon
      { t: 0.75, top: 0xff7043, bottom: 0x6a1b9a }, // sunset
      { t: 0.82, top: 0x6a1b9a, bottom: 0x311b92 }, // dusk
      { t: 1.0, top: 0x0a0a2a, bottom: 0x1a237e }, // midnight
    ];
    function lerpHex(a: number, b: number, t: number) {
      const ca = new THREE.Color(a),
        cb = new THREE.Color(b);
      return ca.lerp(cb, t).getHex();
    }
    function getGradientColors(stops: any[], t: number) {
      for (let i = 1; i < stops.length; i++) {
        if (t <= stops[i].t) {
          const prev = stops[i - 1];
          const next = stops[i];
          const localT = (t - prev.t) / (next.t - prev.t);
          return {
            top: lerpHex(prev.top, next.top, localT),
            bottom: lerpHex(prev.bottom, next.bottom, localT),
          };
        }
      }
      return {
        top: stops[stops.length - 1].top,
        bottom: stops[stops.length - 1].bottom,
      };
    }
    // Create a large sphere for the sky dome
    const skyGeo = new THREE.SphereGeometry(100, 32, 32);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x87ceeb) },
        bottomColor: { value: new THREE.Color(0xb3e5fc) },
      },
      vertexShader: `varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y * 0.5 + 0.5;
          gl_FragColor = vec4(mix(bottomColor, topColor, h), 1.0);
        }`,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyDome);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    mainCameraRef.current = camera;
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x87ceeb, 1); // Sky blue background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Setup OrbitControls for interactive camera
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth camera movement
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3; // Minimum zoom distance
    controls.maxDistance = 50; // Maximum zoom distance
    controls.maxPolarAngle = Math.PI / 2; // Prevent going below ground level
    controls.enablePan = true; // Enable panning
    controls.enableZoom = true; // Enable zooming
    controls.enableRotate = true; // Enable rotation
    controls.autoRotate = false; // Disable auto-rotation initially
    controls.autoRotateSpeed = 0.5; // Speed if auto-rotation is enabled

    // Time of day: 0 = midnight, 0.25 = sunrise, 0.5 = midday, 0.75 = sunset, 1 = midnight
    // Set to undefined for auto-animation, or a value 0-1 to test a specific time
    let timeOfDay: number | undefined = 0.5; // e.g. 0.25 for sunrise, 0.5 for midday, undefined for auto

    // Helper to interpolate between two colors
    function lerpColor(a: THREE.Color, b: THREE.Color, t: number) {
      return a.clone().lerp(b, t);
    }

    // Sky and light color stops
    const skyStops = [
      { t: 0.0, color: new THREE.Color(0x0a0a2a) }, // midnight
      { t: 0.18, color: new THREE.Color(0xffb347) }, // sunrise
      { t: 0.25, color: new THREE.Color(0xffccff) }, // early morning
      { t: 0.32, color: new THREE.Color(0x87ceeb) }, // blue morning
      { t: 0.5, color: new THREE.Color(0x87ceeb) }, // midday
      { t: 0.68, color: new THREE.Color(0x87ceeb) }, // afternoon
      { t: 0.75, color: new THREE.Color(0xff7043) }, // sunset
      { t: 0.82, color: new THREE.Color(0x6a1b9a) }, // dusk
      { t: 1.0, color: new THREE.Color(0x0a0a2a) }, // midnight
    ];
    const sunStops = [
      { t: 0.0, color: new THREE.Color(0x222244) }, // midnight
      { t: 0.18, color: new THREE.Color(0xffe066) }, // sunrise
      { t: 0.25, color: new THREE.Color(0xffffff) }, // morning
      { t: 0.5, color: new THREE.Color(0xffffff) }, // midday
      { t: 0.75, color: new THREE.Color(0xffe066) }, // sunset
      { t: 1.0, color: new THREE.Color(0x222244) }, // midnight
    ];
    const ambientStops = [
      { t: 0.0, color: new THREE.Color(0x111122) },
      { t: 0.18, color: new THREE.Color(0xffe0b2) },
      { t: 0.25, color: new THREE.Color(0xffffff) },
      { t: 0.5, color: new THREE.Color(0xffffff) },
      { t: 0.75, color: new THREE.Color(0xffe0b2) },
      { t: 1.0, color: new THREE.Color(0x111122) },
    ];

    // Helper to get interpolated color from stops
    function getColorFromStops(
      stops: { t: number; color: THREE.Color }[],
      t: number
    ) {
      for (let i = 1; i < stops.length; i++) {
        if (t <= stops[i].t) {
          const prev = stops[i - 1];
          const next = stops[i];
          const localT = (t - prev.t) / (next.t - prev.t);
          return lerpColor(prev.color, next.color, localT);
        }
      }
      return stops[stops.length - 1].color;
    }

    // Lighting setup for sunny day
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // Add some warm sunlight
    const sunLight = new THREE.PointLight(0xffd700, 0.8, 100);
    sunLight.position.set(15, 15, 15);
    scene.add(sunLight);

    // Create floating land (10x bigger)
    const landGeometry = new THREE.BoxGeometry(32, 1, 16);
    const landMaterial = new THREE.MeshLambertMaterial({
      color: 0x8b4513, // Brown color for earth
      transparent: true,
      opacity: 0.9,
    });
    const land = new THREE.Mesh(landGeometry, landMaterial);
    land.position.y = -3; // Lower the land
    land.castShadow = true;
    land.receiveShadow = true;
    landRef.current = land;
    scene.add(land);

    // --- INSTANCED GRASS SYSTEM ---
    const grassBladeCount = 60000;
    const grassGeometry = new THREE.PlaneGeometry(0.03, 0.4);
    const grassMaterial = new THREE.MeshLambertMaterial({
      color: new THREE.Color().setHSL(0.28, 0.7, 0.32),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const grassMesh = new THREE.InstancedMesh(
      grassGeometry,
      grassMaterial,
      grassBladeCount
    );
    const dummy = new THREE.Object3D();
    // Store per-blade data for animation
    const bladeData: {
      x: number;
      z: number;
      height: number;
      phase: number;
      yRot: number;
      colorL: number;
    }[] = [];
    for (let i = 0; i < grassBladeCount; i++) {
      // Randomize blade properties
      const isTall = i % 20 === 0;
      const height = isTall
        ? 0.7 + Math.random() * 0.2
        : 0.22 + Math.random() * 0.18;
      const width = isTall
        ? 0.05 + Math.random() * 0.02
        : 0.025 + Math.random() * 0.02;
      const x = (Math.random() - 0.5) * 32;
      const z = (Math.random() - 0.5) * 16;
      const yRot = Math.random() * Math.PI * 2;
      const phase = Math.random() * Math.PI * 2;
      const colorL = 0.28 + Math.random() * 0.18;
      // Set up instance matrix
      dummy.position.set(x, 0.5 + height / 2, z);
      dummy.scale.set(width / 0.03, height / 0.4, 1);
      dummy.rotation.set(0, yRot, 0);
      dummy.updateMatrix();
      grassMesh.setMatrixAt(i, dummy.matrix);
      // Set up per-instance color (optional, for more variation)
      if (grassMesh.instanceColor) {
        grassMesh.setColorAt(i, new THREE.Color().setHSL(0.28, 0.7, colorL));
      }
      bladeData.push({ x, z, height, phase, yRot, colorL });
    }
    // Instead of scene.add(grassMesh), do:
    land.add(grassMesh);

    // Add some decorative elements on the land
    // Remove random trees and rocks
    // Small trees
    // for (let i = 0; i < 3; i++) { ... }
    // Add some rocks
    // for (let i = 0; i < 5; i++) { ... }

    // Add clouds in the background
    for (let i = 0; i < 8; i++) {
      const cloudGeometry = new THREE.SphereGeometry(0.5 + Math.random() * 0.5);
      const cloudMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
      });
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.set(
        (Math.random() - 0.5) * 40,
        8 + Math.random() * 5,
        -20 - Math.random() * 10
      );
      scene.add(cloud);
    }

    // Add floating particles (dust motes in sunlight)
    const particleCount = 100;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = Math.random() * 15;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      particleSizes[i] = Math.random() * 0.1;
    }

    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particles.setAttribute("size", new THREE.BufferAttribute(particleSizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Load mango tree GLB and add to land
    const loader = new GLTFLoader();
    loader.load(
      "/garden/mango_tree.glb",
      (gltf) => {
        const mangoTree = gltf.scene;
        // Scale and position the tree on the land
        mangoTree.scale.set(2, 2, 2); // Adjust as needed
        mangoTree.position.set(5, 2, 0); // Move up (was 0.5)
        land.add(mangoTree);
        // Load Jamaican cherry tree and place it next to the mango tree
        loader.load(
          "/garden/jamaican_cherry_tree.glb",
          (gltf2) => {
            const cherryTree = gltf2.scene;
            cherryTree.scale.set(2, 2, 2); // Match mango tree scale
            cherryTree.position.set(-5, 2, 0); // Place next to mango tree (x=3)
            land.add(cherryTree);
          },
          undefined,
          (error) => {
            console.error("Error loading Jamaican cherry tree:", error);
          }
        );
      },
      undefined,
      (error) => {
        console.error("Error loading mango tree:", error);
      }
    );

    // Load marigold.glb once and place it in a corner
    loader.load(
      "/garden/marigold.glb",
      (gltf) => {
        const marigold = gltf.scene;
        marigold.position.set(-10, 1, 5); // Near a corner of the land
        marigold.scale.set(1, 1, 1);
        land.add(marigold);
      },
      undefined,
      (error) => {
        console.error("Error loading marigold:", error);
      }
    );

    // Load rose_bush.glb and place it in the right bottom corner
    loader.load(
      "/garden/rose_bush.glb",
      (gltf) => {
        const roseBush = gltf.scene;
        roseBush.position.set(10, 0.5, 6); // Lowered y from 0.5 to 0.2
        roseBush.scale.set(50, 50, 50);
        roseBush.rotation.set(180, 270, 180); // Ensure upright orientation
        roseBushRef.current = roseBush;
        land.add(roseBush);
        setRoseBushLoaded(true); // Mark as loaded and ready for interaction
        // Remove the yellow BoxHelper for the rose bush
        // const boxHelper = new BoxHelper(roseBush, 0xffff00);
        // boxHelper.rotation.copy(roseBush.rotation);
        // land.add(boxHelper);
      },
      undefined,
      (error) => {
        console.error("Error loading rose bush:", error);
      }
    );

    // Load caladium_plant.glb and place it next to the marigold
    loader.load(
      "/garden/caladium_plant.glb",
      (gltf) => {
        const caladium = gltf.scene;
        caladium.position.set(-8, 0.5, 5); // Lowered and next to marigold
        caladium.scale.set(0.05, 0.05, 0.05); // 2x smaller than before
        land.add(caladium);
      },
      undefined,
      (error) => {
        console.error("Error loading caladium plant:", error);
      }
    );

    // Animation variables
    let time = 0;
    const landInitialY = land.position.y;

    // Animation loop
    const animate = () => {
      time += 0.01;

      // Gentle floating animation for the land
      land.position.y = landInitialY + Math.sin(time * 0.5) * 0.3;
      // --- INSTANCED GRASS ANIMATION ---
      for (let i = 0; i < grassBladeCount; i++) {
        const { x, z, height, phase, yRot, colorL } = bladeData[i];
        // Animate waving (rotation.z), not Y
        const gust = Math.sin(time * 0.1) > 0.8 ? 2.2 : 1.0;
        const wind =
          Math.sin(time * 2 + phase + x * 0.5 + z * 0.5) * 0.22 * gust;
        dummy.position.set(x, 0.5 + height / 2, z);
        dummy.scale.set((height > 0.5 ? 0.05 : 0.025) / 0.03, height / 0.4, 1);
        dummy.rotation.set(0, yRot, wind);
        dummy.updateMatrix();
        grassMesh.setMatrixAt(i, dummy.matrix);
        // Optionally animate color (darker when bent)
        if (grassMesh.instanceColor) {
          grassMesh.setColorAt(
            i,
            new THREE.Color().setHSL(0.28, 0.7, colorL - Math.abs(wind) * 0.15)
          );
        }
      }
      grassMesh.instanceMatrix.needsUpdate = true;
      if (grassMesh.instanceColor) grassMesh.instanceColor.needsUpdate = true;
      // Animate dew and flowers to follow land
      //   dewGroup.children.forEach((dew) => {
      //     const mesh = dew as THREE.Mesh;
      //     mesh.position.y =
      //       land.position.y +
      //       0.5 +
      //       ((mesh.geometry as any).parameters.radius || 0.02) +
      //       0.1;
      //   });
      //   flowerGroup.children.forEach((flower) => {
      //     const mesh = flower as THREE.Mesh;
      //     mesh.position.y =
      //       land.position.y +
      //       0.5 +
      //       ((mesh.geometry as any).parameters.radius || 0.04) +
      //       0.13;
      //   });

      // Rotate the land slightly
      land.rotation.y = Math.sin(time * 0.2) * 0.1;
      // --- GRASS ANIMATION CODE REMOVED ---

      // Animate particles
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.01; // Move particles up
        if (positions[i * 3 + 1] > 15) {
          positions[i * 3 + 1] = 0; // Reset to bottom
        }
      }
      particles.attributes.position.needsUpdate = true;

      // Update controls
      controls.update();

      // --- SKY & LIGHT ANIMATION ---
      // Animate or override time of day
      let t: number =
        typeof timeOfDay === "number" && !isNaN(timeOfDay)
          ? timeOfDay
          : (time * 0.01) % 1;
      // Interpolate sky and light colors
      const skyColor = getColorFromStops(skyStops, t);
      const sunColor = getColorFromStops(sunStops, t);
      const ambientColor = getColorFromStops(ambientStops, t);
      // --- SKY DOME GRADIENT ANIMATION ---
      // Animate sky gradient
      const grad = getGradientColors(skyGradientStops, t);
      skyMat.uniforms.topColor.value.setHex(grad.top);
      skyMat.uniforms.bottomColor.value.setHex(grad.bottom);
      // Remove renderer.setClearColor(skyColor, 1); (sky dome now handles background)
      ambientLight.color = ambientColor;
      directionalLight.color = sunColor;
      sunLight.color = sunColor;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      controls.update();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Preload red rose GLB for faster modal opening
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/garden/red_rose.glb",
      (gltf) => {
        redRoseRef.current = gltf.scene;
        setRedRoseLoaded(true);
      },
      undefined,
      (error) => {
        console.error("Error preloading red rose:", error);
      }
    );
  }, []);

  // Raycaster for rose bush click and hover
  useEffect(() => {
    if (!rendererRef.current || !roseBushRef.current || !roseBushLoaded) return;
    const renderer = rendererRef.current;
    const dom = renderer.domElement;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    function onClick(event: MouseEvent) {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(
        mouse,
        (sceneRef.current as any).children.find((c: any) => c.isCamera) ||
          mainCameraRef.current
      );
      const intersects = raycaster.intersectObject(roseBushRef.current!, true);
      console.log("Rose bush raycast intersects:", intersects);
      if (intersects.length > 0) {
        setShowRoseModal(true);
      }
    }
    function onMouseMove(event: MouseEvent) {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(
        mouse,
        (sceneRef.current as any).children.find((c: any) => c.isCamera) ||
          mainCameraRef.current
      );
      const intersects = raycaster.intersectObject(roseBushRef.current!, true);
      const hitRose = intersects.length > 0;
      if (hitRose) {
        setRoseHovered(true);
        dom.style.cursor = "pointer";
      } else {
        setRoseHovered(false);
        dom.style.cursor = "";
      }
    }
    dom.addEventListener("click", onClick);
    dom.addEventListener("mousemove", onMouseMove);
    return () => {
      dom.removeEventListener("click", onClick);
      dom.removeEventListener("mousemove", onMouseMove);
      dom.style.cursor = "";
    };
  }, [roseBushLoaded]);

  // Highlight rose bush on hover
  useEffect(() => {
    const roseBush = roseBushRef.current;
    if (!roseBush) return;
    roseBush.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            if ("emissive" in mat)
              (mat.emissive as THREE.Color).set(
                roseHovered ? 0x442222 : 0x000000
              );
            if ("emissiveIntensity" in mat)
              mat.emissiveIntensity = roseHovered ? 0.2 : 0.0;
          });
        } else {
          if ("emissive" in mesh.material)
            (mesh.material.emissive as THREE.Color).set(
              roseHovered ? 0x442222 : 0x000000
            );
          if ("emissiveIntensity" in mesh.material)
            mesh.material.emissiveIntensity = roseHovered ? 0.5 : 0.0;
        }
      }
    });
  }, [roseHovered]);

  // Modal for rotating red rose and stats
  useEffect(() => {
    if (!showRoseModal || !modalCanvasRef.current) return;

    // Setup Three.js scene for modal
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, -0.5, 2.5); // Lowered camera y from 0 to -0.5
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    modalCanvasRef.current.innerHTML = "";
    modalCanvasRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xfff4e6, 0.6); // Warm ambient light
    scene.add(ambient);

    // Add directional light for better color visibility
    const directional = new THREE.DirectionalLight(0xffe066, 0.8); // Warm yellow directional light
    directional.position.set(5, 5, 5);
    scene.add(directional);

    // Add point light for additional illumination
    const pointLight = new THREE.PointLight(0xffb347, 0.5); // Orange point light
    pointLight.position.set(-3, 3, 3);
    scene.add(pointLight);

    // Use preloaded red rose if available
    let roseMesh: THREE.Object3D | null = null;
    if (redRoseRef.current) {
      roseMesh = redRoseRef.current.clone();
      roseMesh.scale.set(0.8, 0.8, 0.8);
      roseMesh.position.set(0, -1.5, 0); // Lowered rose position

      // Ensure materials are properly lit
      roseMesh.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              if (
                mat.type === "MeshStandardMaterial" ||
                mat.type === "MeshPhysicalMaterial"
              ) {
                mat.needsUpdate = true;
              }
            });
          } else {
            if (
              mesh.material.type === "MeshStandardMaterial" ||
              mesh.material.type === "MeshPhysicalMaterial"
            ) {
              mesh.material.needsUpdate = true;
            }
          }
        }
      });

      scene.add(roseMesh);
    } else {
      // Fallback: load if not preloaded
      const loader = new GLTFLoader();
      loader.load("/garden/red_rose.glb", (gltf) => {
        roseMesh = gltf.scene;
        roseMesh.scale.set(0.8, 0.8, 0.8);
        roseMesh.position.set(0, -1.5, 0); // Lowered rose position

        // Ensure materials are properly lit
        roseMesh.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                if (
                  mat.type === "MeshStandardMaterial" ||
                  mat.type === "MeshPhysicalMaterial"
                ) {
                  mat.needsUpdate = true;
                }
              });
            } else {
              if (
                mesh.material.type === "MeshStandardMaterial" ||
                mesh.material.type === "MeshPhysicalMaterial"
              ) {
                mesh.material.needsUpdate = true;
              }
            }
          }
        });

        scene.add(roseMesh);
      });
    }

    // Animation loop
    let frameId: number;
    function animate() {
      if (roseMesh) roseMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      modalCanvasRef.current && (modalCanvasRef.current.innerHTML = "");
    };
  }, [showRoseModal, redRoseLoaded]);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      />
      {/* Rose Modal */}
      {showRoseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl p-2 sm:p-4 w-full max-w-sm max-h-screen border border-cyan-400/50 shadow-cyan-400/20 overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-sm pointer-events-none"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg p-3 sm:p-4 overflow-y-auto max-h-[90vh]">
              {/* Close button with geeky styling */}
              <button
                className="absolute top-3 right-3 text-cyan-400 hover:text-red-400 text-xl font-mono bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded border border-cyan-400/30 transition-all duration-200 hover:border-red-400/50"
                onClick={() => setShowRoseModal(false)}
              >
                [×]
              </button>
              {/* Header with tech styling */}
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold mb-1 text-cyan-400 font-mono tracking-wider">
                  &lt;RED_ROSE_BUSH&gt;
                </h2>
                <div className="text-xs text-gray-400 font-mono mb-1">
                  [SYSTEM: FLORA_DATABASE_ACCESSED]
                </div>
              </div>
              {/* 3D Canvas with geeky border */}
              <div className="relative mb-3 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur-sm pointer-events-none"></div>
                <div
                  ref={modalCanvasRef}
                  className="relative mx-auto rounded-lg border border-cyan-400/50 bg-gray-900"
                  style={{
                    width: "min(300px, 90vw)",
                    height: "min(300px, 50vw)",
                  }}
                />
              </div>
              {/* Data panel with terminal styling */}
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-600/50 font-mono text-xs">
                <div className="text-cyan-400 mb-2">[DATA_ENTRY]</div>
                <div className="space-y-1 text-gray-300">
                  <div>
                    <span className="text-green-400">Species:</span>{" "}
                    <span className="text-yellow-400">Rosa × hybrida</span>
                  </div>
                  <div>
                    <span className="text-green-400">Height:</span>{" "}
                    <span className="text-yellow-400">~1.2m</span>
                  </div>
                  <div>
                    <span className="text-green-400">Origin:</span>{" "}
                    <span className="text-yellow-400">
                      Cultivated worldwide
                    </span>
                  </div>
                  <div>
                    <span className="text-green-400">Status:</span>{" "}
                    <span className="text-green-400">[ONLINE]</span>
                  </div>
                </div>
                <div className="mt-2 text-gray-400 text-xs border-t border-gray-600/50 pt-2">
                  <div className="text-purple-400">[NOTES]</div>
                  <div className="text-gray-300 mt-1">
                    This rose bush is prized for its vibrant color and classic
                    fragrance. It thrives in well-drained soil and full sun.
                  </div>
                </div>
              </div>
              {/* Footer with tech details */}
              <div className="text-center mt-3 text-xs text-gray-500 font-mono">
                <div>SYSTEM: THREE.JS_RENDERER_v0.158.0</div>
                <div>RENDER_TIME: {Date.now()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "15px",
          borderRadius: "8px",
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          zIndex: 1000,
          maxWidth: "300px",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>🎮 Controls</h3>
        <p style={{ margin: "5px 0" }}>
          <strong>Mouse/Trackpad:</strong>
        </p>
        <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
          <li>
            🖱️ <strong>Left Click + Drag:</strong> Rotate view
          </li>
          <li>
            🖱️ <strong>Right Click + Drag:</strong> Pan view
          </li>
          <li>
            🖱️ <strong>Scroll:</strong> Zoom in/out
          </li>
        </ul>
        <p style={{ margin: "5px 0" }}>
          <strong>Touch:</strong>
        </p>
        <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
          <li>
            👆 <strong>One finger drag:</strong> Rotate view
          </li>
          <li>
            👆 <strong>Two finger pinch:</strong> Zoom in/out
          </li>
          <li>
            👆 <strong>Two finger drag:</strong> Pan view
          </li>
        </ul>
      </div>
    </>
  );
};

export default FloatingLand;
