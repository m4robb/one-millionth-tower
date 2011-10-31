// JavaScript Document
			var SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,
			constellation_trigger,
			c_particles_array =[];
			
			var cgeometry
			var constellation_line
			
			
function constellation_init(overload) {
//scene.fog = new THREE.FogExp2( 0x372645, .0001 );
	for ( var i = 0; i < c_particles_array.length; i ++ ) {
		scene.removeObject( c_particles_array[i] );
	}
	
	if(constellation_line){
		scene.removeObject(constellation_line)
	}
	c_particles_array =[]

	var separation = 1000, amountX = 500, amountY = 50	, c_particle;
				// c_particles

	cgeometry = new THREE.Geometry();

	for ( var i = 0; i < 40; i ++ ) {


	if(!overload){
		c_particle = new THREE.Mesh( new THREE.Sphere( 7, 5, 5 ),new THREE.MeshBasicMaterial( { color: 0xffffff,opacity:.8} ));

	}else{
		c_particle = new THREE.Mesh( new THREE.Sphere( 7, 5, 5 ),new THREE.MeshBasicMaterial( { color: 0xffffff,opacity:.8} ));
	}
					
					c_particle.position.x = Math.random() * 2 - 1;
					c_particle.position.y = Math.random() * 2 - 1;
					c_particle.position.z = Math.random() * 2 - 1;
					c_particle.position.normalize();
					c_particle.position.multiplyScalar( Math.random() * 10 + 3000 );
					c_particle.scale.x = c_particle.scale.y = c_particle.scale.z= 2;
					c_particle.position.y += 400
					if(!overload){
					c_particle.dx = 0.001 * ( 0.5 - Math.random() );
					c_particle.dy = 0.001 * ( 0.5 - Math.random() );
					}else{
					c_particle.dx = 0.1 * ( 0.5 - Math.random() );
					c_particle.dy = 0.1 * ( 0.5 - Math.random() );						
					}
					c_particles_array.push(c_particle);
					scene.addObject( c_particle );

					cgeometry.vertices.push( new THREE.Vertex( c_particle.position ) );

				}

				// lines
                //var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0, linewidth: 5 } );
				if(!overload){
				constellation_line = new THREE.Line( cgeometry, new THREE.LineBasicMaterial( { color: 0xe2e187, opacity: 1,linewidth: 1 } ) );
				
				}else{
				constellation_line = new THREE.Line( cgeometry, new THREE.LineBasicMaterial( { color: 0xe2e187, opacity: .7,linewidth: 1 } ) );
				}
				scene.addObject(constellation_line);
				constellation_trigger = true

			}
			
function constellation_remove(overload) {
	for ( var i = 0; i < c_particles_array.length; i ++ ) {
	scene.removeObject(c_particles_array[i])
	}
	c_particles_array = []
	scene.removeObject(constellation_line)
}
			function constellation_animate (){
				for ( var i = 0; i < c_particles_array.length; i ++ ) {
										var mesh =c_particles_array[i];
				
										//mesh.rotation.x += 1 * mesh.dx;
										//mesh.rotation.y += 1 * mesh.dy;
				                        //document.getElementById('debug_text').innerHTML  = c_particles_array[0].dx
										mesh.position.x += 100 * mesh.dx;
										mesh.position.y += 100 * mesh.dy;
										mesh.position.z += 100 * mesh.dx;
										
										cgeometry.vertices[ i ].position.x = mesh.position.x
										cgeometry.vertices[ i ].position.y = mesh.position.y
										cgeometry.vertices[ i ].position.z = mesh.position.z
										
										cgeometry.__dirtyVertices = true;
										
				}
			}