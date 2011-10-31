
var Particle = function() {

				var vector = new THREE.Vector3(),
				_acceleration, _width = 1500, _height = 1500, _depth = 1500, _goal, _neighborhoodRadius = 5000,
				_maxSpeed = 4, _maxSteerForce = 0.1, _avoidWalls = false,_behaviour="avoid", _target;


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

					}/* else {

						this.checkBounds();

					}
					*/

					if ( Math.random() > 0.5 ) {

						this.flock( boids );

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

					if ( this.position.x >   _width ) this.position.x = - _width;
					if ( this.position.x < - _width ) this.position.x =   _width;
					if ( this.position.y >   _height ) this.position.y = - _height;
					if ( this.position.y < - _height ) this.position.y =  _height;
					if ( this.position.z >  _depth ) this.position.z = - _depth;
					if ( this.position.z < - _depth ) this.position.z =  _depth;

				}

				//

				this.avoid = function ( target ) {

					var steer = new THREE.Vector3();

					steer.copy( this.position );
					steer.subSelf( target );

					steer.multiplyScalar( 1 / this.position.distanceToSquared( target ) );

					return steer;

				}

				this.repulse = function ( target ) {

					var distance = this.position.distanceTo( target );

					if ( distance < 450 ) {

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
						
					if ( distance < 450 ) {
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

						if ( Math.random() > 0.2 ) continue;

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

			var	birds = [], bird = [];

			var boid = [], boids = [];
			
	
	
			function kites_01_init(particle_number, mode,start,target,behaviour) {




				for ( var i = 0; i < particle_number; i ++ ) {

					boid = boids[ i ] = new Particle();
					boid.position.x = start.position.x  + Math.random() * 200-200;
					boid.position.y = start.position.y  + Math.random() * 50 +300;
					boid.position.z = start.position.z + Math.random() * 200 - 200;
					
					boid.velocity.x = Math.random() * 2 - 1;
					boid.velocity.y = Math.random() * 2 - 1;
					boid.velocity.z = Math.random() * 2 - 1;
					boid.setAvoidWalls( true );
					boid.setBehaviour( behaviour );
					
					boid.setTarget( target );
					
					boid.setWorldSize( 2000, 2000, 2000 );
					bird = birds[ i ] = new THREE.Mesh( new Kite(),  new THREE.MeshFaceMaterial() );
					//bird = birds[ i ] = new THREE.Mesh( new Cube(10, 10, 10, 1, 1, 1,  new THREE.MeshBasicMaterial({ color: 0x0000ff }) ), new THREE.MeshFaceMaterial() );
					bird.phase = Math.floor( Math.random() * 62.83 );
					bird.mode="kite"
					bird.position = boids[ i ].position;
					bird.doubleSided = true;
					bird.scale.x = bird.scale.y = bird.scale.z = .5;
					bird.mode = mode;
					scene.addObject( bird );


				}



			}


			function birds_01_init(particle_number, mode,start,target,behaviour) {


				var ii = 0

				for ( var i = 0; i < particle_number; i ++ ) {

					boid = boids[ i ] = new Particle();
					if (i < particle_number/2){
					boid.position.x = i*50  + Math.random() * 60;
					boid.position.y = i+500 + Math.random() * 60;
					boid.position.z = (i*50)+500 + Math.random()  * 60;
					
					}else{
					ii = i - particle_number/2;
					boid.position.x = (i*150  + Math.random() * 60)*-1;
					boid.position.y = i+500 + Math.random() * 60;
					boid.position.z = (i*50)+500 + Math.random()  * 60;						
					}
					
					boid.velocity.x = Math.random() * 2 - 1;
					boid.velocity.y = Math.random() * 2 - 1;
					boid.velocity.z = Math.random() * 2 - 1;
					boid.setAvoidWalls( true );
					boid.setBehaviour( behaviour );					
					boid.setTarget( target );
					boid.setWorldSize( 7000, 7000, 7000 );
					bird = birds[ i ] = new THREE.Mesh( new Bird(),  new THREE.MeshFaceMaterial() );
					//bird = birds[ i ] = new THREE.Mesh( new Cube(10, 10, 10, 1, 1, 1,  new THREE.MeshBasicMaterial({ color: 0x0000ff }) ), new THREE.MeshFaceMaterial() );
					bird.phase = Math.floor( Math.random() * 62.83 );
					bird.position = boids[ i ].position;
					bird.mode = "bird";
					bird.doubleSided = true;
					bird.scale.x = bird.scale.y = bird.scale.z = 1;
					scene.addObject( bird );


				}



			}

			function onDocumentMouseMove( event ) {



			}



			function render_large_particles(obj_type) {

				for ( var i = 0, il = birds.length; i < il; i++ ) {

					boid = boids[ i ];
					boid.run( boids );

					bird = birds[ i ];

					//color = bird.materials[ 0 ].color;
					//color.r = color.g = color.b = ( 500 - bird.position.z ) / 1000;
					//color.updateStyleString();
					bird.rotation.x=1
					bird.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
					bird.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length());
					bird.phase = ( bird.phase + ( Math.max( 0, bird.rotation.y ) + 0.1 )  ) % 62.83;
					bird.geometry.vertices[ 5 ].position.y = bird.geometry.vertices[ 4 ].position.y = Math.sin( bird.phase ) * 35;
					bird.geometry.vertices[ 0 ].position.y =  Math.sin( bird.phase ) * -1;	
					bird.geometry.__dirtyVertices = true;
;

				}


				for ( var i = 0, il = boids.length; i < il; i++ ) {

					boid = boids[ i ];
					//vector.z = boid.position.z;
                    boid.attract_repulse( );
					//boid.repulse( vector );

				}		
	
				//renderer.render( scene, camera );

			}

var Bird = function () {

	var scope = this;

	var m1 = new THREE.MeshLambertMaterial( { color: 0x000000, shading: THREE.FlatShading } ),
	m2 = new THREE.MeshLambertMaterial( { color: 0xc0c0c0, shading: THREE.FlatShading } );
	
	THREE.Geometry.call( this );

THREE.Geometry.call( this );

	v(   10,   0,   0 );
	v( - 5, - 2,   0 );
	v( - 5,   0,   0 );
	v( - 5, - 2, - 1 );

	v(   0,   2, - 8 );
	v(   0,   2,   8 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	f3( 0, 2, 1 , m2);
	// f3( 0, 3, 2 );

	f3( 4, 7, 6,m1 );
	f3( 5, 6, 7,m1 );

	this.computeCentroids();
	this.computeFaceNormals();
	

	

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c, mat ) {

		scope.faces.push( new THREE.Face3( a, b, c,null, null, mat ) );

	}
	


}

Bird.prototype = new THREE.Geometry();
Bird.prototype.constructor = Bird;

var Kite = function () {

	var scope = this;

	var m1 = new THREE.MeshLambertMaterial( { color: 0x000000, shading: THREE.FlatShading} ),
	m2 = new THREE.MeshLambertMaterial( { color: 0xc0c0c0, shading: THREE.FlatShading } );
	
	THREE.Geometry.call( this );

	v(  0,   30,   0 );
    v( 40,   0,   0 );
	v( 0, -30,  0 );
	
	v( - 55,  0,   0 );	
	v( -105,   -5,   0 );
	v( -105,  5,   0 );
	v( -55,  0,   0 );	
	
	//uvs(1.000000,1.000000);
	///uvs(1.000000,2.000000);
	//uvs(2.000000,2.000000);
	//uvs(2.000000,1.000000);
	
	
	//0.000000,1.000000,1.000000,1.000000,1.000000,0.000000,0.000000,0.000000

/*
						new THREE.UV( ix / gridX, iy / gridY ),
						new THREE.UV( ix / gridX, ( iy + 1 ) / gridY ),
						new THREE.UV( ( ix + 1 ) / gridX, ( iy + 1 ) / gridY ),
						new THREE.UV( ( ix + 1 ) / gridX, iy / gridY )
*/

			scope.faceVertexUvs[ 0 ].push( [
						new THREE.UV( 0,1 ),
						new THREE.UV( 1, 1 ),
						new THREE.UV( 1, 0 ),
						new THREE.UV(0, 0 )
					] );

			scope.faceVertexUvs[ 0 ].push( [
						new THREE.UV( 0,1 ),
						new THREE.UV( 1, 1 ),
						new THREE.UV( 1, 0 ),
						new THREE.UV(0, 0 )
					] );


	f4( 0, 3, 2 ,1, new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/particles/kite.png' ), transparent : true } )	);
	f3( 3, 5, 4,  new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/particles/kite_tail.png' ), transparent : true }));


	this.computeCentroids();
	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}


	function f3( a, b, c, mat ) {

		scope.faces.push( new THREE.Face3( a, b, c, null, null, mat ) );

	}
	function f4( a, b, c,d, mat ) {

		scope.faces.push( new THREE.Face4( a, b, c, d,null, null, mat ) );

	}
	
	function uvs( u,v ) {

		scope.faceVertexUvs[ 0 ].push( new THREE.UV( u,v ) );

	}
	

}

Kite.prototype = new THREE.Geometry();
Kite.prototype.constructor = Kite;
