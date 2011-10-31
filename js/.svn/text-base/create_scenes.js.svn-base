// JavaScript Document
//scene.fog = new THREE.FogExp2( 0xffffff, 0.00017 );

var global_state = "start";
var camera_mode = "railed";
var do_linear = 0
var is_watching=false;
var flythru = 1
var return_to_menu;




function timeline_jump(num){
//alert(num)
	switch (num){
		case 0:
		start_timeline()
		break;
		case 1:
		move_to_TC();
		break;	
		case 2:
		move_to_RV();
		break;
		case 3:
		move_to_MK();
		break;		
		
		case 4:
		move_to_OUTRO();
		break;			
	}
}

function track_previous(){
	
	if(current_scene>0){
		current_scene--
		$('#track_forward').css('opacity', 1)
		
		timeline_jump(current_scene)
	}
}

function track_next(){
	if(current_scene<=3){
		current_scene++
		timeline_jump(current_scene)
	}
	if(current_scene==4){
		$('#track_forward').css('display', "none")
	}else{
		$('#track_forward').css('display', "block")
	}
}


function switch_camera(mode){
	camera_mode = mode
	if(mode=="free"){
	 explore = 1
	 do_linear = 0
	 is_zooming = 0
	  $('#progress_header').fadeOut(1000, function() {})
	  camera = new CustomQuakeCamera( { fov:54, aspect: width / height, near: 1, far: 32000,
												  constrainVertical:false,verticalMin: 1.3, verticalMax: 1.8,
												  movementSpeed: 650, lookSpeed: 0.03, noFly: true, lookVertical: true } );
	}
	
	if (mode=="railed"){
	explore = 0
	camera.position.y = -200

	  for (var i = 0; i< maquette_array.length; i++){
		scene.removeObject(maquette_array[i])
	  }

		 if (!!camera.removeThis) camera.removeThis();
		 camera = new THREE.Camera( 54, width / height, 1, 22000);
		 
	}
}


var must_go_back = 1 
var t_out

