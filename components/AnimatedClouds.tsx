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
    const cloudCount = 12;
    const clouds: {
      mesh: THREE.Mesh;
      speed: number;
      amplitude: number;
      phase: number;
      baseY: number;
      baseX: number;
      baseZ: number;
    }[] = [];

    // Generate clouds using mathematical functions
    for (let i = 0; i < cloudCount; i++) {
      // Create cloud shape using multiple spheres
      const cloudGeometry = new THREE.SphereGeometry(1, 8, 8);
      const cloudMaterial = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.6, 0.1, 0.95), // Light blue-white
        transparent: true,
        opacity: 0.8,
      });

      // Create main cloud body
      const mainCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);

      // Add smaller spheres for cloud puffs
      const puffCount = 3 + Math.floor(Math.random() * 4);
      for (let j = 0; j < puffCount; j++) {
        const puffGeometry = new THREE.SphereGeometry(
          0.3 + Math.random() * 0.4,
          6,
          6
        );
        const puff = new THREE.Mesh(puffGeometry, cloudMaterial);

        // Position puffs around main cloud
        const angle = (j / puffCount) * Math.PI * 2;
        const radius = 0.8 + Math.random() * 0.4;
        puff.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.5,
          (Math.random() - 0.5) * 0.6
        );
        mainCloud.add(puff);
      }

      // Position clouds in a large dome around the scene
      const angle = (i / cloudCount) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 40 + Math.random() * 20;
      const baseY = 15 + Math.random() * 10;
      const baseX = Math.cos(angle) * radius;
      const baseZ = Math.sin(angle) * radius;

      mainCloud.position.set(baseX, baseY, baseZ);
      mainCloud.scale.set(
        2 + Math.random() * 3,
        1.5 + Math.random() * 2,
        2 + Math.random() * 3
      );

      // Random rotation for variety
      mainCloud.rotation.y = Math.random() * Math.PI * 2;
      mainCloud.rotation.x = Math.random() * 0.2 - 0.1;

      cloudGroup.add(mainCloud);

      // Store animation parameters
      clouds.push({
        mesh: mainCloud,
        speed: 0.2 + Math.random() * 0.3,
        amplitude: 2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        baseY,
        baseX,
        baseZ,
      });
    }

    // Animation function
    const animateClouds = () => {
      clouds.forEach((cloud, index) => {
        // Horizontal movement (wind effect)
        cloud.mesh.position.x =
          cloud.baseX +
          Math.sin(time * cloud.speed + cloud.phase) * cloud.amplitude;

        // Vertical floating movement
        cloud.mesh.position.y =
          cloud.baseY + Math.sin(time * 0.5 + cloud.phase * 2) * 1.5;

        // Slight rotation
        cloud.mesh.rotation.y += 0.001 * cloud.speed;

        // Opacity variation based on time
        const opacity = 0.6 + Math.sin(time * 0.3 + cloud.phase) * 0.2;
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
