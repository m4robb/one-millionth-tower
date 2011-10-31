// JavaScript Document

 ////////////DIRECTIONAL FUNCTION
 var PI = Math.PI

function to_radians(deg){

	var de_ra = ((eval(deg))*(PI/180));
	return de_ra;
}

function to_degrees(rad) {

	var ra_de = ((eval(rad))*(180/PI));
	return ra_de;
}


function determine_end_point(slat,slon){
	var lat_lon = (slat, slon)
	var PI = Math.PI
	var startlat = to_radians(slat) //lat_lon.lat()
	var startlon = to_radians(slon) 
	
	
	var rand1 =  (Math.random()*1)
	var rand2 =  (Math.random()*1)
	var radius_earth =  6372.796924
	var max_distance = 1
	
	
	//Convert maximum distance to radians.
	var max_distance_radians=max_distance/radius_earth
	
	
	var dist = Math.acos(rand1*(Math.cos(max_distance_radians) - 1) + 1)
	var brg = 2*PI*rand2
	
	//alert(brg)
	
	var lat = Math.asin(Math.sin(startlat)*Math.cos(dist) + Math.cos(startlat)*Math.sin(dist)*Math.cos(brg))
	var lon = startlon + Math.atan2(Math.sin(brg)*Math.sin(dist)*Math.cos(startlat), Math.cos(dist)-Math.sin(startlat)*Math.sin(lat))
	if (lon > PI*-1){
		lon = lon + 2*PI
	}else{
		lon = lon - 2*PI
	}
	 
	 //var end_point  = new google.maps.LatLng(to_degrees(lat), to_degrees(lon));
	 return new google.maps.LatLng(to_degrees(lat), to_degrees(lon));
}