function kill_special_features(){
	$('#share_btns').fadeOut(1000, function() {})
	if(imagine_mesh && imagine_video){
		imagine_video.pause_video();
		new TWEEN.Tween( imagine_mesh.materials[0] ).to( {opacity: 0 },3000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
		
	 }
	if(living_proof_mesh && living_proof_video){
		living_proof_video.pause_video();
		new TWEEN.Tween( living_proof_mesh.materials[0] ).to( {opacity: 0 },3000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
		
	 } 
	  
	if(tech_mesh && tech_video){
		tech_video.pause_video();
		new TWEEN.Tween( tech_mesh.materials[0] ).to( {opacity: 0 },3000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
	 } 
	 
	 if(is_green==0){	 
	woh_mesh.materials[0].opacity=0
}
	 
	imagine_mesh_share.visibility=false
	woh_mesh_share.visibility=false	
	living_proof_mesh_share.visibility=false		 
}

var pause_tween
function pause(_offset){
     //is_watching=false;
    
	var dummy = { v: 1};
	is_playing_global = false	 
	if(active_maquette){
	active_maquette.is_playing = false
	}

	 fade_audio()
	 fade_ambient_in();

	if(check_go_green()){
  	  go_green_zoom()
  	  is_intro=0
	  is_outro=0
	  is_choose_a_country=0
	  fade_audio()
	  fade_ambient_in();
	  camera.lookVertical=true
  	  return true
         }	
    	pause_tween = new TWEEN.Tween( dummy ).to( { v: .1 }, 2000 )
	.onUpdate( function() {
	 document.getElementById("video_controller").volume = this.v})	
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.onComplete( function() { console.log('paused');sound_track = "off";document.getElementById("video_controller").pause()})
	.start();	
	if(explore == 1 && must_go_back ==1){

		points = []
		points[ points.length ] = { x:camera.position.x, z:camera.position.z };
		points[ points.length  ] = { x:0, z: 0 };
		if(_offset){
		camera_zoom(points,2200,lon+30,15,"RESUME")
		}else{
		camera_zoom(points,2200,lon+30,15,"RESUME",1)
		}
			

	
	}
	
	 for ( var i = 0,l=screen_sprite_array.length;i<l; i ++ ) {
	screen_sprite_array[i].opacity=0;
 }
 
 	if(is_outro == 1){
	   unbuild_maps()
	   for (var i = 0; i< objects.length; i++){
		 scene.addObject(objects[i])
		}
	  pano_mesh.visible=true;
		FLOOR_mesh.visible=true
		PATH_mesh.visible=true
		is_outro=0
		document.getElementById('bread_crumbs_outro').src="images/breadcrumbs/outro_done.png"
		outro_complete = 1
		}
		
		
	for ( var i = 0; i < videos_no_alpha.length; i ++ ) {
		videos_no_alpha[i].pause_video();
	     }
	     
	for ( var i = 0; i < videos_alpha.length; i ++ ) {
		videos_alpha[i].pause_video();
	     }
	     
	if(imagine_video){
	     imagine_video.pause_video();
	     }
	     
	if(living_proof_video){
	     	living_proof_video.pause_video();
	}
	
	if(tech_video){
	     	tech_video.pause_video();
	}	
}


function pause_outro(_offset){
     //is_watching=false;
    
	var dummy = { v: 1};
	is_playing_global = false	 
	if(active_maquette){
	active_maquette.is_playing = false
	}

	 fade_audio()
	 fade_ambient_in();


    	new TWEEN.Tween( dummy ).to( { v: .1 }, 2000 )
	.onUpdate( function() {
	 document.getElementById("video_controller").volume = this.v})	
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.onComplete( function() { console.log('paused');sound_track = "off";document.getElementById("video_controller").pause()})
	.start();	

	

 

		
	for ( var i = 0; i < videos_no_alpha.length; i ++ ) {
		videos_no_alpha[i].pause_video();
	     }
	     
	for ( var i = 0; i < videos_alpha.length; i ++ ) {
		videos_alpha[i].pause_video();
	     }
	     
	if(imagine_video){
	     imagine_video.pause_video();
	     }
	     
	if(living_proof_video){
	     	living_proof_video.pause_video();
	}
	
	if(tech_video){
	     	tech_video.pause_video();
	}	
}


function pause_video(){
	lat_resume = lat;
	lon_resume = lon;
	cam_x_resume = camera.position.x
	cam_y_resume = camera.position.y
	for ( var i = 0; i < videos_no_alpha.length; i ++ ) {
	   
		videos_no_alpha[i].pause_video();
	     }
	     
	for ( var i = 0; i < videos_alpha.length; i ++ ) {
		videos_alpha[i].pause_video();
	     }
	     
	if(imagine_video){
	     imagine_video.pause_video();
	     }
	     
	if(living_proof_video){
	     	living_proof_video.pause_video();
	}
	
	if(tech_video){
	     	tech_video.pause_video();
	}	
	global_pause_state = 1
	 var dummy = { v: document.getElementById("video_controller").volume};
	 var current_time = document.getElementById("video_controller").currentTime;l
	if(document.getElementById("video_controller").volume!=0){
   new TWEEN.Tween( dummy ).to( { v: 0 }, 2000 )
	.onUpdate( function() {
	 document.getElementById("video_controller").volume = this.v})	
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.onComplete( function() {document.getElementById("video_controller").currentTime=current_time;document.getElementById("video_controller").pause()})
	.start();	
}
}


var is_market,is_tennis_court, is_ravine, is_garden, is_roots, is_from_menu

function go_explore(_lon){
  $("#weather").css('display', 'block');
  $('#share_btns').css('display', 'none');
  $('#3d_screen').css('display', 'block');
 
  camera.position.y = -200
  if(do_linear==1){
  is_from_menu = false;
  }
  do_linear = 0
  is_intro_video = 0
//explore=1
  $("#ac_results").css('display', 'none');
  $("#progress_header_sf").css('display', 'none');
  
  $("#btn_subtitles").css('display', 'block');

  tracking_section="explore/"

	global_pause_state = 0
	document.getElementById('subtitle-container').innerHTML = "";
	
	is_playing_global = false;
	if(is_green==0){
	 kill_special_features();
	}

	check_the_world()
	OT_mesh_black.materials[0].opacity=0;
	FLOOR_mesh.visible=true
	PATH_mesh.visible=true
	pano_mesh.visible=true
	BELOW_mesh.visible = false
	all_floor_01.visible = true
	
	if(active_maquette){
	active_maquette.is_playing = false
	}

	//loadSubtitles("subtitles")
	//$('#subtitle-container').css('display', 'none')
	
	$("#main_story_dashboard").css('display', 'block');
	$("#startbar").css('display', 'none');
	$("#choose_country").css('display', 'none');
	
	if(is_looking_at_google){
	 uncreate_google_pano()
	}

	document.getElementById('bells').pause()
	
	if(check_go_green()){
  	  go_green_zoom()
  	  is_intro=0
	  is_outro=0
	  is_choose_a_country=0
	  fade_ambient_in();
	  camera.lookVertical=true
  	  return true
         }
        is_intro=0
	is_outro=0
	is_choose_a_country=0
	
	if (camera_mode=='railed'){
	 fade_ambient_in();	
	 var pointz = []
         pointz[ pointz.length ] = { x:camera.position.x, z:camera.position.z };
	 pointz[ pointz.length  ] = { x:0, z: 0 };
	 if(!_lon){
	 camera_move(pointz,1995,lon,20,"FREE_CAM");	
	 }else{
	 camera_move(pointz,1995,_lon,20,"FREE_CAM");	
	 }
		//fade_audio()
		
	 var dummy = { v: document.getElementById("video_controller").volume};
	 var vc_tween = new TWEEN.Tween( dummy ).to( { v: .1 }, 2000 )
		.onUpdate( function() {
		 document.getElementById("video_controller").volume = this.v})	
		.easing(TWEEN.Easing.Quadratic.EaseOut )
		.onComplete( function() {sound_track = "off"})
		.start();	
	 }else{
	 console.log('pausing from go explore')
	 camera.lookVertical=true
	 pause(1)	
	}
	








}

function go_linear(){
 	$("#weather").css('display', 'none');
 	do_linear = 1
 	camera.position.y = -100
	if(is_looking_at_google){
	uncreate_google_pano()
	}

 	if(is_outro == 1){
	   unbuild_maps()
	        for (var i = 0; i< objects.length; i++){
		 scene.addObject(objects[i])
		}
		make_day()
	        pano_mesh.visible=true;
		FLOOR_mesh.visible=true
		PATH_mesh.visible=true
		is_outro=0


		}
    
	
	$('#breadcrumbs').hide()
	$('#text_use_keyboard').hide()
	$('#btn_stop_video').hide()
	$('#startbar').hide()
	$('#progress_header').hide()
	$('#progress_header_sf').fadeOut(1000, function() {})

	document.getElementById('bells').pause()
	
	explore = 0	
	if(camera_mode=="free"){
	switch_camera('railed')
        }

	$('#btn_go_menu').fadeIn(1000, function() {})
        $('#btn_close_menu').fadeOut(1000, function() {})
	$('#main_menu_div').fadeOut(1000, function() {})
	
	start_timeline()
}


function set_resume(){

		lat_resume = lat;
		lon_resume=  lon;
		cam_x_resume= camera.position.x;
		cam_z_resume=camera.position.z;
		resume_mode = 1

}

function set_resume_btn(){
		pause()
		show_help()
		lat_resume = lat;
		lon_resume=  lon;
		cam_x_resume= camera.position.x;
		cam_z_resume=camera.position.z;
		resume_mode = 1
	
}


function resume_linear(){
	var points = [];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:cam_x_resume, z: cam_z_resume };
	camera_move(points,1000,lon_resume,lat_resume,"AUTO_CAM");	
}

function resume_auto_cam(){
	switch_camera('railed')
	var points = [];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:cam_x_resume, z: cam_z_resume };
	camera_move(points,5000,global_to_lon,global_to_lat,"AUTO_CAM");	
}
var cc = 0

function resume_scene(){
	global_pause_state = 0
	fade_ambient_out()
	console.log(videos_no_alpha.length)
	if(!imagine_video && !living_proof_video  && !tech_video){
	sound_track = "on"
	document.getElementById("video_controller").volume=0
	document.getElementById("video_controller").play()
	var dummy = { v: 0};
        var fade_tween = new TWEEN.Tween( dummy ).to( { v: 1 }, 1000 )
	.onUpdate( function() {document.getElementById("video_controller").volume = this.v})		 
	.start();
	}
	/*
	var points = [];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:cam_x_resume, z: cam_z_resume };
	camera_move(points,1000,lon_resume,lat_resume,"AUTO_CAM");	
	*/
	   for ( var i = 0; i < videos_no_alpha.length; i ++ ) {
		videos_no_alpha[i].resume_video();
	     }	
		 
		if(imagine_video){
		    imagine_video.resume_video();
	     	}

	    if(living_proof_video){
	     	 living_proof_video.resume_video();
	     }	 
	     
	   if(tech_video){
	     	     	 tech_video.resume_video();
	     }	

}

function check_the_world(){

	is_intro_video= 0
	$("#ac_results").css('display', 'none');
        $('#choose_country').css('display', 'none');
	if(is_outro == 1){
	   unbuild_maps()
	   for (var i = 0, l = objects.length;i<l; i++){
		 scene.addObject(objects[i])
	   }
	  pano_mesh.visible=true;
	  FLOOR_mesh.visible=true
	  PATH_mesh.visible=true
	  is_outro=0
	  document.getElementById('bread_crumbs_outro').src="images/breadcrumbs/outro_done.png"
	  outro_complete = 1
	  }
		
	$('#subtitle-container').css('display', 'block')	
	
	 if(is_night==1){
			make_day()
	 }

	$('#live_feed').fadeOut(1000, function() {})
		if(menu_is_loaded==1){
		close_menu();
		}
	


		 for ( var i = 0,l=screen_sprite_array.length;i<l; i ++ ) {
			screen_sprite_array[i].opacity=0;
		 }
 
		if(tc_boy_01){
			tc_boy_01.opacity=0;
		}
	
		if(tc_boy_02){
			tc_boy_02.opacity=0;
		}
	
	
	
	document.getElementById('startbar').style.display = "none"
	
	
	 for ( var i = 0,l=screen_sprite_array.length;i<l; i ++ ) {
	screen_sprite_array[i].opacity=0;
	 }
if(do_linear==0){
	 for ( var i = 0,l=videos_no_alpha.length;i<l; i ++ ) {
	 	  //alert(videos_no_alpha[i].track_elapsed_time)
			videos_no_alpha[i].stop_video();
	 }
	 }
		 videos_no_alpha.length=0
		 
		for ( var i = 0, l=videos_alpha.length;i<l; i ++ ) {
		videos_alpha[i].stop_video();
	     }
		 videos_alpha.length=0		 


	
	if(imagine_video){
	imagine_video.stop_video()
	imagine_video = false
	}

	if(living_proof_video){
	living_proof_video.stop_video()
	living_proof_video = false
	}

	if(tech_video){
	tech_video.stop_video()
	tech_video = false
	}	
	
}




			
function show_start(){ 

document.getElementById('startbar').style.display ="block";
document.getElementById('sidebar').style.display ="none";

}

var go_green_zoom_trigger
function go_green_zoom(){
	if(camera_mode=='railed'){
	switch_camera('free')	
	}
	$("#text_use_keyboard").css('display', 'none');

	var dummy = { v: document.getElementById("video_controller").volume};
	new TWEEN.Tween( dummy ).to( { v: .1 }, 2000 )
		.onUpdate( function() {
		 document.getElementById("video_controller").volume = this.v})	
		.easing(TWEEN.Easing.Quadratic.EaseOut )
		.onComplete( function() {document.getElementById("video_controller").pause();sound_track = "off"})
		.start();
		
	document.getElementById("flythru").play();
	var points = []
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:0, z: 0 };
	camera_zoom(points,3000,177,0,"GO_GREEN")
}





/*
var fade_timeout
function fade_audio_in(video_t){

if(video_t.volume<1){
video_t.volume = Math.round((video_t.volume + 0.1)*10)/10;
fade_timeout = setTimeout(function(){fade_audio_in(video_t)},100);
}else{

clearTimeout(fade_timeout)	
}

}

*/

function fade_audio(){
var video_t =document.getElementById('audio')
 is_watching=true;
 var dummy = { v: document.getElementById('audio').volume};
 new TWEEN.Tween( dummy ).to( { v: .1 }, 3000 )
.onUpdate( function() {
 video_t.volume = this.v
})

.start();

}

