// JavaScript Document


var video_alpha = function (_source,_target_mesh) {

	var scope = this;
	//var source= _source
	var target_mesh = _target_mesh
	
				var width;
				var height;
				var outputCanvas;
				var output;
				var bufferCanvas;
				var buffer;
				var texture_alpha_video_buffer
			    //var source= document.getElementById('video')	
				var source = document.createElement("video");
				var source_ready=false
				var undef;
			
				source.loaded = true;
				source.src= GLOBAL_MEDIA_SERVER_THINK+_source
	    	source.load();
	    	source.play();
	             //add_popcorn()

			target_mesh.visible = false
			texture_alpha_video_buffer = new THREE.Texture( source )			
			texture_alpha_video_buffer.minFilter = THREE.LinearFilter;
			texture_alpha_video_buffer.magFilter = THREE.LinearFilter;
					
      // Dragonfly IT WebGL Review: ISSUE #8 -- video canvas and pixel manipulation was utilizing over 20% of resources			
			var alphaVideoFragment = ["varying vec2 vUv;",
      			                    "uniform sampler2D tDiffuse;",
      			                    "void main(void) {",
      				                  "gl_FragColor = texture2D( tDiffuse, vec2(vUv.x,vUv.y/2.0) );",
      				                  "gl_FragColor.a = texture2D( tDiffuse, vec2(vUv.x,0.5+vUv.y/2.0) ).r;",
      			                    "}"].join("\n");

      var alphaVideoVertex = ["varying vec2 vUv;",
      			                  "void main() {",
                      				"vUv = uv;",
                      				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
                      			  "}"].join("\n");

			
//			var video_alpha = new THREE.MeshBasicMaterial( { map: texture_alpha_video_buffer,transparent:false} );		
	
			var video_alpha = new THREE.MeshShaderMaterial( {
				uniforms: { tDiffuse: { type: "t", value: 0, texture: texture_alpha_video_buffer } },
				vertexShader: alphaVideoVertex,
				fragmentShader: alphaVideoFragment,
        transparent:false
			});
	
			target_mesh.materials[0] = video_alpha
			//target_mesh.materials[0].depthTest = false;
			
			


			function start(){
					 width = parseInt(source.videoWidth)
					 height =parseInt(source.videoHeight/2)
					 source.width = source.videoWidth;  // manually set these so that the image updater knows the real size.
					 source.height = source.videoHeight;
/*					 bufferCanvas.width=width	
					 bufferCanvas.height=source.videoHeight	
					 outputCanvas.width=width	
					 outputCanvas.height=height */
					 video_play_status = 1
					 source_ready=true	
					 target_mesh.visible = true
				}
	         source.addEventListener('loadedmetadata', start, false);	
		

				
			source.onended = function(e){


				source_ready=false
				video_play_status = 0
			 }

this.draw_video = function () {

	if( source_ready==true){
		/*		buffer.drawImage(source, 0, 0);
		
				// this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
				
				//alert(width)
				var	image = buffer.getImageData(0, 0, width, height),
					imageData = image.data,
					alphaData = buffer.getImageData(0, height, width, height).data;
				
				for (var i = 3, len = imageData.length; i < len; i = i + 4) {
					imageData[i] = alphaData[i-1];
				}
				
				output.putImageData(image, 0, 0, 0, 0, width, height); */
				texture_alpha_video_buffer.image = source;
				texture_alpha_video_buffer.needsUpdate = true
}
}

  this.pause_video = function () {
		source.pause()

  }
  
  this.stop_video = function () {

		source_ready == false
		source.pause()

	}
 this.resume_video = function () {
		source.play()

  }	

		
}

