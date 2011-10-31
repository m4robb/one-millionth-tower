// JavaScript Document

 
	var chroma;
	var video_buffer_cnvs  = document.getElementById('video_buffer_cnvs');
    var texture_video_buffer


	
var video_src = document.getElementById('video');	
	
	
	
    
function chroma_video_play(_src,target_mesh){


				
			    
				video_src.src=_src;
			    video_src.load();
			    video_src.play();
	

			
				texture_video_buffer = new THREE.Texture( video_buffer_cnvs )
				
				var video_alpha = new THREE.MeshBasicMaterial( { map: texture_video_buffer, opacity:1} );		
	
			     target_mesh.materials[0] = video_alpha
			//
			video_src.onplaying = function(e){
				if ( video_src.readyState === video_src.HAVE_ENOUGH_DATA ) {
				 alert('good to go')
				chroma = new ChromaGL('video', video_buffer_cnvs); 
			
				chroma.addChromaKey('pre', 0);
chroma.refresh(true);
   				//chroma.go();

			  // video_play_status = 1
				}

	//

			}			  

				
			video_src.onended = function(e){
				video_play_status = 0


			 }

		
}
var frames=0;
var fpsUpdateTime = 0;
	function video_draw() {
		//update frame rate
		//alert("drw")
		var now = Date.now();
		var elapsed = now - fpsUpdateTime;
		if (elapsed >= 2000) {

			fpsUpdateTime = now;
			frames = 0;
		}
		frames++;

		//clear canvas
		
		//draw background
		
		//draw logos (tracked)
		
		chroma.refresh(true);
	}
