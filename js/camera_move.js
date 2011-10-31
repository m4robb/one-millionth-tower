// JavaScript Document

TWEEN.start()
var camera_tween




var rv_sound_target_reached = 0
var explore_trigger
var  global_to_x,global_to_z,global_to_lat,global_to_lon;
function camera_move(points,time_frame, to_lon,to_lat,maquette) {

	for(var i = 0, l=semantic_icon_array.length;i<l;i++){
		if(semantic_icon_array[i].RO_text){
		semantic_icon_array[i].RO_text.visible=false
		}
		if(semantic_icon_array[i].RO_array){
		for (var j = 0,k =semantic_icon_array[i].RO_array.length;j<k;j++){
		semantic_icon_array[i].RO_array[j].opacity=0
		}
		}			
				
	}

if(explore==0){
	if(camera_tween){
	TWEEN.remove(camera_tween)
	}	
	resume_mode = 0
	lat_multix=0;
	lon_multix = 0;
	var dummy = { p: 0,p_lon:lon,p_lat:lat };
	var position = { x: 0, z: 0 };
	var counter = 1
	var position_old = { x:camera.position.x, z:camera.position.z};
	var spline = new Spline();
  
  	var points_length =  points.length	
  	global_to_x = points[points_length-1].x
  	global_to_z = points[points_length-1].z
  	global_to_lat = to_lat
	  global_to_lon = to_lon
	
	camera_tween = new TWEEN.Tween( dummy )
	.to( { p: 1,p_lon:to_lon,p_lat:to_lat }, time_frame )
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.onUpdate( function() {	
						
	//position_old.x = position.x;
	//position_old.z = position.z;
	position = spline.get2DPoint( points, this.p );
	camera.position.x= position.x
	camera.position.z= position.z		
	lat_resume = dummy.p_lat;
	lon_resume=  dummy.p_lon;
	cam_x_resume= position.x;
	cam_z_resume=position.z;
	

	
	lon=dummy.p_lon;
	lat=dummy.p_lat;
			

	})
	.onComplete( function() {	  

	//TWEEN.remove(camera_tween)
	//camera_tween = false
	switch(maquette){
	
	
		case "START1":	
		build_intro_titles(1)
		setTimeout(function(){start2()},4000); 

		break;
		
		case "START2":	
		setTimeout(function(){start3()},100); 
		break;	
		
		case "START_TIMELINE":
		//build_intro_titles(3)
		setTimeout(function(){start_timeline()},5000);
		break;
		
		case "PREROLL":	
			videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/intro.ogv",GA_PAN_mesh);	
		break;
		case "END":
		        make_day();
			if(do_linear==0){
			make_day()
			outro_complete=1
			document.getElementById('bread_crumbs_outro').src="images/breadcrumbs/outro_done.png"
		        go_explore();
			}
			if(do_linear==1){
			go_grey()
			make_day()
		   	for (var i = 0; i< objects.length; i++){
		  	  scene.addObject(objects[i])
	  		}    
	  		load_menu();
	  		$("#btn_close_menu").css('display', 'none');
			}		
			INTRO_mesh.visible=false;
			BELOW_mesh.visible=false;
			all_floor_01.visible = true
		    //lon_multix = -.01;
		break;
		
		case "EXPLORE_FINISH":
		setTimeout(function(){explore_move=0},3000);
		break;

		case "AUTO_CAM":
		global_pause_mode = 0;
		resume_mode = 0;
		resume_scene();
		break;
		
		case "FREE_CAM":

		$('#breadcrumbs').show();
		if(!explore_trigger){
		$("#breadcrumbs").delay(3000).animate({"top": "0"}, 3000);
		$('#breadcrumbs_text').fadeIn(1000, function() {})
		$('#breadcrumbs_text').delay(4000).fadeOut(1000, function() {})
		explore_trigger=true
		}
		if(!enter_has_cleared){
		$('#text_use_keyboard').delay(6000).fadeIn(1000, function() {})
		}

		INTRO_mesh.visible = false
		BELOW_mesh.visible = false
		switch_camera('free')
	
		camera.lookVertical=true
		is_zooming = 0
		
			if(!is_from_menu){
			close_menu()
			}else{
			load_menu()
			is_from_menu = false
	}
	
		break;		

		case "OUTRO_LINEAR":
	if(do_linear==1){
	document.getElementById("google_ambient").volume = .5
	document.getElementById("google_ambient").play()
	
	global_particle_init()     
	BELOW_mesh.materials[0]=new THREE.MeshLambertMaterial( { color: 0x000000})	
	$('#choose_country').fadeIn(1000, function() {})

		 $('#btn_close_choose').css('display','none');

	  document.getElementById('video_controller').pause()
          document.getElementById("3d_screen").style.display = "none"
	}
		break;
				
		case "GOOGLE":
		if(do_linear==0 && menu_is_loaded==0){
		pause()
		}
	document.getElementById('bread_crumbs_sf3').src="images/breadcrumbs/sf_01_done.png"	
	$('#google_maps_desc').fadeIn(1000, function() {})
	$('#google_maps_right_side').fadeIn(1000, function() {})
	$('#google_maps_list').fadeIn(1000, function() {})		
	create_google_pano(get_var('chosen_land'))
	break;	


		case "GO_GREEN":
		//alert("GO GREEN")
		go_green();
		break;	

		
	}
	})
	.start();
	/**/
}	
//alert("JJJ")
}
var is_zooming = 0

