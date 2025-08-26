'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Sun: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) return;
    isInitializedRef.current = true;

    // Sauvegarder la référence du conteneur pour le cleanup
    const container = containerRef.current;

    // Initialisation Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      premultipliedAlpha: false
    });
    
    // Utiliser une taille par défaut et s'adapter au conteneur
    const containerSize = container.offsetWidth || 600;
    renderer.setSize(containerSize, containerSize);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);
    
    // Shader simplifié
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform float u_speed;
      
      varying vec2 vUv;

      void main() {
        vec2 r = u_resolution;
        vec2 FC = gl_FragCoord.xy;
        vec2 screenP = (FC.xy * 2.0 - r) / r.y;
        
        float baseRadius = 0.95;
        float circleRadius = baseRadius;
        
        float distFromCenter = length(screenP);
        float inCircle = smoothstep(circleRadius + 0.05, circleRadius - 0.05, distFromCenter);
        
        vec4 o = vec4(0.0);
        
        if (inCircle > 0.0) {
          vec2 p = screenP * 1.1;
          
          float angle = length(p) * 4.0;
          mat2 R = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          p *= R;
          
          float l = length(p) - 0.7;
          float t = u_time * u_speed;
          float enhancedY = p.y;
          
          float pattern1 = 0.5 + 0.5 * tanh(0.1 / max(l / 0.1, -l) - sin(l + enhancedY * max(1.0, -l / 0.1) + t));
          float pattern2 = 0.5 + 0.5 * tanh(0.1 / max(l / 0.1, -l) - sin(l + enhancedY * max(1.0, -l / 0.1) + t + 1.0));
          float pattern3 = 0.5 + 0.5 * tanh(0.1 / max(l / 0.1, -l) - sin(l + enhancedY * max(1.0, -l / 0.1) + t + 2.0));
          
          float intensity = 1.0;
          
          o.r = pattern1 * u_color1.r * intensity;
          o.g = pattern2 * u_color2.g * intensity;
          o.b = pattern3 * u_color3.b * intensity;
          o.a = inCircle;
        }
        
        vec3 bgColor = vec3(1.0, 1.0, 1.0);
        vec3 finalColor = bgColor;
        
        finalColor = mix(finalColor, o.rgb, o.a);
        
        gl_FragColor = vec4(finalColor, o.a);
      }
    `;
    
    // Matériau simplifié
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2(containerSize, containerSize) },
        u_speed: { value: 1.3 },
        u_color1: { value: new THREE.Vector3(1.0, 0.8, 0.4) },
        u_color2: { value: new THREE.Vector3(1.0, 0.9, 0.6) },
        u_color3: { value: new THREE.Vector3(1.0, 1.0, 0.8) }
      },
      transparent: true,
      blending: THREE.NormalBlending
    });
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 1;
    
    // Sauvegarder les références
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    materialRef.current = material;
    meshRef.current = mesh;
    clockRef.current = new THREE.Clock();
    
    // Animation
    const animate = () => {
      const elapsed = clockRef.current?.getElapsedTime() || 0;
      if (materialRef.current) {
        materialRef.current.uniforms.u_time.value = elapsed;
      }
      
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      isInitializedRef.current = false;
    };
  }, []);

  return (
    <div 
      {...props} 
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        aspectRatio: '1/1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'sky-400',
        cursor: 'default',
        margin: '0 auto'
      }}
      className="w-full max-w-[600px] aspect-square mx-auto"
    />
  );
};

export default Sun; 