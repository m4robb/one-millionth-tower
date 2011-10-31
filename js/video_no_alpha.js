var  buffer_obj

var video_no_alpha = function (_source,_target_mesh,_time,callback) {
  this.track_elapsed_time =  0
  
  if(buffer_obj){
  document.body.removeChild(buffer_obj);
 }
	var scope = this;
	var source= GLOBAL_MEDIA_SERVER_THINK+_source
	var target_mesh = _target_mesh
	var buffer_cxt, output_cvs,output_cxt, output_txtr, output_mat, source_width,source_height,source_x,source_y,source_ready=false,source, call_back, start_time = 0

	var buffer_cvs = document.createElement("video");
	//if(is_sf){
	buffer_cvs.setAttribute('id', 'video_controller_sf');
	buffer_cvs.setAttribute('style', 'display:none');
	buffer_obj = buffer_cvs
	document.body.appendChild(buffer_obj);
	this.bfr = buffer_cvs
	//}
	output_cvs = document.createElement( 'canvas' );
	buffer_cvs.loaded = true;
	buffer_cvs.src=source;
  buffer_cvs.load();
	buffer_cvs.play();
	if(global_mute){
	
	buffer_cvs.muted=true;
	}
	output_cxt = output_cvs.getContext( '2d' );	
	

	
	output_txtr = new THREE.Texture( output_cvs );
	var output_mat = new THREE.MeshBasicMaterial( { map: output_txtr } );
	
	
	 function start(){
	 
				
					buffer_cvs.width = parseInt(buffer_cvs.videoWidth);
					buffer_cvs.height =parseInt(buffer_cvs.videoHeight);
					output_cvs.width = parseInt(buffer_cvs.videoWidth);
					output_cvs.height =parseInt(buffer_cvs.videoHeight);
					target_mesh.time_total = buffer_cvs.duration
					source_ready = true;
					if (_time){			
						buffer_cvs.currentTime = _time
					}
 	}
	                buffer_cvs.addEventListener('loadedmetadata', start, false);	
	

    		buffer_cvs.onended = function(e){
				source_ready == false
				if(callback){
				callback.call(this)
				}
				
				
	}
    this.play_video = function () {
		if(source_ready == true){
		
			if ( buffer_cvs.readyState === buffer_cvs.HAVE_ENOUGH_DATA ) {
 					target_mesh.materials[0] = output_mat
 					target_mesh.time_elapsed = buffer_cvs.currentTime
 					this.track_elapsed_time  = buffer_cvs.currentTime
 					output_txtr.image = buffer_cvs;
					//output_cxt.drawImage( buffer_cvs, 0, 0 );
					output_txtr.needsUpdate = true;
			}
		}

	}
	
	
  this.stop_video = function () {
		//source_ready == false
		buffer_cvs.pause()
		//buffer_cvs.src="none.webm"	

	}

  this.rewind_video = function () {
		buffer_cvs.currentTime = 0
		buffer_cvs.pause()

	}

  this.pause_video = function () {
		buffer_cvs.pause()

  }
  
 this.resume_video = function () {
		buffer_cvs.play()

  }	  
  
 this.go_to_and_play = function (_time) {
		//source_ready == false
			
			//buffer_cvs.stop()



	}


				
}