function camera_zoom(points,time_frame, to_lon,to_lat,_go_green,_delay) {
	must_go_back = 1 
	if(camera_tween){
	TWEEN.remove(camera_tween)
	}
	var base_lon = lon
	var delay = 0
	if (_delay){
	delay = 2000
	}
	if(lon - to_lon > 90){
	base_lon -= 360
	}
	is_zooming = 1
	for(var i = 0, l=semantic_icon_array.length;i<l;i++){
		if(semantic_icon_array[i].RO_text){
		semantic_icon_array[i].RO_text.visible=false
		}
		if(semantic_icon_array[i].RO_array){
		for (var j = 0,k =semantic_icon_array[i].RO_array.length;j<k;j++){
		semantic_icon_array[i].RO_array[j].opacity=0
		}
		}			
				
	}
				
	var dummy = { p: 0,p_lon:base_lon,p_lat:lat };
	
	var position = { x: 0, z: 0 };
	var counter = 1
	var position_old = { x:camera.position.x, z:camera.position.z};
	var spline = new Spline();
    
	camera_tween = new TWEEN.Tween( dummy )
	.to( { p: 1,p_lon:to_lon,p_lat:to_lat }, time_frame )
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.delay(delay)
	.onUpdate( function() {	
						
		position_old.x = position.x;
		position_old.z = position.z;
		position = spline.get2DPoint( points, this.p );

		
		camera.position.x= position.x
		camera.position.z= position.z	
		lon=dummy.p_lon;
		lat=dummy.p_lat;
			

	})
	.onComplete( function() {
		is_zooming=0	
		if(_go_green && _go_green=="GO_GREEN"){
			go_green()
		}
 //switch_camera('free')
	})
	.start();
	/**/


}


function camera_rotate(to_lon, to_lat, time_frame){
	if(camera_tween_rotate){
	//TWEEN.remove(camera_tween_rotate)
	}
	
	
	var dummy = { p: 0,p_lon:lon,p_lat:lat };
	
	camera_tween_rotate = new TWEEN.Tween( dummy )
	.to( { p: 1,p_lon:to_lon,p_lat:to_lat }, time_frame )
	.easing(TWEEN.Easing.Quadratic.EaseOut )
	.onUpdate( function() {	
				lon=dummy.p_lon;
				lat=dummy.p_lat;

	})
	.start();
}



function Spline() {
var intPoint_old=0;
	var c = [], v2 = { x: 0, y: 0 },
	point, intPoint, weight,point2, intPoint2, weight2;
	
	this.get2DPoint = function ( points, k ) {
	
		point = ( points.length - 1 ) * k;
		intPoint = Math.floor( point );
		weight = point - intPoint;
		if(intPoint != intPoint_old){
			waypoint_trigger = 1
			waypoint = intPoint
		}
		
		c[ 0 ] = intPoint == 0 ? intPoint : intPoint - 1;
		c[ 1 ] = intPoint;
		c[ 2 ] = intPoint > points.length - 2 ? intPoint : intPoint + 1;
		c[ 3 ] = intPoint > points.length - 3 ? intPoint : intPoint + 2;
		
		v2.x = interpolate( points[ c[ 0 ] ].x, points[ c[ 1 ] ].x, points[ c[ 2 ] ].x, points[ c[ 3 ] ].x, weight );
		v2.z = interpolate( points[ c[ 0 ] ].z, points[ c[ 1 ] ].z, points[ c[ 2 ] ].z, points[ c[ 3 ] ].z, weight );
		intPoint_old = intPoint
	
	return v2;

	}

// Catmull-Rom

	function interpolate( p0, p1, p2, p3, t ) {
	
	var v0 = ( p2 - p0 ) * 0.5;
	var v1 = ( p3 - p1 ) * 0.5;
	var t2 = t * t;
	var t3 = t * t2;
	return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;
	
	}

}