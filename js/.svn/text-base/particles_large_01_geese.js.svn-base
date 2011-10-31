var goose_trigger
var Particle = function() {

				var vector = new THREE.Vector3(),
				_acceleration, _width = 2000, _height = 1500, _depth = 40000, _goal, _neighborhoodRadius = 2000,
				_maxSpeed = 4, _maxSteerForce = 0.1, _avoidWalls = false,_behaviour="avoid", _target,leader;


				this.position = new THREE.Vector3();
				this.velocity = new THREE.Vector3();
				_acceleration = new THREE.Vector3();

				this.setGoal = function ( target ) {

					_goal = target;

				}

				this.setAvoidWalls = function ( value ) {

					_avoidWalls = value;

				}

				this.setBehaviour = function ( value ) {

					_behaviour = value;

				}
				
				this.setTarget = function ( value ) {

					_target = value;

				}
				
				this.setWorldSize = function ( width, height, depth ) {

					_width = width;
					_height = height;
					_depth = depth;

				}

				this.run = function ( boids ) {

					if ( _avoidWalls ) {

						vector.set( - _width, this.position.y, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.addSelf( vector );

						vector.set( _width, this.position.y, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.addSelf( vector );

						vector.set( this.position.x, 300, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.addSelf( vector );

						vector.set( this.position.x, _height, this.position.z );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.addSelf( vector );

						vector.set( this.position.x, this.position.y, - _depth );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.addSelf( vector );

						vector.set( this.position.x, this.position.y, _depth );
						vector = this.avoid( vector );
						vector.multiplyScalar( 5 );
						_acceleration.addSelf( vector );

					}
					

					if ( Math.random() > 0.5 ) {

						//this.flock( boids );

					}

					this.move();

				}

				this.flock = function ( boids ) {

					if ( _goal ) {

						_acceleration.addSelf( this.reach( _goal, 0.005 ) );

					}

					_acceleration.addSelf( this.alignment( boids ) );
					_acceleration.addSelf( this.cohesion( boids ) );
					_acceleration.addSelf( this.separation( boids ) );

				}

				this.move = function () {


					this.velocity.addSelf( _acceleration );

					var l = this.velocity.length();

					if ( l > _maxSpeed ) {

						this.velocity.divideScalar( l / _maxSpeed );

					}

					this.position.addSelf( this.velocity );
					_acceleration.set( 0, 0, 0 );

				}

				this.checkBounds = function () {
                                                     
					if ( this.position.x >   _width ) this.removeme();
					if ( this.position.x < - _width ) this.removeme();

					if ( this.position.z >   _width ) this.removeme();
					if ( this.position.z < - _width ) this.removeme();

				}

				//
				this.removeme= function(){
				scene.removeObject(this.mesh)
				goose_count--
				}
				this.avoid = function ( target ) {

					var steer = new THREE.Vector3();

					steer.copy( this.position );
					steer.subSelf( target );

					steer.multiplyScalar( 1 / this.position.distanceToSquared( target ) );

					return steer;

				}

				this.repulse = function ( target ) {

					var distance = this.position.distanceTo( target );

					if ( distance < 150 ) {
						var steer = new THREE.Vector3();

						steer.sub( this.position, target );
						steer.multiplyScalar( 0.5 / distance );

						_acceleration.addSelf( steer );

					}

				}
				
				this.attract = function ( target ) {

					var distance = this.position.distanceTo( target );

					//if ( distance < 150 ) {

						var steer = new THREE.Vector3();

						steer.sub( target,this.position  );
						steer.multiplyScalar( 0.5 / distance );

						_acceleration.addSelf( steer );

					//}

				}				


				this.attract_repulse = function (  ) {
					//alert(_behaviour)
					var vector = new THREE.Vector3( _target.position.x,  _target.position.y,  _target.position.z );
					//vector.z = this.position.z;
					var steer = new THREE.Vector3();
					var distance = this.position.distanceTo( vector );
					if(_behaviour =="repulse"){
						
					if ( distance < 150 ) {
						steer.sub( this.position, vector );
						steer.multiplyScalar( 0.5 / distance );
						_acceleration.addSelf( steer );

					}
					}

					if(_behaviour =="attract"){
			
			
					if ( distance > 300 ){

						steer.sub( vector,this.position  );
						steer.multiplyScalar( 0.5 / distance );

						_acceleration.addSelf( steer );
					}
	
					}
					
				}	
				
				this.reach = function ( target, amount ) {

					var steer = new THREE.Vector3();

					steer.sub( target, this.position );
					steer.multiplyScalar( amount );

					return steer;

				}

				this.alignment = function ( boids ) {

					var boid, velSum = new THREE.Vector3(),
					count = 0;

					for ( var i = 0, il = boids.length; i < il; i++ ) {

						if ( Math.random() > 0.6 ) continue;

						boid = boids[ i ];

						distance = boid.position.distanceTo( this.position );

						if ( distance > 0 && distance <= _neighborhoodRadius ) {

							velSum.addSelf( boid.velocity );
							count++;

						}

					}

					if ( count > 0 ) {

						velSum.divideScalar( count );

						var l = velSum.length();

						if ( l > _maxSteerForce ) {

							velSum.divideScalar( l / _maxSteerForce );

						}

					}

					return velSum;

				}

				this.cohesion = function ( boids ) {

					var boid, distance,
					posSum = new THREE.Vector3(),
					steer = new THREE.Vector3(),
					count = 0;

					for ( var i = 0, il = boids.length; i < il; i ++ ) {

						if ( Math.random() > 0.6 ) continue;

						boid = boids[ i ];
						distance = boid.position.distanceTo( this.position );

						if ( distance > 0 && distance <= _neighborhoodRadius ) {

							posSum.addSelf( boid.position );
							count++;

						}

					}

					if ( count > 0 ) {

						posSum.divideScalar( count );

					}

					steer.sub( posSum, this.position );

					var l = steer.length();

					if ( l > _maxSteerForce ) {

						steer.divideScalar( l / _maxSteerForce );

					}

					return steer;

				}

				this.separation = function ( boids ) {

					var boid, distance,
					posSum = new THREE.Vector3(),
					repulse = new THREE.Vector3();

					for ( var i = 0, il = boids.length; i < il; i ++ ) {

						if ( Math.random() > 0.6 ) continue;

						boid = boids[ i ];
						distance = boid.position.distanceTo( this.position );

						if ( distance > 0 && distance <= _neighborhoodRadius ) {

							repulse.sub( this.position, boid.position );
							repulse.normalize();
							repulse.divideScalar( distance );
							posSum.addSelf( repulse );

						}

					}

					return posSum;

				}

			}



			var SCREEN_WIDTH = window.innerWidth,
			SCREEN_HEIGHT = window.innerHeight,
			SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
			SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

			var birds = [];

			var boids = [], head_goose,goose_count;
			
			


			function birds_01_init(particle_number, mode,start,target,behaviour) {
				goose_count=particle_number;

				var ii = 0

				for ( var i = 0; i < particle_number; i ++ ) {

					var boid = boids[ i ] = new Particle();
					if (i < particle_number/2){
					boid.position.z = (i*50  + Math.random() * 60)+700;
					boid.position.y = i+1300 + Math.random() * 60;
					boid.position.x = (i*50)+700 + Math.random()  * 60;
					
					}else{
					ii = i - particle_number/2;
					boid.position.z = ((ii*50  + Math.random() * 60)*-1)+700;
					boid.position.y = ii+1300 + Math.random() * 60;
					boid.position.x = (ii*50)+700 + Math.random()  * 60;						
					}
					
					if (i>0){
						//boid.setTarget( boids[ i-1 ] );
						//boid.leader = boids[ i-1 ]
					}else{
						//boid.setTarget( target );
					}
					boid.setTarget( target );
					boid.velocity.x = 1//Math.random() * 1 - .5;
					boid.velocity.y = 1//Math.random() * 1 - .5;
					boid.velocity.z =1// Math.random() * 1 - .5;
					boid.setAvoidWalls( false );
					
					//boid.setBehaviour( behaviour );
					
					
					boid.setWorldSize( 2000, 2000, 2000 );
					
					var bird = birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color: 0x000000 } ) );
					bird.geometry.__dirtyVertices = true;
					bird.phase = Math.floor( Math.random() * 62.83 );
					bird.depthTest=true;
					bird.position = boids[ i ].position;
					bird.doubleSided = true;
					boid.mesh=bird;
					bird.scale.x = bird.scale.y = bird.scale.z = 1;
					scene.addObject( bird );
					goose_trigger = true
				}

				 head_goose = birds[0 ];

			}