function start(){ 
	if(camera_mode=="free"){	
			switch_camera('railed')	
	}
	
 $("#global_footer").css('display', 'none');
 $("#global_footer_right").css('display', 'none');
 
 var video_t =document.getElementById('bells')
 var dummy = { v: video_t.volume};
 var ttween = new TWEEN.Tween( dummy ).to( { v: 0 }, 2000 )
.onUpdate( function() {
 video_t.volume = this.v
})
.start();	

	flythru=1
	document.getElementById("flythru").play();
  	document.getElementById('progress_bar').style.width="0";
	document.getElementById('debug_text').style.color="#000";
	
	
	check_the_world();
	
	
	lon_multix = 0
	lat_multix = 0		   

	TC_base_mesh.visible=true
	GA_2_mesh.visible=true
	GA_1_mesh.visible=true
	GA_PAN_mesh.visible=true
			

	document.getElementById('audio').pause();
	document.getElementById('geese').pause();
	document.getElementById('tc_ambient').pause();
	document.getElementById('rv_ambient').pause();
	document.getElementById('mk_ambient').pause();
	$("#explore_text").css('display', 'none');
	$("#linear_text").css('display', 'none');
	$("#landscape").css('display', 'none');
	$("#startbar").css('display', 'none');
	$("#btn_go_menu").css('display', 'none');
	
	//document.getElementById('btn_go_menu').style.display ="none";
	
	//$('#btn_skip_intro').fadeIn(1000, function() {})


	///GOING UP!
	var dummy = { p_vert: camera.position.y};
	new TWEEN.Tween( dummy )
		.to( {p_vert: 2500 },4000 )
		.easing( TWEEN.Easing.Quadratic.EaseOut)
		.onUpdate( function() {
		camera.position.y=dummy.p_vert
	})
	.start();
	//explore = 0
	var points =[];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
        points[ points.length  ] = { x:0, z: 0 };
	camera_move(points,3000, 185 ,-40,"START1");

}



function start2(){
	var dummy = { p_vert: camera.position.y};
	var go_to_vert = -200
	if(do_linear == 1){
	go_to_vert =-100
	}
	new TWEEN.Tween( dummy )
		.to( {p_vert: go_to_vert },4500 )
		.easing( TWEEN.Easing.Quadratic.EaseOut)
		.onUpdate( function() {
		camera.position.y=dummy.p_vert
	})
	.start();
	
	var points =[];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:900, z: 0 };
	camera_move(points,4500, 90 ,0,"START2");	
	

			
}


function start3(){
	
	$('#intro_text_2').delay(3000).fadeIn(2000,function() {})
	$('#intro_text_2').delay(4000).fadeOut(2000,function() {})
	
	var points =[];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	camera_move(points,3000, 360 ,20,"START_TIMELINE");	
}			
			
function start_timeline(){
 sound_track = "on"
 
 if(pause_tween){
 	TWEEN.remove(pause_tween)
 }
	
 document.getElementById("video_controller").currentTime = 4.9;
 document.getElementById("video_controller").play() 
 document.getElementById("video_controller").volume=1 
 
 $("#global_footer").css('display', 'block');
 $("#global_footer_right").css('display', 'block');
 
 $("#btn_subtitles").css('display', 'block');
	 flythru = 0
	 INTRO_mesh.visible=false
	 for ( var i = 0,l=videos_no_alpha.length;i<l; i ++ ) {
	   videos_no_alpha[i].stop_video();
	 }
		 videos_no_alpha.length=0
	     
	for ( var i = 0; i < videos_alpha.length; i ++ ) {
		videos_alpha[i].pause_video();
	     }
	     
	if(imagine_video){
	     imagine_video.pause_video();
	     }
	     
	if(living_proof_video){
	     	living_proof_video.pause_video();
	}
	
	if(tech_video){
	     	tech_video.pause_video();
	}	
	//build_intro_titles(4)
	var pointss = [];
	pointss[ pointss.length ] = { x:camera.position.x, z:camera.position.z };
	pointss[ pointss.length ] = { x:0, z:0 };
	camera_move(pointss,3000,360,90,"");


}


function show_satellite_view_inset(){
	var inset = document.getElementById("satellite_view_inset")
	var google_label = document.getElementById("google_label")
	inset.style.top = height/2-300 +"px"
	inset.style.left = width/2-400 +"px"
	inset.src="satellite_view.html";
	setTimeout("show_sat_2()",500)
}



function build_maps(){
	get_xpath(get_var("chosen_land"));
	set_var("chosen_land_city",maps_city_name)

	var url_array= maps_url.split("?")
	var query_array = url_array[1].split("&")
	var ll_string =""
	var zoom_to = 18,panoid,dir
	
	for(var i = 1; i< query_array.length;i++){
		var key_val_array = query_array[i].split("=");
		if (key_val_array[0]=="ll"){
			maps_lat_long = key_val_array[1].replace("(","");
			maps_lat_long = key_val_array[1].replace(")","");			
			var maps_lat_long_array = maps_lat_long.split(",")
			maps_lat = parseFloat(maps_lat_long_array[0]);
			maps_long = parseFloat(maps_lat_long_array[1]);	
		}

		if (key_val_array[0]=="z"){
			zoom_to = key_val_array[1];
		}
//panoid=OHXvzBe3PAfurXyTDm4rIA&cbp=12,306.01,,0,-37.56
		if (key_val_array[0]=="panoid"){
			panoid = key_val_array[1];
		}
		
	    if (key_val_array[0]=="cbp"){
			
			var cbp_string = key_val_array[1]
			
			var cbp_array = cbp_string.split(',')
			
			dir = cbp_array[1]
		}
	}
//alert(get_var("chosen_land") + "street_view_3d_02.html?panoid="+panoid+"&dir="+dir)
	if(maps_is_street_view=="x"){
	document.getElementById("streetview_inset").src = "street_view_outro.html?panoid="+panoid+"&dir="+dir
	}else{
	document.getElementById("streetview_inset").src = "satellite_view_outro.html?lat="+maps_lat+"&lng="+maps_long+'&zoom='+zoom_to	
	}
}

function unbuild_maps(){
		var dummy = { p_opacity: 1};
		
		new TWEEN.Tween( dummy )
		.to( {p_opacity: 0 },5000 )
		.easing( TWEEN.Easing.Linear.EaseNone)
		.onUpdate( function() {
		 document.getElementById("streetview_inset").style.opacity=dummy.p_opacity;
		 document.getElementById("google_label").style.opacity=dummy.p_opacity
		})
		
	    .onComplete( function() { 
	         document.getElementById("google_label").style.display="none"
		 document.getElementById("streetview_inset").style.display="none"
		 document.getElementById("streetview_inset").src="blank.html"
		})
		.start();
}		
function build_start_dashboard(){
	if(menu_is_loaded==0){
	
	start_download_monitor('videos/hd/intro.webm')
	var timeout = setTimeout(function(){
	document.getElementById("startbar").style.display="block"
	$('#highrise_presents').fadeIn(3000, function() {})
	$('#highrise_presents').delay(2000).fadeOut(2000, function() {})
	$('#1mtlogo').delay(8500).fadeIn(3000, function() {})
	$('#1mttext').delay(11500).fadeIn(3000, function() {$('#start_box').fadeIn(3000, function() {})})
},500);
	
	}
}

function build_intro_titles(seq){
	
	switch (seq){		
	case 1:
	$('#intro_text_1').fadeIn(3000, function() {build_intro_titles(2)})
	break;
	
	case 2:
	$('#intro_text_1').fadeOut(2000, function() {})
	break;
	
	case 3:
	$('#intro_text_2').fadeIn(2000,function() {})
	break;
	
	case 4:
	$('#intro_text_2').fadeOut(2000,function() {})
	break;
	
	case 5:
	//$('#intro_text_3').fadeIn(2000,function() {build_intro_titles(6)})
	break;
	
	case 6:
	//$('#intro_text_3').fadeOut(6000,function() {})
	break;
	
	}
	
	
}

function load_semantic_data(_url){
	document.getElementById("semantic_wrap").style.display="block"
	document.getElementById("semantic_wrap").innerHTML= "<img src='"+_url+"' width=350/>";

}

function show_sat_2(){
	var inset = document.getElementById("satellite_view_inset")
	var google_label = document.getElementById("google_label")
	inset.style.display='block'
	
	google_label.style.top = height/2-400 +"px"
	google_label.style.left = width/2-400 +"px"
	google_label.style.display='block'
	google_label.innerHTML = '<h1> BRASIL </h1>'
	
		var dummy = { p_opacity: 0};
		new TWEEN.Tween( dummy )
		.to( {p_opacity: 1 },2000 )
		.easing( TWEEN.Easing.Linear.EaseNone)
		.onUpdate( function() {
		inset.style.opacity=dummy.p_opacity
		})
		.start();
}

