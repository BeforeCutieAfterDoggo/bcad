import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AnimatedCloudsProps {
  scene: THREE.Scene;
  time: number;
}

const AnimatedClouds: React.FC<AnimatedCloudsProps> = ({ scene, time }) => {
  const cloudsRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!scene) return;

    // Create a group to hold all clouds
    const cloudGroup = new THREE.Group();
    cloudsRef.current = cloudGroup;
    scene.add(cloudGroup);

    // Cloud generation parameters
    const cloudCount = 8; // Reduced count for better performance with higher quality
    const clouds: {
      mesh: THREE.Object3D; // Changed from THREE.Mesh to THREE.Object3D to handle Groups
      speed: number;
      amplitude: number;
      phase: number;
      baseY: number;
      baseX: number;
      baseZ: number;
    }[] = [];

    // Function to create realistic cloud shape
    const createCloudShape = (size: number) => {
      const group = new THREE.Group();

      // Create multiple overlapping spheres with different sizes for natural cloud shape
      const sphereCount = 5 + Math.floor(Math.random() * 4);
      const spheres: THREE.Mesh[] = [];

      for (let i = 0; i < sphereCount; i++) {
        const radius = size * (0.4 + Math.random() * 0.6);
        const geometry = new THREE.SphereGeometry(radius, 16, 16); // Higher resolution

        // Create cloud material with better properties
        const material = new THREE.MeshLambertMaterial({
          color: new THREE.Color().setHSL(0.6, 0.05, 0.98), // Very light blue-white
          transparent: true,
          opacity: 0.85,
          side: THREE.DoubleSide,
        });

        const sphere = new THREE.Mesh(geometry, material);

        // Position spheres to create natural cloud shape
        const offsetX = (Math.random() - 0.5) * size * 0.8;
        const offsetY = (Math.random() - 0.5) * size * 0.4;
        const offsetZ = (Math.random() - 0.5) * size * 0.8;

        sphere.position.set(offsetX, offsetY, offsetZ);
        sphere.scale.set(
          0.8 + Math.random() * 0.4,
          0.6 + Math.random() * 0.4,
          0.8 + Math.random() * 0.4
        );

        spheres.push(sphere);
        group.add(sphere);
      }

      // Add some smaller detail spheres for texture
      const detailCount = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < detailCount; i++) {
        const detailRadius = size * (0.15 + Math.random() * 0.25);
        const detailGeometry = new THREE.SphereGeometry(detailRadius, 12, 12);
        const detailMaterial = new THREE.MeshLambertMaterial({
          color: new THREE.Color().setHSL(0.6, 0.03, 0.99), // Even lighter
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
        });

        const detailSphere = new THREE.Mesh(detailGeometry, detailMaterial);

        // Position on the surface of the main cloud
        const angle = Math.random() * Math.PI * 2;
        const radius = size * 0.6;
        detailSphere.position.set(
          Math.cos(angle) * radius + (Math.random() - 0.5) * size * 0.3,
          (Math.random() - 0.5) * size * 0.2,
          Math.sin(angle) * radius + (Math.random() - 0.5) * size * 0.3
        );

        group.add(detailSphere);
      }

      return group;
    };

    // Generate clouds using mathematical functions
    for (let i = 0; i < cloudCount; i++) {
      // Create realistic cloud shape
      const cloudSize = 1.5 + Math.random() * 2;
      const mainCloud = createCloudShape(cloudSize);

      // Position clouds in a large dome around the scene
      const angle = (i / cloudCount) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 45 + Math.random() * 25;
      const baseY = 12 + Math.random() * 12; // Slightly lower for better visibility
      const baseX = Math.cos(angle) * radius;
      const baseZ = Math.sin(angle) * radius;

      mainCloud.position.set(baseX, baseY, baseZ);

      // Scale the entire cloud group
      const overallScale = 1.5 + Math.random() * 2;
      mainCloud.scale.set(overallScale, overallScale * 0.8, overallScale);

      // Random rotation for variety
      mainCloud.rotation.y = Math.random() * Math.PI * 2;
      mainCloud.rotation.x = Math.random() * 0.1 - 0.05;

      cloudGroup.add(mainCloud);

      // Store animation parameters
      clouds.push({
        mesh: mainCloud,
        speed: 0.15 + Math.random() * 0.25, // Slightly slower for more majestic movement
        amplitude: 1.5 + Math.random() * 2.5,
        phase: Math.random() * Math.PI * 2,
        baseY,
        baseX,
        baseZ,
      });
    }

    // Animation function
    const animateClouds = () => {
      clouds.forEach((cloud, index) => {
        // Horizontal movement (wind effect) - more gentle
        cloud.mesh.position.x =
          cloud.baseX +
          Math.sin(time * cloud.speed + cloud.phase) * cloud.amplitude;

        // Vertical floating movement - more subtle
        cloud.mesh.position.y =
          cloud.baseY + Math.sin(time * 0.3 + cloud.phase * 2) * 1.2;

        // Slight rotation - very gentle
        cloud.mesh.rotation.y += 0.0005 * cloud.speed;

        // Opacity variation based on time - more subtle
        const opacity = 0.75 + Math.sin(time * 0.2 + cloud.phase) * 0.15;
        cloud.mesh.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                mat.opacity = opacity;
              });
            } else {
              mesh.material.opacity = opacity;
            }
          }
        });
      });
    };

    // Store animation function for external use
    (cloudGroup as any).animate = animateClouds;

    return () => {
      if (cloudGroup && scene) {
        scene.remove(cloudGroup);
        cloudGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => mat.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    };
  }, [scene]);

  return null;
};

export default AnimatedClouds;
