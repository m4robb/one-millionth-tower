
var original_cam_speed

function main_story_dashboard_mouse_over( event ) {
camera.canMove= 0
}

function main_story_dashboard_mouse_out( event ) {	
camera.canMove= 1
}


function onDocumentMouseOver( event ) {

over_interface=false
}

function onDocumentMouseOut( event ) {
over_interface=true
}


function onFooterBarMouseOver( event ) {
}
			//onFooterBarMouseOver



var onPointerDownPointerX,onPointerDownPointerY
var resume, resume_mode = 0 , lat_resume = 0,lon_resume=0,cam_x_resume=0,cam_z_resume=0, resume_interval,roll_trigger=0;


function manageLinks(event) {

var link = event.target;

//go up the family tree until we find the A tag

while (link && link.tagName != 'A') {

link = link.parentNode;

}

if (link) {

var url = link.href;

var linkIsExternal = url.indexOf('javascript') != 0;

if (linkIsExternal) {
if( url.indexOf('wiki')!=-1){
var pop_up_link = url.replace("client.heliozilla.com","wikipedia.com")
window.open(pop_up_link,'mywindow','width=500,height=500,left=0,top=100,screenX=0,screenY=100')
}
return false;
}

}

return true;

}

document.onclick=manageLinks;


var is_playing_global, is_choose_a_country = 0 


function onDocumentMouseDown( event ) {
			
				var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
				projector.unprojectVector( vector, camera );
				var ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );
								
				var intersects = ray.intersectObjects( semantic_icon_array );
				if ( intersects.length > 0 && is_intro == 0 && !intersects[ 0 ].object.is_playing && do_linear==0  && flythru==0 && menu_is_loaded==0) {
				
					if(intersects[ 0 ].object.is_maquette && !is_playing_global){
						roll_trigger = 1
						
	 					//$('#live_feed').fadeOut(1000, function() {})
						for (var j = 0;j< intersects[ 0 ].object.RO_array.length;j++){
						intersects[ 0 ].object.RO_array[j].opacity=0
					  }
					
						switch(intersects[ 0 ].object.target){
							case "go_tennis_court":
							
							ro_contract(TC_base_mesh)
							ro_contract(TC_base_mesh_2)
							ro_contract(TC_base_mesh_video)
							move_to_TC();

							break;
							case "go_tennis_court_2":
							move_to_TC();
							break;

							case "go_ravine":
							move_to_RV();
							break;	

							case "go_ravine2":
							move_to_GV1();
							break;	
							

							case "go_ravine3":
							move_to_GV2();
							break;
							
							case "go_market_place":
							move_to_MK();
							break;	
							
							case "go_outro":
							 move_to_CHOOSE_A_COUNTRY();
							 is_playing_global = true
							break;						


							case "go_imagine":
							 move_to_IMAGINE()
							break;	

							case "go_living_proof":
							 move_to_LIVING_PROOF()
							break;	
	
							case "go_woh":
							 move_to_HIGHRISE()
							break;	

							case "go_tech":
							 move_to_TECH()
							break;	
							
							case "resume":
							intersects[ 0 ].object.visible=false
							break;								
						}
					}
					
					if(!intersects[ 0 ].object.is_maquette){
					
             
							switch(intersects[ 0 ].object.target){
								
								
								case "wiki":
								track_this(intersects[ 0 ].object.url)
								intersects[ 0 ].object.materials[0].opacity=.5;
								write_wiki( intersects[ 0 ].object.url,"live_feed",intersects[ 0 ].object.title)
								break;
								case "flickr":
								track_this(intersects[ 0 ].object.url)
								intersects[ 0 ].object.materials[0].opacity=.5;
								if(intersects[ 0 ].object.userid == ""){
								write_flickr( intersects[ 0 ].object.url,"live_feed",intersects[ 0 ].object.apikey,null, intersects[ 0 ].object.title)
								}else{
								write_flickr( intersects[ 0 ].object.url,"live_feed",intersects[ 0 ].object.apikey,intersects[ 0 ].object.userid,intersects[ 0 ].object.title)	
								}
								break;

								case "newsdiv":
								write_google_news( intersects[ 0 ].object.url,"newsdiv" )
								break;		


							}
					}
				}

				
