/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author paulirish / http://paulirish.com/
 *
 * parameters = {
 *  fov: <float>,
 *  aspect: <float>,
 *  near: <float>,
 *  far: <float>,
 *  target: <THREE.Object3D>,

 *  movementSpeed: <float>,
 *  lookSpeed: <float>,

 *  noFly: <bool>,
 *  lookVertical: <bool>,
 *  autoForward: <bool>,

 *  constrainVertical: <bool>,
 *  verticalMin: <float>,
 *  verticalMax: <float>,

 *  heightSpeed: <bool>,
 *  heightCoef: <float>,
 *  heightMin: <float>,
 *  heightMax: <float>,

 *  domElement: <HTMLElement>,
 * }
 */

CustomQuakeCamera = function ( parameters ) {

	THREE.Camera.call( this, parameters.fov, parameters.aspect, parameters.near, parameters.far, parameters.target );

	this.movementSpeed = 1.0;
	this.lookSpeed = 0.005;

	this.noFly = false;
	this.lookVertical = false;
	this.autoForward = false;

	this.activeLook = true;

	this.heightSpeed = false;
	this.heightCoef = 1.0;
	this.heightMin = 0.0;

	this.constrainVertical = false;
	this.verticalMin = 0;
	this.verticalMax = 3.14;

	this.domElement = document;

	this.lastUpdate = new Date().getTime();
	this.tdiff = 0;

	if ( parameters ) {

		if ( parameters.movementSpeed !== undefined ) this.movementSpeed = parameters.movementSpeed;
		if ( parameters.lookSpeed !== undefined ) this.lookSpeed  = parameters.lookSpeed;
		if ( parameters.noFly !== undefined ) this.noFly = parameters.noFly;
		if ( parameters.lookVertical !== undefined ) this.lookVertical = parameters.lookVertical;

		if ( parameters.autoForward !== undefined ) this.autoForward = parameters.autoForward;

		if ( parameters.activeLook !== undefined ) this.activeLook = parameters.activeLook;

		if ( parameters.heightSpeed !== undefined ) this.heightSpeed = parameters.heightSpeed;
		if ( parameters.heightCoef !== undefined ) this.heightCoef = parameters.heightCoef;
		if ( parameters.heightMin !== undefined ) this.heightMin = parameters.heightMin;
		if ( parameters.heightMax !== undefined ) this.heightMax = parameters.heightMax;

		if ( parameters.constrainVertical !== undefined ) this.constrainVertical = parameters.constrainVertical;
		if ( parameters.verticalMin !== undefined ) this.verticalMin = parameters.verticalMin;
		if ( parameters.verticalMax !== undefined ) this.verticalMax = parameters.verticalMax;

		if ( parameters.domElement !== undefined ) this.domElement = parameters.domElement;

	}

	this.autoSpeedFactor = 0.0;

	this.mouseX = 0;
	this.mouseY = 0;
	this.mouseXX = 0;
	this.mouseYY = 0;

	this.lat = lat;
	this.lon = lon;

	
	this.phi = ( 90 - this.lat ) * Math.PI / 180;
	this.theta = this.lon * Math.PI / 180;

	this.moveForward = false;
	this.moveBackward = false;
	this.moveLeft = false;
	this.moveRight = false;
	this.freeze = false;

	this.mouseDragOn = false;

	this.windowHalfX = window.innerWidth / 2;
	this.windowHalfY = window.innerHeight / 2;
	this.windowActiveX = window.innerWidth	 -350
	
	this.canMove=1
	
	

	this.onMouseDown = function ( event ) {
//must_go_back = 0 
		event.preventDefault();
		event.stopPropagation();

		if ( this.activeLook ) {

			switch ( event.button ) {

				//case 0: this.moveForward = true; break;
			//	case 2: this.moveBackward = true; break;

			}

		}

		this.mouseDragOn = true;

	};

	this.onMouseUp = function ( event ) {

		event.preventDefault();
		event.stopPropagation();

		if ( this.activeLook ) {

			switch ( event.button ) {

				case 0: this.moveForward = false; break;
				case 2: this.moveBackward = false; break;

			}

		}

		this.mouseDragOn = false;

	};

	this.onMouseMove = function ( event ) {
  	this.mouseXX = event.clientX
		this.mouseYY = event.clientY
	  if(parseInt(this.mouseXX) > parseInt(this.windowHalfX-300) && parseInt(this.mouseXX) < parseInt(this.windowHalfX+300) && parseInt(this.mouseYY) > parseInt(this.windowHalfY-300) && parseInt(this.mouseYY) < parseInt(this.windowHalfY+300)){
		this.lookSpeed =0.0013
		}else{
		this.lookSpeed = 0.04
		}
		

		this.mouseX = event.clientX - this.windowHalfX;
		this.mouseY = event.clientY - this.windowHalfY;
	//	

	};

	this.onKeyDown = function ( event ) {
	if(is_zooming==0){

		switch( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/add_center_text(); this.moveForward = true;document.getElementById('moving_sound').play();break;

			case 37: /*left*/
			case 65: /*A*/ add_center_text();this.moveLeft = true; break;

			case 40: /*down*/
			case 83: /*S*/add_center_text();this.moveBackward = true;document.getElementById('moving_sound').play();break;

			case 39: /*right*/
			case 68: /*D*/add_center_text();this.moveRight = true; break;
			
			case 13: remove_center_text();go_explore(); break;

			case 81: this.freeze = !this.freeze; break;

		}
	}

	};

	this.onKeyUp = function ( event ) {
		document.getElementById('moving_sound').pause();
		switch( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/ this.moveForward = false; break;

			case 37: /*left*/
			case 65: /*A*/ this.moveLeft = false; break;

			case 40: /*down*/
			case 83: /*S*/ this.moveBackward = false; break;

			case 39: /*right*/
			case 68: /*D*/ this.moveRight = false; break;

		}

	};




	//this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );

	this.domElement.addEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
	this.domElement.addEventListener( 'mousedown', bind( this, this.onMouseDown ), false );
	this.domElement.addEventListener( 'mouseup', bind( this, this.onMouseUp ), false );
	this.domElement.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
	this.domElement.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );
	
	this.removeThis = function(){
	//this.domElement.removeEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	document.removeEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
	document.removeEventListener( 'mousedown', bind( this, this.onMouseDown ), false );
	document.removeEventListener( 'mouseup', bind( this, this.onMouseUp ) , false );
	document.removeEventListener( 'keydown', this.onKeyDown,true  );
	document.removeEventListener( 'keyup', this.onKeyUp, false );
	
	}

	function bind( scope, fn ) {

		return function () {

			fn.apply( scope, arguments );

		};

	};

	function map_linear( x, sa, sb, ea, eb ) {

		return ( x  - sa ) * ( eb - ea ) / ( sb - sa ) + ea;

	};

	function clamp_bottom( x, a ) {

		return x < a ? a : x;

	};

	function clamp( x, a, b ) {

		return x < a ? a : ( x > b ? b : x );

	};

};


