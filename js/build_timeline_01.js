// JavaScript Document
var tc_array = []

var tc_2_array = []

var tc_2_sprite_array = []

var gv_1_sprite_array = []

var mk_sprite_array = []

var screen_sprite_array = []

var mk_array = []
var current_scene = 0;

//tc preroll should be 68
var tc_start_time = 75

var tc_2_start_time = 103

var rv_start_time = 128

var gv_01_start_time = 143

var gv_02_start_time = 181

var mk_start_time = 213.75

var outro_start_time = 297.5

var outro_satellite_view = 367

var outro_street_view = 377

var outro_end = 392


var sound_track

var current_play_sprite

var explore_ending

var pollen 

var is_intro_video = 0


var pollen_delay;


document.addEventListener('DOMContentLoaded', function () {
      var $p = Popcorn('#video_controller')

        .code({
	 
        start: 5,     end:  10,
        onStart: function( options ) {
		current_scene = 0;
		is_intro = 0;
		is_intro_video = 1
		sound_track = "on";
		global_pause_state = 0	
		INTRO_mesh.visible=true;
		INTRO_mesh.materials[0].opacity = 0;
                var intro_tween = new TWEEN.Tween( INTRO_mesh.materials[0] ).to( {opacity: 1 },3000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
		
		$("#main_story_dashboard").css('display', 'block');
		$("#btn_go_menu").css('display', 'block');
		
		if(do_linear==1){
		 if(pause_tween){
		 	TWEEN.remove(pause_tween)
 		}
		console.log("goes linear")
		$('#progress_header').fadeIn(500, function() {})
		//$("#progress_header").css('display', 'block');
		}else{
		turn_on_control("CLOSE");
		}

		if(get_var('no_webgl_subtitles')){
		loadSubtitles('subtitles')
		}	
		//alert("got here")
		track_this("intro")

		current_video_mesh = INTRO_mesh
		videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/intro.webm",INTRO_mesh,5); 
		 if(do_linear==1){
		INTRO_mesh.position.y=400
		 }else{
		INTRO_mesh.position.y=350
		}
		
		BELOW_mesh.visible=false;
		fade_ambient_out();
		
     		},
		 onEnd: function ( options ) { }  
		 })	



		
        .code({
          start: 71,     end:  71.5,
          onStart: function( options ) {
			if(do_linear==0){
				 go_explore(80);
				 new TWEEN.Tween( INTRO_mesh.materials[0] ).to( {opacity: 0 },6000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
			}
				  },
		 onEnd: function ( options ) { }  
		 })	
//tc start	

       .code({
          start: 75,     end: 77,
          onStart: function( options ) {
          	new TWEEN.Tween( INTRO_mesh.materials[0] ).to( {opacity: 0 },3000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
			
	        },
		 onEnd: function ( options ) { }  
		 })	
        .code({
          start: 76,     end: 79,
          onStart: function( options ) {
          FLOOR_TC_mesh.visible = true
	 current_scene = 1;

	 for ( var i = 0,l=videos_no_alpha.length;i<l; i ++ ) {
	 	  //alert(videos_no_alpha[i].track_elapsed_time)
			videos_no_alpha[i].stop_video();
	 }
	 
	  		build_tc1_01()		  
			  var points = [];
				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:-200, z: 500 };
				points[ points.length  ] = { x:70, z: 1600 };
				camera_move(points,7200,89.6,6,"RESUME")	
				sound_target.position.x = 	points[ points.length-1 ].x
				sound_target.position.z = 	points[ points.length-1 ].z
		 },
		 onEnd: function ( options ) { }  
		 })	

        .code({
          start: tc_start_time+2,     end: tc_start_time+6,
          onStart: function( options ) {
		      TC_base_mesh_video.visible=true
		      track_this("tc")
		      if(do_linear==1){
		      tc1_complete = 1
		      }
		      videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/fence_push.webm",TC_base_mesh_video);	  
			  },
		 onEnd: function ( options ) { }  
		 })	
      .code({
          start: tc_start_time+7,     end: tc_start_time+9,
          onStart: function( options ) {
			
			tc_fence_push_init() ; 
			
			if(do_linear==1){
			create_trees_01_sprites_linear()  
		  }
			  },
		 onEnd: function ( options ) { }  
		 })	

        .code({
          start: tc_start_time+8.5,     end: tc_start_time+9,
          onStart: function( options ) {

			  var points=[]
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:70, z: 1700 };
				camera_move(points,7000,93,6,"NULL")	  
			  },
		 onEnd: function ( options ) { }  
		 })	


        .code({
			 
          start: tc_start_time+9,     end:  tc_start_time+12,
          onStart: function( options ) {

			
			new TWEEN.Tween( tc_array[0].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	  
			  },
		 onEnd: function ( options ) { }  
		 })	
		

        .code({
          start: tc_start_time+13,     end:  tc_start_time+17,
          onStart: function( options ) {
					var points =[] 
					points[ points.length ] = { x:camera.position.x, z:camera.position.z };
					points[ points.length  ] = { x:50, z: 1600 };
					camera_move(points,17000,89.6,6,"NULL")	
			 		paint_wall_mesh()
					new TWEEN.Tween( tc_array[1].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	  
			  },
		 onEnd: function ( options ) { }  
		 })	


        .code({
          start: tc_start_time+12,     end:  tc_start_time+17,
          onStart: function( options ) {
					new TWEEN.Tween( tc_array[2].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	  
			  },
		 onEnd: function ( options ) { }  
		 })	
		
	        .code({
          start: tc_start_time+18,     end:  tc_start_time+21,
          onStart: function( options ) {
          	
			   new TWEEN.Tween( tc_array[3].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	  
			  },
		 onEnd: function ( options ) { }  
		 })	
	

        .code({
          start: tc_start_time+13,     end:  tc_start_time+15,
          onStart: function( options ) {
			    new TWEEN.Tween( tc_array[4].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	  
			  },
		 onEnd: function ( options ) { }  
		 })	

        .code({
          start: tc_start_time+16,     end:  tc_start_time+18,
          onStart: function( options ) {
          if(do_linear == 1){
		MURAL_mesh.visible=true
		}
		  new TWEEN.Tween(tc_sprite_array[0] ).to( {opacity: 1 },1000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).start();
			new TWEEN.Tween( tc_array[5].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	  
			 // if(explore==1){pause()}
			  
			  },
		 onEnd: function ( options ) { }  
		 })	
		
		
/////build TC 2
//////////////////////////////////////////////////////////////////

        .code({
          start: tc_2_start_time,     end:  tc_2_start_time+2,
          onStart: function( options ) {
     		
				
				//document.getElementById('bread_crumbs_tc2').src="images/FLOOR_OTcrumbs/tc_done.png"

		     if(explore==1){
		
				build_tc2_01_explore()
				videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/tennis_court.webm",TC_base_mesh_2);
				var points = [];
				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:500, z: 1450 };
				camera_zoom(points,3000,48,-15)
			  //new TWEEN.Tween( tc_boy_01 ).to( {opacity: 1 },1000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).start();			
				
			}else{
			    build_tc2_01()
			    var tc_2_video_mesh=load_mesh(TC_2_video_plane,material_library.material_tc2_floor_01,120 ,TC_height,1000,0,0,0,1);
			    current_video_mesh = tc_2_video_mesh	
			    videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/tennis_court.webm",tc_2_video_mesh);
			}
			

			  var points = [];
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  points[ points.length  ] = { x:112, z: 1350 };
			  camera_move(points,3000,-89,10,"")
			  new TWEEN.Tween( tc_boy_01 ).to( {opacity: 1 },1000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).start();

			  },
		 onEnd: function ( options ) { }  
		 })	
/////////// BEGIN CAMERA PUSH	

        .code({
          start: tc_2_start_time+3,     end:  tc_2_start_time+7,
          onStart: function( options ) {

			var points = [];2
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			points[ points.length  ] = { x:90, z: 1250 };
			camera_move(points,13000,-89,5,"") 
			  },
		 onEnd: function ( options ) { }  
		 })
        .code({
          start: tc_2_start_time+6,     end:  tc_2_start_time+7,
          onStart: function( options ) {
			TC2_floor_mesh.materials[0]= material_library.material_tc2_floor_02
			  },
		 onEnd: function ( options ) { }  
		 })
		
        .code({
          start: tc_2_start_time+7,     end:  tc_2_start_time+8,
          onStart: function( options ) {
			TC2_floor_mesh.materials[0]= material_library.material_tc2_floor_03
			  },
		 onEnd: function ( options ) { }  
		 })	
/////////////////////MAKE SNOW
        .code({
          start: tc_2_start_time+8,     end:  tc_2_start_time+9,
          onStart: function( options ) {
          
			TC2_floor_mesh.materials[0]= material_library.material_tc2_floor_04
			  },
		 onEnd: function ( options ) { }  
		 })	
//////////////////MAKE NIGHT 		

        .code({
          start: tc_2_start_time+13,     end:  tc_2_start_time+14,
          onStart: function( options ) {

			//show_semantic_icon(0);
			//show_semantic_icon(1);
			
	    		//init_precipitation(200)
			TC2_floor_mesh.materials[0]= material_library.material_tc2_floor_05
			build_tc2_02()
			make_night()		  
			var points = [];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			points[ points.length  ] = { x:70, z: 1270 };
			camera_move(points,7000,-89,5,"") 
			  },
		 onEnd: function ( options ) { }  
		 })	
		
		


		
        .code({
          start: tc_2_start_time+20.5,     end:  tc_2_start_time+21.5,
          onStart: function( options ) {
          make_day()
       // document.getElementById('bread_crumbs_tc1').src="images/breadcrumbs/tc_done.png"
			  document.getElementById('tc_ambient').src="videos/ambient/TennisCourtAMB_Live.ogg"
			  document.getElementById('tc_ambient').volume=0
			  document.getElementById('tc_ambient').pause()        
	 if(explore==1){ pause()}else{
          unbuild_tc2()
          }
		  

			  },
		 onEnd: function ( options ) { }  
		 })			
//////////////////////////////////// Go to RV	


        .code({
          start: rv_start_time,     end:  rv_start_time+2,
          onStart: function( options ) {
		      if(do_linear==1){
		      rv1_complete = 1
		      }
			FLOOR_RV_mesh.visible=true
			current_scene = 2;
			var points = [];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			points[ points.length  ] = { x:-500, z: 1000 };
			points[ points.length  ] = { x:-1300, z: 0 };
			points[ points.length  ] = { x:400, z: 200 };
			points[ points.length  ] = { x:1300, z: -400 };
		 	if(pollen){
 		      	pollen.kill()
 		      	pollen=false
 		      }	
			if(do_linear==1){
			build_vines()
			PLANTER_mesh.visible=true
			camera_move(points,5000, 0 ,2,"RVw");
			}
			sound_target.position.x = 	points[ points.length-1  ].x
			sound_target.position.z = 	points[ points.length-1  ].z
			track_this("rv")
      videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/ravine.webm",GA_PAN_mesh);

			  },
		 onEnd: function ( options ) { }  
		 })	


        .code({
          start: rv_start_time+15,     end:  rv_start_time+17,
          onStart: function( options ) {
 		      pollen = new init_fragments(500);
			},
		      onEnd: function ( options ) { }  
		     })
		     
		     
        .code({
          start: gv_01_start_time,     end:  gv_01_start_time+1,
          onStart: function( options ) {
   		      if(do_linear==1){
		      rv2_complete = 1
		      }      
	        current_video_mesh = GA_PAN_mesh 
	       // document.getElementById('bread_crumbs_rv1').src="images/breadcrumbs/ravine_done.png"
		document.getElementById('rv_ambient').src="videos/ambient/GardenAMB_Live.ogg"
		document.getElementById('rv_ambient').volume=0
		document.getElementById('rv_ambient').pause()
	        if(explore==1){pause()}
	        
		var points = [];
		points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	        points[ points.length  ] = { x:1700, z: -1000 };
		camera_move(points,5000,-95,3,"RVw");
			
		sound_target.position.x = 	points[ points.length-1  ].x
		sound_target.position.z = 	points[ points.length-1  ].z

			  },
		 onEnd: function ( options ) { }  
		 })	




 
.code({
          start: gv_01_start_time+5,     end:  gv_01_start_time+6,
          onStart: function( options ) {
          //set_debugger("The 'Garden'")
 		      if(do_linear==1){
		      rv2_complete = 1
		      }         
          var points = [];
	  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	  camera_move(points,25000,-85,3,"RVw");
	  FLOOR_RV_mesh.visible=true
	      //document.getElementById('bread_crumbs_rv2').src="images/breadcrumbs/ravine_done.png"
	       track_this("garden")
	       videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/garden_view_01.webm", GA_1_mesh);
	
			  },
		 onEnd: function ( options ) { }  
		 })	

.code({
	  start:180,end:180.5,
          onStart: function( options ) {
			if(explore==1){pause()}

		  },
		 onEnd: function ( options ) { }  
		 })	



////     Go to GV2  
        .code({
          start: gv_02_start_time,     end:  gv_02_start_time+2,
          onStart: function( options ) {
		      if(do_linear==1){
		      rv3_complete = 1
		      }
			GA_2_mesh.position.x =1700
			new TWEEN.Tween( GA_2_mesh.materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			console.log(freeze_timeline)
			if(!freeze_timeline){			
			FLOOR_RV_mesh.visible=true
			track_this("roots")
			videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/garden_view_02.webm", GA_2_mesh);
		  	
		  	}
		  	freeze_timeline = false
			if(do_linear==1){
			create_blue_skies_01()
			create_outer_buildings_01 ()
			create_maquette_context ()

			}			
			
			var points = [];
			points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	    		points[ points.length  ] = { x:1700, z: 350 };
			camera_move(points,3000,90,3,"RVw");
			sound_target.position.x = 	points[ points.length-1  ].x
			sound_target.position.z = 	points[ points.length-1  ].z
			  },
		 onEnd: function ( options ) { }  
		 })	

        .code({
          start: gv_02_start_time+5,     end:  gv_02_start_time+6,
          onStart: function( options ) {		  
		var points = [];
		points[ points.length ] = { x:camera.position.x, z:camera.position.z };
		points[ points.length  ] = { x:1800, z: 400 };
	        points[ points.length  ] = { x:1700, z: 500 };
		camera_move(points,20000,90,3,"RVw");
			  },
		 onEnd: function ( options ) { }  
		 })	
         		
 
		.code({
          start: gv_02_start_time+26,     end:  gv_02_start_time+27,
          onStart: function( options ) {
			    market_shortcut = 0
 
                
			  },
		 onEnd: function ( options ) { }  
		 })		

		.code({
          start: mk_start_time-2,     end:  mk_start_time,
          onStart: function( options ) {
          //show_semantic_icon(5);
	  if(explore==1){
	  pause()
	  }      
	   },
		 onEnd: function ( options ) {
	 
		 }  
		 })		
		
		
        .code({
          start: mk_start_time+1,     end:  mk_start_time+2,
          onStart: function( options ) {
	 

	 current_scene = 3;
	 if (market_shortcut==1){
	 if(do_linear == 1){		
	  videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/garden_view_02.webm", GA_2_mesh,35);
	 }			
	 var points = [];
	 points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	 points[ points.length  ] = { x:-1700, z: 450 };
	 camera_move(points,1000,90,3,"RVw");
	 }else{
	 camera.position.x = -1700
	 var points = [];
	 points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	 points[ points.length  ] = { x:-1700, z: 450 };
	 camera_move(points,1000,90,7,"RVw");
	 }
			/// HIDDEN MOVE
			     if(explore==0){
				GA_2_mesh.position.x = -1700
				MK_mesh.visible = 0
			     }
			     
	//if(!freeze_timeline){
 	FLOOR_MK_mesh.visible=true
				//all_mesh_array[0].materials[0].opacity = 1
				
	if(studio_mesh){scene.removeObject(studio_mesh)}
	if(explore==1){build_market_explore()}else{build_market()}
	new TWEEN.Tween( all_mesh_array[0].materials[0]).to( {opacity: 1 },1000 ).onComplete(function(){GA_2_mesh.position.x = 1700}).easing( TWEEN.Easing.Linear.EaseNone).start();
		//}
		
		freeze_timeline = false
			  },
		 onEnd: function ( options ) { }  
		 })	
///////PLAY STUDIO		
        .code({
          start: mk_start_time+3,     end:  mk_start_time+6,
          onStart: function( options ) {
		      if(do_linear==1){
		      mk_complete = 1
		      }
			//$('#mk_txt_lnk_overlay').fadeIn(500, function() {})
		    var points = []
		    points[ points.length ] = { x:camera.position.x, z:camera.position.z };
	            points[ points.length  ] = { x:-1700, z: 400 };
		    camera_move(points,30000,88,7,"RVw");
		    videos_alpha = []
		    //document.getElementById('bread_crumbs_mk').src="images/breadcrumbs/mk_done.png"

	 	   
			sound_target.position.x = 	points[ points.length-1  ].x
			sound_target.position.z = 	points[ points.length-1  ].z


			 
			 if(explore==1){
				studio_mesh = load_mesh(new THREE.Plane( 300, 200, 1, 1 ), new THREE.MeshBasicMaterial({ color: 0xff0000,transparent:false } ),-1515,TC_height-20,800,0,90,0,1);
				studio_mesh.translateX(50)	  
			}else{
				studio_mesh = load_mesh(new THREE.Plane( 300, 200, 1, 1 ), new THREE.MeshBasicMaterial({ color: 0xff0000,transparent:false } ),-1600,TC_height-20,835,0,180,0,1);	
			}
		    track_this("market")
		    videos_alpha[0] = new video_alpha("videos/hd/studio.webm",studio_mesh);		   
            //new TWEEN.Tween( all_mesh_array[0].materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			  },
		 onEnd: function ( options ) { }  
		 })		
/////////////FLOOR ONE		
        .code({
          start: 245,     end:  246,
          onStart: function( options ) {
			  new TWEEN.Tween( all_mesh_array[1].materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			  },
		 onEnd: function ( options ) { }  
		 })	

/////////////FLOOR TWO
		  .code({
          start: 247,     end:  248,
          onStart: function( options ) { 
			   new TWEEN.Tween( all_mesh_array[2].materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			 // MK_mesh_floor_01.materials[0]= material_mk_floor_02
			  //MK_mesh_floor_01.materials.needsUpdate =true
			  ////HIP HOP FIGURES 01

		     if(explore==1){
		
				var points = [];
				points[ points.length ] = { x:camera.position.x, z:camera.position.z };
				points[ points.length  ] = { x:-800, z: 750 };
				camera_zoom(points,8000,180,10,"RVw");
			  //new TWEEN.Tween( tc_boy_01 ).to( {opacity: 1 },1000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).start();			
				
			}
			
				
/// Camera Right Pan				
			  var points = []
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  points[ points.length  ] = { x:-1900, z: 450 };
			  camera_move(points,18000,90,7,"RVw");				
		  },
		 onEnd: function ( options ) { }  
		 })	


		  .code({
          start: 249,     end:  250,
          onStart: function( options ) {
			  
			  	new TWEEN.Tween( all_mesh_array[3].materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			  	new TWEEN.Tween( mk_sprite_array[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
		  
		  },
		 onEnd: function ( options ) { }  
		 })	
		  
		  
		  .code({
          start: 250,     end:  251,
          onStart: function( options ) {
		//show_semantic_icon(12);
			  //MK_mesh_floor_01.materials[0]= material_mk_floor_03
			  //MK_mesh_floor_01.materials.needsUpdate =true
			  new TWEEN.Tween( all_mesh_array[4].materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
///HIP HOP FIGURES 02
				new TWEEN.Tween( mk_sprite_array[1]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
///centre people				
				
				//new TWEEN.Tween( mk_array[0].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	 
		  },
		 onEnd: function ( options ) { }  
		 })	
		  


		  .code({
          start: 255,     end:  256,
          onStart: function( options ) {
			  scene.removeObject(studio_mesh)
			new TWEEN.Tween( all_mesh_array[5].materials[0]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			//new TWEEN.Tween( mk_array[1].materials[0] ).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
			new TWEEN.Tween( mk_sprite_array[2]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			new TWEEN.Tween( mk_sprite_array[3]).to( {opacity: 1 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
			new TWEEN.Tween(all_mesh_array[6].materials[0] ).to( {opacity: 1 },100 ).delay(7000).easing( TWEEN.Easing.Linear.EaseNone).start();
			new TWEEN.Tween(all_mesh_array[7].materials[0] ).to( {opacity: 1 },100 ).delay(7500).easing( TWEEN.Easing.Linear.EaseNone).start();
			new TWEEN.Tween(all_mesh_array[8].materials[0] ).to( {opacity: 1 },100 ).delay(8000).easing( TWEEN.Easing.Linear.EaseNone).start();
			new TWEEN.Tween( mk_sprite_array[4]).to( {opacity: 1 },100 ).delay(9000).easing( TWEEN.Easing.Linear.EaseNone).start();
		  },
		 onEnd: function ( options ) { }  
		 })	
		  
		  .code({
          start: 264,     end:  268,
          onStart: function( options ) {
////CAMERA LEFT PAN	

/// COMUNITY CENTER
		   new TWEEN.Tween( mk_sprite_array[0]).to( {opacity: 0 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
		   new TWEEN.Tween( mk_sprite_array[1]).to( {opacity: 0 },1000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
                   new TWEEN.Tween(all_mesh_array[9].materials[0] ).to( {opacity: 1 },4000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).start();
		   new TWEEN.Tween(all_mesh_array[10].materials[0] ).to( {opacity: 1 },3000 ).delay(4000).easing( TWEEN.Easing.Linear.EaseNone).start();
		   new TWEEN.Tween(all_mesh_array[11].materials[0] ).to( {opacity: 1 },3000 ).delay(6000).easing( TWEEN.Easing.Linear.EaseNone).start();
		   new TWEEN.Tween(all_mesh_array[12].materials[0] ).to( {opacity: 1 },3000 ).delay(8000).easing( TWEEN.Easing.Linear.EaseNone).start();
		

			  var points = []
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  
			  if(do_linear==1){
			 points[ points.length  ] = { x:-1900, z: 350 };
			  camera_move(points,7000,61,8,"");
			  }else{
			   camera_zoom(points,7000,170,10,"");
			  }
			  
			 
 /// MARKET FIGURES
 

			
				
					
			 

		  },
		 onEnd: function ( options ) { }  
		 })	
		  .code({
          start: 275,     end:  276,
          onStart: function( options ) {
				//PRITI in
				new TWEEN.Tween( mk_sprite_array[5]).to( {opacity: 1 },1000 ).delay(1000).easing( TWEEN.Easing.Linear.EaseNone).start();
				//new TWEEN.Tween( mk_sprite_array[5].position).to( {x: 300 },3000 ).delay(1000).easing( TWEEN.Easing.Linear.EaseNone).start();

			  var points = []
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  camera_move(points,23000,92,7,"RVw");				
  			 // STAGE_mesh.visible = true
				
		  },
		 onEnd: function ( options ) { }  
		 })			  
		  
 /// MORE DANCING
 
		  .code({
          start: 277,     end:  278,
          onStart: function( options ) {
			  			  ///PRITI OUT
			  
			  new TWEEN.Tween( mk_sprite_array[5]).to( {opacity: 0 },3000 ).delay(12000).easing( TWEEN.Easing.Linear.EaseNone).start();
			  //new TWEEN.Tween( mk_sprite_array[5].position).to( {x: -200 },3000 ).delay(4000).easing( TWEEN.Easing.Linear.EaseNone).start();
				for ( var i = 6, il = mk_sprite_array.length; i < il; i++ ) {
				new TWEEN.Tween( mk_sprite_array[i]).to( {opacity: 1 },1400 ).delay(13000).easing( TWEEN.Easing.Linear.EaseNone).start();
				}
		
				var multix = 1.2
				
				if(explore==1){
					dancer_mesh = load_mesh(new THREE.Plane( 300*multix, 200*multix, 1, 1 ), new THREE.MeshBasicMaterial({ color: 0xff0000,transparent:false } ),-1515,TC_height-10,900,0,90,0,1);
					dancer_mesh.translateX(50)	
				}else{
					dancer_mesh = load_mesh(new THREE.Plane( 300*multix, 200*multix, 1, 1 ), new THREE.MeshBasicMaterial({ color: 0x666666,opacity:1,transparent : true  } ),-1500,TC_height,800,0,-180,0,1);				
				}
				

				videos_alpha[videos_alpha.length] = new video_alpha("videos/hd/dancers.webm",dancer_mesh);
				
		  },
		 onEnd: function ( options ) { }  
		 })	


		  .code({
          start: 295,     end:  301,
          onStart: function( options ) {
				//show_semantic_icon(10);
				//show_semantic_icon(11);			  
if(do_linear==1){

				for ( var i = 0, il = mk_sprite_array.length; i < il; i++ ) {
				new TWEEN.Tween( mk_sprite_array[i]).to( {opacity: 0 },2400 ).easing( TWEEN.Easing.Linear.EaseNone).start();
				}
				for ( var i = 1, il = all_mesh_array.length; i < il; i++ ) {
				new TWEEN.Tween( all_mesh_array[i].materials[0]).to( {opacity:0 },2400 ).easing( TWEEN.Easing.Linear.EaseNone).start();
				}
}else{
			for ( var i = 0, il = screen_sprite_array.length; i < il; i++ ) {
			new TWEEN.Tween( screen_sprite_array[i]).to( {opacity: 0 },2400 ).easing( TWEEN.Easing.Linear.EaseNone).start();
			}
}

	if(dancer_mesh)	{		
				new TWEEN.Tween( dancer_mesh.materials[0]).to( {opacity:0 },2400 ).easing( TWEEN.Easing.Linear.EaseNone).start();
				 STAGE_mesh.visible = false;
				dancer_mesh.visible = false;
		  }
				//document.getElementById('bread_crumbs_mk').src="images/breadcrumbs/mk_done.png"
				document.getElementById('tc_ambient').src="videos/ambient/MarketAMB_Live.ogg"
				document.getElementById('tc_ambient').volume=0
			  document.getElementById('tc_ambient').pause()		  
 			  if(explore==1){pause()}				
		  },
		 onEnd: function ( options ) { }  
		 })	

//////OUTRO


		  .code({
          start: outro_start_time,     end:  outro_start_time+1,
          onStart: function( options ) {
			  $('#breadcrumbs').hide()
			  $('#main_menu').hide()
			   if(do_linear==0){
				   resume_scene()
			   }
    			  if(do_linear==1){			   
			   var video_t =document.getElementById('video_controller')
			   tc1_complete = 0
			   rv1_complete =0
			   rv2_complete = 0
			   rv3_complete = 0
			   mk_complete = 0
			   outro_complete = 0
				 var dummy = { v: video_t.volume};
				 new TWEEN.Tween( dummy ).to( { v: 0 }, 2500 )
				.onUpdate( function() {
				 video_t.volume = this.v
				})
				.onComplete( function() {
				 sound_track = "off"
				 video_t.pause()
				})			
				.start();
				
				
   			
			}
	
				for ( var i = 0, il = mk_sprite_array.length; i < il; i++ ) {
				new TWEEN.Tween( mk_sprite_array[i]).to( {opacity: 0 },2400 ).easing( TWEEN.Easing.Linear.EaseNone).start();
				}
				for ( var i = 1, il = all_mesh_array.length; i < il; i++ ) {
				new TWEEN.Tween( all_mesh_array[i].materials[0]).to( {opacity:0 },2400 ).easing( TWEEN.Easing.Linear.EaseNone).start();
				}
			  //make_night_outro()
			  var points = []
			  points[ points.length ] = { x:camera.position.x, z:camera.position.z };
			  points[ points.length  ] = { x:0, z: 0 };
			  camera_move(points,2500,360,-90,"OUTRO_LINEAR");
        		  pano_mesh.visible=false;
			  FLOOR_mesh.visible=false
			  PATH_mesh.visible=false
			  all_floor_01.visible = false
			  BELOW_mesh.visible = false
			  BELOW_mesh.scale.x=BELOW_mesh.scale.y=1
			  FLOOR_OT_mesh.visible=false
			  
		
				
		  },
		 onEnd: function ( options ) { }  
		 })	
		  
		  .code({
         start: outro_start_time+3.5,     end:  outro_start_time+5,
         onStart: function( options ) {
			   current_scene = 3; 
			   INTRO_mesh.visible = false
			   FLOOR_mesh.visible=false
			   PATH_mesh.visible=false
 			   BELOW_mesh.position.y=500
 			   BELOW_mesh.scale.y=BELOW_mesh.scale.x=BELOW_mesh.scale.z=1;
			   lat=90;
			   lon=360;
			   document.getElementById("3d_screen").style.display = "block"
			   if(do_linear==0){
			   turn_on_control("CLOSE"); 
			   //$('#breadcrumbs').show()			   
			   }
			   //document.getElementById('bread_crumbs_rv2').src="images/breadcrumbs/ravine_done.png"
			   track_this("outro")
		      if(do_linear==1){
		      outro_complete = 1
		      }	
		      
		      $("#choose_country").css('display', 'none');

	if(!get_var('chosen_land')){
	set_var('chosen_land',return_random_country())
	}		      
		           videos_no_alpha[videos_no_alpha.length] = new video_no_alpha("videos/hd/outro.webm", BELOW_mesh);
			   BELOW_mesh.visible = true		
		  },
		 onEnd: function ( options ) { }  
		 })
		 
		  .code({
				
          start: outro_start_time+7,     end:  outro_start_time+8,
          onStart: function( options ) {
			 pano_mesh.visible=true;
			 FLOOR_mesh.visible=true
			 PATH_mesh.visible=true
			 
		  },
		 onEnd: function ( options ) { }  
		 })	


		  .code({
          start: 368,     end:   379,
          onStart: function( options ) {
		  build_maps();
		  show_street_view_inset()
		  },
		 onEnd: function ( options ) {  
		 }  
		 })	
		  
/*		 
		  .code({
          start: outro_satellite_view,     end:   outro_satellite_view+1,
          onStart: function( options ) {
		   show_street_view_inset()
		  },
		 onEnd: function ( options ) {  
		 }  
		 })	


*/
		  .code({
          start: 387,     end:  390,
          onStart: function( options ) {	  
                constellation_init()
                unbuild_maps() 
		  },
		 onEnd: function ( options ) { }  
		 })		
		  
		  		  .code({
          start: outro_end,     end:  outro_end+19,
          onStart: function( options ) {
		   FLOOR_OT_mesh.visible=false;
		   for (var i = 0; i< objects.length; i++){
		   scene.addObject(objects[i])
	  }
		   new TWEEN.Tween( BELOW_mesh.position).to( {y: 1700},6000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete(function(){}).start();
		   new TWEEN.Tween( BELOW_mesh.scale).to( {x: 8,z: 8},15000 ).easing( TWEEN.Easing.Linear.EaseNone).onComplete(function(){}).start();
		   var points =[]
		   points[ points.length ] = { x:camera.position.x, z:camera.position.z };
		   points[ points.length  ] = { x:0, z: 0 };
		   camera_move(points,5000,180,0,"END");
		  
		  },
		 onEnd: function ( options ) {
			
		  }  
		 })	
				  
				  
	 //global_unitrans = $p.id			  

    }, false);
    
 //show_street_view_inset()
 function ground(){
	  
 }
 
 var tc_sprite_array = [] 
function build_tc1_01(){
 			 for ( var i = 0, il = tc_array.length; i < il; i++ ) {
				 scene.removeObject(tc_array[i]);
			 }
			    tc_array = []
			 //alert("start1")
				var obj_temp = load_mesh(TC_plane_overlay,material_library.material_tc_stairs,0 , TC_height,1975,0,180,0,1);
				obj_temp.materials[0].opacity=0
				///obj_temp.materials[0][0].depthTest = false;
				tc_array.push(obj_temp)				
				//8
				var obj_temp = load_mesh(TC_plane_overlay,material_library.material_tc_floor,0 , TC_height,1995,0,180,0,1);
				obj_temp.materials[0].opacity=0
				//obj_temp.materials[0][0].depthTest = false;
				tc_array.push(obj_temp)				
				//11
				var obj_temp = load_mesh(TC_plane_overlay,material_library.material_tc_wall,0 , TC_height,1985,0,180,0,1);
				obj_temp.materials[0].opacity=0
				//obj_temp.materials[0][0].depthTest = false;
				tc_array.push(obj_temp)				
				//15
				var obj_temp = load_mesh(TC_plane_overlay,material_library.material_tc_path,0 , TC_height,1965,0,180,0,1);
				obj_temp.materials[0].opacity=0
				//obj_temp.visible=0
				tc_array.push(obj_temp)				
				//19
				var obj_temp = load_mesh(TC_plane_overlay,material_library.material_tc_people_01,0 , TC_height,1955,0,180,0,1);
				obj_temp.materials[0].opacity=0
			//	obj_temp.visible=0
				tc_array.push(obj_temp)			
				//13
				var obj_temp = load_mesh(TC_plane_overlay,material_library.material_tc_people_02,0 , TC_height,1945,0,180,0,1);
				obj_temp.materials[0].opacity=0	
				//obj_temp.visible=0
				tc_array.push(obj_temp)
				
				
			 var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court/playground_tc1.png")

				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .2
				sprite.position.set(TC_base_mesh.position.x,-160,TC_base_mesh.position.z) //350
				sprite.translateZ(-250)
				sprite.translateX(-100)
				
				sprite.opacity = 0
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				tc_sprite_array.push(sprite)
 }
 var TC2_floor_mesh 
 
 
function unbuild_tc2 (){
	if(TC2_floor_mesh){
             new TWEEN.Tween(TC2_floor_mesh.materials[0] ).to( {opacity: 0 },2000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
			 
			 for ( var i = 0, il = tc_2_sprite_array_2.length; i < il; i++ ) {
				   new TWEEN.Tween(tc_2_sprite_array_2[i] ).to( {opacity: 0 },2000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
			 }
	}
}
  
var tc_2_sprite_array_2 = []
var tc_boy_01, tc_boy_02
function build_tc2_01 (){
	 for ( var i = 0, il = tc_2_array.length; i < il; i++ ) {
				 scene.removeObject(tc_2_array[i]);
			 }
			 
			 for ( var i = 0, il = tc_2_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(tc_2_sprite_array[i]);
			 }
			 
			    tc_2_array = [];
				tc_2_sprite_array = [];
				
				
				TC2_floor_mesh = load_mesh(TC_2_plane,material_library.material_tc2_floor_01,120 , TC_height-30,1005,0,0,0,1);
				tc_2_array.push(TC2_floor_mesh)
				objects.push(TC2_floor_mesh)
				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tc_common/bb_net_01.png")
				
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 1
				sprite.position.set(80,-100,1050)
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				tc_2_sprite_array.push(sprite)
				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_bb_players.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .325
				sprite.position.set(150,-40,1070)
				sprite.opacity=.7
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				tc_2_sprite_array.push(sprite)
				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_FG_boy_day.png")
				tc_boy_01 = new THREE.Sprite( { map: sprite_texture_01, useScreenCoordinates: true} );
				var multix =3
				tc_boy_01.position.set(width/2+400,height-140,1150)
				tc_boy_01.opacity=0
				tc_boy_01.scale.set( multix, -multix, 1.0 );
				scene.addObject(tc_boy_01 )	
				tc_2_sprite_array.push(tc_boy_01 )
				screen_sprite_array.push(tc_boy_01 )
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_hockey_players.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .325
				sprite.position.set(120,-40,1070)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				tc_2_sprite_array_2.push(sprite)
				
                		var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_FG_boy_night.png")
				tc_boy_02 = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 3
				tc_boy_02.position.set(width/2+400,height-140,1150)
				tc_boy_02.opacity=0
				tc_boy_02.scale.set( multix, -multix, 1.0 );
				scene.addObject(tc_boy_02)
				screen_sprite_array.push(tc_boy_02 )
				tc_2_sprite_array_2.push(tc_boy_02)				
				
 }
 

function build_tc2_01_explore (){
	 for ( var i = 0, il = tc_2_array.length; i < il; i++ ) {
				 scene.removeObject(tc_2_array[i]);
			 }

			 for ( var i = 0, il = tc_2_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(tc_2_sprite_array[i]);
			 }

			    tc_2_array = [];
				tc_2_sprite_array = [];


				TC2_floor_mesh = load_mesh(TC_2_plane,material_library.material_tc2_floor_01, TC_base_mesh_2.position.x , TC_height-60, TC_base_mesh_2.position.z,0,225,0,1);
				TC2_floor_mesh.translateZ(-50)
				TC2_floor_mesh.translateX(-50)
				tc_2_array.push(TC2_floor_mesh)
				objects.push(TC2_floor_mesh)

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tc_common/bb_net_01.png")

				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 1
				sprite.position.set(TC_base_mesh_2.position.x,-160,TC_base_mesh_2.position.z) //350
				sprite.translateZ(-250)
				sprite.translateX(-100)
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				tc_2_sprite_array.push(sprite)

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_bb_players.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .325
				sprite.position.set(TC_base_mesh_2.position.x,-120,TC_base_mesh_2.position.z) //350
				sprite.translateZ(-250)
				sprite.translateX(-400)
				sprite.opacity=.7
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				tc_2_sprite_array.push(sprite)

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_FG_boy_day.png")
				tc_boy_01 = new THREE.Sprite( { map: sprite_texture_01, useScreenCoordinates: true} );
				var multix =3
				tc_boy_01.position.set(TC_base_mesh_2.position.x,height-140,2550)
				tc_boy_01 .opacity=0
				tc_boy_01 .scale.set( multix, -multix, 1.0 );
				scene.addObject(tc_boy_01 )	
				tc_2_sprite_array.push(tc_boy_01 )
				screen_sprite_array.push(tc_boy_01 )


				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_hockey_players.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .325
				sprite.position.set(TC_base_mesh_2.position.x,-120,TC_base_mesh_2.position.z) //370
				sprite.translateZ(-350)
				sprite.translateX(-100)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				tc_2_sprite_array_2.push(sprite)

                                var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/tennis_court_2/tc2_FG_boy_day.png")
				tc_boy_02 = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 3
				tc_boy_02.position.set(TC_base_mesh_2.position.x,height-140,2550)
				tc_boy_02.opacity=0
				tc_boy_02.scale.set( multix, -multix, 1.0 );
				scene.addObject(tc_boy_02)	
				tc_2_sprite_array_2.push(tc_boy_02)
				screen_sprite_array.push(tc_boy_02 )

 }
function build_tc2_02 (){

			 
			 for ( var i = 0, il = tc_2_sprite_array.length; i < il; i++ ) {
				 new TWEEN.Tween(tc_2_sprite_array[i] ).to( {opacity: 0 },2000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
			 }

			 for ( var i = 0, il = tc_2_sprite_array_2.length; i < il; i++ ) {
				 new TWEEN.Tween(tc_2_sprite_array_2[i] ).to( {opacity: 1 },2000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	
			 }


 }
 
 var all_mesh_array = []
 

var fg_architect, fg_crowd
 function build_market_explore(){

			 for ( var i = 0, il = all_mesh_array.length; i < il; i++ ) {
				scene.removeObject(all_mesh_array[i])	
			 }



			 all_mesh_array = []

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_01,-1515,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(1)
				all_mesh_array.push(obj_temp)

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_02,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(2)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_03,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(3)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_04,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(4)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_05,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(5)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_06,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(6)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_07,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(7)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_08,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(8)
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_09,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(9)
				all_mesh_array.push(obj_temp)

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_10,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(10)
				all_mesh_array.push(obj_temp)

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_11,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(11)
				all_mesh_array.push(obj_temp)

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_12,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(12)
				all_mesh_array.push(obj_temp)

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_13,-1515	,TC_height+25,878,0,90,0,1	);
				obj_temp.materials[0].opacity=0
				obj_temp.translateX(12)
				all_mesh_array.push(obj_temp)


				for ( var i = 0, il = mk_sprite_array.length; i < il; i++ ) {
				scene.removeObject(mk_sprite_array[i])	
			 }
			 mk_sprite_array = []

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_hip_hop_figures_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .5
				//sprite.position.set(-1490,-90,750)
				sprite.position.set(-1515,-140,900)
				sprite.translateX(320)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)

//1		
			  var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_hip_hop_figures_02.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .5
				sprite.position.set(-1515,-140,800)
				sprite.translateX(320)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*1.5, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)

//2				
 				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_chess_figures_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .375
				sprite.position.set(-1515,-160,630)
				sprite.translateX(360)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
//3				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_couple_figures_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .5
				sprite.position.set(-1515,-140,640)
					sprite.translateX(320)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)

//4				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_brolly_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 1
				sprite.position.set(-1515,-90,620)
				sprite.translateX(380)
			        sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)


				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_priti.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 1.5

				sprite.position.set(300 ,height-100,700)

				//sprite.position.set(-1350,-90,700)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*1.75, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				screen_sprite_array.push(sprite )


				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_ob_heather.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .75
				sprite.position.set(-1515,-240,900)
					sprite.translateX(320)
			        sprite.opacity=0
				sprite.scale.set( multix, -multix*1.75, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)


				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_architect.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 2
				sprite.position.set(0,height-200,700)
				sprite.opacity=0
				fg_archtitext = sprite
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				screen_sprite_array.push(sprite )


				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_kat.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .45
				sprite.position.set(-1515,-180,560)
				sprite.translateX(340)
			 sprite.opacity=0
				sprite.scale.set( multix, -multix*3, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)


				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_handshake.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .45
				sprite.position.set(-1515,-160,470)
				sprite.translateX(300)
		 sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_crowd.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 2
				sprite.position.set(width/2+500,height-130,700)
		 sprite.opacity=0
		 fg_crowd = sprite
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				screen_sprite_array.push(sprite )




 }
 function build_market(){

			 for ( var i = 0, il = all_mesh_array.length; i < il; i++ ) {
				scene.removeObject(all_mesh_array[i])	
			 }

			 

			 all_mesh_array = []
			 
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_01,-1515,TC_height+25,878,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_02,-1515	,TC_height+25,877,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_03,-1515	,TC_height+25,876,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_04,-1515	,TC_height+25,875,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_05,-1515	,TC_height+25,874,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_06,-1515	,TC_height+25,873,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_07,-1515	,TC_height+25,872,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_08,-1515	,TC_height+25,871,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)	

				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_09,-1515	,TC_height+25,870,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_10,-1515	,TC_height+25,869,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_11,-1515	,TC_height+25,868,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_12,-1515	,TC_height+25,867,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)
				
				var obj_temp = load_mesh(MK_plane_overlay,material_library.material_mk_view_13,-1515	,TC_height+25,866,0,-180,0,1	);
				obj_temp.materials[0].opacity=0
				all_mesh_array.push(obj_temp)


				for ( var i = 0, il = mk_sprite_array.length; i < il; i++ ) {
				scene.removeObject(mk_sprite_array[i])	
			 }
			 mk_sprite_array = []
			 
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_hip_hop_figures_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .5
				sprite.position.set(-1490,-140,750)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				
//1		
			    var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_hip_hop_figures_02.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .5
				sprite.position.set(-1750,-140,750)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*1.5, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				
//2				
 				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_chess_figures_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .375
				sprite.position.set(-1900,-140,750)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
//3				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_couple_figures_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .5
				sprite.position.set(-1830,-140,700)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				
//4				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_brolly_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 1.5
				sprite.position.set(-2090,-140,700)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_priti.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 1.5
				
				sprite.position.set(300,height-100,700)
				screen_sprite_array.push(sprite )
				
				//sprite.position.set(-1350,-90,700)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*1.75, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				
	
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_ob_heather.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .75
				sprite.position.set(-1100,-90,720)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*1.75, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				
				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_architect.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 2
				sprite.position.set(0,height-200,700)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				screen_sprite_array.push(sprite )
				

				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_kat.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .45
				sprite.position.set(-1900,-150,710)
				sprite.opacity=0
				sprite.scale.set( multix, -multix*2, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				
				
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_handshake.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = .45
				sprite.position.set(-2050,-160,740)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)			
	
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/market/fg_crowd.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: true } );
				var multix = 2
				sprite.position.set(width/2+500,height-130,700)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				scene.addObject(sprite)	
				mk_sprite_array.push(sprite)
				screen_sprite_array.push(sprite )


				
				
 }
