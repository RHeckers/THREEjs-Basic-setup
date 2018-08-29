var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 3000);

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);

// var geometry = new THREE.Geometry();
// geometry.vertices.push(
//     new THREE.Vector3(-10, 10, 0),
//     new THREE.Vector3(-10, -10, 0),
//     new THREE.Vector3(10, -10, 0)
// );
// geometry.faces.push( new THREE.Face3(0, 1, 2));

var geometry = new THREE.BufferGeometry();
var vertices = new Float32Array([
    -10.0, -10.0, 0.0,
    10.0, -10.0, 0.0,
    10.0, 10.0, 0.0

]);
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));

var material = new THREE.MeshLambertMaterial( {color: 0xf3ffe2} );
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,-1000);

scene.add(mesh);

requestAnimationFrame(render);
function render(){
    mesh.rotation.x += 0.1;
    mesh.rotation.y += 0.1;
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}
