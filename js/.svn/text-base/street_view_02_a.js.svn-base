// JavaScript Document

/*
load_script.load([
  'http://maps.google.com/maps/api/js?sensor=false&callback=google_maps_init',
  'js/get_point.js'

]);

*/


var google_geocoder,google_panorama, google_end_point

 var route;
 var vertices;
 var vertexMap;
 var stepToVertex;
 var stepMap;
 var currentLatLng;
 var panoMetaData;
 var close = false;
 var bearing;
 var nextBearing;
 var nextVertexId;
 var nextVertex;
 var progressArray;
 var progressDistance;
 var currentStep;
 var carMarker;
 var selectedStep = null;
 var driving = false;
 var advanceTimer = null;
 var advanceDelay = 1;
 var PI = Math.PI;
 var end_point;
 var counter = 0
 var pan_timeout
 var dolly_timeout
 
 var interpolate_fraction = 0.0;
 var interpolate_bearing = 0;
 var interpolate_pitch = 30;
 var interpolate_pos;
 var street_mesh
 
 var pitch_dir =  .1	


var pano_tiles = [],pano_canvas,pano_context,pano_mesh_texture
// location place holder;
var copyright = ""
///var ///location = "-23.596898082025685, -46.66440725326538"





		function panorama_init( lat,lng ) {
			
			//apano_canvas = document.createElement( 'canvas' );
			
			pano_canvas= document.getElementById('pano_buffer_cnvs');
			pano_context = pano_canvas.getContext( '2d' );	
			
			pano_texture_apply()
			
	

			copyright = '';
			var lat_lng = new google.maps.LatLng(lat,lng);
			//panoramas = [];
			var pano_client = new google.maps.StreetViewService();
			pano_client.getPanoramaByLocation( lat_lng, 50, function( result, status ) {
				if (status == google.maps.StreetViewStatus.OK) {


					build_panorama( result.location.pano, 4 );
					//console.log( result );

				} else {					
					alert("Could not retrieve panorama for the following reason: " + status);
				}
			} );

		}


		var count = 0;
		var total = 0;
		var queue = [];
		
		function place_pano_tile(x,y,img){		
			pano_context.drawImage( img, x * 512, y * 512 );
			pano_mesh_texture.needsUpdate = true;	
		}
		
		function pano_texture_apply() {



			pano_canvas.width = 416 * Math.pow( 2, 4 );
			pano_canvas.height = ( 416 * Math.pow( 2, 4 - 1 ) );

			pano_mesh_texture = new THREE.Texture( pano_canvas );
			pano_mesh_texture.minFilter = THREE.LinearFilter;
			pano_mesh_texture.magFilter = THREE.LinearFilter;
			pano_mesh_texture.needsUpdate = true
			//scene.removeObject( pano_mesh )
		    var pano_geometry = new THREE.Sphere( 7700, 20, 20 )
			//street_mesh = new THREE.Mesh( pano_geometry, new THREE.MeshBasicMaterial({ map:pano_mesh_texture,opacity:1 } ));
			street_mesh = new THREE.Mesh( pano_geometry, new THREE.MeshBasicMaterial({ map:pano_mesh_texture,opacity:1 } ));
			street_mesh.flipSided = true;
			scene.addObject( street_mesh );	
			street_mesh.visible=true
			street_objects.push(street_mesh)

		
			
		}
		
function build_panorama( id, zoom ) {
		
			queue = [];
			
			// 512 x 512
			var w = Math.pow( 2, zoom );
			var h = Math.pow( 2, zoom - 1 );
			count = 0;
			total = 0;
			var target = h*w
			
			for( var y = 0; y < h; y++ ) {
				for( var x = 0; x < w; x++ ) {
					var _url = 'http://maps.google.com/cbk?output=tile&panoid=' + id + '&zoom=' + zoom + '&x=' + x + '&y=' + y;
					
					//var _url = "http://client.heliozilla.com/highrise_million/platform_working_copy/textures/garden/ga_1_base.jpg";
					$.getImageData({
  					url: _url,
  						success: function(image){
							
							//$(pano_canvas).attr('width', image.width);
							//$(pano_canvas).attr('height', image.height);
							//$(pano_canvas).css({'background-color': 'none', 'border-color': '#fff'});

							// Draw the image on to the canvas
							//pano_context.drawImage(image, x*512, y*512);
					    //place_pano_tile.bind( null, x, y, image );
						//place_pano_tile(  x, y, image );
					//var img = new Image();
					//img.onload = place_pano_tile.bind( null, x, y, img );
					//img.src = image;
					
					    total++;
  },
  error: function(xhr, text_status){
    alert("ERROR!!"+text_status)
  }
});


				}
			}
			
			//processQueue();
			
		}

