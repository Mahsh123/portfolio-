"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Cinematic3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = mountRef.current;
    if (!container) return;

    try {
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isReduced) return;
    } catch {
      // Ignore
    }

    const isMobile = window.innerWidth < 768;
    const width = window.innerWidth;
    const height = window.innerHeight;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.75));
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
      camera.position.set(0, 0, 9);

      // Ambient & Atmospheric Lights
      const ambientLight = new THREE.AmbientLight(0x060e1b, 1.8);
      scene.add(ambientLight);

      // Key light highlighting the portrait silhouette area (right side)
      const rimLightRight = new THREE.PointLight(0x38bdf8, 5, 25);
      rimLightRight.position.set(3.5, 1.5, 2);
      scene.add(rimLightRight);

      // Soft fill light from left (purple/indigo)
      const fillLightLeft = new THREE.PointLight(0x818cf8, 3, 25);
      fillLightLeft.position.set(-4, -1, 3);
      scene.add(fillLightLeft);

      // Deep atmospheric back light
      const deepBackLight = new THREE.PointLight(0xa855f7, 2.5, 30);
      deepBackLight.position.set(1, 3, -6);
      scene.add(deepBackLight);

      // =========================================================================
      // LAYER 1: FAR BACKGROUND (Depth: z = -8 to -14)
      // Large abstract wireframe geometry & floating structures
      // =========================================================================
      const farGroup = new THREE.Group();
      scene.add(farGroup);

      // Large distant geodesic sphere
      const farSphereGeo = new THREE.IcosahedronGeometry(4.5, 1);
      const farSphereMat = new THREE.MeshBasicMaterial({
        color: 0x1e3a5f,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const farSphere = new THREE.Mesh(farSphereGeo, farSphereMat);
      farSphere.position.set(3.0, 0.5, -9);
      farGroup.add(farSphere);

      // Distant geometric lattice
      const latticeGeo = new THREE.OctahedronGeometry(3.0, 0);
      const latticeMat = new THREE.MeshBasicMaterial({
        color: 0x4338ca,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      const lattice = new THREE.Mesh(latticeGeo, latticeMat);
      lattice.position.set(-4.5, 2.0, -11);
      farGroup.add(lattice);

      // =========================================================================
      // LAYER 2: MIDGROUND (Depth: z = -1 to -4)
      // Floating glass geometric objects & neural network lines behind portrait
      // =========================================================================
      const midGroup = new THREE.Group();
      scene.add(midGroup);

      // Floating AI Core (Icosahedron behind portrait shoulder)
      const midIcoGeo = new THREE.IcosahedronGeometry(1.5, 0);
      const midIcoMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
        roughness: 0.1,
        metalness: 0.9,
      });
      const midIco = new THREE.Mesh(midIcoGeo, midIcoMat);
      midIco.position.set(2.8, 0.8, -1.8);
      midGroup.add(midIco);

      // Secondary floating octahedron
      const midOctGeo = new THREE.OctahedronGeometry(0.9, 0);
      const midOctMat = new THREE.MeshStandardMaterial({
        color: 0x818cf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        roughness: 0.2,
        metalness: 0.8,
      });
      const midOct = new THREE.Mesh(midOctGeo, midOctMat);
      midOct.position.set(-2.8, 1.2, -2.5);
      midGroup.add(midOct);

      // Torus ring
      const midTorusGeo = new THREE.TorusGeometry(1.2, 0.1, 16, 40);
      const midTorusMat = new THREE.MeshStandardMaterial({
        color: 0x2dd4bf,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
        roughness: 0.3,
      });
      const midTorus = new THREE.Mesh(midTorusGeo, midTorusMat);
      midTorus.position.set(2.0, -2.2, -2.0);
      midTorus.rotation.x = Math.PI / 3;
      midGroup.add(midTorus);

      // Midground Constellation & Connecting Nodes
      const nodeCount = isMobile ? 18 : 36;
      const nodePositions: THREE.Vector3[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodePositions.push(
          new THREE.Vector3(
            (Math.random() - 0.4) * 12,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5 - 2
          )
        );
      }

      const linePoints: THREE.Vector3[] = [];
      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          if (nodePositions[i].distanceTo(nodePositions[j]) < 3.0) {
            linePoints.push(nodePositions[i], nodePositions[j]);
          }
        }
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.14,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      midGroup.add(lines);

      // Midground particles
      const midParticleCount = isMobile ? 35 : 80;
      const midParticleGeo = new THREE.BufferGeometry();
      const midPositions = new Float32Array(midParticleCount * 3);
      for (let i = 0; i < midParticleCount; i++) {
        midPositions[i * 3] = (Math.random() - 0.4) * 14;
        midPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        midPositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      }
      midParticleGeo.setAttribute("position", new THREE.BufferAttribute(midPositions, 3));
      const midParticleMat = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.05,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const midParticles = new THREE.Points(midParticleGeo, midParticleMat);
      midGroup.add(midParticles);

      // =========================================================================
      // LAYER 3: FOREGROUND PARTICLES & LIGHT DUST (Depth: z = 3 to 7)
      // Subtle luminescent micro-particles drifting in front of the screen
      // =========================================================================
      const foregroundGroup = new THREE.Group();
      scene.add(foregroundGroup);

      const fgParticleCount = isMobile ? 15 : 45;
      const fgParticleGeo = new THREE.BufferGeometry();
      const fgPositions = new Float32Array(fgParticleCount * 3);
      for (let i = 0; i < fgParticleCount; i++) {
        fgPositions[i * 3] = (Math.random() - 0.5) * 10;
        fgPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        fgPositions[i * 3 + 2] = Math.random() * 4 + 3; // In front of camera plane
      }
      fgParticleGeo.setAttribute("position", new THREE.BufferAttribute(fgPositions, 3));
      const fgParticleMat = new THREE.PointsMaterial({
        color: 0x67e8f9,
        size: 0.07,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      const fgParticles = new THREE.Points(fgParticleGeo, fgParticleMat);
      foregroundGroup.add(fgParticles);

      // Parallax Tracking & Smooth Lerp
      let mouseX = 0;
      let mouseY = 0;
      let targetMouseX = 0;
      let targetMouseY = 0;
      let scrollProgress = 0;
      let isVisible = true;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      const onScroll = () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = total > 0 ? window.scrollY / total : 0;
      };

      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });

      const onResize = () => {
        if (!renderer) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", onResize, { passive: true });

      const clock = new THREE.Clock();

      const animate = () => {
        if (!renderer || !isVisible) return;
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse lerp
        targetMouseX += (mouseX - targetMouseX) * 0.04;
        targetMouseY += (mouseY - targetMouseY) * 0.04;

        // Distinct Parallax Speeds across depth layers:
        // Layer 1 (Far): Slow movement
        farGroup.position.x = -targetMouseX * 0.3;
        farGroup.position.y = targetMouseY * 0.2;
        farSphere.rotation.y = elapsedTime * 0.03;
        lattice.rotation.x = -elapsedTime * 0.04;

        // Layer 2 (Mid): Moderate movement
        midGroup.position.x = -targetMouseX * 0.6;
        midGroup.position.y = targetMouseY * 0.45;
        midIco.rotation.x = elapsedTime * 0.11;
        midIco.rotation.y = elapsedTime * 0.14;
        midOct.rotation.x = -elapsedTime * 0.12;
        midTorus.rotation.y = elapsedTime * 0.08;
        midParticles.rotation.y = elapsedTime * 0.015;

        // Layer 3 (Foreground): Fast independent drift in front of camera
        foregroundGroup.position.x = -targetMouseX * 1.3;
        foregroundGroup.position.y = targetMouseY * 0.9;
        fgParticles.rotation.y = -elapsedTime * 0.025;

        // Scroll travel: camera navigates down through space
        const scrollTravel = scrollProgress * 12;
        camera.position.y = -scrollTravel + 0.8 + targetMouseY * 0.3;
        camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 1.2 + targetMouseX * 0.5;
        camera.position.z = 9 - Math.sin(scrollProgress * Math.PI) * 2.2;
        camera.lookAt(0, -scrollTravel, 0);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      // GPU Pause Safeguard: Pause animation loop when tab is hidden
      const onVisibilityChange = () => {
        if (document.hidden) {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        } else {
          if (!isVisible) {
            isVisible = true;
            clock.start();
            animate();
          }
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);

      // WebGL Context Loss Handlers
      const onContextLost = (e: Event) => {
        e.preventDefault();
        cancelAnimationFrame(animationFrameId);
      };
      const onContextRestored = () => {
        animate();
      };
      renderer.domElement.addEventListener("webglcontextlost", onContextLost);
      renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);

      animate();

      return () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animationFrameId);

        if (renderer && renderer.domElement) {
          renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
          renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);
        }

        farSphereGeo.dispose();
        farSphereMat.dispose();
        latticeGeo.dispose();
        latticeMat.dispose();

        midIcoGeo.dispose();
        midIcoMat.dispose();
        midOctGeo.dispose();
        midOctMat.dispose();
        midTorusGeo.dispose();
        midTorusMat.dispose();
        lineGeo.dispose();
        lineMat.dispose();
        midParticleGeo.dispose();
        midParticleMat.dispose();

        fgParticleGeo.dispose();
        fgParticleMat.dispose();

        if (renderer) {
          renderer.dispose();
          if (container && renderer.domElement && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (err) {
      console.warn("3D WebGL Scene error:", err);
      setHasError(true);
    }
  }, []);

  if (hasError) return null;

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-95 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
