// JavaScript Document
//scene.fog = new THREE.FogExp2( 0xffffff, 0.00017 );

var global_state = "start";

function switch_camera(mode){
	if(mode=="free"){
	 explore =1
	 document.getElementById("startbar").style.display="none";
	 document.getElementById("explore").style.display="none";
	 document.getElementById("tour").style.display="block";
	 camera = new CustomQuakeCamera( { fov: 60, aspect: window.innerWidth / window.innerHeight, near: 1, far: 20000,
												  constrainVertical: true, verticalMin: 1.1, verticalMax: 2.2,
												  movementSpeed: 350, lookSpeed: 0.075, noFly: true, lookVertical: true } );
	}
	
	if (mode=="railed"){
		if(explore==1){
		 explore = 0
		 //document.removeEventListener( 'keydown', camera.onKeyDown,true  );
		 document.getElementById("explore").style.display="block";
		 document.getElementById("tour").style.display="none";
		 camera.removeThis();
		 camera = new THREE.Camera( 54, width / height, 1, 10500);	
		}
	}
}

function pause(){
	global_pause_state = 1
	document.getElementById("video_controller").pause()
	//TWEEN.remove(camera_tween)
}

function resume(){
	global_pause_state = 0
	if(sound_track=="on"){
	document.getElementById("video_controller").play()
	}else{
		alert("LLL")
	}
	//TWEEN.add(camera_tween)
}

function check_the_world(){
free_roam = 0
lon_multix = 0
lat_multix = 0
can_move = 1
document.getElementById('startbar').style.display ="none";
document.getElementById('sidebar').style.display ="none";
FLOOR_mesh.visible=true
PATH_mesh.visible=true

fade_audio_out(document.getElementById('bells'))

//document.getElementById('bells').volume=0
clearTimeout(fade_timeout)	
fade_audio()
//document.getElementById('bells')

}
			
function show_start(){ 

document.getElementById('startbar').style.display ="block";
document.getElementById('sidebar').style.display ="none";

}

function close_help(){ 
document.getElementById('sidebar').style.display ="none";

}

function show_help(){ 

//document.getElementById('startbar').style.display ="none";
document.getElementById('sidebar').style.display ="block";
}


function fade_audio_out(video_t){
if(video_t.volume>0){
video_t.volume = Math.round((video_t.volume - 0.1)*10)/10;
var timeout = setTimeout(function(){fade_audio_out(video_t)},100);
}else{
	video_t.volume = 0
}

}


var fade_timeout
function fade_audio_in(video_t){

if(video_t.volume<1){
video_t.volume = Math.round((video_t.volume + 0.1)*10)/10;
fade_timeout = setTimeout(function(){fade_audio_in(video_t)},100);
}else{

clearTimeout(fade_timeout)	
}

}

function fade_audio(){
var video_t =document.getElementById('audio')
if(video_t.volume>0){
video_t.volume = Math.round((video_t.volume - 0.1)*10)/10;
var timeout = setTimeout("fade_audio()",1000)
}

}

function start(){ 
    document.getElementById("tour").innerHTML="";
    document.getElementById('progress_bar').style.width="0";
	 document.getElementById('debug_text').style.color="#000";
	set_debugger("Let's go.");
	check_the_world();
	lon_multix = 0
	lat_multix = 0		   
	can_move = 0
	switch_camera('railed')
	document.getElementById('violin').play();
	document.getElementById('startbar').style.display ="none";
	document.getElementById('interface_controls').style.display ="block";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	global_view_mode = "start_start_again";
	for ( var i = 0, il = objects.length; i < il; i++ ) {
		 //scene.removeObject(objects[i])
	}
	
			camera.position.y =10
	        vertical_multix =30
			var points =[];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
            points[ points.length  ] = { x:0, z: 0 };
			camera_move(points,5000, 180 ,-50,"START1");

/*



	        var points = [];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			camera_move(points,3000, 175 ,8,"START1");//

	*/

	
	 


}



