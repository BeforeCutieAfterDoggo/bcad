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
    if (!isOpen || !modalCanvasRef.current) return;
    // Setup Three.js scene for modal
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, -0.5, 2.5);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    modalCanvasRef.current.innerHTML = "";
    modalCanvasRef.current.appendChild(renderer.domElement);
    // Lighting
    const ambient = new THREE.AmbientLight(0xfff4e6, 0.6);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffe066, 0.8);
    directional.position.set(5, 5, 5);
    scene.add(directional);
    const pointLight = new THREE.PointLight(0xffb347, 0.5);
    pointLight.position.set(-3, 3, 3);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl p-2 sm:p-4 w-full max-w-sm max-h-screen border border-cyan-400/50 shadow-cyan-400/20 overflow-hidden">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-sm pointer-events-none"></div>
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg p-3 sm:p-4 overflow-y-auto max-h-[90vh]">
          {/* Close button with geeky styling */}
          <button
            className="absolute top-3 right-3 text-cyan-400 hover:text-red-400 text-xl font-mono bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded border border-cyan-400/30 transition-all duration-200 hover:border-red-400/50"
            onClick={onClose}
          >
            [×]
          </button>
          {/* Header with tech styling */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold mb-1 text-cyan-400 font-mono tracking-wider">
              {infoData.title}
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
              style={{ width: "min(300px, 90vw)", height: "min(300px, 50vw)" }}
            />
          </div>
          {/* Data panel with terminal styling */}
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-600/50 font-mono text-xs">
            <div className="text-cyan-400 mb-2">[DATA_ENTRY]</div>
            <div className="space-y-1 text-gray-300">
              <div>
                <span className="text-green-400">Species:</span>{" "}
                <span className="text-yellow-400">{infoData.species}</span>
              </div>
              <div>
                <span className="text-green-400">Height:</span>{" "}
                <span className="text-yellow-400">{infoData.height}</span>
              </div>
              <div>
                <span className="text-green-400">Origin:</span>{" "}
                <span className="text-yellow-400">{infoData.origin}</span>
              </div>
              <div>
                <span className="text-green-400">Status:</span>{" "}
                <span className="text-green-400">{infoData.status}</span>
              </div>
            </div>
            <div className="mt-2 text-gray-400 text-xs border-t border-gray-600/50 pt-2">
              <div className="text-purple-400">[NOTES]</div>
              <div className="text-gray-300 mt-1">{infoData.notes}</div>
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
  );
};

export default ObjectModal;
