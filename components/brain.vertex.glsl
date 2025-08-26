uniform vec3 uPointer;
uniform vec3 uColor;
uniform float uRotation;
uniform float uSize;
uniform float uHover;

varying vec3 vColor;

#define PI 3.14159265359

// Fonction rotate définie directement dans le shader
mat2 rotate(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  // Position de base
  vec4 mvPosition = vec4(position, 1.0);
  
  // Distance entre le point de la souris et cette instance
  float d = distance(uPointer, mvPosition.xyz);
  
  // Effet de hover basé sur la distance
  float c = smoothstep(0.45, 0.1, d);
  
  // Échelle basée sur la taille et l'effet de hover
  float scale = uSize + c * 8.0 * uHover;
  vec3 pos = position;
  pos *= scale;
  
  // Rotation basée sur l'effet de hover
  pos.xz *= rotate(PI * c * uRotation + PI * uRotation * 0.43);
  pos.xy *= rotate(PI * c * uRotation + PI * uRotation * 0.71);
  
  // Position finale
  mvPosition = vec4(pos, 1.0);
  
  // Position finale dans l'espace de projection
  gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
  
  // Couleur passée au fragment shader
  vColor = uColor;
}
