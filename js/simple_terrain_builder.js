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
	


		animate()	
		//initial drift
		var points =[]
		points[ points.length ] = { x:camera.position.x, z:camera.position.z };
		//camera_move(points,50000,20,5,"NULL")
}


function terrain_builder() {

var terrain_geometry = new THREE.Geometry()


				
				var pano_geometry = new THREE.Sphere( 18000, 20, 20 )
				pano_mesh = new THREE.Mesh( pano_geometry,material_library.PANO_base_material);
				pano_mesh.flipSided = true;
				pano_mesh.updateMatrix();
				scene.addObject( pano_mesh );
				objects.push(pano_mesh)	
				

				
		 
				
	        

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



