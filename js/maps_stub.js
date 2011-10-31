// JavaScript Document
var  map_container, map_width=400,map_height=300,map_camera

function init_maps_3d() {


			    map_container = document.getElementById( '3d_screen_map');

				map_camera = new THREE.Camera( 54, map_width / map_height, 1, 10500);
				map_camera.position.z = 0;

				map_scene = new THREE.Scene();
				map_renderer = new THREE.WebGLRenderer({});		
				map_renderer.sortObjects = true
				map_renderer.setSize(  width, height );
				map_container.appendChild( map_renderer.domElement );
				//map_scene.addObject( street_mesh );	
				
				map_scene.fog = new THREE.FogExp2( 0xff0000, .0001 );
				map_animate()		
}

		function map_animate() {
			    requestAnimationFrame( map_animate );
				map_render();
			}

map_render  = function(){

					map_renderer.clear();
					map_renderer.render( map_scene, map_camera );
					
}