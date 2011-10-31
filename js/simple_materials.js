// JavaScript Document

function MaterialLibrary (){
	
var that = this;
var highrise_01,highrise_02,highrise_03,highrise_04,tree_01,path_01,mural_01,street_grunge_00, test_bg,dot_matrix,purple_plain,TC_2_dancer	
/// Start

var PANO_base_material

var fog_color = 0x000000, fog_density=.00004;

this.load_materials  = function(){
	

if(!get_query('weather')){
var _weather_code=30;
switch (parseInt(_weather_code)){
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
weather_condition ="rain"
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
weather_condition ="snow"
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
weather_condition ="clear_02"
break;

//clear
case 30:
case 44:

that.fog_color=0xfbfae9;
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_partly_cloudy_.jpg' )
weather_condition ="clear_02"
break;


case 32:
case 34:
case 36:

that.fog_color=0xfbfae9;
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_clear_.jpg' )
weather_condition ="clear_01"
break;


//night
case 29:
case 31:
case 33:
that.fog_color=0x000000;
that.fog_density=.00005
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_night_.jpg' )
weather_condition ="clear_03"
break;

}
}else{
	switch (get_query('weather')){
case "rain":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg' )	
weather_condition ="rain"	
		break;
		
		case "snow":
that.fog_color= 0xffffff
that.fog_density=.00005
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_overcast_.jpg' )		
weather_condition ="snow"
		break;

		case  "cloudy":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_cloudy_.jpg' )	
weather_condition ="clear_02"	
		break
		
		case  "partly":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_partly_cloudy_.jpg' )	
weather_condition ="clear_02"	
		break
		
		case "clear":
that.fog_color= 0x000000
that.fog_density=.00004
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_clear_.jpg' )	
weather_condition ="clear_01"	
		break
		
		case "night":
that.fog_color= 0x000000
that.fog_density=.00001
m_top = THREE.ImageUtils.loadTexture( 'textures/global/environment_night_.jpg' )
weather_condition ="clear_03"		
		break;
	}
}


					
				m_top.wrapS = THREE.RepeatWrapping;
				m_top.wrapT = THREE.RepeatWrapping;
				m_top.repeat.x = 2;
				m_top.repeat.y = 1;
				that.PANO_base_material = new THREE.MeshBasicMaterial( { map: m_top } )
	


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