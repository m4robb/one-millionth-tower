// JavaScript Document

function text_build(_string,_x,_y,_z) {
    //map: ImageUtils.loadTexture( 'textures/tennis_court/stairs.png' )
	var text_text= new THREE.Texture( createTextImage( _string ) )
	text_text.needsUpdate = true
	var text_mat = new THREE.MeshBasicMaterial( { map:text_text} );
	var text_mesh = load_mesh(new Plane(300, 50, 2, 2),text_mat,_x,_y,_z,0,0,90,1)
	//text_mesh.doubleSided=true
	
	
	//render()
   // plane = new THREE.Mesh(new Plane(200, 200, 2, 2));                
  
}


function createTextImage( string ) {

var tcanvas = document.createElement( 'canvas' );
tcanvas.width = 600;
tcanvas.height = 100;
tcanvas.loaded = true;

var tcontext = tcanvas.getContext( '2d' );
tcontext.font = "30px Arial";
tcontext.fillStyle = "rgb(255, 255, 255)";
tcontext.textAlign = "left";
tcontext.fillText( string, 10, 30, 580);
var image = tcontext.getImageData( 0, 0, tcanvas.width, tcanvas.height );
var imageData = image.data;
tcontext.putImageData( image, 0, 0 );

return tcanvas;
}


