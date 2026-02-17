import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ── Scene Setup ────────────────────────────────────
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // ── Particle Field ─────────────────────────────────
    const COUNT     = 1200;
    const positions = new Float32Array(COUNT * 3);
    const colors    = new Float32Array(COUNT * 3);
    const speeds    = new Float32Array(COUNT * 3);

    const blueColor  = new THREE.Color(0x2563eb);
    const cyanColor  = new THREE.Color(0x06d6a0);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 80;

      speeds[i3]     = (Math.random() - 0.5) * 0.018;
      speeds[i3 + 1] = (Math.random() - 0.5) * 0.018;
      speeds[i3 + 2] = (Math.random() - 0.5) * 0.008;

      // Blend between blue and cyan randomly
      const t = Math.random();
      colors[i3]     = blueColor.r * (1 - t) + cyanColor.r * t;
      colors[i3 + 1] = blueColor.g * (1 - t) + cyanColor.g * t;
      colors[i3 + 2] = blueColor.b * (1 - t) + cyanColor.b * t;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color",    new THREE.BufferAttribute(colors,    3));

    const mat = new THREE.PointsMaterial({
      size:         0.12,
      vertexColors: true,
      transparent:  true,
      opacity:      0.55,
      blending:     THREE.AdditiveBlending,
      depthWrite:   false,
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    // ── Wireframe Geometries ───────────────────────────
    const wireGroup = new THREE.Group();

    const makeWire = (
      geo: THREE.BufferGeometry,
      color: number,
      pos: [number, number, number]
    ) => {
      const m = new THREE.MeshBasicMaterial({
        color,
        wireframe:   true,
        transparent: true,
        opacity:     0.08,
      });
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(...pos);
      return mesh;
    };

    wireGroup.add(makeWire(new THREE.TorusGeometry(7, 0.6, 12, 80), 0x06d6a0, [-18, 12, -15]));
    wireGroup.add(makeWire(new THREE.IcosahedronGeometry(5, 0),      0x2563eb, [18, -10, -20]));
    wireGroup.add(makeWire(new THREE.OctahedronGeometry(4, 0),       0x06d6a0, [-8, -18, -25]));
    wireGroup.add(makeWire(new THREE.TetrahedronGeometry(3, 0),      0x2563eb, [22, 16, -18]));

    scene.add(wireGroup);

    // ── Mouse ──────────────────────────────────────────
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth)  * 2 - 1;
      my = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouse);

    // ── Animation ─────────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Update particle positions
      const pos = geom.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        pos[i3]     += speeds[i3];
        pos[i3 + 1] += speeds[i3 + 1];
        pos[i3 + 2] += speeds[i3 + 2];

        if (Math.abs(pos[i3])     > 60) speeds[i3]     *= -1;
        if (Math.abs(pos[i3 + 1]) > 60) speeds[i3 + 1] *= -1;
        if (Math.abs(pos[i3 + 2]) > 40) speeds[i3 + 2] *= -1;
      }
      geom.attributes.position.needsUpdate = true;

      // Rotate particle field slowly
      points.rotation.y = t * 0.03;

      // Rotate wireframes individually
      wireGroup.children.forEach((child, i) => {
        child.rotation.x = t * 0.006 * (i + 1);
        child.rotation.y = t * 0.01  * (i + 1);
      });

      // Smooth camera parallax
      camera.position.x += (mx * 3 - camera.position.x) * 0.008;
      camera.position.y += (my * 3 - camera.position.y) * 0.008;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize ────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ───────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geom.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.35,
      }}
    />
  );
}
