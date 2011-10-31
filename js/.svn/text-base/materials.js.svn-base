// JavaScript Document

function MaterialLibrary (){
	
var that = this;
	
var TC_base_material,TC_base_material_2,TC_floor_material,grey,pano_materials,street_grunge_01,street_grunge_02,street_grunge_03,street_grunge_04,TC_stairs_material,TC_items_material
var highrise_01,highrise_02,highrise_03,highrise_04,tree_01,path_01,mural_01,street_grunge_00, test_bg,dot_matrix,purple_plain,TC_2_dancer	
/// Start

var material_start_base
//Tennis court 
var material_tc_base,material_tc_base,material_tc_floor,material_tc_path,material_tc_people_01,material_tc_people_02, material_tc_stairs,material_tc_wall

//Tennis court 2
//var tc2_basketball_nets, tc2_bench, tc2_center_people_day, tc2_center_people_night, tc2_daycare, tc2_FG_boy_day, tc2_FG_boy_night, tc2_floor, tc2_ground_day, tc2_ground_night, tc2_path, tc2_playset, tc2_playset_people_day, tc2_playset_people_night, tc2_xmas_lights, tc2_base, tc2_stairs, tc2_mural_wall
var material_tc2_base,material_tc2_floor_01,material_tc2_floor_02,material_tc2_floor_03,material_tc2_floor_04,material_tc2_floor_05

var material_mk_view_01,material_mk_view_02,material_mk_view_03,material_mk_view_04,material_mk_view_05,material_mk_view_06,material_mk_view_07,material_mk_view_08,material_mk_view_09,material_mk_view_10,material_mk_view_11,material_mk_view_12,material_mk_view_12

var PANO_base_material
//market

var material_mk_base

var material_ra_base

var material_ga_1_base,material_ga_2_base,material_outro_base

var material_mk_floor_02, material_mk_floor_03,material_mk_mg_block_01,material_mk_mg_block_02,material_mk_mg_block_00,material_mk_fg_cc_lines,material_mk_fg_cc_block,material_mk_bg_awning,material_mk_bg_sky,material_mk_bg_coloured_buildings

var wikipedia_material,flickr_material,google_maps_material,google_news_material, grey, resume_play

var fog_color = 0x000000, fog_density=.00004;

var weather_condition ="clear_01";

this.load_materials  = function(){
	that.weather_condition ="clear_01"
	that.material_start_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( "textures/global/intro_texture.jpg") } )
	that.material_end_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( "textures/global/outro_texture.jpg") } )
	
	that.material_tc_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_base.jpg') } )
	that.material_tc_floor = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_floor.png')} )			
	that.material_tc_path = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_path.png' ),transparent : true  } )			
	that.material_tc_people_01 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_people_01.png' ),transparent : true  } )			
	that.material_tc_people_02 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_people_02.png'  ),transparent: true  } )
	that.material_tc_stairs = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_stairs.png' ),transparent : true } )
 	that.material_tc_wall = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/tc_wall.png' )  } )
	
	
	//Tennis court 2
	

	that.material_tc2_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court_2/TC2.jpg	' )  } )	
	
	that.material_tc2_floor_01 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court_2/tc2_floor_01.png' ),transparent : true  } )
	that.material_tc2_floor_02 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court_2/tc2_floor_02.png' ),transparent : true  } )
	that.material_tc2_floor_03 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court_2/tc2_floor_03.png' ),transparent : true  } )
	that.material_tc2_floor_04 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court_2/tc2_floor_04.png' ),transparent : true  } )
	that.material_tc2_floor_05 = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court_2/tc2_floor_05.png' ),transparent : true  } )
	

  that.material_mk_view_01= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_01.jpg' ),transparent:false } )
	that.material_mk_view_02= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_02.jpg' ),transparent:false } )
	that.material_mk_view_03= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_03.jpg' ),transparent:false } )
	that.material_mk_view_04= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_04.jpg' ),transparent:false } )
	that.material_mk_view_05= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_05.jpg' ),transparent:false } )
	that.material_mk_view_06= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_06.jpg' ),transparent:false } )
	that.material_mk_view_07= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_07.jpg' ),transparent:false } )
	that.material_mk_view_08= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_08.jpg' ),transparent:false } )
	that.material_mk_view_09= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_09.jpg' ),transparent:false } )
	that.material_mk_view_10= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_10.jpg' ),transparent:false } )
	that.material_mk_view_11= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_11.jpg' ),transparent:false } )
	that.material_mk_view_12= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_12.jpg' ),transparent:false } )
  that.material_mk_view_13= new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_13.jpg' ),transparent:false } )
 
	that.material_ra_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/ravine/ravine_bg.jpg' ) } )	
	that.material_ga_1_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/garden/ga_1_base.jpg' )  } )	
	that.material_ga_2_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/garden/ga_2_base.jpg' )  } )	
	that.material_mk_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/market/mk_base.jpg' )  } )	
	that.material_outro_base = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/outro.jpg' )  } )

	that.TC_floor_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/floor.png' ), transparent : true } )	
	that.TC_stairs_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/stairs.png' ), transparent : true } )
	that.TC_items_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/tennis_court/items_01.png' ), transparent : true } )
	that.GA_PAN_base_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/garden/base_pan.jpg' ) } )

