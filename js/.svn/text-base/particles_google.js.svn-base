// JavaScript Document
var   particles,particles_array = [], particle_geometry, particle_materials = [],particle_parameters=[], particle_i,particle_h, particle_color, particle_sprite,particle_size,particle_state='off';

var 	PARTICLE_COUNT = 300, 
		MAX_DISTANCE = 2400
function particle_control(){
	
}

function particle_kill(){
	scene.removeObject(particles)
	particles_array = []
}


/**
 * Star Class handles movement of particles
 */
 

function Fragment(){
    this.posn = new THREE.Vector3();
    this.init();
}

Fragment.MAX_SPEED = 1;
Fragment.ORIGIN = new THREE.Vector3(0 ,-300,0);

//returns random number within a range
Fragment.prototype.getRand = function(minVal, maxVal){
    return minVal + (Math.random() * (maxVal - minVal));
}

Fragment.prototype.init = function(){
	//start at center
    this.posn.copy(Fragment.ORIGIN);
	//random speed
    this.speed = new THREE.Vector3(this.getRand(-Fragment.MAX_SPEED, Fragment.MAX_SPEED), this.getRand(-Fragment.MAX_SPEED, Fragment.MAX_SPEED)+1, this.getRand(-Fragment.MAX_SPEED, Fragment.MAX_SPEED));
}

Fragment.prototype.update = function(){
	//move star
   this.posn = this.posn.addSelf(this.speed);
	
    //document.getElementById('debug_text').innerHTML
    if (this.posn.distanceTo(Fragment.ORIGIN) > MAX_DISTANCE) {
        this.init();
    }
}
 /**/
/**
 * Initialize
 */
 
 var fragment_geometry, fragment, fragments, fragment_array = []
 
 
function init_fragments(fragment_count,_sprite){

    var colors = [];
   

    fragment_geometry = new THREE.Geometry();
    //create one shared material
    var sprite0 = THREE.ImageUtils.loadTexture("textures/particles/dotted_circle.png"),
	sprite1 = THREE.ImageUtils.loadTexture( "textures/global/Flotsam/fl_ball_sm.png" ),
    sprite2 = THREE.ImageUtils.loadTexture( "textures/global/Flotsam/fl_batminton_sm.png" ),
    sprite3 = THREE.ImageUtils.loadTexture( "textures/global/Flotsam/fl_boots_sm.png" ),
    sprite4 = THREE.ImageUtils.loadTexture( "textures/global/Flotsam/fl_shuttlecock.png" )
	
	var choose_sprite= eval("sprite"+ _sprite)
    material = new THREE.ParticleBasicMaterial({
        size: 40,
        map: choose_sprite,
        opacity:1,
		transparent:true,
		blending:THREE.AdditiveBlending,
        depthTest: true,
        vertexColors: true //allows 1 color per particle
    });
    //create particles
    for (i = 0; i < fragment_count; i++) {
        fragment_geometry.vertices.push(new THREE.Vertex());
        colors[i] = new THREE.Color(0xffffff);
       
        fragment_array.push(new Fragment());
        fragment_geometry.vertices[i] = new THREE.Vertex(fragment_array[i].posn);
    }
    
    fragment_geometry.colors = colors;
	
	 
    
    //init particle system
    fragments = new THREE.ParticleSystem(fragment_geometry, material);
    fragments.sortParticles = false;
    scene.addObject(fragments);
    
    
    

}






			function generateSprite() {

				var canvas = document.createElement( 'canvas' );
				canvas.width = 16;
				canvas.height = 16;

				var context = canvas.getContext( '2d' );
				var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
				gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
				gradient.addColorStop( 0.2, 'rgba(0,255,255,1)' );
				gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
				gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

				context.fillStyle = gradient;
				context.fillRect( 0, 0, canvas.width, canvas.height );

				return canvas;

			}


			
			


			function global_particle_init() {


				

				particle_geometry = new THREE.Geometry();

				var sprite1 = THREE.ImageUtils.loadTexture( "textures/particles/dust_mote.png" );
				var sprite2 = THREE.ImageUtils.loadTexture( "textures/particles/dust_mote.png" );
				var sprite3 = THREE.ImageUtils.loadTexture( "textures/particles/dust_mote.png" );
				var sprite4 = THREE.ImageUtils.loadTexture( "textures/particles/dust_mote.png" );
				var sprite5 = THREE.ImageUtils.loadTexture( "textures/particles/dust_mote.png" );

				for ( i = 0; i < 2000; i++ ) {
					var vector = new THREE.Vector3( Math.random() *  world_diameter*2-world_diameter, Math.random() * world_diameter*2-world_diameter, Math.random() * world_diameter*2-world_diameter );
					particle_geometry.vertices.push( new THREE.Vertex( vector ) );
				}

				particle_parameters = [ [ [1, 0.2, 1.0], sprite2, 2 ], [ [1, 0.1, 1], sprite3, 10 ], [ [1, 0.05, 1], sprite1, 1 ], [ [1, 0, 0.8], sprite5,2 ], [ [1, 0, 0.7], sprite4, 3 ],
							   ];

				for ( i = 0; i < particle_parameters.length; i++ ) {
					particle_color  = particle_parameters[i][0];
					particle_sprite = particle_parameters[i][1];
					particle_size   = particle_parameters[i][2];
					particle_materials[i] = new THREE.ParticleBasicMaterial( { size: particle_size, map: particle_sprite, depthTest: true, transparent : true } );
					particle_materials[i].color.setHSV( particle_color[0], particle_color[1], particle_color[2] );

					particles = new THREE.ParticleSystem( particle_geometry,particle_materials[i] );
					particles.rotation.x = Math.random() * 6;
					particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
					particles_array[i] = particles
					//scene.addObject( particles );
				}
setTimeout("set_particles()",2000)
			}