function load_page(url){
	track_this(url)
	var overlay = document.getElementById("page_overlay")
	overlay.src=url
	$("#page_overlay").css('display', 'block');
	$("#3d_screen").css('display', 'none');
	$("#main_story_dasbboard").css('display', 'none');
	$('#btn_subtitles').css('display', 'none')
	if(is_outro==1){
		pause_outro()
	}else{
		
 	pause()
}
 	//fade_ambient_out()
		
		
}
function fade_in_page(){
	 $('page_overlay').show();
}
function close_page(){
$("#3d_screen").css('display', 'block');
$("#main_story_dasbboard").css('display', 'block');
$("#page_overlay").css('display', 'none');

if(do_linear==1){
$('#btn_subtitles').css('display', 'block')
resume_scene()
}else{
if(is_outro==1){
	resume_scene()
}
if(is_intro!=1){
btn_subtitles
$('#btn_subtitles').css('display', 'block')
}
}
}


function load_external_page(url){
	
	  ntptAddPair( "ntpgi_project", "1MT" );
  	ntptEventTag( 'lc=' + escape( url ) +'&ev=clickedlink')
    var width = 500;
    var height = 500;
    var left = parseInt((screen.availWidth/2) - (width/2));
    var top = parseInt((screen.availHeight/2) - (height/2));
    var windowFeatures = "toolbar=no, location=no, status=no, titlebar=no, directories=no, status=no, menubar=no, directories=no, scrollbars=no, resizable=no, copyhistory=no, width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url,'mywindow', windowFeatures)	
		
}

function load_external_page_wiki(url){
		ntptAddPair( "ntpgi_project", "1MT" );
  	ntptEventTag( 'lc=' + escape( url ) +'&ev=clickedlink')
	  //piwikTracker.trackLink(url, 'link')
    var width = 500;
    var height = 500;
    var left = parseInt((screen.availWidth/2) - (width/2));
    var top = parseInt((screen.availHeight/2) - (height/2));
    var windowFeatures = "scrollbars=yes, width=" + width + ",height=" + height + ", left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url,'mywindow', windowFeatures)	
		
}

function load_external(url){
	
	  ntptAddPair( "ntpgi_project", "1MT" );
  	ntptEventTag( 'lc=' + escape( url ) +'&ev=clickedlink')
  		
    myWindow = window.open(url,'mywindow')
		
}

function load_external_inline(url){
	
   location.href=url
		
}

function load_external_page_mike(url){
	$("#social_inset").css('display', 'block');
	document.getElementById('social_inset').src= "http://www.heliozilla.com"
		window.social_inset.location.href=url
		
}

function load_external_page_subscribe(url){
	
		ntptAddPair( "ntpgi_project", "1MT" );
  	ntptEventTag( 'lc=' + escape( url ) +'&ev=clickedlink')
  	
	 // piwikTracker.trackLink(url, 'link')
    var width = 750;
    var height = 400;
    var left = parseInt((screen.availWidth/2) - (width/2));
    var top = parseInt((screen.availHeight/2) - (height/2));
    var windowFeatures = "toolbar=no, location=no, status=no, titlebar=no, directories=no, status=no, menubar=no, directories=no, scrollbars=no, resizable=no, copyhistory=no, width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url,'mywindow', windowFeatures)	
		
}


function show_street_view_inset(){

  
        var google_label = document.getElementById("google_label")
	var inset = document.getElementById("streetview_inset")
	inset.style.top = height/2-250 +"px"
	inset.style.left = width/2-400 +"px"
	inset.style.display='block'

	google_label.style.top = height/2-270 +"px"
	google_label.style.left = width/2-400 +"px"
	google_label.style.display='block'
	google_label.style.opacity=1
	inset.style.opacity=1
	
	google_label.innerHTML = '<span class="bold_font_12" style="color:#c1c660">'+get_var("chosen_land").toUpperCase()+' / '+get_var("chosen_land_city")+'</span>'
	Cufon.refresh()
	
	//document.getElementById('streetview_inset').contentWindow.start_map(); 
		var dummy = { p_opacity: 1};
		new TWEEN.Tween( dummy )
		.to( {p_opacity: 1 },3000 )
		.easing( TWEEN.Easing.Linear.EaseNone)
		.onUpdate( function() {
		inset.style.opacity=dummy.p_opacity
		google_label.style.opacity=dummy.p_opacity
		})
		.start();

}


var is_night = 0

function make_night (){	
is_night = 1
var dummy = { p_v: 0, p_density:.00017,p_h:1,p_s:0};
new TWEEN.Tween( dummy )
.to( {p_v: .24, p_density:.001,p_h: .73,p_s:.69 },1000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
scene.fog.color.setHSV(dummy.p_h,dummy.p_s,dummy.p_v);
scene.fog.density = dummy.p_density;
})
.start();

}

function make_night_outro (){	
is_night = 1
var dummy = { p_density:.00017};

scene.fog.color.setHSV(0,0,0);

new TWEEN.Tween( dummy )
.to( {p_density:.001 },1000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
scene.fog.density = dummy.p_density;
})
.start();

}

function make_twilight (){	

var dummy = { p_rgb: 1, p_density:.00017};
new TWEEN.Tween( dummy )
.to( {p_rgb: .24, p_density:.0002 },1000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
scene.fog.color.setHSV(.99,.69,dummy.p_rgb);
scene.fog.density = dummy.p_density;
})
.start();

}

function make_day (){
	//a2b2bf
//cloud_builder(0xa2b2bf)
is_night = 0	
var dummy = { p_rgb: 0, p_density:.0001};
new TWEEN.Tween( dummy )
.to( {p_rgb: 1, p_density:.00004 },2000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
scene.fog.color.setHSV(0,0,dummy.p_rgb);
scene.fog.density = dummy.p_density;
})
.start();

//scene.fog.color.setRGB(1,1,1)
//scene.fog.density = 0.00017
}

function fade_in (){
	
var dummy = { p_rgb: 0, p_density:.001};
new TWEEN.Tween( dummy )
.to( {p_rgb: 1, p_density:.00004 },3000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
//scene.fog.color.setHSV(1,0,dummy.p_rgb);
scene.fog.density = dummy.p_density;
})
.start();
}


function fade_ambient_out(){
	 document.getElementById("geese").volume=0
	 document.getElementById("bells").volume=0
	 
	 if(do_linear==0){
	 var dummy = { v: .6}; 
	 }else{
	 var dummy = { v:  document.getElementById("audio").volume};
	 }
	 
         var fade_tween = new TWEEN.Tween( dummy ).to( { v: .1 }, 1000 )
	.onUpdate( function() {
	 document.getElementById("audio").volume = this.v
	 if(do_linear==0){
	 document.getElementById("rv_ambient").volume = this.v
	 document.getElementById("tc_ambient").volume = this.v
	 document.getElementById("mk_ambient").volume = this.v
	 document.getElementById("google_ambient").volume = this.v
	 
	 }

	 })
	.onComplete( function() {
	 is_watching=true
	 document.getElementById("audio").volume = 0
	 document.getElementById("rv_ambient").volume = 0
	 document.getElementById("tc_ambient").volume = 0
	 document.getElementById("mk_ambient").volume = 0
	 document.getElementById("google_ambient").volume = 0
	 document.getElementById("geese").volume = 0
	 })	
	.start();	
}

function fade_ambient_in(){

is_watching=false;
	
ambient_sound_target_reached = 0
var rv_target_volume =  Math.abs((Math.round(camera.position.distanceTo(rv_marker))-5000)/5000)
var tc_target_volume = Math.abs((Math.round(camera.position.distanceTo(tc_marker))-5000)/5000)
var mk_target_volume =Math.abs((Math.round(camera.position.distanceTo(mk_marker))-5000)/5000)

if(mk_target_volume >1){mk_target_volume=1;}
if(tc_target_volume >1){tc_target_volume=1;}
if(mk_target_volume >1){mk_target_volume=1;}

//document.getElementById("lat_long_text").innerHTML=mk_target_volume + ":"+tc_target_volume+ ":" + rv_target_volume 
 
document.getElementById('rv_ambient').volume=document.getElementById('rv_ambient').volume;
document.getElementById('mk_ambient').volume=document.getElementById('mk_ambient').volume;
document.getElementById('tc_ambient').volume=document.getElementById('tc_ambient').volume;
document.getElementById('rv_ambient').play();
document.getElementById('mk_ambient').play();
document.getElementById('tc_ambient').play();



var dummy2 = { v: 0};

new TWEEN.Tween( dummy2 ).to( { v: mk_target_volume }, 3000 )
.onUpdate( function() {document.getElementById('mk_ambient').volume= this.v;})
.onComplete( function() {ambient_sound_target_reached = 1;})
.start();
 
new TWEEN.Tween( dummy2 ).to( { v: rv_target_volume }, 3000 )
.onUpdate( function() {document.getElementById('rv_ambient').volume = this.v;})
.onComplete( function() {ambient_sound_target_reached = 1;})
.start();

new TWEEN.Tween( dummy2 ).to( { v: tc_target_volume }, 3000 )
.onUpdate( function() {document.getElementById('tc_ambient').volume = this.v})
.onComplete( function() {ambient_sound_target_reached = 1;})
.start();
 /* */	
}



