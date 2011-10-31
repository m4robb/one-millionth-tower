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






function load_street_image(_lat,_lon) {
//_lon-=.004
//_lat+=.0035

		var url = "http://client.heliozilla.com/highrise_million/tests/map_tiles.php?lat="+_lat+"&lon="+_lon+"&zoom=18&x_tiles=2&y_tiles=2&map=0"
//alert(url)
	
		var req = new XMLHttpRequest();
		
		req.open("GET",url,true);
		req.overrideMimeType('text/plain; charset=x-user-defined-binary');
		req.send();
		
		req.onreadystatechange = function() {
		  	if(this.readyState == 2) {
			base_mesh_build(url);
			
//_lon-=.1
//_lat+=.1
		url2 = "http://client.heliozilla.com/highrise_million/tests/map_tiles.php?lat="+_lat+"&lon="+_lon+"&zoom=10&x_tiles=2&y_tiles=2&map=0"

	
		var req2 = new XMLHttpRequest();
		
		req2.open("GET",url2,true);
		req2.overrideMimeType('text/plain; charset=x-user-defined-binary');
		req2.send();
		
		req2.onreadystatechange = function() {
			
		  	if(this.readyState == 2) {
			base_mesh_build_2(url2);
			}
		}
	
	
			}
		}
		
		

	

		
		
	  }




	function base_mesh_build(url) {
		
		   // var pano_geometry = new THREE.Plane( 1026, 1026, 1,1 )
			
			var pano_geometry = new THREE.Plane(2000,2000,1,1 )
			
			var sv_mat = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(url) } )
			//var sv_mat = new THREE.MeshBasicMaterial( { color:0xFF0000 } )
			
			var street_mesh = new THREE.Mesh( pano_geometry, sv_mat);
			street_mesh.doubleSided = true;
			street_mesh.rotation.x = 90 * Math.PI/180
			street_mesh.position.y= 100
			scene.addObject( street_mesh );	
			street_mesh.visible=true
	
		}
		
		function base_mesh_build_2(url) {
		
		   // var pano_geometry = new THREE.Plane( 1026, 1026, 1,1 )
			
			var pano_geometry = new THREE.Plane(8000,8000,1,1 )
			
			var sv_mat = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(url) } )
			//var sv_mat = new THREE.MeshBasicMaterial( { color:0xFF0000 } )
			//alert("BUILD MESH@")
			var street_mesh = new THREE.Mesh( pano_geometry, sv_mat);
			street_mesh.doubleSided = true;
			street_mesh.rotation.x = 90 * Math.PI/180
			street_mesh.position.y= -50
			scene.addObject( street_mesh );	
			street_mesh.visible=true
	
		}	
		


	

		
