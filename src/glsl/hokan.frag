uniform sampler2D t;
uniform vec2 center;

varying vec2 vUv;

void main(void) {
  vec2 uv = vec2(vUv.x, center.y);
  vec4 dest = texture2D(t, uv);
  dest.rgb = vec3(0.0);
  gl_FragColor = dest;
}