var m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg' )

if(!get_query('weather')){

switch (parseInt(weather_code)){
	//overcast rain
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:	
case 10:
case 12:
case 37:
case 38:
case 39:
case 40:
case 47:
case 11:
case 12:
case 35:
case 45:
that.fog_color= 0x000000
that.fog_density= .00002
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg' )
that.weather_condition ="rain"
break;
//overcast snow
case 13:
case 14:
case 15:
case 16:
case 17:
case 18:
case 41:
case 42:
case 43:
that.fog_color = 0xffffff
that.fog_density= .00006
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg') 
that.weather_condition ="snow"
break;



//cloudy
case 19:
case 20:
case 21:
case 22:
case 23:
case 24:
case 26:
case 27:
case 28:
case 46:
that.fog_color=0xffffff
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_cloudy_.jpg' )
that.weather_condition ="clear_02"
break;

//clear
case 30:
case 44:

that.fog_color=0xfbfae9;
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_partly_cloudy_.jpg' )
that.weather_condition ="clear_02"
break;


case 32:
case 34:
case 36:

that.fog_color=0xfbfae9;
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_clear_.jpg' )
that.weather_condition ="clear_01"
break;


//night
case 29:
case 31:
case 33:
that.fog_color=0x000000;
that.fog_density=.00005
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_night_.jpg' )
that.weather_condition ="night"
break;

}
}else{
	switch (get_query('weather')){
case "rain":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg' )	
that.weather_condition ="rain"	
		break;
		
		case "snow":
that.fog_color= 0xffffff
that.fog_density=.00005
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg' )		
that.weather_condition ="snow"
		break;

		case  "cloudy":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_cloudy_.jpg' )	
that.weather_condition ="clear_02"	
		break
		
		case  "partly":
that.fog_color= 0xffffff
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_partly_cloudy_.jpg' )	
that.weather_condition ="clear_02"	
		break
		
		case "clear":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_clear_.jpg' )	
that.weather_condition ="clear_01"	
		break
		
		case "night":
that.fog_color= 0x000000
that.fog_density=.00001
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_night_.jpg' )
that.weather_condition ="night"		
		break;
	}
}


	
					
				m_top.wrapS = THREE.RepeatWrapping;
				m_top.wrapT = THREE.RepeatWrapping;
				m_top.repeat.x = 2;
				m_top.repeat.y = 1;
				that.PANO_base_material = new THREE.MeshBasicMaterial( { map: m_top } )
				//alert(PANO_base_material)
				that.wikipedia_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/popcorn_icons/book_icon.jpg' ) } )
				that.flickr_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/popcorn_icons/camera_icon.jpg' ) } )
				that.google_map_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/popcorn_icons/search_icon.jpg' ) } )
				that.google_news_material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/popcorn_icons/search_icon.jpg' ) } )

				

				that.grey = new THREE.MeshBasicMaterial({ color: 0x666666 } )

	


				 that.highrise_01 = [
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_05.png' ),transparent : true,opacity:.6} ), // right
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_05.png' ),transparent : true,opacity:.6} ), // left
					new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // top
			    new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // bottom
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_05.png' ),transparent : true,opacity:.6} ), // back			
				  	new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_05.png' ),transparent : true,opacity:.6} )  // front							
					]
				 that.highrise_02 = [
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_06a.png' ),transparent : true,opacity:.6} ), // right
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_06a.png' ),transparent : true,opacity:.6} ), // left
					new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // top
			    new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // bottom
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_06a.png' ),transparent : true,opacity:.6} ), // back			
				  new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_06a.png' ),transparent : true,opacity:.6} )  // front							
					]	
				 
				 that.highrise_03 = [
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_07a.png' ),transparent : true,opacity:.6} ), // right
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_07a.png' ),transparent : true,opacity:.6} ), // left
					new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // top
			    new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // bottom
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_07a.png' ),transparent : true,opacity:.6} ), // back			
				  new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_07a.png' ),transparent : true,opacity:.6} )  // front							
					]	
				 
				 that.highrise_04 = [
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_08a.png' ),transparent : true,opacity:.6} ), // right
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_08a.png' ),transparent : true,opacity:.6} ), // left
					new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // top
			    new THREE.MeshBasicMaterial({ color: 0x666666,opacity:0 } ), // bottom
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_08a.png' ),transparent : true,opacity:.6} ), // back			
				  new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/global/highrise_08a.png' ),transparent : true,opacity:.6} )  // front							
					]
				 

	}
				
}