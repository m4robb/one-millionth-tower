var texture_trans_global
var flythru =0,pano_vision =0
//////////////////////////////////////////////RENDERING!!!!!!!!!!!!!!!!!!


//////ZONES FOR EXPLORE SOUND CONTROL

var tc_marker = new THREE.Vector3(0,0,2000)
var mk_marker = new THREE.Vector3(-1700,0,0)
var rv_marker = new THREE.Vector3(2000,0,0)
var ambient_sound_target_reached = 0
var distance_from_market =  2000
var distance_from_tennis_court = 2000
var distance_from_ravine = 2000

var distance_from_maquette = 0

var current_video_mesh


function render() {

if(global_pause_state == 0){ 			

if(camera_mode == 'railed'){

	lat = Math.max( - 89.5, Math.min( 89.5, lat ) );
	phi = ( 90 - lat ) * Math.PI / 180;
	theta = lon * Math.PI / 180;
	camera.target.position.x = camera.position.x+500 * Math.sin( phi ) * Math.cos( theta );
	camera.target.position.y = camera.position.y+500 * Math.cos( phi );
	camera.target.position.z = camera.position.z+500 * Math.sin( phi ) * Math.sin( theta );

}

		

	 
		if(imagine_video){
		 do_progress_sf(imagine_mesh)
		 imagine_video.play_video();
		}

		if(living_proof_video){
		do_progress_sf(living_proof_mesh)
		living_proof_video.play_video();
		}
		
		if(tech_video){
		  do_progress_sf(tech_mesh)
		  tech_video.play_video();
		}
		
	  for ( var i = 0, l= videos_no_alpha.length;i<l; ++i  ) {
		videos_no_alpha[i].play_video();
	     	}
		for ( var i = 0,l=videos_alpha.length; i < l; i ++ ) {
		videos_alpha[i].draw_video();
		}
	


		var time = new Date().getTime() * 0.00001;
		if(particles_array){
			for(var i = 0,l = particles_array.length;i<l; i++ ) {
				particles_array[i].rotation.z = time * ( i < 4 ? i+1 : - (i+1) );
			}
		}


			if (walk_about_loaded)	{
			   walk_about_mesh.position.z = 4000*Math.cos( w_degree*Math.PI/180);
			   walk_about_mesh.position.x = 4000*Math.sin( w_degree*Math.PI/180);
			   w_degree-=.01

			}

                         pano_mesh.rotation.y += .0003 

			if (pollen){
				pollen.animate()
			}

			for (var i = 0,l=precipitation_array.length;i<l; i++) {
				 precipitation_array[i].update();
				 precipitation_geometry.__dirtyVertices = true;
			}
			
			if(tc_fence_system_live){
			    tc_fence_push_life()
			}


				
			move_geese()

				if(constellation_trigger){
				 constellation_animate ()
				}


				if(explore == 1){
					//console.log(camera.lookSpeed)
					var vector = new THREE.Vector3( m_x,  m_y, .5 );
					projector.unprojectVector( vector, camera );
					
					collision_detector.position.x = camera.position.x
					collision_detector.position.y = camera.position.y
					collision_detector.position.z = camera.position.z

					var ray = new THREE.Ray( collision_detector.position, new THREE.Vector3(1,0,1) );
					var c = THREE.Collisions.rayCastNearest(ray);
					
					if (c && c.distance <= 300) {
					camera.translateZ(100)
					}	
					
					/**/
					
/**/					
					if(camera.position.distanceTo(new THREE.Vector3(0,0,0) ) >8000) {
							go_explore()			
					}
					
					if(!is_watching) {
					  distance_from_maquette = Math.abs((Math.round(camera.position.distanceTo(sound_target.position))-5000)/5000)	
						if(distance_from_maquette > 1){distance_from_maquette=1;}		
						distance_from_ravine =  Math.abs((Math.round(camera.position.distanceTo(rv_marker))-5000)/5000)
						distance_from_tennis_court = Math.abs((Math.round(camera.position.distanceTo(tc_marker))-5000)/5000)
						distance_from_market =Math.abs((Math.round(camera.position.distanceTo(mk_marker))-5000)/5000)
	
						if(distance_from_market >1){distance_from_market=1;}
						if(distance_from_tennis_court >1){distance_from_tennis_court=1;}
						if(distance_from_ravine >1){distance_from_ravine=1;}
	 
					
				 
						if(ambient_sound_target_reached == 1){
						document.getElementById('rv_ambient').volume=distance_from_ravine  //* (1-distance_from_maquette)
						document.getElementById('tc_ambient').volume=distance_from_tennis_court //* (1-distance_from_maquette)
						document.getElementById('mk_ambient').volume=distance_from_market	 //* (1-distance_from_maquette)
						}
					}else { //is watching
						document.getElementById('rv_ambient').pause();
						document.getElementById('mk_ambient').pause();
						document.getElementById('tc_ambient').pause();
					}
				}


if(sound_track == "on"){
	do_progress()
	//console.log(document.getElementById('video_controller').currentTime)
	document.getElementById('video_controller').play()
	//document.getElementById('audio').pause();
}else{
	document.getElementById('video_controller').pause()
}




if(do_linear==1){

	if(flythru==0){
	//camera.position.y = -100
	}
	if(imagine_video || living_proof_video || tech_video){
		camera.position.y = 0
	}
}

	if(is_looking_at_google || flythru == 1 || menu_is_loaded==1 || do_linear==1){	
		//$("#text_use_keyboard").css('display', 'none');
		
	}
	
	if(is_looking_at_google){
	
	
	}else{
		//$("#subtitles_toggle").css('display', 'block');
	}
	
}

if(is_playing_global){	
	if(do_linear == 0){
		$("#btn_stop_video").css('display', 'block');
	 }
		$('#text_use_keyboard').css('display', 'none');
	}else{
		$("#btn_stop_video").css('display', 'none');
		$("#btn_stop_video_linear").css('display', 'none');
	}
	
	if(user_move){
		document.getElementById('control_label').innerHTML = global_control_word
	}else{
		document.getElementById('control_label').innerHTML = "X"
		}

		renderer.clear();
		renderer.render( scene, camera );
					
					
}