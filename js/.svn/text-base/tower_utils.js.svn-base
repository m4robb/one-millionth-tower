function set_var(name,value,days) {
//alert(name + "::" + value)
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function get_var(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function erase_var(name) {
	set_var(name,"",-1);
}

var load_script = {
  script_location: '', // url prefix, if needed
  
  load: function(name_array) {
    for(var i=0; i<name_array.length; i++){
      var name = name_array[i];
      document.write('<script type="text/javascript" src="'+this.script_location+name+'"></script>');
    }
  }
}

function set_debugger(str){
	document.getElementById("debug_text").innerHTML=str
}

function get_query(str) {
	var hu = window.location.search.substring(1);
	var gy = hu.split("&");
	var returned_string = "";
	for (i=0;i<gy.length;i++) {
		var ft = gy[i].split("=");
		if (ft[0] == str) {
			returned_string = ft[1];
		}
	}
	return returned_string
}

var tracking_section="", track_base="1MT/", ev
var this_page_array = window.location.pathname.split("/")

this_page = this_page_array[this_page_array.length-1]

//console.log(window.location.pathname)

if(this_page =="1mt_webgl.php"){
	tracking_section="vanilla"
	track_base="1MT/webgl/"
	//console.log("webgl")
	
}else if (this_page=="index.php"||this_page==""){
	tracking_section=""
	track_base="1MT/detection/"
	//console.log("detection")
	
}else{
	tracking_section="main"
	track_base="1MT/html"
	//console.log("html")	
}



 function track_this(_ev){
		var track_url = track_base+tracking_section+_ev
		ev = _ev
		ntptAddPair( "ntpgi_project", "1MT" );
		var page = track_url.replace(/\//g,"_")
		ntptAddPair( "ntpgi_interactive_page", page );
		ntptEventTag('ev=interactive')
		//console.log("tracking:"+page)

	}
	
function get_bearing(origin, destination) {
      if (origin.equals(destination)) {
        return null;
      }
      var lat1 = origin.toRad();
      var lat2 = destination.toRad();
      var dLon = (destination-origin).toRad();

      var y = Math.sin(dLon) * Math.cos(lat2);
      var x = Math.cos(lat1)*Math.sin(lat2) -
              Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
      return Math.atan2(y, x).toBrng();
    }
	
	  /* Convert an angle in degrees to radians
    */
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }

   /**
    * Convert an angle in radians to degrees (signed)
    */
    Number.prototype.toDeg = function() {
      return this * 180 / Math.PI;
    }

   /**
    * Convert radians to degrees (as bearing: 0...360)
    */
    Number.prototype.toBrng = function() {
      return (this.toDeg()+360) % 360;
    }
