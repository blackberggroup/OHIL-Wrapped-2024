import { Renderer, Camera, Transform, Plane, Texture, Program, Mesh, Vec2 } from 'ogl';

export function initBulgeEffect(containerId, imagePath) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  const renderer = new Renderer({ dpr: 2 });
  const gl = renderer.gl;
  container.appendChild(gl.canvas);

  const camera = new Camera(gl, { fov: 45 });
  camera.position.set(0, 0, 1);
  camera.lookAt([0, 0, 0]);

  const scene = new Transform();

  const texture = new Texture(gl);
  const img = new Image();
  img.src = imagePath;
  img.onload = () => (texture.image = img);

  const mouse = new Vec2();
  const mouseTarget = new Vec2();

  window.addEventListener('mousemove', (e) => {
    const bounds = container.getBoundingClientRect();
    mouseTarget.set(
      (e.clientX - bounds.left) / bounds.width,
      1 - (e.clientY - bounds.top) / bounds.height
    );
  });

  const program = new Program(gl, {
    vertex: `
      precision mediump float;
      attribute vec2 uv;
      attribute vec3 position;

      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform vec2 uMouse;

      varying vec2 vUv;

      void main() {
        vUv = uv;

        vec3 pos = position;

        float dist = distance(uv, uMouse);
        pos.z += 0.2 * exp(-dist * 10.0);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragment: `
      precision mediump float;
      varying vec2 vUv;

      uniform sampler2D tMap;

      void main() {
        gl_FragColor = texture2D(tMap, vUv);
      }
    `,
    uniforms: {
      tMap: { value: texture },
      uMouse: { value: mouse },
    },
  });

  const plane = new Plane(gl, { widthSegments: 50, heightSegments: 50 });
  const mesh = new Mesh(gl, { geometry: plane, program });
  mesh.setParent(scene);

  function update() {
    mouse.lerp(mouseTarget, 0.2);
    program.uniforms.uMouse.value = mouse;

    renderer.render({ scene, camera });
    requestAnimationFrame(update);
  }

  update();
}