function start2(){
	        flythru=1 ;  
			var points =[];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			points[ points.length  ] = { x:-900, z: 0 };
			points[ points.length  ] = { x:900, z: 1000 };
			//points[ points.length  ] = { x:900, z: -1000 };
			camera_move(points,15000, 180 ,-10,"START2");
			
}
function start3(){
	        flythru=0 ; 
			camera.position.y =10
	        vertical_multix =30
			var points =[];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
            points[ points.length  ] = { x:0, z: 0 };
			camera_move(points,5000, 180 ,-50,"STARTt");
			}
function start_timeline(){
	flythru = 0
	
	//build_maps()	  
	//build_intro_titles(4)
	var points = [];
	points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	camera.position.y -=100
	vertical_multix = - 20
	camera_move(points,3000,360,90,"");
	INTRO_mesh = load_mesh(new THREE.Cube( 1000, 10, 562, 1, 1, 1 ) ,material_start_base,30,430,0,0,-90,0,1);
	INTRO_mesh.visible=false;
	document.getElementById("video_controller").currentTime =0;
	document.getElementById("video_controller").play()  
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
	if(maps_is_street_view=="x"){
	document.getElementById("streetview_inset").src = "street_view_window.html?lat="+maps_lat+"&lng="+maps_long
	}else{
	document.getElementById("streetview_inset").src = "satellite_view_window.html?lat="+maps_lat+"&lng="+maps_long	
	}
	
	//debug 
	//alert("start")
	//document.getElementById("streetview_inset").style.display="block"			  
	//show_street_view_inset()	
}

function build_start_dashboard(seq){
	document.getElementById("startbar").style.display="block"
	switch (seq){		
	case 1:
	$('#highrise_presents').fadeTo(2000, 1, function() {build_start_dashboard(2)})
	break;
	
	case 2:
	$('#highrise_presents').fadeTo(1000,0, function() {build_start_dashboard(3)})
	break;
	
	case 3:
	$('#1mtlogo').fadeTo(3000,1, function() {build_start_dashboard(4)})
	break;
	case 4:
	$('#1mttext').fadeTo(5000,1, function() {})
	break;
	
	}
	
	
}

function build_intro_titles(seq){
	
	switch (seq){		
	case 1:
	$('#intro_text_1').fadeIn(3000, function() {build_intro_titles(2)})
	break;
	
	case 2:
	start2()
	$('#intro_text_1').fadeOut(2000, function() {})
	break;
	
	case 3:
	$('#intro_text_2').fadeIn(2000,function() {start3()})
	break;
	
	case 4:
	//start3()
	$('#intro_text_2').fadeOut(2000,function() {})
	break;
	
	case 5:
	$('#intro_text_3').fadeIn(2000,function() {build_intro_titles(6)})
	break;
	
	case 6:
	$('#intro_text_3').fadeOut(2000,function() {})
	break;
	
	}
	
	
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
	var overlay = document.getElementById("page_overlay")
	close_page()
	overlay.src=url
	overlay.style.opacity=0
	
	overlay.style.display='block'
	
		
		var dummy = { p_opacity: 0};
		new TWEEN.Tween( dummy )
		.to( {p_opacity: 1 },1000 )
		.easing( TWEEN.Easing.Linear.EaseNone)
		.onUpdate( function() {
		overlay.style.opacity=dummy.p_opacity
		})
		.start();
		
		
}

function close_page(){
	var overlay = parent.document.getElementById("page_overlay")
	overlay.style.display="none";
	overlay.src="blank.html";
	overlay.style.opacity=0
}

function show_street_view_inset(){

  
    var google_label = document.getElementById("google_label")
	var inset = document.getElementById("streetview_inset")
	inset.style.top = height/2-300 +"px"
	inset.style.left = width/2-400 +"px"
	inset.style.display='block'

	google_label.style.top = height/2-43 +"px"
	google_label.style.left = width/2-712 +"px"
	google_label.style.display='block'
	google_label.style.opacity=1
	inset.style.opacity=1
	
	google_label.innerHTML = '<h1>'+get_var("chosen_land")+' / <span style="font-size:30px">'+get_var("chosen_land_city")+'</span></h1>   '
	document.getElementById('streetview_inset').contentWindow.start_map(); 
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




function make_night (){	
go_green()
cloud_builder(0x1f3b4f)
var dummy = { p_rgb: 1, p_density:.00017};
new TWEEN.Tween( dummy )
.to( {p_rgb: .01, p_density:.0003 },1000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
scene.fog.color.setHSV(.73,.2,dummy.p_rgb);
scene.fog.density = dummy.p_density;
})
.start();

}

