// JavaScript Document


function video_play_chroma(_src,target_mesh){

				var width;
				var height;
				var outputCanvas;
				var output;
				var bufferCanvas;
				var buffer;
				var texture_alpha_video_buffer
			    //var video_src= document.getElementById('video')	
				var video_src = document.createElement("video");
				
				outputCanvas = document.createElement( 'canvas' );
				output = outputCanvas.getContext('2d');
				bufferCanvas = document.createElement( 'canvas' );
				buffer = bufferCanvas.getContext('2d');
				
				video_src.loaded = true;
				video_src.src=_src;
			    video_src.load();
			    video_src.play();
	             //add_popcorn()

			
			texture_alpha_video_buffer = new THREE.Texture( outputCanvas )			
			texture_alpha_video_buffer.minFilter = THREE.LinearFilter;
			texture_alpha_video_buffer.magFilter = THREE.LinearFilter;
			
			var video_alpha = new THREE.MeshBasicMaterial( { map: texture_alpha_video_buffer} );		
	
			target_mesh.materials[0] = video_alpha
			
			


				function start(){
					 width = parseInt(video_src.videoWidth-2)
					 height =parseInt(video_src.videoHeight/2-2)
					 bufferCanvas.width=width	
					 bufferCanvas.height=video_src.videoHeight	
					 outputCanvas.width=width	
					 outputCanvas.height=height
					 video_play_status = 1
				     //draw_alpha_video()
				}
	           video_src.addEventListener('loadedmetadata', start, false);	
		

				
			video_src.onended = function(e){
				video_play_status = 0
			 }

		
}

function draw_alpha_video() {
				buffer.drawImage(video_src, 0, 0);
		
				// this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
				var	image = buffer.getImageData(0, 0, width, height),
					imageData = image.data,
					alphaData = buffer.getImageData(0, height, width, height).data;
				
				for (var i = 3, len = imageData.length; i < len; i = i + 4) {
					imageData[i] = alphaData[i-1];
				}
				
				output.putImageData(image, 0, 0, 0, 0, width, height);
				texture_alpha_video_buffer.needsUpdate = true
}