var goose_vector = new THREE.Vector3( -7000, 300, 0 );

			function move_geese() {

				for ( var i = 0, il = birds.length; i < il; i++ ) {

					boid = boids[ i ];
					boid.run( boids );
					
					//vector.z = camera.position.z;
                                        boid.attract( goose_vector );
					boid.checkBounds()
					var goose = birds[ i ];
					
					goose.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
					goose.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );

					goose.phase = ( goose.phase + ( Math.max( 0, goose.rotation.y ) + 0.1 )  ) % 62.83 ;
					goose.geometry.vertices[ 5 ].position.y = goose.geometry.vertices[ 4 ].position.y = Math.sin( goose.phase ) * 5;
					goose.geometry.__dirtyVertices = true;
					goose.position.y += Math.sin( goose.phase );
					

				}
				
				//set_debugger(Math.round(birds[0].phase))


			}

var Bird = function () {

	var scope = this;

	var m1 = new THREE.MeshLambertMaterial( { color: 0x000000, shading: THREE.FlatShading } ),
	m2 = new THREE.MeshLambertMaterial( { color: 0xc0c0c0, shading: THREE.FlatShading } );
	
	THREE.Geometry.call( this );

	v(   10,   0,   0 );
	v( - 5, - 2,   0 );
	v( - 5,   0,   0 );
	v( - 5, - 2, - 1 );

	v(   0,   2, - 8 );
	v(   0,   2,   8 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	f3( 0, 2, 1);
	// f3( 0, 3, 2 );

	f3( 4, 7, 6 );
	f3( 5, 6, 7 );

	this.computeCentroids();
	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c, mat ) {

		scope.faces.push( new THREE.Face3( a, b, c,null, null ) );

	}

}

Bird.prototype = new THREE.Geometry();
Bird.prototype.__dirtyVertices = true;
Bird.prototype.constructor = Bird;