//}				
				/**/
}


var is_spinning_down = false
var fade_close_timer, user_move, moved_breadcrumbs,m_x = 0, m_y=0


// Dragonfly IT WebGL Review: ISSUE #1, MouseMove performance

var dom_rollovers = null; // cache of dom element for rollovers
var dom_breadcrumbs = null; // cache of dom element for breadcrumbs
var dom_breadcrumbs_src = null; // cache of currently set image to avoid triggering .src accessors

function setBreadcrumbImage( bcId, val ) {
  if (dom_breadcrumbs_src[bcId] !== val) {
    dom_breadcrumbs[bcId].src = dom_breadcrumbs_src[bcId] = val;
  }
}


function onDocumentMouseMove( event ) {



	  if (!dom_rollovers) { 
	    // initialize and grab the DOM elements once, constantly accessing the DOM and .src on mouse move causes severe performance degredation
	    dom_rollovers = document.getElementById("rollovers");
	    dom_breadcrumbs = {
	      tc1: document.getElementById('bread_crumbs_tc1'),
	      rv1: document.getElementById('bread_crumbs_rv1'), 
	      rv2: document.getElementById('bread_crumbs_rv2'),
	      rv3: document.getElementById('bread_crumbs_rv3'),
	      mk: document.getElementById('bread_crumbs_mk'),
	      outro: document.getElementById('bread_crumbs_outro')
	    };
	    dom_breadcrumbs_src = {
	      tc1: '',
	      rv1: '', 
	      rv2: '',
	      rv3: '',
	      mk: '',
	      outro: ''
	    };
	  }
	  
	  user_move = true
		
		clearTimeout(fade_close_timer)
 		fade_close_timer = setTimeout(function(){user_move = false},2000); 
	

		if(is_intro == 1 ){
		mouseX = event.clientX - width/2;
		mouseY = event.clientY - height/2;	
		m_x = (event.clientX / window.innerWidth) * 2 - 1;
    		m_y = -(event.clientY / window.innerHeight) * 2 + 1;

		}

			if(explore==1){	
					if(roll_trigger == 0){
					container.style.cursor="crosshair";
					if(camera.mouseXX>width/2+300){container.style.cursor="e-resize"};
						if(camera.mouseXX<width/2-300){container.style.cursor="w-resize"};
						}else{
						container.style.cursor="pointer";
						}
					}else{
					container.style.cursor="default";	
					}
					var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
					projector.unprojectVector( vector, camera );
				
					var ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );
				
					var intersects = ray.intersectObjects( semantic_icon_array );
				        if ( intersects.length > 0  && !is_playing_global && is_intro!=1 && is_outro!=1 && is_choose_a_country!=1 && do_linear!=1 && menu_is_loaded==0){
				         roll_trigger = 1
				        
					if (  intersects[ 0 ].object.is_ready == true) {
				        roll_trigger = 1
				        if(intersects[ 0 ].object.RO_text && intersects[ 0 ].object!=TC_base_mesh_2){   
				        intersects[ 0 ].object.RO_text.visible=true
				        }

					
					if(intersects[ 0 ].object.RO_array){
						  ro_expand(intersects[ 0 ].object)
						  
							for (var i = 0,l= intersects[ 0 ].object.RO_array.length;i<l;i++){
								intersects[ 0 ].object.RO_array[i].opacity=1	
							}
							if(intersects[ 0 ].object==TC_base_mesh){
							ro_expand_no_text(TC_base_mesh_video)
								ro_expand(TC_base_mesh_2)
								for (var i = 0, l= TC_base_mesh_2.RO_array.length;i<l;i++){
									TC_base_mesh_2.RO_array[i].opacity=1	
								}							
							}
							
							if(intersects[ 0 ].object==TC_base_mesh_2){
								ro_expand_no_text(TC_base_mesh_video)
								TC_base_mesh.RO_text.visible=true
							for (var i = 0, l= TC_base_mesh.RO_array.length;i<l;i++){
								TC_base_mesh.RO_array[i].opacity=1	
							}							
							}						
						var ro_volume=.5
						if(global_mute){ro_volume=0}
						var objTarget = intersects[ 0 ].object.target;  // "switch" statements are not optimized well by the JIT, it's faster to use if/elseif
						if(objTarget==="go_tennis_court") {
							setBreadcrumbImage("tc1","images/breadcrumbs/tc_done.png");
							if(intersects[ 0 ].object.is_ready_ro == true){
 							dom_rollovers.src="videos/rollovers/RO_TC1.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							TC_base_mesh_2.is_ready_ro = false
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 
							setTimeout(function(){TC_base_mesh_2.is_ready_ro=true},4000); 
							//document.getElementById('bread_crumbs_tc2').src="images/FLOOR_OTcrumbs/tc_done.png"
							}
						} else if (objTarget === "go_tennis_court_2") {
							setBreadcrumbImage("tc1","images/breadcrumbs/tc_done.png");
							if(intersects[ 0 ].object.is_ready_ro == true){
 							dom_rollovers.src="videos/rollovers/RO_TC1.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							TC_base_mesh.is_ready_ro = false
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 
							setTimeout(function(){TC_base_mesh.is_ready_ro=true},4000); 	
							}
						} else if (objTarget === "go_ravine") {
							if(intersects[ 0 ].object.is_ready_ro == true){
							setBreadcrumbImage("rv1","images/breadcrumbs/ravine_done.png");
 							dom_rollovers.src="videos/rollovers/RO_RV1.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 					
							}
						} else if (objTarget === "go_ravine2") {
							setBreadcrumbImage("rv2","images/breadcrumbs/ravine_done.png");
							if(intersects[ 0 ].object.is_ready_ro == true){
 							dom_rollovers.src="videos/rollovers/RO_RV2.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 					
							}
						} else if (objTarget === "go_ravine3") {
							setBreadcrumbImage("rv3","images/breadcrumbs/ravine_done.png");
							if(intersects[ 0 ].object.is_ready_ro == true){
 							dom_rollovers.src="videos/rollovers/RO_RV3.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 					
							}
						} else if (objTarget === "go_market_place") {
							setBreadcrumbImage("mk","images/breadcrumbs/mk_done.png");
							if(intersects[ 0 ].object.is_ready_ro == true){		
 							dom_rollovers.src="videos/rollovers/RO_MK.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 					
							}
						} else if (objTarget === "go_outro") {
							setBreadcrumbImage("outro","images/breadcrumbs/outro_done.png");
							if(intersects[ 0 ].object.is_ready_ro == true){
 							dom_rollovers.src="videos/rollovers/RO_OUTRO.ogg"
							dom_rollovers.volume=ro_volume
							dom_rollovers.play()
							intersects[ 0 ].object.is_ready_ro = false
							setTimeout(function(){intersects[ 0 ].object.is_ready_ro=true},4000); 					
							}
						}
				
					}
					}
				
				}	
				
				
				if (intersects.length==0){
				
					if(!tc1_complete){
					setBreadcrumbImage("tc1","images/breadcrumbs/tc.png");
					}
					if(!rv1_complete){
					setBreadcrumbImage("rv1","images/breadcrumbs/ravine.png");
					}
					if(!rv2_complete){
					setBreadcrumbImage("rv2","images/breadcrumbs/ravine.png");
					}
					if(!rv3_complete){
					setBreadcrumbImage("rv3","images/breadcrumbs/ravine.png");
					}
					if(!mk_complete){
					setBreadcrumbImage("mk","images/breadcrumbs/mk.png");
					}
					if(!outro_complete){
					setBreadcrumbImage("outro","images/breadcrumbs/outro.png");
					}
	
					for(var i = 0,l=semantic_icon_array.length;i<l;i++){

						if(semantic_icon_array[i].RO_text){
						semantic_icon_array[i].RO_text.position.y = semantic_icon_array[i].RO_text_start_y
						semantic_icon_array[i].RO_text.visible=false
						}
					}
										
					if(roll_trigger==1){
					ro_contract(TC_base_mesh_video)
					TC_base_mesh_video.ro_expanding = false
			      for(var i = 0,l=semantic_icon_array.length;i<l;i++){
						ro_contract(semantic_icon_array[i])
						semantic_icon_array[i].ro_expanding = false
						if(semantic_icon_array[i].RO_text){
						semantic_icon_array[i].RO_text.position.y = semantic_icon_array[i].RO_text_start_y
						semantic_icon_array[i].RO_text.visible=false
						}
						if(semantic_icon_array[i].RO_array){
						for (var j = 0,k= semantic_icon_array[i].RO_array.length;j<k;j++){
							semantic_icon_array[i].RO_array[j].opacity=0
						}
					}
					}
					roll_trigger = 0
				
				}	        
				
				}
				
				
				//}

}


