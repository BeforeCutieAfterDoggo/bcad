import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const FloatingLand: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
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

    // Create floating land
    const landGeometry = new THREE.BoxGeometry(12, 1, 6);
    const landMaterial = new THREE.MeshLambertMaterial({
      color: 0x8b4513, // Brown color for earth
      transparent: true,
      opacity: 0.9,
    });
    const land = new THREE.Mesh(landGeometry, landMaterial);
    land.position.y = 2;
    land.castShadow = true;
    land.receiveShadow = true;
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
      const x = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 6;
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
    // Small trees
    for (let i = 0; i < 3; i++) {
      const treeTrunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 1.5);
      const treeTrunkMaterial = new THREE.MeshLambertMaterial({
        color: 0x8b4513,
      });
      const treeTrunk = new THREE.Mesh(treeTrunkGeometry, treeTrunkMaterial);
      treeTrunk.position.set(
        (Math.random() - 0.5) * 6,
        3.25,
        (Math.random() - 0.5) * 4
      );
      treeTrunk.castShadow = true;
      scene.add(treeTrunk);

      const treeLeavesGeometry = new THREE.SphereGeometry(0.8);
      const treeLeavesMaterial = new THREE.MeshLambertMaterial({
        color: 0x228b22,
      });
      const treeLeaves = new THREE.Mesh(treeLeavesGeometry, treeLeavesMaterial);
      treeLeaves.position.set(treeTrunk.position.x, 4.25, treeTrunk.position.z);
      treeLeaves.castShadow = true;
      scene.add(treeLeaves);
    }

    // Add some rocks
    for (let i = 0; i < 5; i++) {
      const rockGeometry = new THREE.DodecahedronGeometry(
        0.3 + Math.random() * 0.2
      );
      const rockMaterial = new THREE.MeshLambertMaterial({ color: 0x696969 });
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      rock.position.set(
        (Math.random() - 0.5) * 6,
        2.5 + Math.random() * 0.5,
        (Math.random() - 0.5) * 4
      );
      rock.castShadow = true;
      scene.add(rock);
    }

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
