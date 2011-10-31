// JavaScript Document
var loader, preload_time_start
document.addEventListener('DOMContentLoaded', function( e ) {
          // create a TowerLoader
            preload_time_start = new Date().getTime()
            loader = new TowerLoader({
            markerClass: "tower-loader-marker",
            container: "tower-loader-inner"
          });
	        loader.start();
	        }, false );



		  
var img_set_1 = [];

img_set_1.push("textures/global/highrise_05a.png")
img_set_1.push("textures/global/highrise_06a.png")
img_set_1.push("textures/global/highrise_07a.png")
img_set_1.push("textures/global/highrise_08a.png")
img_set_1.push("textures/tennis_court/tc_base.jpg")
img_set_1.push("textures/tennis_court/playground_tc1.png")
img_set_1.push("textures/ravine/ravine_bg.jpg")
img_set_1.push("textures/garden/ga_1_base.jpg")
img_set_1.push("textures/garden/ga_2_base.jpg")
img_set_1.push("textures/global/path_top.jpg")
img_set_1.push("textures/global/walk_about.png")

img_set_1.push("textures/particles/flower_mote.png")

img_set_1.push("textures/global/street_grunge_01.jpg")
img_set_1.push("textures/global/roots-texture.jpg")
img_set_1.push("textures/global/plants/p_FGtrees.png")
img_set_1.push("textures/global/blue_sky_01.jpg")
img_set_1.push("textures/global/outer_building_01.jpg")
img_set_1.push("textures/global/tree_line_01.jpg")
img_set_1.push("textures/global/tree_line_02.jpg")
img_set_1.push("textures/garden/ga_vines_01.png")
img_set_1.push("textures/garden/bush_01.png")
img_set_1.push("textures/global/mural_01.jpg")
img_set_1.push("textures/global/blue_sky_01.jpg")

img_set_1.push("textures/market/billboards/view_01.jpg")
img_set_1.push("textures/market/billboards/view_02.jpg")
img_set_1.push("textures/market/billboards/view_03.jpg")
img_set_1.push("textures/market/billboards/view_04.jpg")
img_set_1.push("textures/market/billboards/view_05.jpg")
img_set_1.push("textures/market/billboards/view_06.jpg")
img_set_1.push("textures/market/billboards/view_07.jpg")
img_set_1.push("textures/market/billboards/view_08.jpg")
img_set_1.push("textures/market/billboards/view_09.jpg")
img_set_1.push("textures/market/billboards/view_10.jpg")
img_set_1.push("textures/market/billboards/view_11.jpg")
img_set_1.push("textures/market/billboards/view_12.jpg")
img_set_1.push("textures/market/billboards/view_13.jpg")
img_set_1.push("textures/global/clouds_nu.png")


img_set_1.push("textures/global/dot_matrix_tc.jpg")
img_set_1.push("textures/global/dot_matrix_rv.jpg")
img_set_1.push("textures/global/dot_matrix_mk.jpg")
img_set_1.push("textures/global/dot_matrix_ot.jpg")
img_set_1.push("textures/global/dot_matrix_power.jpg")
img_set_1.push("textures/garden/shed_side.jpg")
img_set_1.push("textures/garden/shed_front.jpg")

img_set_1.push("textures/global/environment_clear_.jpg")
img_set_1.push("textures/global/environment_night_.jpg")
img_set_1.push("textures/global/environment_overcast_.jpg")
img_set_1.push("textures/global/environment_partly_cloudy_.jpg")
img_set_1.push("textures/global/environment_cloudy_.jpg")
//
//textures/market/billboards/view_01.jpg

var this_set
var set_length=0
var set_response

var load_intro_video  = new html5Preloader();

var img_set_increments = 100/img_set_1.length

var video_set_increments = 100/7

var video_download_counter = 0

function load_img_set(){
	document.getElementById('streetview_inset').src="blank.html";

	for (var i = 0; i< img_set_1.length;i++){	
		var image = new Image();
		image.onload = function() {check_img_set();};
	  image.src = img_set_1[i];
	}
	
}

function load_all_videos() {


var tc1_preload_vid = new html5Preloader('videos/hd/fence_push.webm');
tc1_preload_vid.onfinish = function(){check_video_set("fen");tc1_preload_vid=false};

var tc2_preload_vid = new html5Preloader('videos/hd/tennis_court.webm');
tc2_preload_vid.onfinish = function(){check_video_set("tc");tc2_preload_vid=false};

var ra_preload_vid = new html5Preloader('videos/hd/ravine.webm');
ra_preload_vid.onfinish = function(){check_video_set("r1");ra_preload_vid=false};

var ga1_preload_vid = new html5Preloader('videos/hd/garden_view_01.webm');
ga1_preload_vid.onfinish = function(){check_video_set("g1");ga1_preload_vid=false};

var ga2_preload_vid = new html5Preloader('videos/hd/garden_view_02.webm');
ga2_preload_vid.onfinish = function(){check_video_set("g2");ga2_preload_vid=false};

var mk_preload_vid = new html5Preloader('videos/hd/dancers.webm');
mk_preload_vid.onfinish = function(){check_video_set("dancers");};

var outro_preload_vid = new html5Preloader('videos/hd/outro.webm');
outro_preload_vid.onfinish = function(){check_video_set("ot1"); document.getElementById('progress_bar').style.display="none"};
}

