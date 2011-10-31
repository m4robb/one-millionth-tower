// JavaScript Document

 
	var chroma;
	var video_buffer_cnvs  = document.getElementById('video_buffer_cnvs');
    var texture_video_buffer
  var video_src = document.getElementById('video');

	

	fence_push= function(){
		video_play('videos/fence_push_01.ogv',0,TC_height,1999,0,180,0,1)
	}
	
	
	
    
function video_play_chroma(_src,target_mesh){


				
			  	
				video_src.src=_src;
			    video_src.load();
			    video_src.play();
	             //add_popcorn()

			
			texture_video_buffer = new THREE.Texture( video_buffer_cnvs )			
			texture_video_buffer.minFilter = THREE.LinearFilter;
			texture_video_buffer.magFilter = THREE.LinearFilter;
			texture_video_buffer.needsUpdate = true
			
		
			
				
		
	        //target_mesh.materials[0].opacity=0
			
			/*
			new TWEEN.Tween( target_mesh.materials[0] )
			.to( {opacity: 1 },2000 )
			.easing( TWEEN.Easing.Linear.EaseNone)
			.onComplete( function() {
				create_sv_fade()
				for ( var i = 0; i < objects.length; i ++ ) {
					objects[i].visible=false
				}
})
			.start();
	/*/		
			video_src.onplaying = function(e){
				target_mesh.materials[0].map = texture_video_buffer
				chroma = new ChromaGL('video', video_buffer_cnvs); 
				var colour_array = [255,0,0]
				chroma.addChromaKey({mode: 'pre', color:colour_array})
   				chroma.go();
			   video_play_status = 1

	

			}			  

				
			video_src.onended = function(e){
				video_play_status = 0


			 }

		
}
var frames=0;
var fpsUpdateTime = 0;
	function video_draw_chroma() {
		//update frame rate
		
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
	
	function add_popcorn(){
		      
			  
	var p = Popcorn('#video')
	  
	  
        .code({
          start: 80,     end: 90,
          onStart: function( options ) {
			 var dummy = { p: 1};
				new TWEEN.Tween( dummy )
				.to( {p: .01 },10000 )
				.easing( TWEEN.Easing.Linear.EaseNone)
				.onUpdate( function() {
				SKY_mesh.scale.x=SKY_mesh.scale.y=SKY_mesh.scale.z = dummy.p
				})
				.start();
			  },
		 onEnd: function ( options ) {	

          }
        })
		
		  

	
	
	
		 
	
      .play();
    }