function google_maps_init(location) {  


	
	var google_canvas = document.createElement( 'canvas' );
	
	google_canvas.id="pano"
	google_canvas.width = 600;
	google_canvas.height = 500;
	google_canvas.loaded = true;
	document.body.appendChild(google_canvas)

    counter = 0
    interpolate_fraction = 0.0;
    interpolate_bearing = (Math.random()*360);
    interpolate_pitch = 30;
    clearTimeout(dolly_timeout)
    clearTimeout(pan_timeout)
	
	var pano_options = {

		  addressControl:false,
		  linksControl: false,
		  panControl: false,
		  zoomControl: false,
		  backgroundColor: '#000000',
		  visible:true
	};
	
google_geocoder = new google.maps.Geocoder();

//google_panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),pano_options);
//google_panorama = new  google.maps.StreetViewPanorama(google_canvas,pano_options);
 pitch_dir =  .1	
google_geocoder.geocode( { 'address': temp_placeholder}, function(results, status) {
													  
if (status == google.maps.GeocoderStatus.OK) {
  google_end_point = determine_end_point(results[0].geometry.location.lat(),results[0].geometry.location.lng())
  //alert(google_end_point)
  
  var panoramas = [];
  var request = {
        origin:temp_placeholder,
        destination: google_end_point,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
											  
      if (status == google.maps.DirectionsStatus.OK) {
        showSteps(response);
		//alert (status)
      }else{
		alert ("Ruh Roh!, unable to initiate streetview")
	  }
    });
	
	      } else {
        alert("Ruh Roh! Geocode was not successful for the following reason: " + status);
		return 0
      }
    });

   }
 
   function showSteps(directionResult) {

    var myRoute = directionResult.routes[0].legs[0];
	route = directionResult.routes[0].legs;
	
	var path =directionResult.routes[0].overview_path;
	
	collapseVertices(path)

  }
   
   ///// moving functions
   
   function collapseVertices(path) {
     vertices = new Array();
     vertexMap = new Array(path.length);

     vertices.push(path[0]);
     vertexMap[0] = 0;

     /* Copy vertices from the polyline to the vertices array
      * skipping any duplicates. Build the vertexMap as we go along */
     for (var i = 1; i < path.length; i++) {
       if (! path[i].equals(vertices[vertices.length - 1])) {
         vertices.push(path[i]);
       }
       vertexMap[i] = vertices.length - 1;
     }

	 start_moving();
   }
   
   function start_moving(){
	   swivel();
	   jumpToVertex(0);
   }
 

	function swivel(){
		 	google_panorama.setPov({
    		heading: interpolate_bearing,
   			zoom:0,
    		pitch:interpolate_pitch}
    );

	interpolate_pitch += pitch_dir
	if(interpolate_pitch>45){
		//alert ("AT top")
		pitch_dir = -.1
	}
	if(interpolate_pitch < 30){
		pitch_dir = .1
	}
	if(interpolate_bearing < 360){ 
    interpolate_bearing += .2
	}else{
		interpolate_bearing = 0
		jumpToVertex(nextVertexId)
	}

	pan_timeout = setTimeout("swivel()",70);
	}
	
 function jumpToVertex(idx) {
      currentLatLng = vertices[idx];
      nextVertex = vertices[idx + 1];
    
	  var jump_to_pos
	  if(interpolate_fraction < 1){
		 interpolate_fraction += 0.1  
		 interpolate_pos = google.maps.geometry.spherical.interpolate(currentLatLng, nextVertex, interpolate_fraction)
	 
		 nextVertexId=idx;
	  }else{
		  //alert(interpolate_fraction)
		  interpolate_fraction = 0.0;
		   nextVertexId = idx + 1; 	
	  }

     google_panorama.setPosition(interpolate_pos);
    }   