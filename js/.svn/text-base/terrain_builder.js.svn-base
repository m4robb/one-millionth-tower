// JavaScript Document
// Dragonfly IT WebGL Review: ISSUE #10 -- Removed setting of .needsUpdate on textures since loadImage utility handles this itself.

var worldWidth = 127, worldDepth = 127,
	worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;
			
var terrain_mesh,TC_2_plane, TC_2_video_plane, GA_PAN_mesh,  GA_1_mesh,  GA_2_mesh,TC_base_mesh_2,done_trees_01


var done_grass_01,done_grass_02,done_grass_03

var  INTRO_mesh, BELOW_mesh;

var  MK_mesh_floor_01,MK_plane_overlay,MK_mesh, all_floor_01

var pano_mesh_free_roam,pano_mesh, all_terrain_mesh

var studio_mesh,dancer_mesh, sound_target, OT_mesh,OT_mesh_black

var TC_base_mesh_RO,collision_detector
var TC_base_mesh_bg,TC_base_mesh_video,living_proof_mesh,imagine_mesh,woh_mesh,living_proof_mesh_share,imagine_mesh_share,woh_mesh_share,tech_mesh

function load_mesh(_shape,_material,x,y,z,rx,ry,rz,_scale,double_sided){

	var _mesh = new THREE.Mesh( _shape,  _material,  new THREE.MeshFaceMaterial() );
	scene.addObject( _mesh );
	_mesh.position.x = x
	_mesh.position.y = y
	_mesh.position.z = z
	_mesh.doubleSided = true
	_mesh.overdraw=true
	_mesh.rotation.x = rx * Math.PI / 180;
	_mesh.rotation.y = ry * Math.PI / 180;
	_mesh.rotation.z = rz * Math.PI / 180;
	_mesh.scale.x = _mesh.scale.y =  _mesh.scale.z = _scale
	
  objects.push(_mesh );
	return _mesh;
}


var geese_are_loaded

function set_in_action(){
$('#3d_screen').fadeIn(500, function() { set_in_action_2()})

}

function set_in_action_2(){
	

		document.getElementById('preloading_pane').style.display="none"
   
		build_semantic_icons()
		build_interactive_maquettes()	
		//document.getElementById('3d_screen').style.display="block"

		if(!geese_are_loaded){
                   birds_01_init(20, "TC",camera,camera,"attract")
		  geese_are_loaded=true
		}
		build_start_dashboard()		
		animate()	
		//initial drift
		var points =[]
		points[ points.length ] = { x:camera.position.x, z:camera.position.z };
		camera_move(points,50000,20,5,"NULL")
}

var FLOOR_mesh
function create_floor_meshes( geometry ) {


				var floor_top = THREE.ImageUtils.loadTexture( "textures/global/street_grunge_01.jpg")
				var rootz = THREE.ImageUtils.loadTexture( "textures/global/roots-texture.jpg")
//				floor_top.needsUpdate = true;
//				rootz.needsUpdate = true;
				geometry.materials[ 0 ][ 0 ] =new THREE.MeshLambertMaterial( { map: floor_top}) 
				geometry.materials[ 1 ][ 0 ] =new THREE.MeshLambertMaterial( { map: rootz})
				var m = [ new THREE.MeshFaceMaterial() ];
				
				FLOOR_mesh = THREE.SceneUtils.addMesh( scene, geometry,250,0, -800, 0, 0, 0, 0, m );
				FLOOR_mesh.matrixAutoUpdate = false;
				FLOOR_mesh.updateMatrix();			
				objects.push(FLOOR_mesh)	

				

}

var PATH_mesh
function create_path_meshes( geometry ) {


				var floor_top = THREE.ImageUtils.loadTexture( "textures/global/path_top.jpg")
				var dotz = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix.jpg")
//				floor_top.needsUpdate = true;
//				dotz.needsUpdate = true;

				geometry.materials[0 ][ 0 ] =new THREE.MeshLambertMaterial( { map: floor_top,opacity:.5}) 
				
				geometry.materials[ 0 ][ 0 ].wrap_s = THREE.RepeatWrapping;
                                geometry.materials[ 0 ][ 0 ].wrap_t = THREE.RepeatWrapping;
				//geometry.materials[ 1 ][ 0 ] =new THREE.MeshLambertMaterial( { map: rootz})

				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh = THREE.SceneUtils.addMesh( scene, geometry,100,0, -400, 0, 0, 0, 0, m );
				PATH_mesh = blender_mesh
				PATH_mesh.matrixAutoUpdate = false;
				PATH_mesh.updateMatrix();
				objects.push(blender_mesh)	

				

}

function create_pad_top_meshes( geometry ) {



				var dotz = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix.jpg")

//				dotz.needsUpdate = true;
				geometry.materials[0 ][ 0 ] =new THREE.MeshLambertMaterial( { map: dotz,opacity:.5}) 
				//geometry.materials[ 1 ][ 0 ] =new THREE.MeshLambertMaterial( { map: floor_top,opacity:.5}) 
				
				geometry.materials[ 0 ][ 0 ].wrap_s = THREE.RepeatWrapping;
                                geometry.materials[ 0 ][ 0 ].wrap_t = THREE.RepeatWrapping;
				//geometry.materials[ 1 ][ 0 ] =new THREE.MeshLambertMaterial( { map: rootz})

				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh = THREE.SceneUtils.addMesh( scene, geometry,100,0, -350, 0, 0, 0, 0, m );
				blender_mesh.matrixAutoUpdate = false;
				blender_mesh.updateMatrix();
				//blender_mesh.doubleSided=true
				objects.push(blender_mesh)	

				

}
var GRASS_mesh
function create_grass_01_meshes( geometry1 ) {


				var m_top = THREE.ImageUtils.loadTexture( "textures/global/grass_01.jpg")
//				m_top.needsUpdate = true;
				geometry1.materials[0 ][ 0 ] =new THREE.MeshLambertMaterial( { map: m_top,opacity:.5}) 

				
				geometry1.materials[ 0 ][ 0 ].wrap_s = THREE.RepeatWrapping;
                                geometry1.materials[ 0 ][ 0 ].wrap_t = THREE.RepeatWrapping;
				//geometry.materials[ 1 ][ 0 ] =new THREE.MeshLambertMaterial( { map: rootz})

				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-230, 0, 0, 0, 0, m );
				GRASS_mesh = blender_mesh2
				GRASS_mesh.matrixAutoUpdate = false;
				GRASS_mesh.updateMatrix();
				blender_mesh2.visible=false
				objects.push(blender_mesh2)	

				

}
var STAIRS_mesh
function create_stairs_01_meshes( geometry1 ) {

				//var m_top = THREE.ImageUtils.loadTexture( "textures/global/grass_01.jpg")
				//m_top.needsUpdate = true;
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0x513151} )
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0x45889b } )



				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-230, 0, 0, 0, 0, m );
				STAIRS_mesh = blender_mesh2
				STAIRS_mesh.matrixAutoUpdate = false;
				STAIRS_mesh.updateMatrix();
				blender_mesh2.visible=false
				objects.push(blender_mesh2)	

				

}

function create_benches_01_meshes( geometry1 ) {


				var mat_array = [new THREE.MeshBasicMaterial({ color: 0x263c45,opacity:.65 } ),new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true} )]
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0x263c45,opacity:.65 } )
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})
				geometry1.materials[1 ][ 1 ] =	new THREE.MeshBasicMaterial({ color: 0x263c45,opacity:.65})
				//geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})



				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-230, 0, 0, 0, 0, m );
				blender_mesh2.matrixAutoUpdate = false;
				blender_mesh2.updateMatrix();
				blender_mesh2.visible=false
				objects.push(blender_mesh2)	

				

}