function make_day (){
	
var dummy = { p_rgb: 0, p_density:.0001};
new TWEEN.Tween( dummy )
.to( {p_rgb: 1, p_density:.00017 },1000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
scene.fog.color.setHSV(1,0,dummy.p_rgb);
scene.fog.density = dummy.p_density;
})
.start();

//scene.fog.color.setRGB(1,1,1)
//scene.fog.density = 0.00017
}

function fade_in (){
	
var dummy = { p_rgb: 0, p_density:.001};
new TWEEN.Tween( dummy )
.to( {p_rgb: 1, p_density:.00017 },10000 )
.easing( TWEEN.Easing.Linear.EaseNone)
.onUpdate( function() {
//scene.fog.color.setHSV(1,0,dummy.p_rgb);
scene.fog.density = dummy.p_density;
})
.start();
}

function move_to_TC (){	
//alert(document.getElementById("video_controller").currentTime)
document.getElementById("video_controller").currentTime =75
document.getElementById("video_controller").play()
}

function move_to_TC2 (){	
//alert(document.getElementById("video_controller").currentTime)
document.getElementById("video_controller").currentTime =tc_2_start_time
document.getElementById("video_controller").play()
}

function move_to_RV (){	
//alert(document.getElementById("video_controller").currentTime)
document.getElementById("video_controller").currentTime =rv_start_time 
document.getElementById("video_controller").play()
}

function move_to_GV1 (){	
//alert(document.getElementById("video_controller").currentTime)
document.getElementById("video_controller").currentTime =gv_01_start_time
document.getElementById("video_controller").play()
}

function move_to_GV2 (){	
//alert(document.getElementById("video_controller").currentTime)
document.getElementById("video_controller").currentTime =gv_02_start_time
document.getElementById("video_controller").play()
}

var market_shortcut= 0
function move_to_MK (){	
//alert(document.getElementById("video_controller").currentTime)
market_shortcut= 1
MK_mesh.visible=false;
document.getElementById("video_controller").currentTime = mk_start_time
document.getElementById("video_controller").play()
}


var BELOW_mesh
function move_to_OUTRO (){	
 //BELOW_mesh = load_mesh(new THREE.Cube( 1000, 10, 562, 1, 1, 1 ) ,material_start_base,30,-430,0,0,-90,0,1);
 //BELOW_mesh.visible=false
document.getElementById("video_controller").currentTime = outro_start_time
document.getElementById("video_controller").play()
}

function move_to_STREETVIEW(){
			lon_multix = 0
			   lat_multix = 0
			   can_move = 0
			  scene.fog = new THREE.FogExp2( 0x000000, .0005 );
			  var points = []
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  points[ points.length  ] = { x:0, z: 0 };
			  camera_move(points,3000,360,90,"");

			   scene.removeObject(SKY_mesh)
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
			

function go_tennis (){
			
			    var points = [];
				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:-200, z: 500 };
				points[ points.length  ] = { x:70, z: 1600 };
				camera_move(points,3000,89.6,-9,"NULL")	
				close_hud();			
}

function go_garden (){
			var points = [];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			points[ points.length  ] = { x:-500, z: 1000 };
			points[ points.length  ] = { x:-1300, z: 0 };
			points[ points.length  ] = { x:400, z: 200 };
			points[ points.length  ] = { x:1300, z: -400 };
			camera_move(points,3000, 0 ,-10,"RVw");	
			close_hud();
}

function go_market (){
			
				var points = [];
				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:200, z: 300 };
				points[ points.length  ] = { x:-1700, z: 300 };
				camera_move(points,3000,90,-5.2,"RVw");
				close_hud();
}


function close_hud(){
	camera_controller_container.style.display="none"
}