function onDocumentMouseUp( event ) {

			}

			function onDocumentDoubleClick( event ) {
				//go_explore()
				//go_green_zoom()
			}

			function onDocumentRightClick( event ) {
				//go_explore()
				//go_green_zoom()
			}			

			function onStartBarMouseOver( event ) {
				
			}

			function onStartBarMouseOut( event ) {
				
			}

	onKeyDown = function ( event ) {
	
		switch( event.keyCode ) {
		case 49: 
		go_explore();
		break;
		case 50: 
		go_green_zoom();
		break;	
		case 51: 
		  build_maps();
		  show_street_view_inset()
		break;
		
		
		}
	
			isUserInteracting = true

		};
var enter_will_clear, enter_has_cleared
function add_center_text(){
	if(!enter_will_clear){
	$('#text_use_keyboard').fadeOut(1000, function() {document.getElementById('text_use_keyboard').innerHTML="To return the the centre of environment, <br>Press 'return' on your keyboard"})
	$('#text_use_keyboard').delay(1000).fadeIn(1000, function() {})
	Cufon.refresh()
	enter_will_clear=true
	}
}

function remove_center_text(){
	if(enter_will_clear && !enter_has_cleared){
		enter_has_cleared=true;
		$('#text_use_keyboard').fadeOut(1000, function() {})
	}
}

			onKeyUp = function ( event ) {
			isUserInteracting =false
	
			};			