var SHED_mesh
function create_shed_01_meshes( geometry1 ) {

				var m_side = THREE.ImageUtils.loadTexture( "textures/garden/shed_side.jpg")
//				m_side.needsUpdate = true;
				var m_front = THREE.ImageUtils.loadTexture( "textures/garden/shed_front.jpg")
//				m_front.needsUpdate = true;
				
							m_side.doubleSided = true;
				m_front.doubleSided = true;
			
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0x666666,opacity:.85,doubleSided:true } )
				geometry1.materials[0 ][ 1 ] =	new THREE.MeshBasicMaterial({ color: 0x000000,opacity:1,wireframe:true } )
				geometry1.materials[2 ][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_side,opacity:.85})
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_front,opacity:.85})
				//geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})



				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-330, 0, 0, 0, 0, m );
				SHED_mesh = blender_mesh2
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

				

}
var PLANTER_mesh
function create_planter_complex_01_meshes( geometry1 ) {

				//var m_top = THREE.ImageUtils.loadTexture( "textures/global/grass_01.jpg")
				//m_top.needsUpdate = true;
				var floor_top = THREE.ImageUtils.loadTexture( "textures/global/street_grunge_01.jpg")
				var rootz = THREE.ImageUtils.loadTexture( "textures/global/roots-texture.jpg")
//				floor_top.needsUpdate = true;
//				rootz.needsUpdate = true;
				rootz.repeat.set( 1, 3 );
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshLambertMaterial( { map: floor_top,opacity:1}) 
				geometry1.materials[3 ][ 0 ] =	new THREE.MeshLambertMaterial( { map: floor_top,opacity:1})
				geometry1.materials[1 ][ 1 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})
				
				
				geometry1.materials[2 ][ 0 ] =	new THREE.MeshLambertMaterial( { map: rootz,opacity:1}) 
				geometry1.materials[2 ][ 1 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})
				geometry1.materials[ 2 ][ 0 ].wrap_s = THREE.RepeatWrapping;
                geometry1.materials[ 2 ][ 0 ].wrap_t = THREE.RepeatWrapping;
				
				//geometry1.materials[1 ][ 1 ] =	new THREE.MeshBasicMaterial({ color: 0x263c45,opacity:.65})
				//geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFFFFF,wireframe:true})



				var m = [ new THREE.MeshFaceMaterial() ];
				
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-230, 0, 0, 0, 0, m );
				PLANTER_mesh = blender_mesh2
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

				

}
var PLATFORM_01_mesh
function create_platform_01_mesh( geometry1 ) {

				var m_top = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix_tc.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				
				m_top.wrapS = THREE.RepeatWrapping;
				m_top.wrapT = THREE.RepeatWrapping;
				m_top.repeat.x = 1;
				m_top.repeat.y = 1;
				
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_top,opacity:.7})

				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.3})
				var m = [ new THREE.MeshFaceMaterial() ];
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,300,-600,-450, 1700, 0, 70*Math.PI /180, 0, m );
				PLATFORM_01_mesh = blender_mesh2
				blender_mesh2.visible=true
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var PLATFORM_02_mesh
function create_platform_02_mesh( geometry1 ) {

				var m_top = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix_rv.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				m_top.wrapS = THREE.RepeatWrapping;
				m_top.wrapT = THREE.RepeatWrapping;
				m_top.repeat.x = 1;
				m_top.repeat.y = 1;				
				
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_top,opacity:.7})

				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.3})
				var m = [ new THREE.MeshFaceMaterial() ];
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,300,1500,-850, 500, 0,120*Math.PI /180, 0, m );
				PLATFORM_02_mesh = blender_mesh2
				blender_mesh2.visible=true
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var PLATFORM_03_mesh
function create_platform_03_mesh( geometry1 ) {

				var m_top = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix_mk.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				
				m_top.wrapS = THREE.RepeatWrapping;
				m_top.wrapT = THREE.RepeatWrapping;
				m_top.repeat.x = 1;
				m_top.repeat.y = 1;				
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_top,opacity:.7})

				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.3})
				var m = [ new THREE.MeshFaceMaterial() ];
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,300,-2100,-520, 400, 0, 30*Math.PI /180, 0, m );
				PLATFORM_03_mesh = blender_mesh2
				blender_mesh2.visible=true
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var PLATFORM_04_mesh
function create_platform_04_mesh( geometry1 ) {

				var m_top = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix_ot.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				
				m_top.wrapS = THREE.RepeatWrapping;
				m_top.wrapT = THREE.RepeatWrapping;
				m_top.repeat.x = 1;
				m_top.repeat.y = 1;				
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_top,opacity:.7})

				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff})
				var m = [ new THREE.MeshFaceMaterial() ];
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,300,-1000,-860, -2900, 0, 30*Math.PI /180, 0, m );
				PLATFORM_04_mesh = blender_mesh2
				blender_mesh2.visible=true
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}


var FLOOR_MK_mesh
function create_floor_mk_mesh( geometry1 ) {


				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xf1e286,opacity:.7})
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.7})
				var m = [ new THREE.MeshFaceMaterial() ];
				
				//-1000 ,TC_height,-2900,0,225,0,1);
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0, -400, 0, 0, 0, 0, m );
				FLOOR_MK_mesh = blender_mesh2
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var FLOOR_TC_mesh
function create_floor_tc_mesh( geometry1 ) {


				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xa3bac1,opacity:.5})
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.5})
				var m = [ new THREE.MeshFaceMaterial() ];
				
				//-1000 ,TC_height,-2900,0,225,0,1);
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0, -400, 0, 0, 0, 0, m );
				FLOOR_TC_mesh = blender_mesh2
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var FLOOR_RV_mesh

function create_floor_rv_mesh( geometry1 ) {


				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0x9ab151,opacity:.5})
				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.5})
				var m = [ new THREE.MeshFaceMaterial() ];
				
				//-1000 ,TC_height,-2900,0,225,0,1);
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0, -400, 0, 0, 0, 0, m );
				FLOOR_RV_mesh = blender_mesh2
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var 	FLOOR_OT_mesh					

function create_floor_ot_mesh( geometry1 ) {

				geometry1.materials[1 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xd4836c,opacity:.5})
				geometry1.materials[0 ][ 0 ] =	new THREE.MeshBasicMaterial({ color: 0xFFffff,opacity:.5})
				var m = [ new THREE.MeshFaceMaterial() ];
				
				//-1000 ,TC_height,-2900,0,225,0,1);
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0, -400, 0, 0, 0, 0, m );
				FLOOR_OT_mesh = blender_mesh2
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				objects.push(blender_mesh2)	

}