CustomQuakeCamera.prototype = new THREE.Camera();
CustomQuakeCamera.prototype.constructor = CustomQuakeCamera;
CustomQuakeCamera.prototype.supr = THREE.Camera.prototype;

CustomQuakeCamera.prototype.update = function() {
	if(over_interface){
		this.lookSpeed =0
         }
    	this.position.y = -150;
	var now = new Date().getTime();
	this.tdiff = ( now - this.lastUpdate ) / 1000;
	this.lastUpdate = now;
																	
	if ( !this.freeze ) {


	if ( this.heightSpeed ) {
	var y = clamp( this.position.y, this.heightMin, this.heightMax ),delta = y - this.heightMin; this.autoSpeedFactor = this.tdiff * ( delta * this.heightCoef );
	} else {
	this.autoSpeedFactor = 0.0;
	}

	var actualMoveSpeed = this.tdiff * this.movementSpeed;

	if ( this.moveForward || ( this.autoForward && !this.moveBackward ) ) this.translateZ( - ( actualMoveSpeed + this.autoSpeedFactor ) );
	if ( this.moveBackward ) this.translateZ( actualMoveSpeed );
	if ( this.moveLeft ) this.translateX( - actualMoveSpeed );
	if ( this.moveRight ) this.translateX( actualMoveSpeed );

	var actualLookSpeed = this.tdiff * this.lookSpeed;

	if ( !this.activeLook ) {

	actualLookSpeed = 0;

	}
			
				
	if(is_zooming == 0){
	this.lon += this.mouseX * actualLookSpeed;
	if(this.lon > 360){this.lon = 0}
	if(this.lon < 0){this.lon = 360}
	if( this.lookVertical ) this.lat -= this.mouseY * actualLookSpeed;
	lat = this.lat
	lon = this.lon
	}else{
	this.lat = lat 
	this.lon = lon	
	}
			
			
	this.lat = Math.max( - 15, Math.min( 25, this.lat ) );

	this.phi = ( 90 - this.lat ) * Math.PI / 180;
	this.theta = this.lon * Math.PI / 180;

	var targetPosition = this.target.position,
	position = this.position;

	targetPosition.x = position.x + 100 * Math.sin( this.phi ) * Math.cos( this.theta );
	targetPosition.y = position.y + 100 * Math.cos( this.phi );
	targetPosition.z = position.z + 100 * Math.sin( this.phi ) * Math.sin( this.theta );

	}

		this.lon += this.mouseX * actualLookSpeed;
		if( this.lookVertical ) this.lat -= this.mouseY * actualLookSpeed;

		this.lat = Math.max( 10, Math.min( 85, this.lat ) );
		this.phi = ( 90 - this.lat ) * Math.PI / 180;
		this.theta = this.lon * Math.PI / 180;

		if ( this.constrainVertical ) {

			this.phi = map_linear( this.phi, 0, 3.14, this.verticalMin, this.verticalMax );

		}

		var targetPosition = this.target.position,
		position = this.position;

		targetPosition.x = position.x + 100 * Math.sin( this.phi ) * Math.cos( this.theta );
		targetPosition.y = position.y + 100 * Math.cos( this.phi );
		targetPosition.z = position.z + 100 * Math.sin( this.phi ) * Math.sin( this.theta );

		this.supr.update.call( this );

	
	};
	

CustomQuakeCamera.prototype.translate = function ( distance, axis ) {

	this.matrix.rotateAxis( axis );

	if ( this.noFly ) {

		axis.y = 0;

	}

	this.position.addSelf( axis.multiplyScalar( distance ) );
	this.target.position.addSelf( axis.multiplyScalar( distance ) );

};
