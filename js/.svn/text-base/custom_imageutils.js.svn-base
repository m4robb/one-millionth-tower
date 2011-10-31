// Dragonfly IT WebGL Review: ISSUE #4, texture sizes are not optimal, replace default THREE texture loader so that we can automatically mipmap the textures for optimial rendering.


var resize_allow_reduction = true;  // allow POT calculations to perform reductions when possible
var resize_max_reduction = 64; // don't reduce more than this many pixels
var resize_min_dimension = 256; // do not reduce textures smaller than this.

function resizeImagePOT(image) {
    var canvas = document.createElement("canvas");
    
    var cw_n = nextPowerOfTwo(image.width);
    var ch_n = nextPowerOfTwo(image.height);
    var cw_p = prevPowerOfTwo(image.width);
    var ch_p = prevPowerOfTwo(image.height);
    
    var cw, ch;
    
    if (resize_allow_reduction && image.width > resize_min_dimension && image.width-cw_p <= resize_max_reduction) {
      cw = cw_p;
    } else {
      cw = cw_n;
    }
    
    if (resize_allow_reduction && image.height > resize_min_dimension && image.height-ch_p <= resize_max_reduction) {
      ch = ch_p;
    } else {
      ch = ch_n;
    }
    
  /* *
    if (console && console.log) { 
      console.log("Texture ["+image.src+"], Original: ["+image.width+"x"+image.height+"], Resized: ["+cw+"x"+ch+"]");
    }
  /* */    
    canvas.width = cw;
    canvas.height = ch;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image,
                  0, 0, image.width, image.height,
                  0, 0, canvas.width, canvas.height);
    var url = canvas.toDataURL(); // Read succeeds, canvas won't be dirty.
    return canvas;
}
 
function isPowerOfTwo(x) {
    return (x & (x - 1)) == 0;
}
 
function nextPowerOfTwo(x) {
    --x;
    for (var i = 1; i < 32; i <<= 1) {
        x = x | x >> i;
    }
    return x + 1;
}

function prevPowerOfTwo(x) {
    return nextPowerOfTwo(x)/2;
}


THREE.ImageUtils.loadTexture = function ( path, mapping, callback ) {
  
	var image = new Image(), 	texture = new THREE.Texture( image, mapping );
	
	image.onload = function () { 
		
  	var wpt = isPowerOfTwo(image.width);
  	var hpt = isPowerOfTwo(image.height);
  	
    if (!wpt || !hpt) {
      texture.image = resizeImagePOT(image);
    }

	  //texture.magFilter = THREE.LinearFilter;
  	//texture.minFilter = THREE.LinearMipMapLinearFilter;
                        	
	  texture.needsUpdate = true; 
	};
	image.crossOrigin = '';
	image.src = GLOBAL_MEDIA_SERVER_THINK + path;

	return texture;

};