var tree_array = []
function create_trees_01_sprites( ) {
	
	for ( var i = 0, il = tree_array.length; i < il; i++ ) {
		scene.removeObject(tree_array[i]);
	}
		tree_array = []	 
	var tree_01 = THREE.ImageUtils.loadTexture( "textures/global/plants/p_FGtrees.png")
    
	//tree_01 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( "textures/global/plants/p_FGtrees.png"),depthTest:true})
	var pos_array = [[2600,2000],[3200,2000],[3600,2300],[3000,3000],[3600,4800],[5000,600],[2800,1600],
					[-2000,-2000],[-2200,-2000],[-2000,-2300],[-3000,800],[-3600,480],[5000,-600],[2800,-600],[2520,-400],[-2600,-1100],[3300,-1000],
					[-2000,2000],[-2200,2000],[-2000,2300],[3000,-800],[3600,-480],[3500,-600],[-2800,-1200],[-2520,400],[-2600,600],[-2000,1000]]
	
	 for ( var i = 0; i < pos_array.length; i ++ ) {
		 var sprite = new THREE.Sprite( { map: tree_01,useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() *  2
		 var delay_multix = Math.random() *  5000
		 sprite.position.set(pos_array[i][0],-1200,pos_array[i][1])
		 sprite.scale.set( multix, multix, 1.0 );
		 sprite.opacity=1
		 
		 delay_multix =  Math.random() *  3000
		 new TWEEN.Tween( sprite.position).to( {y: -10*multix },delay_multix/2 ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();
		 scene.addObject(sprite)
		 objects.push(sprite)
		 tree_array.push(sprite)	 
 		// new TWEEN.Tween(sprite ).to( {opacity: 1 },5000 ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();	 

	 }
}

function create_trees_01_sprites_linear( ) {
	for ( var i = 0, il = tree_array.length; i < il; i++ ) {
		scene.removeObject(tree_array[i]);
	}
		tree_array = []	 
	var tree_01 = THREE.ImageUtils.loadTexture( "textures/global/plants/p_FGtrees.png")
    
	//tree_01 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( "textures/global/plants/p_FGtrees.png"),depthTest:true})
	var pos_array = [[1000,1000],[0,800],[1000,500],[800,300],[-300,1800],[-500,600],[700,-300]]
	
	 for ( var i = 0; i < pos_array.length; i ++ ) {
		 var sprite = new THREE.Sprite( { map: tree_01,useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() *  2
		 
		 var delay_multix = Math.random() *  5000
		  
		 sprite.position.set(pos_array[i][0],(-10*multix)-200,pos_array[i][1])
		 sprite.scale.set( multix, multix, 1.0 );
		 sprite.opacity=1
		 scene.addObject(sprite)
		 objects.push(sprite)
		 tree_array.push(sprite)	 
 		 new TWEEN.Tween(sprite ).to( {opacity: 1 },5000 ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();	 

	 }
}
var sky_sprite_array=[]
function create_blue_skies_01 (){
	
			 for ( var i = 0, il = sky_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(sky_sprite_array[i]);
			 }
		
		sky_sprite_array=[]
		
		var blue_skies = THREE.ImageUtils.loadTexture( "textures/global/blue_sky_01.jpg")
		var pos_array = [[0,4000],[500,4800],[-2000,4300],[2000,3800],[3800,500],[3800,-200],[3800,-3000],
		[-3800,0],[-4800,-500],[-4200,-1000],[-4500,-2000], [-500,-3700]]
			 for ( var i = 0; i < pos_array.length; i ++ ) {
		          var sprite = new THREE.Sprite( { map: blue_skies,useScreenCoordinates: false } );
			  var multix = Math.random() *  3 +2
			  sprite.position.set(pos_array[i][0],-1500,pos_array[i][1])
			  sprite.scale.set( multix, -multix/3, 1.0 );
			  			 			
			  objects.push(sprite)
			  sprite.blending= THREE.MultiplyBlending
			 
			  delay_multix =  Math.random() *  3000
			  new TWEEN.Tween( sprite.position).to( {y: -10*multix },delay_multix ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();
	  		  scene.addObject(sprite)

			  sky_sprite_array.push(sprite)
	 }			  
}


function create_grey_skies_01 (){
	
			 for ( var i = 0, il = sky_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(sky_sprite_array[i]);
			 }
		
		sky_sprite_array=[] 
			 
		var blue_skies = THREE.ImageUtils.loadTexture( "textures/global/grey_sky_01.jpg")
		var pos_array = [[0,4000],[500,4800],[-2000,4300],[2000,3800],[3800,500],[3800,-200],[3800,-3000],
		[-3800,0],[-4800,-500],[-4200,-1000],[-4500,-2000], [-500,-3700]]
		
		
			 for ( var i = 0; i < pos_array.length; i ++ ) {
		      var sprite = new THREE.Sprite( { map: blue_skies,useScreenCoordinates: false } );
			  var multix = Math.random() *  3 +2
			  sprite.position.set(pos_array[i][0],-10*multix,pos_array[i][1])
			  sprite.scale.set( multix, -multix/3, 1.0 );
			  sprite.opacity=.5
			  sprite.blending= THREE.MultiplyBlending
			  scene.addObject(sprite)
			   //objects.push(sprite)
			   sky_sprite_array.push(sprite)
			    //scene.removeObject(sprite)
	 }			  
}

function create_google_skies (){
	
			 for ( var i = 0, il = sky_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(sky_sprite_array[i]);
			 }
		
		sky_sprite_array=[] 
			 
		var blue_skies = THREE.ImageUtils.loadTexture( "textures/global/grey_sky_01.jpg")
		var pos_array = [[0,4000],[500,4800],[-2000,4300],[2000,3800],[3800,500],[3800,-200],[3800,-3000],
		[-3800,0],[-4800,-500],[-4200,-1000],[-4500,-2000], [-500,-3700]]
		
		
			 for ( var i = 0; i < pos_array.length; i ++ ) {
		      var sprite = new THREE.Sprite( { map: blue_skies,useScreenCoordinates: false } );
			  var multix = Math.random() *  3 +2
			  sprite.position.set(pos_array[i][0],-10*multix,pos_array[i][1])
			  sprite.scale.set( multix*2, -multix*10, 1.0 );
			  sprite.opacity=.5
			  sprite.blending= THREE.MultiplyBlending
			  scene.addObject(sprite)
			   //objects.push(sprite)
			   sky_sprite_array.push(sprite)
			    //scene.removeObject(sprite)
	 }			  
}



function create_outer_buildings_01 (){
	//alert("LLL")
		var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/global/outer_building_01.jpg")
		var pos_array = [[-4400,-3800],[-4400,2000]]
			 for ( var i = 0; i < pos_array.length; i ++ ) {
		      var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
			  var multix = 2.5
			  sprite.position.set(pos_array[i][0],-1000,pos_array[i][1])
			  sprite.scale.set( multix, -multix*.75, 1.0 );
			  
			  sprite.blending= THREE.MultiplyBlending
			  
			  delay_multix =  Math.random() *  3000
			   new TWEEN.Tween( sprite.position).to( {y: -10*multix },delay_multix ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();
	  		  scene.addObject(sprite)
			  scene.addObject(sprite)
			  objects.push(sprite)
			  
			  delay_multix =  Math.random() *  3000
			 // new TWEEN.Tween(sprite ).to( {opacity: 1 },5000 ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();	 

	 }			  
}

function create_maquette_context (){
	//alert("LLL")
		var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/global/tree_line_01.jpg")
		var sprite_texture_02 = THREE.ImageUtils.loadTexture( "textures/global/tree_line_02.jpg")

		      var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
			  var multix = 2.5
			  sprite.position.set(-1400,-10*multix,4200)
			  sprite.scale.set( multix, -multix*.3, 1.0 );
			  sprite.blending= THREE.MultiplyBlending
			  scene.addObject(sprite)
			  objects.push(sprite)
			  
		      var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
			  var multix = 2.5
			  sprite.position.set(1400,-10*multix,4200)
			  sprite.scale.set( -multix, -multix*.3, 1.0 );
			  sprite.blending= THREE.MultiplyBlending
			  scene.addObject(sprite)	
			  objects.push(sprite)

		    var sprite = new THREE.Sprite( { map: sprite_texture_02,useScreenCoordinates: false } );
			  var multix = 2.5
			  sprite.position.set(4800,-10*multix,1800)
			  sprite.scale.set( -multix, -multix*.3, 1.0 );
			  sprite.blending= THREE.MultiplyBlending
			  scene.addObject(sprite)	
			  objects.push(sprite)
			  
}

function create_tc_context(){

	
}



function build_vines(){
			 for ( var i = 0, il = gv_1_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(gv_1_sprite_array[i]);
			 }
			 

 			        gv_1_sprite_array = [];
				var sprite_texture_01 = THREE.ImageUtils.loadTexture( "textures/garden/ga_vines_01.png")
				var sprite_texture_02 = THREE.ImageUtils.loadTexture( "textures/garden/bush_01.png")
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				
				var multix = 2
				sprite.position.set(1375,-45,-1300)
				sprite.opacity=0
				sprite.scale.set( multix, -multix, 1.0 );
				new TWEEN.Tween(sprite ).to( {opacity: .7 },5000 ).delay(1000*multix).easing( TWEEN.Easing.Linear.EaseNone).start();	
				scene.addObject(sprite)	
				gv_1_sprite_array.push(sprite)
	
	

				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 2.2
				sprite.position.set(1275,-45,300)
				sprite.opacity=0
				sprite.scale.set( -multix, -multix, 1.0 );
				new TWEEN.Tween(sprite ).to( {opacity: .7 },5000 ).delay(1000*multix).easing( TWEEN.Easing.Linear.EaseNone).start();	
				scene.addObject(sprite)	
				gv_1_sprite_array.push(sprite)



				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 1.8
				sprite.position.set(1300,-45,200)
				sprite.opacity=.7
				sprite.scale.set( multix, -multix*2.3, 1.0 );
				scene.addObject(sprite)	
				gv_1_sprite_array.push(sprite)
				
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 2
				sprite.position.set(2075,-45,-1300)
				sprite.opacity=0
				sprite.scale.set( -multix, -multix, 1.0 );
				new TWEEN.Tween(sprite ).to( {opacity: .7 },5000 ).delay(1000*multix).easing( TWEEN.Easing.Linear.EaseNone).start();	
				scene.addObject(sprite)	
				gv_1_sprite_array.push(sprite)
				
				var sprite = new THREE.Sprite( { map: sprite_texture_01,useScreenCoordinates: false } );
				var multix = 2
				sprite.position.set(1000,-45,-1800)
				sprite.opacity=0
				sprite.scale.set( -multix, -multix*3, 1.0 );
				new TWEEN.Tween(sprite ).to( {opacity: 1 },5000 ).delay(1000*multix).easing( TWEEN.Easing.Linear.EaseNone).start();	
				scene.addObject(sprite)	
				gv_1_sprite_array.push(sprite)	
	
	var pos_array = [[1250,-1300],[1275,-1300],[1000,-1300],[990,-1300],[800,-1300],[890,-1300],[300,-800],[390,-800],[390,-500]]
	
	 for ( var i = 0; i < pos_array.length; i ++ ) {
		 var sprite = new THREE.Sprite( { map: sprite_texture_02,useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random()*1+ 1
		 sprite.opacity=0
		 sprite.position.set(pos_array[i][0],-800,pos_array[i][1])
		 sprite.scale.set( multix, multix, 1.0 );
		// new TWEEN.Tween(sprite ).to( {opacity: 1 },5000 ).delay(1000*multix).easing( TWEEN.Easing.Linear.EaseNone).start();	
		 scene.addObject(sprite)
		 gv_1_sprite_array.push(sprite)	
		 sprite.opacity=1
		 delay_multix =  Math.random() *  3000
		 			  
		 new TWEEN.Tween( sprite.position).to( {y: -80*multix },delay_multix ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();
	  	  scene.addObject(sprite)
		 
		 //new TWEEN.Tween(sprite ).to( {opacity: 1 },5000 ).delay(delay_multix).easing( TWEEN.Easing.Linear.EaseNone).start();	 

	 }
				
	}		 
		
        var is_green = 0
	function go_green( geometry1 ) {
		lon_spin = 1
		//special_feature_btns
	if(is_green==0){	
			$('#special_feature_btns').fadeIn(1000, function() {})
			
			var timeout_01 = setTimeout(function(){
			  create_trees_01_sprites()
			},5000);

			var timeout_01 = setTimeout(function(){
			build_vines()
			},8000);
			
			var timeout_01 = setTimeout(function(){
			  create_blue_skies_01()
			},10000);

			var timeout_01 = setTimeout(function(){
			 create_outer_buildings_01 ()
			},12000);			

			var timeout_01 = setTimeout(function(){
			create_maquette_context ()
			},11000);
			
			
			
			paint_wall_mesh()
			//build_roots(30,850,175)
			global_particle_init();			
			//MURAL_mesh.visible=true
			PLANTER_mesh.visible=true
			SHED_mesh.visible=true
			GRASS_mesh.visible=true
			STAIRS_mesh.visible=true
			is_green=1
			do_linear=0
			is_intro = 0
			semantic_icon_array.push(imagine_mesh);		
			semantic_icon_array.push(living_proof_mesh);
			semantic_icon_array.push(woh_mesh);
			semantic_icon_array.push(tech_mesh);
			new TWEEN.Tween( imagine_mesh.materials[0] ).to( {opacity: 1 },5000 ).delay(1000).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();	
			new TWEEN.Tween( living_proof_mesh.materials[0] ).to( {opacity: 1 },5000 ).delay(2000).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
			new TWEEN.Tween( tech_mesh.materials[0] ).to( {opacity: 1 },5000 ).delay(3000).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
			new TWEEN.Tween( woh_mesh.materials[0] ).to( {opacity: 1 },5000 ).delay(5000).easing( TWEEN.Easing.Linear.EaseNone).onComplete( function() {}).start();
			$('#text_use_keyboard').fadeOut(1000, function() {})
			$('#next_step_pane').fadeIn(1000, function() {})
			$('#breadcrumbs').fadeIn(1000, function() {})
		        $('#next_step_pane').delay(6000).fadeOut(1000, function() {})
		        var dummy = { v: document.getElementById("video_controller").volume};
			new TWEEN.Tween( dummy ).to( { v: .1 }, 2000 )
			.onUpdate( function() {
			 document.getElementById("video_controller").volume = this.v})	
			.easing(TWEEN.Easing.Quadratic.EaseOut )
			.onComplete( function() {document.getElementById("video_controller").pause()})
			.start();
	
	
		  go_green_zoom_trigger = true	
	}
	
	//alert("RING")
	}
	
		function go_grey( geometry1 ) {
			is_green=0
			 for ( var i = 0, il = gv_1_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(gv_1_sprite_array[i]);
			 }
			gv_1_sprite_array = []
	
	
			for ( var i = 0, il = tree_array.length; i < il; i++ ) {
				scene.removeObject(tree_array[i]);
			}
			tree_array = []	
			
			 for ( var i = 0, il = sky_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(sky_sprite_array[i]);
			 }
		
			//create_grey_skies_01 ()
			MURAL_mesh.visible=false
			PLANTER_mesh.visible=false
			SHED_mesh.visible=false
			GRASS_mesh.visible=false
			STAIRS_mesh.visible=false
	
	
	//alert("RING")
	}
var walk_about_loaded,walk_about_mesh
function create_walkabout_sprite() {
	
	

	 var m_top = THREE.ImageUtils.loadTexture( "textures/global/walk_about.png")
	// var m_logo = THREE.ImageUtils.loadTexture( "textures/global/logo.png")

		 var sprite = new THREE.Sprite( { map: m_top,useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() *  2
		 sprite.position.set(0,100,2000)
		 sprite.scale.set( -2, 2, 1.0 );
		 sprite.opacity=.5
		 scene.addObject(sprite)
     walk_about_mesh = sprite
		 objects.push(sprite)	
		 walk_about_loaded=true	
		
	/*
	  var sprite = new THREE.Sprite( { map: m_logo,useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() *  2
		 sprite.position.set(-400,100,400)
		 sprite.blending= THREE.AdditiveBlending;
		 sprite.scale.set( -1, 1, .5 );
		 */
		 //scene.addObject(sprite)
		 //objects.push(sprite)


				

}


var MURAL_mesh

function create_mural_meshes( geometry1 ) {

//alert("RING")
				var m_top = THREE.ImageUtils.loadTexture( "textures/global/mural_01.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				geometry1.materials[0 ][ 0 ] =new THREE.MeshLambertMaterial( { map: m_top}) 
				var m = [ new THREE.MeshFaceMaterial() ];			
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-190, 0, 0, 0, 0, m );
				blender_mesh2.visible=false
				blender_mesh2.updateMatrix();
				MURAL_mesh = blender_mesh2
				objects.push(blender_mesh2)	

				

}


var STAGE_mesh

function create_stage_01_meshes( geometry1 ) {

//alert("RING")
				//var m_top = THREE.ImageUtils.loadTexture( "textures/global/mural_01.jpg")
				//m_top.needsUpdate = true;
				//m_top.doubleSided = true;
				//geometry1.materials[0 ][ 0 ] =new THREE.MeshLambertMaterial( { map: m_top}) 
				var m = [ new THREE.MeshFaceMaterial() ];			
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-190, 0, 0, 0, 0, m );
				blender_mesh2.visible=false
				
				blender_mesh2.updateMatrix();

				STAGE_mesh = blender_mesh2
				objects.push(blender_mesh2)	

				

}

var TC_WALL_mesh
function create_tc_wall_mesh( geometry1 ) {


				var m_top = THREE.ImageUtils.loadTexture( "textures/global/tc_wall_grey.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				
				//m_top.wrapS = THREE.RepeatWrapping;
				//m_top.wrapT = THREE.RepeatWrapping;
				//m_top.repeat.x = 3;
				//m_top.repeat.y = 1;				
				geometry1.materials[0][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_top})

				var m = [ new THREE.MeshFaceMaterial() ];			
				var blender_mesh2 = THREE.SceneUtils.addMesh( scene, geometry1,100,0,-190, 0, 0, 0, 0, m );
				//blender_mesh2.visible=false
				
				blender_mesh2.updateMatrix();
        TC_WALL_mesh = blender_mesh2
				objects.push(blender_mesh2)	


}

function paint_wall_mesh(  ) {
				var m_top = THREE.ImageUtils.loadTexture( "textures/global/tc_wall_color.jpg")
//				m_top.needsUpdate = true;
				m_top.doubleSided = true;
				TC_WALL_mesh.geometry.materials[0][ 0 ] =	new THREE.MeshBasicMaterial({ map: m_top})
}

	   
			

var TC_plane_bordered 
function terrain_builder() {

var terrain_geometry = new THREE.Geometry()


				
				var pano_geometry = new THREE.Sphere( 18000, 20, 20 )
				pano_mesh = new THREE.Mesh( pano_geometry,material_library.PANO_base_material);
				pano_mesh.flipSided = true;
				pano_mesh.updateMatrix();
				scene.addObject( pano_mesh );
				objects.push(pano_mesh)	
				

				
		 
				TC_plane_bordered  = new THREE.Plane( 800, 600, 1, 1 );
				TC_plane  = new THREE.Plane( 655, 440, 1, 1 );
				//TC_plane_overlay  = new THREE.Plane( 750, 583, 1, 1 );
				TC_plane_overlay  = new THREE.Plane( 1000, 777, 1, 1 )
				
				TC_2_plane  = new THREE.Plane( 500, 362, 1, 1 );
				TC_2_video_plane  = new THREE.Plane( 500, 302, 1, 1 );
				var GA_PAN_plane  = new THREE.Plane( 1500, 422, 1, 1 );

				var loader = new THREE.JSONLoader();
				loader.load( { model: "meshes/floor_meshes_02.js", callback: create_floor_meshes} );
				var loader2 = new THREE.JSONLoader();
				loader2.load( { model: "meshes/paths4.js", callback: create_path_meshes} );
				var loader3 = new THREE.JSONLoader();
				loader3.load( { model: "meshes/green_01.js", callback: create_grass_01_meshes} );
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/mural_wall_01.js", callback: create_mural_meshes} );					
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/stairs_05.js", callback: create_stairs_01_meshes} );			
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/benches_01.js", callback: create_benches_01_meshes} );			
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/planter_complex.js", callback: create_planter_complex_01_meshes} );			
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/shed.js", callback: create_shed_01_meshes} );			
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/platform_01.js", callback: create_platform_01_mesh} );				
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/platform_02.js", callback: create_platform_02_mesh} );
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/platform_03.js", callback: create_platform_03_mesh} );								
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/platform_02.js", callback: create_platform_04_mesh} );
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/floor_mk.js", callback: create_floor_mk_mesh} );
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/floor_tc.js", callback: create_floor_tc_mesh} );		
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/floor_ot.js", callback: create_floor_ot_mesh} );					
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/floor_rv.js", callback: create_floor_rv_mesh} );	
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/stage_01.js", callback: create_stage_01_meshes} );		
				var loader6 = new THREE.JSONLoader();
				loader6.load( { model: "meshes/tc_wall.js", callback: create_tc_wall_mesh} );	


				create_walkabout_sprite()

 	 			sound_target = load_mesh( new THREE.Sphere( 10, 2, 2 ), material_library.greygrey ,0 ,TC_height,2000,0,180,0,1,1);
				sound_target.visible = 0
				
 	 			collision_detector = load_mesh( new THREE.Sphere( 300, 4, 4 ), material_library.grey ,0 ,TC_height,2000,0,180,0,1,1);
				collision_detector.visible = 0				
				
				
				TC_base_mesh = load_mesh(TC_plane_bordered, new THREE.MeshBasicMaterial({ color: 0xFFFFFF}) ,0 ,TC_height,2000,0,180,0,1,1);
				TC_base_mesh_video = load_mesh(TC_plane, new THREE.MeshBasicMaterial( {map:THREE.ImageUtils.loadTexture( "textures/tennis_court/tc_base_inset.jpg"), color:0xFFFFFF}) ,0 ,TC_height,2000,0,180,0,1,1);
				TC_base_mesh_video.video = new video_no_alpha("videos/hd/fence_push.webm",TC_base_mesh_video);
				TC_base_mesh_video.start_y = TC_height
				TC_base_mesh_video.translateZ(-3)
				THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(TC_base_mesh) );
				//TC_base_mesh_bg = load_mesh(new THREE.Cube( 800, 600, 2,1,1,1), new THREE.MeshLambertMaterial( { color:0xFFFFFF}) ,0 ,TC_height,2010,0,0,0,1,1);
				TC_base_mesh_2 = load_mesh(TC_plane, material_library.material_tc2_base,1000 ,TC_height,2000,0,225,0,1,1);
				THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(TC_base_mesh_2	) );
				objects.push(TC_base_mesh );
				
				 
				 //TC_play_sprite = load_mesh( new THREE.Plane( 100, 100, 1, 1 ), r ,0 ,TC_height,1900,0,180,0,1,1);
				 
				 

		
				
				 GA_PAN_mesh = load_mesh(GA_PAN_plane,material_library.material_ra_base,2000 ,TC_height,-400,0,-90,0,1);
			
				 objects.push(GA_PAN_mesh);
				 THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(GA_PAN_mesh) );
				 
				 
				 GA_1_mesh = load_mesh(new THREE.Plane( 1000, 546, 1, 1 ),material_library.material_ga_1_base,1700 ,TC_height+20,-1500,0,0,0,1);
				 THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(GA_1_mesh) );
				  objects.push(GA_1_mesh);
				 GA_2_mesh = load_mesh(new THREE.Plane( 1000, 564, 1, 1 ),material_library.material_ga_2_base,1700 ,TC_height,900,0,-180,0,1);
				 objects.push(GA_2_mesh);
				 THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(GA_2_mesh) );
				 OT_mesh = load_mesh(new THREE.Plane( 1000, 564, 1, 1 ),material_library.material_outro_base,-1000 ,TC_height+100,-1900,0,225,0,1);
				 
				 OT_mesh_black = load_mesh(new THREE.Plane( 1000, 564, 1, 1 ),new THREE.MeshLambertMaterial( { color:0x000000,opacity:0}),-1000 ,TC_height+100,-1900,0,225,0,1);
				 OT_mesh_black.translateZ(5)
				 THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(OT_mesh) );
				 objects.push(OT_mesh);
				
								  
				  MK_mesh = load_mesh(new THREE.Plane( 1500, 564, 1, 1 ),material_library.material_mk_base,-1515 ,TC_height+25,800,0,90,0,1);
				  THREE.Collisions.colliders.push( THREE.CollisionUtils.MeshOBB(MK_mesh) );
				  objects.push(MK_mesh);
				  

				  var multix = 1.32
				  
				 var dotz = THREE.ImageUtils.loadTexture( "textures/global/dot_matrix_power.jpg")
			  	// dotz.repeat.set( 1, 4 );
				
				dotz.wrapS = THREE.RepeatWrapping;
				dotz.wrapT = THREE.RepeatWrapping;
				dotz.repeat.x = 20;
				dotz.repeat.y = 20;
				all_floor_01 = load_mesh(new THREE.Plane( 26000,26000,1, 1), new THREE.MeshBasicMaterial({ map:dotz,opacity:.7,transparent:true} ), 0	 ,TC_height-506,0,90,0,0,1);
				
				  MK_mesh_floor_01 = load_mesh(new THREE.Plane( 1500*multix, 340*multix, 1, 1 ), new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'textures/market/billboards/view_01.jpg' ),transparent:false } ), -1512	 ,TC_height-208,899,0,-180,0,1);
		   		MK_mesh_floor_01.visible = false
				  MK_plane_overlay = new THREE.Plane( 1500*multix, 676*multix, 1, 1 )
				  objects.push( MK_mesh_floor_01)
				
				  //studio_mesh.visible = false
				
				
				  INTRO_mesh = load_mesh(new THREE.Cube( 1000, 10, 562, 1, 1, 1 ),material_library.material_start_base,10,330,0,0,-90,0,1);
				  INTRO_mesh.updateMatrix();
				  //INTRO_mesh.rotation.x=30*Math.PI /180
				
				
				
				  INTRO_mesh.visible=false;
				  BELOW_mesh = load_mesh(new THREE.Cube( 1000, 10, 562, 1, 1, 1 ),material_library.material_end_base,10,330,0,0,-90,0,1);
				  BELOW_mesh.visible=false;
				  
				  var imagine_start_texture= THREE.ImageUtils.loadTexture( "textures/special_features/imagine_start.jpg")
				  var living_proof_start_texture= THREE.ImageUtils.loadTexture( "textures/special_features/living_proof_start.jpg") 
				  var woh_start_texture= THREE.ImageUtils.loadTexture( "textures/special_features/woh_start.jpg")
				  var tech_start_texture= THREE.ImageUtils.loadTexture( "textures/special_features/open_technology_start.jpg")
				  var share_this_texture = THREE.ImageUtils.loadTexture( "images/share_buttons.png")
				  
				  
				  
				  living_proof_mesh=load_mesh(new THREE.Plane( 1000, 546, 1, 1 ),new THREE.MeshBasicMaterial({ map:living_proof_start_texture} ),-1100 ,TC_height+25,2000,0,180,0,1);
				  living_proof_mesh.materials[0].opacity=0
				  
				  living_proof_mesh_share=load_mesh(new THREE.Cube( 20, 70, 1, 1,1,1 ),new THREE.MeshBasicMaterial({ map:share_this_texture} ),-1550 ,TC_height+230,1900,0,180,0,1);
				  living_proof_mesh_share.materials[0].opacity=0
				  
				  imagine_mesh=load_mesh(new THREE.Plane( 1000, 546, 1, 1 ),new THREE.MeshBasicMaterial({ map:imagine_start_texture} ),0 ,TC_height+50,-2000,0,0,0,1);
	        imagine_mesh.materials[0].opacity=0

				  tech_mesh=load_mesh(new THREE.Plane( 1000, 546, 1, 1 ),new THREE.MeshBasicMaterial({ map:tech_start_texture} ),-3000 ,TC_height+50,-2000,0,90,0,1);
	        tech_mesh.materials[0].opacity=0

	        
				  
				  
				  woh_mesh=load_mesh(new THREE.Plane( 1000, 546, 1, 1 ),new THREE.MeshBasicMaterial({ map:woh_start_texture} ),-2900 ,TC_height+50,-500,0,90,0,1);
	                          woh_mesh.materials[0].opacity=0
	                          
	        imagine_mesh_share=load_mesh(new THREE.Cube( 50, 100, 1, 1,1,1 ),new THREE.MeshBasicMaterial({ map:share_this_texture} ),-3000 ,TC_height+272,-2200,0,0,0,1);
				  imagine_mesh_share.materials[0].opacity=0
	        
	        
	         
	        		  woh_mesh_share=load_mesh(new THREE.Cube( 50, 100, 50, 1,1,1 ),new THREE.MeshBasicMaterial({ map:share_this_texture} ),-2900 ,TC_height+272,50,0,90,0,1);
	        		  woh_mesh_share.materials[0].opacity=0
	        

				var building_array = [[2000,2000],[2000,1500],[2500,1000],[-1000,3000],[-1000,-1000],[-800,-800],[-3800,1500],[-2800,1000],[1000,-2000],[1000,-1000]]
				  for ( var i = 0; i < 10; i ++ ) {
					 var random_material = Math.round(Math.random() * 3)+1	  
					 var scale_multiplier = Math.random() *3
					 var highrisemesh = new THREE.Mesh( new THREE.Cube( 100, 300, 100, 1,1,1, eval('material_library.highrise_0' + random_material)), new THREE.MeshFaceMaterial() );
					 highrisemesh.doubleSided = false
					 highrisemesh.position.x = building_array[i][0] 
					 highrisemesh.position.y = 1000 + scale_multiplier*100
					 highrisemesh.position.z = building_array[i][1] 
					 highrisemesh.scale.x = highrisemesh.scale.y =  highrisemesh.scale.z = scale_multiplier+4
					 GeometryUtils.merge( terrain_geometry, highrisemesh );
				  }
			

				all_terrain_mesh = new THREE.Mesh( terrain_geometry, new THREE.MeshFaceMaterial() );
				scene.addObject( all_terrain_mesh );
				//all_terrain_mesh.matrixAutoUpdate = false;
				//all_terrain_mesh.updateMatrix();
				objects.push(all_terrain_mesh)
				set_in_action()
	       //var timeout = setTimeout(function(){set_in_action()},500);


			}



var semantic_icon_array = []
var semantic_data_array = []

//semantic_data_array[semantic_data_array.length] = ["wikipedia_material",200,200,200,"http://en.wikipedia.org/wiki/Tower_block","wiki_1","",""]
//tc
semantic_data_array[semantic_data_array.length] = ["camera_icon_lil_blue.png",0,200,1500,"","flickr","10896fba1fb0d34e18bbad62192db2ee","68436374@N06","Tower Renewal Examples"] //76 0
semantic_data_array[semantic_data_array.length] = ["book_icon_lil_blue.png",-400,100,1500,"http://en.wikipedia.org/wiki/Tower_block","wiki","","","Tower Block"] //96 2

//rv
semantic_data_array[semantic_data_array.length] = ["camera_icon_lil_green.png",1200,200,-200,"toronto, ravines","flickr","10896fba1fb0d34e18bbad62192db2ee","","Toronto Ravines"] //126 3
semantic_data_array[semantic_data_array.length] = ["book_icon_lil_green.png",1300,200,100,"http://en.wikipedia.org/wiki/Community_gardening","wiki","","","Community Gardening"] //147 4
semantic_data_array[semantic_data_array.length] = ["book_icon_lil_green.png",1400,200,-300,"http://en.wikipedia.org/wiki/Green_building","wiki","","","Green Building"] //168 5

//mk

semantic_data_array[semantic_data_array.length] = ["book_icon_lil_yellow.png",-800,200,0,"http://en.wikipedia.org/wiki/Effects_of_the_automobile_on_societies","wiki","","","Effects Of The Automobile On Societies"] //240 6
semantic_data_array[semantic_data_array.length] = ["book_icon_lil_yellow.png",-800,200,0,"http://en.wikipedia.org/wiki/Infill_housing","wiki","","","Infill Housing"] //240 6
semantic_data_array[semantic_data_array.length] = ["book_icon_lil_yellow.png",-800,200,0,"http://en.wikipedia.org/wiki/Farmers_market","wiki","","","Farmers Market"] //263 8

function build_semantic_icons(){

	for (var i = 0;i<semantic_icon_array.length;i++){
		scene.removeObject[i]	
	}
	semantic_icon_array =[]	
	for (var i = 0;i<semantic_data_array.length;i++){
		var icon_texture = THREE.ImageUtils.loadTexture( 'images/popcorn_icons/'+semantic_data_array[i][0])
		var icon_mat =  new THREE.MeshBasicMaterial({ map:icon_texture} )
		var new_icon = load_mesh(new THREE.Cube( 100, 100, 100, 6 ,6, 6),icon_mat,semantic_data_array[i][1],semantic_data_array[i][2],semantic_data_array[i][3],0,180,0,1);
		new_icon.visible = false
		
		new_icon.url =    semantic_data_array[i][4]
		new_icon.target = semantic_data_array[i][5]
		new_icon.apikey = semantic_data_array[i][6]
		new_icon.userid = semantic_data_array[i][7]
		new_icon.title = semantic_data_array[i][8]
		semantic_icon_array.push( new_icon)
	}

				 
}

function show_semantic_icon(pos){
	var icon = semantic_icon_array[pos]
	icon.visible = true
}

function build_interactive_maquettes(){

	
	TC_base_mesh.target ="go_tennis_court"
	TC_base_mesh.is_maquette=true
	TC_base_mesh.is_ready=true
	TC_base_mesh.is_ready_ro=true
	//var RO_array = []
	TC_base_mesh.RO_array = []
	var parent_obj = TC_base_mesh
	var sprite_array = [[parent_obj.position.x+200,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x-300,parent_obj.position.y,parent_obj.position.z]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_BLUE.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(-200*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 TC_base_mesh.RO_array.push(sprite)
		 }
		 
	var maquette_title = build_text("TENNIS COURT",190,260,2000,0,180,0,0xA3bac1)
	TC_base_mesh.RO_text = maquette_title
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	
	semantic_icon_array.push(TC_base_mesh);
	
	TC_base_mesh_2.target ="go_tennis_court_2"
	TC_base_mesh_2.is_maquette=true
	TC_base_mesh_2.is_ready=true
	TC_base_mesh_2.is_ready_ro=true
       
    var parent_obj = TC_base_mesh_2
	TC_base_mesh_2.RO_array = []
	var sprite_array = [[parent_obj.position.x+200,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x-300,parent_obj.position.y,parent_obj.position.z]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_BLUE.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(-400*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 TC_base_mesh_2.RO_array.push(sprite)
		 }
	var maquette_title = build_text("TENNIS COURT",parent_obj.position.x,parent_obj.position.y +150, parent_obj.position.z ,0,225,0,0xA3bac1)
	//maquette_title.translateX(20)
	//maquette_title.translateZ(-200)
	parent_obj.RO_text = maquette_title
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	
	semantic_icon_array.push(TC_base_mesh_2);
	GA_PAN_mesh.target ="go_ravine"
	GA_PAN_mesh.is_maquette=true
	GA_PAN_mesh.is_ready=true
	GA_PAN_mesh.is_ready_ro=true
	
    var parent_obj = GA_PAN_mesh
	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x,parent_obj.position.y-50,parent_obj.position.z-100],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+300],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_GREEN.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 //sprite.translateZ(400*multix)
		 sprite.translateX(-100*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }
		 
	var maquette_title = build_text("THE RAVINE",parent_obj.position.x,parent_obj.position.y +210, parent_obj.position.z ,0,0,0,0x9ab151)
	maquette_title.translateZ(-600)
	maquette_title.rotation.y = parent_obj.rotation.y
	parent_obj.RO_text = maquette_title
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	
	semantic_icon_array.push(GA_PAN_mesh);
	
	GA_1_mesh.target  ="go_ravine2"
	GA_1_mesh.is_maquette=true
	GA_1_mesh.is_ready=true
	GA_1_mesh.is_ready_ro=true
	
        var parent_obj = GA_1_mesh

	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_GREEN.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(100*multix)
		 //sprite.translateX(-100*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }
		 
	var maquette_title = build_text("OUR GARDEN",parent_obj.position.x,parent_obj.position.y +270, parent_obj.position.z ,0,0,0,0x9ab151)
	maquette_title.rotation.y = parent_obj.rotation.y
	maquette_title.translateX(-320)
	parent_obj.RO_text = maquette_title
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	
	semantic_icon_array.push(GA_1_mesh);
	
	GA_2_mesh.target  ="go_ravine3"
	GA_2_mesh.is_maquette=true
	GA_2_mesh.is_ready=true
	GA_2_mesh.is_ready_ro=true
	
    var parent_obj = GA_2_mesh
    parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_GREEN.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(-100*multix)
		 //sprite.translateX(-100*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }
	var maquette_title = build_text("ROOTS",parent_obj.position.x,parent_obj.position.y +270, parent_obj.position.z ,0,0,0,0x9ab151)
	maquette_title.rotation.y = parent_obj.rotation.y
	maquette_title.translateX(380)
	parent_obj.RO_text = maquette_title
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	
	semantic_icon_array.push(GA_2_mesh);
	
	MK_mesh.target  ="go_market_place"
	MK_mesh.is_maquette=true
	MK_mesh.is_ready=true
	MK_mesh.is_ready_ro=true

    var parent_obj = MK_mesh
 	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_YELLOW.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 //sprite.translateZ(-400*multix)
		 sprite.translateX(600*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }


	var maquette_title = build_text("THE PARKING LOT",parent_obj.position.x,parent_obj.position.y +285, parent_obj.position.z+500 ,0,0,0,0xe8d34e)
	maquette_title.rotation.y = parent_obj.rotation.y
	parent_obj.RO_text = maquette_title
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	semantic_icon_array.push(MK_mesh);
	
	
	OT_mesh.target  ="go_outro"
	OT_mesh.is_maquette=true
	OT_mesh.is_ready=true
	OT_mesh.is_ready_ro=true
	
    var parent_obj = OT_mesh
 	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_RED.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(400*multix+300)
		 //sprite.translateX(-600*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }

	var maquette_title = build_text("WHOLE WORLD",parent_obj.position.x,parent_obj.position.y +245, parent_obj.position.z ,0,45,0,0xbf6c54)
	maquette_title.translateX(-90)
	maquette_title.translateZ(320)
	parent_obj.RO_text = maquette_title	
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	semantic_icon_array.push(OT_mesh);
	


    var parent_obj = imagine_mesh	
	parent_obj.target  ="go_imagine"
	parent_obj.is_maquette=true
	parent_obj.is_ready=true
	parent_obj.is_ready_ro=true
 	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_BLUE2.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(400*multix)
		 //sprite.translateX(-600*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }

	var maquette_title = build_text("IMAGINE",parent_obj.position.x-300,parent_obj.position.y +250, parent_obj.position.z ,0,0,0,0x6786b0)
	maquette_title.translateX(-70)
	maquette_title.translateZ(100)
	parent_obj.RO_text = maquette_title	
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	

    var parent_obj = living_proof_mesh	
	parent_obj.target  ="go_living_proof"
	parent_obj.is_maquette=true
	parent_obj.is_ready=true
	parent_obj.is_ready_ro=true
 	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_BLUE2.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(400*multix)
		 //sprite.translateX(-600*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }

	var maquette_title = build_text("LIVING PROOF",parent_obj.position.x+330,parent_obj.position.y +290, parent_obj.position.z ,0,180,0,0x6786b0)
	maquette_title.translateX(-70)
	maquette_title.translateZ(100)
	parent_obj.RO_text = maquette_title	
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y

        var parent_obj = woh_mesh	
	parent_obj.target  ="go_woh"
	parent_obj.is_maquette=true
	parent_obj.is_ready=true
	parent_obj.is_ready_ro=true
 	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_BLUE2.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(400*multix)
		 //sprite.translateX(-600*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }

	var maquette_title = build_text("WORLD OF HIGHRISES",parent_obj.position.x,parent_obj.position.y +290, parent_obj.position.z+55 ,0,90,0,0x6786b0)
	maquette_title.translateX(-70)
	maquette_title.translateZ(100)
	parent_obj.RO_text = maquette_title	
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y
	
        var parent_obj = tech_mesh	
	parent_obj.target  ="go_tech"
	parent_obj.is_maquette=true
	parent_obj.is_ready=true
	parent_obj.is_ready_ro=true
 	parent_obj.RO_array = []
	var sprite_array = [[parent_obj.position.x-100,parent_obj.position.y-50,parent_obj.position.z],[parent_obj.position.x+300,parent_obj.position.y,parent_obj.position.z],[parent_obj.position.x,parent_obj.position.y,parent_obj.position.z+700]]
 	     for(var i=0;i<sprite_array.length;i++){
		 var sprite = new THREE.Sprite( { map: THREE.ImageUtils.loadTexture( "textures/rollovers/dotted_round_BLUE2.png"),useScreenCoordinates: false } );
		 sprite.rotation=180*Math.PI /180
		 var multix = Math.random() * 1.4
		 sprite.position.set(sprite_array[i][0],sprite_array[i][1],sprite_array[i][2])
		 sprite.translateZ(400*multix)
		 //sprite.translateX(-600*multix)
		 sprite.scale.set( 1*multix, 1*multix, 1*multix );
		 sprite.opacity =  0
		 sprite.visible= false
		 scene.addObject(sprite)
		 parent_obj.RO_array.push(sprite)
		 }

	var maquette_title = build_text("OPEN TECHNOLOGY",parent_obj.position.x,parent_obj.position.y +290, parent_obj.position.z+20 ,0,90,0,0x6786b0)
	maquette_title.translateX(-70)
	maquette_title.translateZ(100)
	parent_obj.RO_text = maquette_title	
	parent_obj.RO_text_start_y = maquette_title.position.y 
	parent_obj.start_y=parent_obj.position.y

	
}

function remove_semantic_icons(){
	for (var i = 0;i<semantic_icon_array.length;i++){
		scene.removeObject[i]	
	}
	semantic_icon_array =[]
}

	function build_imagined( geometry1 ) {
		videos_no_alpha =[]
		document.getElementById("toggle_explore_mode_current").style.display="none"
		document.getElementById("toggle_explore_mode_imagined").style.display="block"
			//cloud_builder(0x9ed1d5)
			create_trees_01_sprites( )
			create_blue_skies_01()
			create_outer_buildings_01 ()
			create_maquette_context ()
			build_vines()
			make_twilight()
			
			MURAL_mesh.visible=true
			PLANTER_mesh.visible=true
			SHED_mesh.visible=true
			GRASS_mesh.visible=true
			STAIRS_mesh.visible=true
			
			TC_base_mesh.visible=true
			GA_2_mesh.visible=true
			GA_1_mesh.visible=true
			GA_PAN_mesh.visible=true
			
		  
			pano_mesh_night.visible = true;
			pano_mesh.visible = false;
	
			build_tc1_01()
			for( var i = 0;i< tc_array.length;i++){
				tc_array[i].materials[0].opacity = 1
			}
			build_tc2_01()
			for( var i = 0;i< tc_2_sprite_array.length;i++){
				tc_2_sprite_array[i].opacity = 1
			}	
			tc_boy_01.opacity = 0
	        build_market_explore()
			for( var i = 0;i< all_mesh_array.length;i++){
				all_mesh_array[i].materials[0].opacity = 1
			}
	 
			for( var i = 0;i< mk_sprite_array.length;i++){
				mk_sprite_array[i].opacity = 1
			}				
	//alert("RING")
	}
	
	function build_current( geometry1 ) {
		
	
		pano_mesh.visible = true;
		scene.removeObject(GA_PAN_mesh)
		scene.removeObject(TC_base_mesh)
		scene.removeObject(GA_1_mesh)
		scene.removeObject(GA_2_mesh)
                TC_base_mesh = load_mesh(TC_plane_bordered, material_tc_base ,0 ,TC_height,2000,0,180,0,1,1);		
		GA_PAN_mesh = load_mesh( new THREE.Plane( 1500, 422, 1, 1 ),material_ra_base,2000 ,TC_height,-400,0,-90,0,1);
		GA_1_mesh = load_mesh(new THREE.Plane( 1000, 546, 1, 1 ),material_ga_1_base,1700 ,TC_height+20,-1500,0,0,0,1);
		GA_2_mesh = load_mesh(new THREE.Plane( 1000, 564, 1, 1 ),material_ga_2_base,1700 ,TC_height,900,0,-180,0,1);

		//make_day()
			for( var i = 0;i< videos_no_alpha.length;i++){
				videos_no_alpha[i].rewind_video()
			}
			videos_no_alpha = [];
			
			for( var i = 0;i< tc_array.length;i++){
				tc_array[i].materials[0].opacity = 0
			}
			for( var i = 0;i< all_mesh_array.length;i++){
				all_mesh_array[i].materials[0].opacity = 0
			}
	 
			for( var i = 0;i< mk_sprite_array.length;i++){
				mk_sprite_array[i].opacity = 0
			}		
			for( var i = 0;i< tc_2_sprite_array.length;i++){
				tc_2_sprite_array[i].opacity = 0
			}	
			document.getElementById("toggle_explore_mode_current").style.display="block"
			document.getElementById("toggle_explore_mode_imagined").style.display="none"
		
		    //cloud_builder(0xcccccc)
			 for ( var i = 0, il = gv_1_sprite_array.length; i < il; i++ ) {
				 scene.removeObject(gv_1_sprite_array[i]);
			 }
			gv_1_sprite_array = []
	
	
			for ( var i = 0, il = tree_array.length; i < il; i++ ) {
				scene.removeObject(tree_array[i]);
			}
			tree_array = []	 
		
			create_grey_skies_01 ()
			MURAL_mesh.visible=false
			PLANTER_mesh.visible=false
			SHED_mesh.visible=false
			GRASS_mesh.visible=false
			STAIRS_mesh.visible=false
	
	
	//alert("RING")
	}	
	