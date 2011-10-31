// JavaScript Document

/*
load_script.load([
  'http://maps.google.com/maps/api/js?sensor=false&callback=google_maps_init',
  'js/get_point.js'

]);

*/





var pano_tiles = [],pano_canvas,pano_context,pano_mesh_texture
// location place holder;
var copyright = ""
///var ///location = "-23.596898082025685, -46.66440725326538"


var map_stack = [0,0,0,0]
var counter_load = 0



function load_street_image(_lat,_lon) {
	
		var url = "http://client.heliozilla.com/highrise_million/tests/map_tiles.php?lat="+_lat+"&lon="+_lon+"&zoom=18&x_tiles=2&y_tiles=2&map=0"
 		base_mesh_build(url,100,0)

		var url = "http://client.heliozilla.com/highrise_million/tests/map_tiles.php?lat="+_lat+"&lon="+_lon+"&zoom=16&x_tiles=2&y_tiles=2&map=0"
 		base_mesh_build(url,200,1)
	
		var url = "http://client.heliozilla.com/highrise_million/tests/map_tiles.php?lat="+_lat+"&lon="+_lon+"&zoom=14&x_tiles=2&y_tiles=2&map=0"
 		base_mesh_build(url,300,2)
		

		var url = "http://client.heliozilla.com/highrise_million/tests/map_tiles.php?lat="+_lat+"&lon="+_lon+"&zoom=12&x_tiles=2&y_tiles=2&map=0"
 		base_mesh_build(url,400,3)
	


		

		
	  }




	function base_mesh_build(url,depth, array_pos) {
		
		var req = new XMLHttpRequest();
		
		req.open("GET",url,true);
		//req.overrideMimeType('text/plain; charset=x-user-defined-binary');
		req.send();
		
		req.onreadystatechange = function() {
			
		  	if(this.readyState == 2) {	
			    var pano_geometry = new THREE.Plane(16000,16000,1,1 )
				var sv_mat = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(url) } )
				var street_mesh = new THREE.Mesh( pano_geometry, sv_mat);
				street_mesh.doubleSided = true;
				street_mesh.rotation.x = 90 * Math.PI/180
				street_mesh.position.y= depth
				scene.addObject( street_mesh );	
				street_mesh.visible=true
				map_stack[array_pos]=street_mesh
				counter_load++
				if (counter_load==map_stack.length){
					start_map()
				}
				return street_mesh
			}
	
		}
	}
		



	

		