function move_to_TC (){	
$('#track_forward').css('display', "block")
$('#track_backward').css('display', "block")

if(explore==1){
is_tennis_court = 1
}
check_the_world()
global_pause_state = 0

move_to_maquette(TC_base_mesh)

if(do_linear==0){
var points = [];
points[ points.length ] = { x:camera.position.x, z:camera.position.z };
points[ points.length  ] = { x:70, z: 1550 };
camera_zoom(points,5000,89.6,10)
turn_on_control("CLOSE");
}				
document.getElementById("video_controller").currentTime =75
document.getElementById("video_controller").play()
}

function move_to_TC2 (){
	check_the_world()
	global_pause_state = 0
	
if(explore==1){	
tc2_complete=1
}
move_to_maquette(TC_base_mesh_2)
if(explore==1){
var points = [];
points[ points.length ] = { x:camera.position.x, z:camera.position.z };
points[ points.length  ] = { x:500, z: 1550 };
camera_zoom(points,3000,65,10)
turn_on_control("CLOSE");
}
document.getElementById("video_controller").currentTime =tc_2_start_time
document.getElementById("video_controller").play()
}

function move_to_RV (){	
if(explore==1){
  is_ravine=1	
  }
	document.getElementById("video_controller").currentTime =rv_start_time 
	document.getElementById("video_controller").play()
	
	check_the_world()
	global_pause_state = 0

$('#track_forward').css('display', "block")
$('#track_backward').css('display', "block")

	move_to_maquette(GA_PAN_mesh)
	if(explore==1){
	var points = [];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:1400, z: -400 };
	camera_zoom(points,3000,10,10)
	turn_on_control("CLOSE");
	}
	

}

var freeze_timeline
function move_to_GV1 (){
if(explore==1){
is_garden=1
}
check_the_world()
global_pause_state = 0

$('#track_forward').css('display', "block")
$('#track_backward').css('display', "block")

move_to_maquette(GA_1_mesh)
if(explore==1){
freeze_timeline = true
var points = [];
points[ points.length ] = { x:camera.position.x, z:camera.position.z };
points[ points.length  ] = { x:1700, z: -1000 };
camera_zoom(points,3000,260,15)
document.getElementById("video_controller").currentTime =gv_01_start_time+2.5
document.getElementById("video_controller").play()
turn_on_control("CLOSE");
}else{
document.getElementById("video_controller").currentTime =gv_01_start_time
document.getElementById("video_controller").play()
}
}



function move_to_GV2 (){
if(explore==1){
is_roots=1
}
$('#track_forward').css('display', "block")
$('#track_backward').css('display', "block")
check_the_world()
freeze_timeline = false
global_pause_state = 0
move_to_maquette(GA_2_mesh)
document.getElementById("video_controller").currentTime =gv_02_start_time-.25
document.getElementById("video_controller").play()
console.log("go to g2")
if(explore==1){
var points = [];
points[ points.length ] = { x:camera.position.x, z:camera.position.z };
points[ points.length  ] = { x:1700, z: 400 };
camera_zoom(points,3000,90,10,"RVw");
turn_on_control("CLOSE");
}
}

var market_shortcut= 0


function move_to_MK (){	
if(explore==1){
is_market=1
}
check_the_world()
global_pause_state = 0
move_to_maquette(MK_mesh)
if(do_linear == 1){
	market_shortcut= 1
	MK_mesh.visible=false;
}
$('#track_forward').css('display', "block")
$('#track_backward').css('display', "block")
	document.getElementById("video_controller").currentTime = mk_start_time
	document.getElementById("video_controller").play()
if(explore==1){
freeze_timeline = true
var points = [];
points[ points.length ] = { x:camera.position.x, z:camera.position.z };
points[ points.length  ] = { x:-1090, z: 750 };
camera_zoom(points,3000,180,10,"RVw");
turn_on_control("CLOSE");
}

}



function move_to_OUTRO(){	
	check_the_world()
	global_pause_state = 0
	is_outro = 1
	current_scene = 4
	$('#track_forward').css('display', "none")
	is_playing_global = true
	document.getElementById("video_controller").currentTime = outro_start_time
	document.getElementById("video_controller").play()
}


var imagine_video


var living_proof_video

var global_share_url,global_share_name



function move_to_IMAGINE(from_menu){

if(from_menu){
is_from_menu = true
}
$("#weather").css('display', 'none');
track_this("imagine")
	check_the_world()
	document.getElementById('bread_crumbs_sf1').src="images/breadcrumbs/sf_02_done.png"	

	sound_track="off"
	fade_ambient_out()


	if(camera_mode=="free"){
	switch_camera('railed')
	}
	is_playing_global = 1;
	camera.position.y =0
	
		global_share_url = encodeURIComponent(document.location +"/1mt_imagine.html")
		global_share_name = "One Millionth Tower: Imagine"
	        $('#share_btns').fadeIn(1000, function() {})
		$('#progress_header_sf').fadeIn(1000, function() {})
		$("#progress_header").css('display', 'none');


	 
        document.getElementById("video_controller").pause()
	document.getElementById('bread_crumbs_sf1').src="images/breadcrumbs/sf_01_done.png"	 




	if(do_linear == 1){
	$('#btn_stop_video_linear').fadeIn(1000, function() {})
	imagine_video = new video_no_alpha("videos/bonus/imagine.webm",imagine_mesh,null,function() {load_menu();kill_special_features()});
	
	}else{
	$('#breadcrumbs').fadeOut(1000, function() {})
	imagine_video = new video_no_alpha("videos/bonus/imagine.webm",imagine_mesh,null,function() {
	imagine_mesh.materials[0].map = THREE.ImageUtils.loadTexture( "textures/special_features/imagine_end.jpg");
	go_explore()
	});
	turn_on_control("CLOSE");
	}
	new TWEEN.Tween( imagine_mesh.materials[0] ).to( {opacity: 1 },5000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
	var points = []
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:0, z: -1350 };
	camera_move(points,3000,270,1,"")
		
	
	if(get_var('no_webgl_subtitles')){
	loadSubtitles('subtitles_imagine')
	}
	
}


function move_to_LIVING_PROOF(from_menu){
$("#weather").css('display', 'none');
	if(from_menu){
	is_from_menu = true
	}
	track_this("livingproof")
	check_the_world()
	document.getElementById('bread_crumbs_sf2').src="images/breadcrumbs/sf_02_done.png"	
        camera.position.y =0
	sound_track="off"
	fade_ambient_out()
 

	if(camera_mode=="free"){
	switch_camera('railed')
	}
	is_playing_global = 1;
	
	global_share_url = encodeURIComponent(document.location +"/1mt_living_proof.html")
	global_share_name = "One Millionth Tower: Living Proof"
        $('#share_btns').fadeIn(1000, function() {})
	$('#progress_header_sf').fadeIn(1000, function() {})
	$("#progress_header").css('display', 'none');

					
        document.getElementById("video_controller").pause()
  
	//living_proof_mesh.materials[0].map = THREE.ImageUtils.loadTexture( "textures/special_features/living_proof_end.jpg");

	if(do_linear == 1){
	$('#btn_stop_video_linear').fadeIn(1000, function() {})
	living_proof_video = new video_no_alpha("videos/bonus/living_proof.webm",living_proof_mesh,null,function() {load_menu();kill_special_features()});

	}else{
	$('#breadcrumbs').fadeOut(1000, function() {})
	living_proof_video = new video_no_alpha("videos/bonus/living_proof.webm",living_proof_mesh,null,function() {
		living_proof_mesh.materials[0].map = THREE.ImageUtils.loadTexture( "textures/special_features/living_proof_end.jpg");
	go_explore()}
	);
	turn_on_control("CLOSE");
	}
	new TWEEN.Tween( living_proof_mesh.materials[0] ).to( {opacity: 1 },5000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
	var points = []

	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:-1100, z: 1350 };
	camera_move(points,3000,90,1,"")	
	
	if(get_var('no_webgl_subtitles')){
	 loadSubtitles('subtitles_living_proof')
	}
}