function check_video_set(asset) {
	if(video_download_counter < 7){
		
	video_download_counter++;
	document.getElementById('progress_bar').style.width=(video_download_counter*video_set_increments)-6+"%";
	}else{
		
	
	}
}

function check_img_set(){
	set_length++
	document.getElementById("preload_text").innerHTML = "Downloading world: "+Math.round(set_length*img_set_increments)+"% complete"
	if ( loader.progress < 1 ) {
        loader.progress += set_length*img_set_increments/100
  	} else {
        loader.waitAndStop();
        } //if
	if (set_length == img_set_1.length){
		img_set_1.length=0
		img_set=false
		loader = false
		//document.getElementById('tower-loader-outer').style.display="none"
		//document.getElementById('tower-placing-assets').style.display="block"
		document.getElementById('progress_bar').style.width= "0px"
		
	  init_3d()
	   
	}
	
}

function start_download_monitor(url) {
var req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress, false);
req.addEventListener("load", transferComplete, false);
req.addEventListener("error", transferFailed, false);
req.addEventListener("abort", transferCanceled, false);
req.open("GET",url,true);
req.overrideMimeType('text/plain; charset=x-user-defined-binary');
req.send();
}




// progress on transfers from the server to the client (downloads)
function updateProgress(evt) {
	//document.getElementById("progress").innerHTML="progress"+evt.total;
  if (evt.lengthComputable) {
    var percentComplete = evt.loaded / evt.total*100;
     document.getElementById('enter_progress').innerHTML= Math.round(percentComplete) + "%"
     document.getElementById('enter_progress').style.width=percentComplete-6+"%"
  } else {
	 
 //document.getElementById("progress").innerHTML="Unable to compute progress information since the total size is unknown"
  }
}

function transferComplete(evt) {
   document.getElementById('enter_progress').style.width="531px"
   if(explore==0){
	   
	  document.getElementById('enter_progress').style.display="block"
 
   }
   
   document.getElementById('explore_text_btn').style.display="block"
   
   document.getElementById('watch_text_btn').style.display="block"
   
   //document.getElementById('standard_text_btn').style.display="block"
   
   document.getElementById('enter_progress').innerHTML=""
   var tt = new Date().getTime()-preload_time_start
   
   //piwikTracker.trackPageView();
   load_all_videos();
}

function transferFailed(evt) {
  alert("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  alert("The transfer has been canceled by the user.");
}



		
function TowerLoader ( options ) {

          var that = this;
          options = options || {};

          // try to grab the correct elements
          var markerClass = options.markerClass,
              container = document.getElementById( options.container );

          // universalize requestAnimFrame, using native support where possible
          var requestAnimFrame = (function(){
            return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame       || 
              window.mozRequestAnimationFrame          || 
              window.oRequestAnimationFrame            || 
              window.msRequestAnimationFrame           || 
              function( callback, element){
                window.setTimeout( callback, 1000 / 60 );
              };
          })(); 

          // check if element and marker class are valid
          if ( markerClass && container ) {
            var markers = container.getElementsByClassName( markerClass ),
                progress = 0,
                stop = false;
            
            // = operator overloading for progress prop (getter/setter)
            Object.defineProperty( this, "progress", {
              get: function () {
                return progress;
              },
              set: function ( val ) {
                progress = val;
              }
            }); //defineProperty: progress

            // reset all markers
            for ( var i=0; i<markers.length; ++i ) {
	      markers[ i ].style.opacity=0
              //markers[ i ].style.background = "rgba(255, 255, 255, 0)";
              markers[ i ].towerLoaderOpacity = 0;
            } //for

            // do a pass over all markers, setting their background colour if necessary
            function spin() {
              var l = markers.length,
                  topMarker = progress * l;

              for ( var i=0; i<l; ++i ) {
                if ( l-i <= topMarker && markers[ i ].towerLoaderOpacity < .99 ) {
                  // tween (ease in)
                  markers[ i ].towerLoaderOpacity -= ( markers[ i ].towerLoaderOpacity - 1 ) * .08;
		  markers[ i ].style.opacity= markers[ i ].towerLoaderOpacity
                  //markers[ i ].style.background = "rgba(255, 255, 255, "+ markers[ i ].towerLoaderOpacity  +")";
                } //if
              } //for

              // repeat if stop request hasn't occured
              if ( !stop ) {
                requestAnimFrame( spin );
              } //if
            } //spin

            // get ready
            this.start = function () {
              progress = 0;
              stop = false;
              spin();
            }; //start

            // try to stop (raise the stop flag)
            this.stop = function () {
              stop = true;
            }; //stop

            // wait for all the blocks to fill up before stopping
            this.waitAndStop = function () {
              var total = 0;
              for ( var i=0, l=markers.length; i<l; ++i ) {
                if ( markers[ i ].towerLoaderOpacity > .99 ) {
                  ++total;
                } //if
              } //for
              if ( total === markers.length ) {
                that.stop();
              }
              else {
                requestAnimFrame( that.waitAndStop );
              } //if
            }; //waitAndStop

          } //if

        } //TowerLoader		
		
		
		