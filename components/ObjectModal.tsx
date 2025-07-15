import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface ObjectInfo {
  species: string;
  height: string;
  origin: string;
  status: string;
  notes: string;
  modelPath: string;
  position: { x: number; y: number; z: number };
  title: string;
}

interface ObjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  infoData: ObjectInfo;
  preloadedModel?: THREE.Object3D | null;
}

const ObjectModal: React.FC<ObjectModalProps> = ({
  isOpen,
  onClose,
  infoData,
  preloadedModel,
}) => {
  const modalCanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !modalCanvasRef.current) return;
    // Setup Three.js scene for modal
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, -0.5, 2.5);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    modalCanvasRef.current.innerHTML = "";
    modalCanvasRef.current.appendChild(renderer.domElement);
    // Brighter, whiter lighting
    const ambient = new THREE.AmbientLight(0xffffff, 1.2); // Stronger white ambient
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 5); // Stronger white directional
    directional.position.set(5, 5, 5);
    scene.add(directional);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8); // Extra fill from opposite side
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.7); // Brighter white point light
    pointLight.position.set(0, 3, 3);
    scene.add(pointLight);
    // Use preloaded model if available, else load
    let objectMesh: THREE.Object3D | null = null;
    if (preloadedModel) {
      objectMesh = preloadedModel.clone();
      objectMesh.scale.set(0.8, 0.8, 0.8);
      objectMesh.position.set(
        infoData.position?.x ?? 0,
        infoData.position?.y ?? 0,
        infoData.position?.z ?? 0
      );
      scene.add(objectMesh);
    } else {
      const loader = new GLTFLoader();
      loader.load(infoData.modelPath, (gltf) => {
        objectMesh = gltf.scene;
        objectMesh.scale.set(0.8, 0.8, 0.8);
        objectMesh.position.set(
          infoData.position?.x ?? 0,
          infoData.position?.y ?? 0,
          infoData.position?.z ?? 0
        );
        objectMesh.traverse((child) => {
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
        scene.add(objectMesh!);
      });
    }
    // Animation loop
    let frameId: number;
    function animate() {
      if (objectMesh) objectMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      modalCanvasRef.current && (modalCanvasRef.current.innerHTML = "");
    };
  }, [isOpen, infoData.modelPath, preloadedModel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20 backdrop-blur-xl">
      {/* Animated background particles */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

      <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl p-2 sm:p-4 w-full max-w-sm max-h-screen border border-white/30 shadow-white/20 overflow-hidden">
        {/* Iridescent border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/40 via-purple-500/40 via-pink-500/40 to-cyan-400/40 blur-lg animate-pulse pointer-events-none"></div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 via-pink-500/20 to-cyan-400/20 blur-md pointer-events-none"></div>

        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-3 sm:p-4 overflow-y-auto max-h-[90vh] border border-white/20">
          {/* Close button with futuristic styling */}
          <button
            className="absolute top-3 right-3 z-20 flex items-center justify-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] text-white hover:text-red-300 text-2xl font-mono bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 transition-all duration-300 hover:border-red-300/50 hover:scale-110 shadow-lg"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span className="w-full h-full flex items-center justify-center pointer-events-none">
              ✕
            </span>
          </button>

          {/* Header with bright tech styling */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-2 text-white font-mono tracking-wider drop-shadow-lg">
              {infoData.title}
            </h2>
            <div className="text-sm text-cyan-300 font-mono mb-2 animate-pulse">
              [SYSTEM: FLORA_DATABASE_ACCESSED]
            </div>
          </div>

          {/* 3D Canvas with glass border */}
          <div className="relative mb-4 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 rounded-xl blur-md pointer-events-none animate-pulse"></div>
            <div
              ref={modalCanvasRef}
              className="relative mx-auto rounded-xl border-2 border-white/60 bg-transparent backdrop-blur-sm shadow-2xl"
              style={{ width: "min(300px, 90vw)", height: "min(300px, 50vw)" }}
            />
          </div>

          {/* Data panel with glass styling */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/30 font-mono text-sm shadow-xl">
            <div className="text-cyan-300 mb-3 font-bold text-lg">
              [DATA_ENTRY]
            </div>
            <div className="space-y-2 text-white">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10">
                <span className="text-green-300 font-semibold">Species:</span>
                <span className="text-yellow-200 font-bold">
                  {infoData.species}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10">
                <span className="text-green-300 font-semibold">Height:</span>
                <span className="text-yellow-200 font-bold">
                  {infoData.height}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10">
                <span className="text-green-300 font-semibold">Origin:</span>
                <span className="text-yellow-200 font-bold">
                  {infoData.origin}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10">
                <span className="text-green-300 font-semibold">Status:</span>
                <span className="text-green-200 font-bold">
                  {infoData.status}
                </span>
              </div>
            </div>
            <div className="mt-4 text-white text-sm border-t border-white/20 pt-3">
              <div className="text-purple-300 font-bold mb-2">[NOTES]</div>
              <div className="text-white/90 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm">
                {infoData.notes}
              </div>
            </div>
          </div>

          {/* Footer with bright tech details */}
          <div className="text-center mt-4 text-xs text-cyan-200 font-mono">
            <div className="bg-white/5 p-2 rounded-lg border border-white/10 backdrop-blur-sm">
              <div>SYSTEM: THREE.JS_RENDERER_v0.158.0</div>
              <div>RENDER_TIME: {Date.now()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectModal;