var tech_video
var global_buffer 
function move_to_TECH(from_menu){
	$("#weather").css('display', 'none');
if(from_menu){
is_from_menu = true
}
track_this("opentech")
check_the_world()
	document.getElementById('bread_crumbs_sf4').src="images/breadcrumbs/sf_02_done.png"	

	sound_track="off"
	fade_ambient_out()

        camera.position.y =0
	if(camera_mode=="free"){
	switch_camera('railed')
	}

	global_share_url = encodeURIComponent(document.location +"/1mt_living_proof.html")
	global_share_name = "One Millionth Tower: Living Proof"
         $('#share_btns').fadeIn(1000, function() {})
  	
	$('#progress_header_sf').fadeIn(1000, function() {})
	$("#progress_header").css('display', 'none');
	is_playing_global = 1;
        document.getElementById("video_controller").pause()
	if(do_linear == 1){
	$('#btn_stop_video_linear').fadeIn(1000, function() {})
	tech_video = new video_no_alpha("videos/bonus/open_technology.webm",tech_mesh,null,function() {load_menu();kill_special_features()});
	
	}else{
	
	$('#breadcrumbs').fadeOut(1000, function() {})
	tech_video = new video_no_alpha("videos/bonus/open_technology.webm",tech_mesh,null,function() {
	tech_mesh.materials[0].map = THREE.ImageUtils.loadTexture( "textures/special_features/open_technology_end.jpg");
	
	go_explore()
	});	turn_on_control("CLOSE");
	}
	new TWEEN.Tween( tech_mesh.materials[0] ).to( {opacity: 1 },5000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
	var points = []

	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:-2400, z: -2000 };
	camera_move(points,3000,180,1,"")
	if(get_var('no_webgl_subtitles')){
	loadSubtitles('subtitles_open_technology')
	}	

	
}
function move_to_HIGHRISE(from_menu){
	track_this("worldofhighrise")
is_looking_at_google = true
sound_track = "off"	
if(from_menu){
is_from_menu = true
}
	check_the_world()
        if(camera_mode=="free"){
		switch_camera('railed')
	}
	camera.position.y =0
	if(do_linear==1){
	woh_mesh.position.y = TC_height-50
	}else{
	woh_mesh.position.y = TC_height+50
	}
		document.getElementById("video_controller").pause()
		new TWEEN.Tween( woh_mesh.materials[0] ).to( {opacity: 1 },5000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
		set_var('chosen_land',return_random_country())
		var pointz = []
		pointz[ pointz.length ] = { x:camera.position.x, z:camera.position.z };
		pointz[ pointz.length  ] = { x:-2300, z: -500 };
		camera_move(pointz,3000,180,0,"GOOGLE")
		turn_on_control("CLOSE");
	
}

function move_to_maquette(obj){
freeze_timeline=false

	if(get_var('no_webgl_subtitles')){
	loadSubtitles('subtitles')
	}
document.getElementById('subtitle-container').style.display = "block";

if(do_linear==1){
	camera.position.y =-100
	document.getElementById('track_play').style.display = "none";
	document.getElementById('track_pause').style.display = "block";
	document.getElementById('3d_screen').style.display = "block";
	document.getElementById('choose_country').style.display = "none";
}else{

	camera.position.y =-200
}
				sound_track="on"
				fade_ambient_out()
				if(camera_mode=="free"){
					camera.lookVertical= false
				}
				
				var dummy = { v:0};
			        var controller_temp = new TWEEN.Tween( dummy ).to( { v: 1 }, 1000 )
				.onUpdate( function() {
				 document.getElementById("video_controller").volume = this.v})	
				.easing(TWEEN.Easing.Quadratic.EaseOut )
				.start();	
	
				for(var i = 0;i< semantic_icon_array.length;i++){
					semantic_icon_array[i].is_ready=true
					if (semantic_icon_array[i] != active_maquette){
						semantic_icon_array[i].is_playing = false
					}
				}
				turn_on_control("STOP");
				obj.is_ready= false
				obj.is_playing = true
				active_maquette=obj
				
				if(obj == TC_base_mesh_2){
				TC_base_mesh.is_ready= false
				TC_base_mesh.is_playing = true
				active_maquette=TC_base_mesh			
				}
}



function move_to_CHOOSE_A_COUNTRY(){
	pause()
	current_scene=4
	is_choose_a_country = 1
	global_particle_init();	
	released_particles=1
	$('#whole_world').css('display', 'none');
	$('#text_use_keyboard').fadeOut(1000, function() {})
	$("#weather").css('display', 'none');
	switch_camera('railed')
	is_outro = 0
	if(INTRO_mesh){
	INTRO_mesh.visible = false
	}
	new TWEEN.Tween( OT_mesh_black.materials[0] ).to( {opacity: 1 },2000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
	var points = []
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:-1000, z: -1800 };
	camera_move(points,2500,220,0,"OUTRO");
	$('#choose_country').css('display','block');
	
	if(do_linear==1){
	 $('#btn_close_choose').css('display','none');
	}else{
	 $('#btn_close_choose').css('display','block');
	}
}

function resume_outro() {
	if(do_linear ==1){
		alert("Please choose a country.")
	}else{
		go_explore()
	}
}

function clear_alert_text(){
$('#whole_world').css('display', 'none');
$('#choose_country').css('display', 'block');
}

function continue_to_OUTRO(c){

$('#whole_world').css('display', 'none');

if(c){
set_var("chosen_land",c);
}

	 for (var i = 0; i< objects.length; i++){
		scene.removeObject(objects[i])
		objects[i].updateMatrix()
	 }
	  scene.addObject(BELOW_mesh)
	$('#choose_country').fadeOut(1000, function() {})
	if(do_linear==0){
	sound_track = "on"
	move_to_OUTRO()
	}else{
		
	move_to_maquette(OT_mesh)
	var video_t =document.getElementById('video_controller')
	var dummy = { v: video_t.volume};
	new TWEEN.Tween( dummy ).to( { v: 1 }, 3000 )
	.onUpdate( function() {
	video_t.volume = this.v
	})		
				.start();
	document.getElementById("google_ambient").volume = 0
	document.getElementById('video_controller').play()
	}
}
function move_to_OUTRO_2 (){	

	if(document.getElementById('country_global').value != "Type in the name of a country, any country"){
		set_var("chosen_land",document.getElementById('country_global').value);
	}else{
		set_var("chosen_land","Italy");
	}


		
	if(get_xpath(get_var("chosen_land"))=="not_in_db"){
	$('#choose_country').css('display', 'none');
	var alert_text = "Sorry, there is no country called"+get_var('chosen_land')+". You'll have to <a href='#' onclick='clear_alert_text()'>choose another.</a>";
	$('#whole_world').css('display', 'block');
		document.getElementById('alert_text').innerHTML=alert_text;
		return false;	
	}

	if(get_xpath(get_var("chosen_land"))=="no_highrise"){
	$('#choose_country').css('display', 'none');
	var temp_country = return_random_country()
	var alert_text = "Who knew! " + get_var("chosen_land")+ " is one of 78 countries where our research discovered no residential highrise buildings. Can we suggest you try <a href='#' onclick='continue_to_OUTRO(\""+ temp_country +"\")'>" + temp_country + "</a>, or <a href='#' onclick='clear_alert_text()'>try again?</a>";
	$('#whole_world').css('display', 'block');
		document.getElementById('alert_text').innerHTML=alert_text;
		return false;
		
	}

 continue_to_OUTRO()

}

function build_country_picker(){
	
	
}


function move_to_STREETVIEW(){


			  scene.fog = new THREE.FogExp2( 0x000000, .0005 );
			  var points = []
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  points[ points.length  ] = { x:0, z: 0 };
			  camera_move(points,3000,360,90,"");


		       BELOW_mesh = load_mesh(new THREE.Cube( 1000, 10, 562, 1, 1, 1 ) ,material_end_base,30,430,0,0,-90,0,1);
	           lat=90;
			   videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/outro.webm", BELOW_mesh,66);	
			   
			   
			  document.getElementById("video_controller").currentTime = 368
              document.getElementById("video_controller").play()
}





var tc_2_base_mesh, dancer_mesh_test 

function move_to_TC2_old (){	
if(!tc_2_base_mesh){
	
	tc_2_base_mesh=load_mesh(TC_2_plane,TC_2_base_material,120 ,TC_height,1000,0,0,0,1);
	
	dancer_mesh_test =load_mesh(Dancer_test,TC_2_dancer,120 ,TC_height,1050,0,0,0,1,1);
    videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/fence_push.webm",TC_base_mesh,655,447);
	
	}
	var points = [];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	points[ points.length  ] = { x:112, z: 1300 };
	camera_move(points,5000,271,-10,"TC2")
}

function build_path (){	
    //lon = 89.6
	//lat = -9
var points = [];
points[ points.length ] = { x:0, z:0 };
points[ points.length  ] = { x:112, z: 300 };
path_init()

}





var videos_no_alpha = []


function move_to_RV_old (){	

videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/ravine3.ogv",GA_PAN_mesh,1500,422);
//video_play_chroma("videos/ravine3.ogv",GA_PAN_mesh)


var points = [];

points[ points.length ] = { x:camera.position.x, z:camera.position.z };
points[ points.length  ] = { x:500, z: 1000 };
points[ points.length  ] = { x:1300, z: 0 };
points[ points.length  ] = { x:1300, z: -400 };
camera_move(points,5000,360,-10,"RVw");
}

function move_to_RV2 (){	
var points = [];

points[ points.length ] = { x:camera.position.x, z:camera.position.z };

//camera_move(points,5000,360,-10,"NULL");
}

function path_to_RV (){	
var pointsr = [];
pointsr[ pointsr.length  ] = { x:0, z: 1800 };
pointsr[ pointsr.length  ] = { x:500, z:  1000 };
pointsr[ pointsr.length  ] = { x:1600, z: 0 };


build_curve(pointsr,10000)

var points = [];
points[ points.length ] = { x:camera.position.x, z:camera.position.z };

//camera_move(points,1000,360,-10,"TC2");
}



function create_TC(  ) {
	

		var tc_floor_mesh = load_mesh(TC_plane_overlay,TC_floor_material,0 , TC_height,1999,0,180,0,1);
		tc_floor_mesh.materials[0].opacity=0
		new TWEEN.Tween( tc_floor_mesh.materials[0] ).to( {opacity: 1 },1000 ).delay(2000).easing( TWEEN.Easing.Linear.EaseNone).start();

		var tc_stairs_mesh = load_mesh(TC_plane_overlay,TC_stairs_material,0 , TC_height,1998,0,180,0,1);
		tc_stairs_mesh.materials[0].opacity=0
		new TWEEN.Tween( tc_stairs_mesh.materials[0] ).to( {opacity: 1 },1000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).start();

		var tc_items_mesh = load_mesh(TC_plane_overlay,TC_items_material,0 , TC_height,1997,0,180,0,1);
		tc_items_mesh.materials[0].opacity=0
		new TWEEN.Tween( tc_items_mesh.materials[0] ).to( {opacity: 1 },1000 ).delay(4000).easing( TWEEN.Easing.Linear.EaseNone).start();

				//box_mesh = SceneUtils.addMesh( scene, geometry,80,-300, -500, 1200, 0,  180 *Math.PI / 180 , 0, materials );

			}
			
			
			function create_sv_pano_in(){
				var points = [];

				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length ] = { x:0, z:0 };
				camera_move(points,3000,360,85,"SV1");
				new TWEEN.Tween( pano_mesh.materials[1] ).to( {opacity: 0 },5000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			}
			
			function create_sv_fade(){
					new TWEEN.Tween( pano_mesh.materials[1] ).to( {opacity: 0 },5000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
				
			}	
			
var explore_move = 0
function go_tennis (){
			//explore_move =1
			    var points = [];
	
				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:70, z: 1600 };
				camera_move(points,3000,89.6,0,"EXPLORE_FINISH")	
			
}

function go_garden (){
	//explore_move =1
			var points = [];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			points[ points.length  ] = { x:1300, z: -400 };
			camera_move(points,3000, 0 ,0,"EXPLORE_FINISH");	

}

function go_market (){
			    //explore_move =1
				var points = [];

				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:-1700, z: 300 };
				camera_move(points,3000,90,0,"EXPLORE_FINISH");

}