function set_particles(){
for ( var i = 0; i < particles_array.length; i++ ) {
scene.addObject( particles_array[i] );
}
}
			
	var tc_fence_push_array = [], tc_fence_system_live
	
	function tc_fence_push_init(){
		for( var i = 0; i < 80; i++ ) {
		            mesh = tc_fence_push_array[ i ] = new THREE.Mesh( new THREE.Plane(10,10,1,1), new THREE.MeshBasicMaterial( { color:0xb32db5,opacity:.5 } ) );
					mesh.position.x =   50-Math.random()*250;
					mesh.position.y = - Math.random()*150;
					mesh.position.z = 2000;

					mesh.scale.x = mesh.scale.y = mesh.scale.z = 1;

					scene.addObject(mesh);

					mesh.dx = 0.1 * ( 0.5 - Math.random() );
					mesh.dy = 0.1 * ( 0.5 - Math.random() );
					
					mesh.dr = 0.001 * ( 0.5 - Math.random() );
					mesh.start_point =  new THREE.Vector3( mesh.position.x, mesh.position.y, mesh.position.z )
					tc_fence_system_live = true
					
		}
		//alert(tc_fence_push_array.length)
	}
			
			function tc_fence_push_life(){

					for( var i = 0; i < tc_fence_push_array.length; i++ ) {

						var mesh = tc_fence_push_array[i];
						mesh.rotation.x += 10 * mesh.dx;
						mesh.rotation.y += 10 * mesh.dy;
						
						
						mesh.position.x += (200 * mesh.dx)+7;
						mesh.position.y += 200 * mesh.dy;
						mesh.position.z += 400 * mesh.dx;
						
						if(mesh.position.distanceTo( mesh.start_point ) > 2000){
							//scene.removeObject(mesh[i])
							//tc_fence_push_array.remove(i);
							
						}

					}
					
					if (tc_fence_push_array.length ==0){
					
						tc_fence_system_live = false
					}
					
			}
			
/*			
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

*/