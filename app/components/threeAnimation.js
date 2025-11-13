import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function initThreeAnimation(container) {
  if (!container) return;
  let group;
  let stats;
  const particlesData = [];
  let camera, scene, renderer;
  let positions, colors;
  let particles;
  let pointCloud;
  let particlePositions;
  let linesMesh;
  let controls;

  const maxParticleCount = 500;
  let particleCount = 300;
  const r = 800;
  const rHalf = r / 2;

  const effectController = {
    showDots: true,
    showLines: true,
    minDistance: 150,
    limitConnections: false,
    maxConnections: 20,
    particleCount: 500
  };

  function initGUI() {
    const gui = new GUI();
    gui.add(effectController, 'showDots').onChange(value => {
      pointCloud.visible = value;
    });
    gui.add(effectController, 'showLines').onChange(value => {
      linesMesh.visible = value;
    });
    gui.add(effectController, 'minDistance', 10, 300);
    gui.add(effectController, 'limitConnections');
    gui.add(effectController, 'maxConnections', 0, 30, 1);
    gui.add(effectController, 'particleCount', 0, maxParticleCount, 1).onChange(value => {
      particleCount = value;
      particles.setDrawRange(0, particleCount);
    });
  }

  function init() {
    // initGUI();
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
    camera.position.z = 1600;
  controls = new OrbitControls(camera, container);
  controls.minDistance = 1000;
  controls.maxDistance = 3000;
  // On touch devices, disable dragging/rotate/pan to avoid interfering with page scroll
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) {
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.enableZoom = false;
    // also reduce event listeners footprint
    controls.dispose();
    controls = null;
    camera.position.z = 1000;
  }
    scene = new THREE.Scene();
    group = new THREE.Group();
    scene.add(group);
    const helper = new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(r, r, r)));
    helper.material.color.setHex(0x000000);
    helper.material.blending = THREE.AdditiveBlending;
    helper.material.transparent = true;
    group.add(helper);
    const segments = maxParticleCount * maxParticleCount;
    positions = new Float32Array(segments * 3);
    colors = new Float32Array(segments * 3);
    const pMaterial = new THREE.PointsMaterial({
      color: 0x7048ff,
      size: 3,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: false
    });
    particles = new THREE.BufferGeometry();
    particlePositions = new Float32Array(maxParticleCount * 3);
    for (let i = 0; i < maxParticleCount; i++) {
      const x = Math.random() * r - r / 2;
      const y = Math.random() * r - r / 2;
      const z = Math.random() * r - r / 2;
      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
      particlesData.push({
        velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
        numConnections: 0
      });
    }
    particles.setDrawRange(0, particleCount);
    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));
    pointCloud = new THREE.Points(particles, pMaterial);
    group.add(pointCloud);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.computeBoundingSphere();
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    linesMesh = new THREE.LineSegments(geometry, material);
    group.add(linesMesh);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setAnimationLoop(animate);
  container.appendChild(renderer.domElement);
    stats = new Stats();
    // container.appendChild(stats.dom);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }

  function animate() {
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;
    for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;
    for (let i = 0; i < particleCount; i++) {
      const particleData = particlesData[i];
      particlePositions[i * 3] += particleData.velocity.x;
      particlePositions[i * 3 + 1] += particleData.velocity.y;
      particlePositions[i * 3 + 2] += particleData.velocity.z;
      if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf)
        particleData.velocity.y = -particleData.velocity.y;
      if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
        particleData.velocity.x = -particleData.velocity.x;
      if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf)
        particleData.velocity.z = -particleData.velocity.z;
      if (effectController.limitConnections && particleData.numConnections >= effectController.maxConnections)
        continue;
      for (let j = i + 1; j < particleCount; j++) {
        const particleDataB = particlesData[j];
        if (effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections)
          continue;
        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < effectController.minDistance) {
          particleData.numConnections++;
          particleDataB.numConnections++;
          const alpha = 1.0 - dist / effectController.minDistance;
          positions[vertexpos++] = particlePositions[i * 3];
          positions[vertexpos++] = particlePositions[i * 3 + 1];
          positions[vertexpos++] = particlePositions[i * 3 + 2];
          positions[vertexpos++] = particlePositions[j * 3];
          positions[vertexpos++] = particlePositions[j * 3 + 1];
          positions[vertexpos++] = particlePositions[j * 3 + 2];
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          numConnected++;
        }
      }
    }
    linesMesh.geometry.setDrawRange(0, numConnected * 2);
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;
    pointCloud.geometry.attributes.position.needsUpdate = true;
    render();
    stats.update();
  }

  function render() {
    const time = Date.now() * 0.001;
    group.rotation.y = time * 0.1;
    renderer.render(scene, camera);
  }

  init();
  // Return a cleanup function so callers can dispose this instance when unmounting
  return function cleanup() {
    try {
      // stop the render loop
      if (renderer) renderer.setAnimationLoop(null);

      // remove resize listener
      window.removeEventListener('resize', onWindowResize);

      // remove renderer DOM element
      if (renderer && renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }

      // dispose controls
      if (controls && typeof controls.dispose === 'function') controls.dispose();

      // dispose geometries and materials
      if (pointCloud && pointCloud.geometry) pointCloud.geometry.dispose();
      if (pointCloud && pointCloud.material) pointCloud.material.dispose();
      if (linesMesh && linesMesh.geometry) linesMesh.geometry.dispose();
      if (linesMesh && linesMesh.material) linesMesh.material.dispose();

      // dispose renderer
      if (renderer && typeof renderer.dispose === 'function') renderer.dispose();

      // remove stats if appended
      if (stats && stats.dom && stats.dom.parentNode) stats.dom.parentNode.removeChild(stats.dom);
    } catch (e) {
      // silent catch — cleanup best-effort
      console.warn('threeAnimation cleanup error', e);
    }
  };
}