function close_hud(){
	camera_controller_container.style.display="none"
}


var is_looking_at_google 

function create_google_wiki(){
	if(maps_wiki!="NULL"){
		write_wiki_google( maps_wiki)
		 $('#google_maps_side_inner').fadeIn(1000, function() {}) 
	}
	}
	
function create_google_pano(country){
	track_this("worldofhighrise/"+country)
       sound_track = "off"
       $("#subtitles_toggle").css('display', 'none');
       $("#weather").css('display', 'none');
				global_share_url = encodeURIComponent(document.location +"/1mt_world_of_highrises.html")
				global_share_name = "One Millionth Tower: World of Highrises"
        $('#share_btns').fadeIn(1000, function() {})
        $("#share_btns").css('right', '330px');
  		document.getElementById("subtitle-container").innerHTML =""
  		$("#subtitle-container").css('display', 'none');
			document.getElementById('street_view_underlay').src = "blank.html"
	 $("#btn_stop_video").css('display', 'none');
	 $("#btn_go_menu").css('display', 'none');
	$('#progress_header').hide();
	$('#progress_header_sf').hide();
	
        $('#text_use_keyboard').hide()
	$('#google_maps_side_inner').hide()

	if(do_linear==0){
        $('#btn_close_google').fadeIn(1000, function() {}) 
	}else{
	$('#btn_close_google_linear').fadeIn(1000, function() {})
	}
       $('#breadcrumbs').fadeOut(1000, function() {})
	document.getElementById("google_ambient").volume = 1
	document.getElementById("google_ambient").play()

	get_xpath(country);


	$('#google_maps_side').fadeIn(1000, function() {})
	$('#suggest_highrise').fadeIn(1000, function() {})
	
	document.getElementById("google_caption").innerHTML="Here's highrise neighbourhood in "+country+". You can also visit a highrise in almost every country on the planet. Just choose below:";
	document.getElementById("google_caption_title").innerHTML=country.toUpperCase() + "/" + maps_city_name +  ""
	//Cufon.refresh()
	document.getElementById("google_maps_desc").style.height="auto";
	document.getElementById("google_caption_title").style.height="auto";
        var list_top = document.getElementById("google_maps_desc").offsetHeight+30
        var caption_top = document.getElementById("google_caption_title").offsetHeight+40
	document.getElementById("google_maps_list").style.top=list_top + "px";
	document.getElementById("google_maps_list").style.height=height-list_top-15-85 +"px";
	document.getElementById("google_content_container").style.height=height-caption_top-150 +"px";
	document.getElementById("google_wiki_text").innerHTML=""

	var url_array= maps_url.split("?")
	var query_array = url_array[1].split("&")
	var ll_string =""
	
    var zoom_to = 18,panoid,dir
	
	
	for(var i = 1; i< query_array.length;i++){
		var key_val_array = query_array[i].split("=");
		if (key_val_array[0]=="ll"){
			maps_lat_long = key_val_array[1].replace("(","");
			maps_lat_long = key_val_array[1].replace(")","");			
			var maps_lat_long_array = maps_lat_long.split(",")
			maps_lat = parseFloat(maps_lat_long_array[0]);
			maps_long = parseFloat(maps_lat_long_array[1]);	
		}

		if (key_val_array[0]=="z"){
			zoom_to = key_val_array[1];
		}
//panoid=OHXvzBe3PAfurXyTDm4rIA&cbp=12,306.01,,0,-37.56
		if (key_val_array[0]=="panoid"){
			panoid = key_val_array[1];
		}
		
	    if (key_val_array[0]=="cbp"){
			
			var cbp_string = key_val_array[1]
			
			var cbp_array = cbp_string.split(',')
			
			dir = cbp_array[1]
		}
	}	

	pano_mesh.visible=false
	PLATFORM_01_mesh.visible=false
	PLATFORM_02_mesh.visible=false
	PLATFORM_03_mesh.visible=false
	PLATFORM_04_mesh.visible=false
	FLOOR_RV_mesh.visible=false
	FLOOR_MK_mesh.visible=false
	FLOOR_TC_mesh.visible=false
	//FLOOR_OT_mesh.visible=false
	document.getElementById('3d_screen').style.display="none"
	pano_vision = 0
	 for (var i = 0; i< objects.length; i++){
		scene.removeObject(objects[i])
	  }
	//constellation_init()
	all_terrain_mesh.visible=false
	FLOOR_mesh.visible=false
	//document.getElementById('street_view_underlay').style.display="block"
	

	if(maps_is_street_view=="x"){
	document.getElementById('street_view_underlay').src = "street_view_pan_view.html?panoid="+panoid+"&dir="+dir
	}else{
	document.getElementById('street_view_underlay').src = "satellite_view_pan_view.html?lat="+maps_lat+"&lng="+maps_long+'&zoom='+zoom_to	
	}
	document.getElementById("street_view_underlay").style.display="block"
	
  
}

