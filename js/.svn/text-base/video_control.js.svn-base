// JavaScript Document

 
	var chroma;
	var video_buffer_cnvs  = document.getElementById('video_buffer_cnvs');
	 video_buffer_cnvs.width = 640;
	 video_buffer_cnvs.height = 1000;

	var	video_buffer_context = video_buffer_cnvs.getContext( '2d' );		
	var	texture_video_buffer = new THREE.Texture( video_buffer_cnvs );
	var video_alpha_texture = new THREE.MeshBasicMaterial( { map: texture_video_buffer } );
	

	fence_push= function(){
		video_play('videos/fence_push.ogv',0,-200,1800,0,180,0,10)
	}
    
video_play = function (_src,x,y,z,rx,ry,rz,s){


				
			var video_src = document.getElementById('video');	
				video_src.src=_src;
			    video_src.load();
			    video_src.play();
			chroma = new ChromaGL('video', video_buffer_cnvs); 
			chroma.addChromaKey('pre', 0);	
		      if(chroma != null){
			   //video_play_status = 1
                setInterval(draw, 20);
		       }					
			video_src.onplaying = function(e){
				
		        var video_screen = new Plane(80, 60	, 1, 1 );	
			    var mesh_video_rgb = new THREE.Mesh( video_screen, video_alpha_texture);
				mesh_video_rgb.overdraw=true
				
 
		
				
				scene.addObject( mesh_video_rgb );
				mesh_video_rgb.scale.x = mesh_video_rgb.scale.y = mesh_video_rgb.scale.z = s
				mesh_video_rgb.overdraw = true;
				
				mesh_video_rgb.rotation.x = rx * Math.PI / 180;
				mesh_video_rgb.rotation.y = ry * Math.PI / 180;
				mesh_video_rgb.rotation.z = rz * Math.PI / 180;
				
				mesh_video_rgb.position.x = x;
				mesh_video_rgb.position.y = y;	
				mesh_video_rgb.position.z = z;	
			}
	
			video_src.onended = function(e){
				video_status = 0
				alert ("done")
				//scene.removeObject( mesh_video_rgb );
				//chroma = null

			 }

		
}
var frames=0;
var fpsUpdateTime = 0;
	function draw() {
		//update frame rate
		alert("drw")
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