///// Ro over behaviour

function ro_expand(obj){

	if(!obj.ro_expanding){
			if(obj.RO_text){
	obj.RO_text.position.y = obj.RO_text_start_y
	}
	obj.ro_expanding=true
	return_to=obj.RO_text.position.y
	var dummy = { v: 1,c:obj.RO_text.position.y,d:obj.start_y};
        var tween = new TWEEN.Tween( dummy ).to( { v: 1.1,c:return_to+80,d:obj.start_y+50}, 500 )
	.onUpdate( function() {obj.scale.x=obj.scale.y = this.v;obj.RO_text.position.y= this.c,obj.position.y= this.d})		
	.start();
	}
}

function ro_expand_no_text(obj){
	if(!obj.ro_expanding){
	obj.ro_expanding=true
	var dummy = { v: 1,d:obj.start_y};
        var tween = new TWEEN.Tween( dummy ).to( { v: 1.1,d:obj.start_y+50}, 500 )
	.onUpdate( function() {obj.scale.x=obj.scale.y = this.v;obj.position.y= this.d})		
	.start();
	}
}


function ro_contract(obj){
	if(obj.ro_expanding){
	var dummy = { v: obj.scale.x,d: obj.position.y};
         var_tween = new TWEEN.Tween( dummy ).to( { v: 1,d: obj.start_y }, 500 )
	.onUpdate( function() {obj.scale.x=obj.scale.y = this.v,obj.position.y= this.d})		 
	.start();
	}
}