function uncreate_google_pano(){
	$("#subtitles_toggle").css('display', 'block');
	$("#share_btns").css('right', '0px');
	$("#share_btns").css('display', 'none');
	PLATFORM_01_mesh.visible=true
	PLATFORM_02_mesh.visible=true
	PLATFORM_03_mesh.visible=true
	PLATFORM_04_mesh.visible=true
	FLOOR_RV_mesh.visible=true
	FLOOR_MK_mesh.visible=true
	FLOOR_TC_mesh.visible=true
	is_looking_at_google = false
	if(do_linear == 0){
            go_explore()
	    $("#weather").css('display', 'block');
	    $('#breadcrumbs').fadeIn(1000, function() {})
	    if(!enter_will_clear && !enter_has_cleared){
	   //$('#text_use_keyboard').fadeIn(1000, function() {})
	    }
	}
	kill_special_features()
	if(do_linear  == 1){
	$("#btn_go_menu").css('display', 'block');
	}
   // load_menu()	
	$("#3d_screen").css('display', 'block');
	//$('#progress_header').show()
	//}
		
	var dummy = { v: document.getElementById("google_ambient").volume};
        var fade_tween = new TWEEN.Tween( dummy ).to( { v: 0 }, 1000 )
	.onUpdate( function() {document.getElementById("google_ambient").volume = this.v})		 
	.start();
	

	$('#btn_close_google').fadeOut(1000, function() {})
	$('#btn_go_menu').fadeIn(1000, function() {})
	//$('#text_use_keyboard').fadeIn(1000, function() {})
	
	//pano_mesh_free_roam.visible=true
	$('#google_maps_desc').fadeOut(1000, function() {})
	$('#google_maps_side').fadeOut(1000, function() {})
	$('#google_maps_list').fadeOut(1000, function() {})
	$('#suggest_highrise').fadeOut(1000, function() {})
	pano_mesh.visible=true
	//<div id="google_maps">
	//create_google_skies()
	pano_vision = 0
	 for (var i = 0; i< objects.length; i++){
		scene.addObject(objects[i])
	  }
	all_terrain_mesh.visible=true
	FLOOR_mesh.visible=true
	document.getElementById('3d_screen').style.pointerEvents="auto"
	document.getElementById('street_view_underlay').style.display="none"
	document.getElementById('street_view_underlay').src = "blank.html"
}

var global_control_word 
function turn_on_control(word){
	is_playing_global = true
	global_control_word = word + " X"
	document.getElementById('control_label').innerHTML=word + " X"
	Cufon.refresh()
}

function return_random_country(){
	var random_country_array=[]
	
	random_country_array[random_country_array.length]="Belarus" ;
	random_country_array[random_country_array.length]="France" ;
	random_country_array[random_country_array.length]="Brazil"; 
	random_country_array[random_country_array.length]="Canada"; 
	random_country_array[random_country_array.length]="China"; 
	random_country_array[random_country_array.length]="Cuba" 
	random_country_array[random_country_array.length]="Czech Republic"
	random_country_array[random_country_array.length]="Eritrea" 
	random_country_array[random_country_array.length]="Estonia" 
	random_country_array[random_country_array.length]="Georgia" 
	random_country_array[random_country_array.length]="Germany" 
	random_country_array[random_country_array.length]="Greenland" 
	random_country_array[random_country_array.length]="India" 
	random_country_array[random_country_array.length]="Italy" 
	random_country_array[random_country_array.length]="Jordan"
	random_country_array[random_country_array.length]="Latvia" 
	random_country_array[random_country_array.length]="Malaysia" 
	random_country_array[random_country_array.length]="Mongolia" 
	random_country_array[random_country_array.length]="Morocco" 
	random_country_array[random_country_array.length]="Mozambique"
	random_country_array[random_country_array.length]="Netherlands" 
	random_country_array[random_country_array.length]="Norway" 
	random_country_array[random_country_array.length]="Poland" 
	random_country_array[random_country_array.length]="Portugal"
	random_country_array[random_country_array.length]="Puerto Rico" 
	random_country_array[random_country_array.length]="Serbia" 
	random_country_array[random_country_array.length]="Slovakia" 
	random_country_array[random_country_array.length]="South Africa" 
	random_country_array[random_country_array.length]="Spain" 
	random_country_array[random_country_array.length]="Taiwan" 
	random_country_array[random_country_array.length]="Turkmenistan"
	random_country_array[random_country_array.length]="Uzbekistan" 
	random_country_array[random_country_array.length]="Venezuela" 
	random_country_array[random_country_array.length]="Western Sahara" 
	random_country_array[random_country_array.length]="Yemen"
	return random_country_array[Math.floor(Math.random()*random_country_array.length-1)]
	
}

function loadSubtitles(_subtitle_file) {
	if(get_var('no_webgl_subtitles')){
var subtitle_file ="js/subtitles_"+get_var('no_webgl_subtitles').toLowerCase()+".js";
if(_subtitle_file){
subtitle_file = "js/"+_subtitle_file +"_"+get_var('no_webgl_subtitles').toLowerCase()+".js";
}


global_subtitle_file = _subtitle_file
load_subtitles(subtitle_file,get_var('no_webgl_subtitles'))
}
}


function loadSubtitles_gl(_subtitle_file) {
	if(get_var('no_webgl_subtitles')){
var subtitle_file ="js/subtitles_"+get_var('no_webgl_subtitles').toLowerCase()+".js";
if(_subtitle_file){
subtitle_file = "js/gl_"+_subtitle_file +"_"+get_var('no_webgl_subtitles').toLowerCase()+".js";
}


global_subtitle_file = _subtitle_file
load_subtitles(subtitle_file,get_var('no_webgl_subtitles'))
}
}

function check_go_green(){
if (is_tennis_court==1 || tc1_complete == 1){
		tc1_complete = 1
		document.getElementById('bread_crumbs_tc1').src="images/breadcrumbs/tc_done.png"
		show_semantic_icon(0);
		show_semantic_icon(1);
		is_tennis_court = 0
		}
		
		if (is_ravine==1 || rv1_complete == 1){
		rv1_complete = 1
		show_semantic_icon(2);
		document.getElementById('bread_crumbs_rv1').src="images/breadcrumbs/ravine_done.png"
		is_ravine = 0
		}	
	
		if (is_garden==1  || rv2_complete == 1){
		rv2_complete = 1
		show_semantic_icon(3);
		document.getElementById('bread_crumbs_rv2').src="images/breadcrumbs/ravine_done.png"
		is_garden= 0
		}	
	
		if (is_roots==1  || rv3_complete == 1){
		rv3_complete = 1
		show_semantic_icon(4);
		fade_timeout = setTimeout(function(){
		GA_2_mesh.materials[0].map = THREE.ImageUtils.loadTexture( "textures/global/roots_imagined.jpg");
		},2000);
		
		document.getElementById('bread_crumbs_rv3').src="images/breadcrumbs/ravine_done.png"
		is_roots= 0
		}	
	
	
		if (is_market==1  || mk_complete == 1){
		show_semantic_icon(5);
		show_semantic_icon(6);
		show_semantic_icon(7);
		mk_complete = 1
		document.getElementById('bread_crumbs_mk').src="images/breadcrumbs/mk_done.png"
		is_roots= 0
		}
		
		if (is_outro==1  || outro_complete == 1){
		if(do_linear==0){
		outro_complete = 1
		document.getElementById('bread_crumbs_outro').src="images/breadcrumbs/outro_done.png"
		}
		//is_outro= 0
		}
					
		is_choose_a_country = 0
		document.getElementById('lat_long_text').innerHTML = tc1_complete+rv1_complete+rv2_complete+rv3_complete+mk_complete+outro_complete
		if(tc1_complete+rv1_complete+rv2_complete+rv3_complete+mk_complete+outro_complete>=6){
			//alert(go_green_zoom_trigger)
			if(!go_green_zoom_trigger){
			return true
			}
		}
		return false
		
	}