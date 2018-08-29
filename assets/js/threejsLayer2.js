// //--------------------------ThreeJS Rotating Cube--------------------------------------//

// var renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0x00ff00);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize( window.innerWidth, window.innerHeight );


// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );



// var light = new THREE.AmbientLight(0xffffff, 0.5);
// var pointLight = new THREE.PointLight(0xffffff, 0.5);

// scene.add(pointLight)
// scene.add(light);

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material2 = new THREE.MeshLambertMaterial( { color: 0xf3ffe2 } );
// var cube = new THREE.Mesh( geometry, material2 );


// scene.add( cube );


// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
//     renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }


// if (Detector.webgl) {
//     // Initiate function or other initializations here
//     animate();
// } else {
//     var warning = Detector.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);
// }

// //--------------------------ThreeJS lines example below--------------------------------------//

// // var renderer = new THREE.WebGLRenderer();
// // renderer.setSize( window.innerWidth, window.innerHeight );
// // document.body.appendChild( renderer.domElement );

// // var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// // camera.position.set( 0, 0, 100 );
// // camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

// // var scene = new THREE.Scene();

// // //create a blue LineBasicMaterial
// // var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// // var geometry = new THREE.Geometry();
// // geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
// // geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
// // geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

// // var line = new THREE.Line( geometry, material );

// // scene.add( line );
// // renderer.render( scene, camera );