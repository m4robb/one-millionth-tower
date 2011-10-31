// JavaScript Document
var path_texture, processingInstance;  
function path_init() {
		//map: ImageUtils.loadTexture( 'textures/tennis_court/stairs.png' )
	var points = [];
	
	
	points[ points.length  ] = { x:0, z: 0 };	
	points[ points.length  ] = { x:100, z: 2000 };
	points[ points.length  ] = { x:1100, z: 700 };

	points[ points.length ] = { x:400, z:200 };
	path_texture = new THREE.Texture( createProcessingImage(10000,points) )
	path_texture.needsUpdate = true
	var path_mat = new THREE.MeshBasicMaterial( { map:path_texture } );
	var path_mesh = load_mesh(new Plane(2000, 2000, 20, 20),  path_mat,1000,-250,1000,-90,0,0,1);	
	render()
   // plane = new THREE.Mesh(new Plane(200, 200, 2, 2));                
  
}



function createProcessingImage() {
alert("procssing init")
	processingInstance = Processing.getInstanceById('processing_buffer_cnvs');  
	document.getElementById('debug_text').innerHTML = "start"
	var _tcnvs = document.getElementById('processing_buffer_cnvs')
	_tcnvs.width=2000
	_tcnvs.height=2000
	var tcontext = _tcnvs.getContext( '2d' );
	var image = tcontext.getImageData( 0, 0, _tcnvs.width, _tcnvs.height );
	var imageData = image.data;
	tcontext.putImageData( image, 0, 0 );
	return _tcnvs;

}


function build_curve(points, timeframe){
	var dummy = { p: 0 };
	var position = { x: 0, z: 0 };
	var position_old = { x:camera.position.x, z:camera.position.z };
	var spline = new Spline();
	var counter = 0
	path_tween = new TWEEN.Tween( dummy )
	.to( { p: 1 }, timeframe )
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.onUpdate( function() {
		position = spline.get2DPoint( points, this.p );

		var angle=Math.atan2((position.x-position_old.x),(position.z-position_old.z))
		if (angle<0) {angle +=3}
		angle=angle*(180/Math.PI) 

		if (angle !=0 ){
			if(counter >2){
			 var test_path = load_mesh(new Cube( 200, 1, 200, 1,1,1 ),path_01,position.x ,-300,position.z,0, angle,0,1);
			 counter =0
			}
              counter ++
			
			}
		position_old.x = position.x;
		position_old.z = position.z;
	})

	.start();
	
	
}


       
  

