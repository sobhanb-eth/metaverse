//Declaration of a new scene with Three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

//Camera and Renderer configuration
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Setting the scene lights
const ambient_light = new THREE.AmbientLight(0xbda355);
const directional_light = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add(directional_light);
scene.add(ambient_light);

// Setting up a flat space of the metaverse
const geometry_space = new THREE.BoxGeometry(100, 0.2, 50);
const material_space = new THREE.MeshPhongMaterial({ color: 0xffffff});
const space = new THREE.Mesh(geometry_space, material_space);
scene.add(space);

// Geometric figure to be represented in the metaverse: Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Geometric figure to be represented in the metaverse: Cone
const geometry_cone = new THREE.ConeGeometry( 5, 20, 32 );



camera.position.set(10, 5 , 40);

function animate() {
    cube.rotation.x  += 0.01;
    cube.rotation.y  += 0.01;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();