var loadTimeStart = 0;
var testFileSize = 522895;
var webGLSupported = false;
var loaderFail = false;
var loaderSpeeds = {};
var loaderUrls = {};
var loaderAutoAdvance = false;
var loaderTimeout = 10;
var loaderTimer = null;
var loaderTimedOut = false;

var loader

var bandwidth = "lo";

var has_webgl_browser = false;

	
function hasUserAgent(condition) {
    return navigator.userAgent.match(condition);
}

var condition = [
                      ( function () { return hasUserAgent(/[cC]hrome/); } )(),
                      ( function () { return hasUserAgent(/[Ff]ire[Ff]ox\/[4-9]/); } )(),
                      ( function () { return hasUserAgent(/[Mm][Ss][Ii][Ee] [789]/) && hasUserAgent(/[Ww]indows [Nn][Tt] [6789]/) && !hasUserAgent(/[Cc]hrome[Ff]rame/); } )(),
                      ( function () { return hasUserAgent(/[Ss]afari/) && hasUserAgent(/[Mm]ac [Oo][Ss] [Xx] 10\_[6789]/); } )(),
                      ( function () { return hasUserAgent(/i[Pp]hone/) || hasUserAgent(/i[Pp]ad/) || hasUserAgent(/[Aa]ndroid/) || hasUserAgent(/[Bb]lack/); } )()
                      ];	

function check_environment(){

	if (condition[4]){
	 track_this("goingMobile")
	 window.location.href="mobile_index.php"
	 return;
	}
	
	try{ has_webgl_browser = document.createElement("canvas").getContext("experimental-webgl") }
	catch (o) {has_webgl_broswer=!1}

	if  (has_webgl_browser){

	 window.location.href="1mt_webgl.php"

	 return;
	}
	
	if (condition[0]){
	 track_this("hardwareFail_chrome")
	 window.location.href="1mt_no_webgl.php?alternate=ff&bandwidth="+bandwidth
	}else if (condition[1]){
	 track_this("hardwareFail_ff")
	 window.location.href="1mt_no_webgl.php?alternate=ff&bandwidth="+bandwidth
	}else if (condition[2]){
	
	 var candu="pass";
	 if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
	  var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
	   if (ieversion < 7){
	     candu="fail";
	   }
	 } 
   if(candu=="pass"){	
   	 track_this("browserFail_ie")
	  window.location.href="1mt_no_webgl.php?alternate=ie&bandwidth="+bandwidth
	 }else{
	 	 track_this("completeFail_ie")
	  window.location.href="1mt_no_view.php"
	 }
	}else if (condition[3]){
		track_this("browserFail_Safari")
	 window.location.href="1mt_no_webgl.php?alternate=fail&bandwidth="+bandwidth
	}else{
			track_this("browserFail_Unspecified")
	 window.location.href="1mt_no_webgl.php?alternate=fail&bandwidth="+bandwidth	
			}
}


function run_tests(obj_init) {
   preload_time_start = new Date().getTime();

	
	if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
	 var ffversion=new Number(RegExp.$1) // capture x.x portion and store as a number
	if (ffversion<=3.5){
	track_this("completeFail_ff30")
	 window.location.href="1mt_no_view.php";
	 return;
	 }
	}

    try {
        webGLSupported = !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
    }catch(e){
        webGLSupported = false;
    }
	if(webGLSupported){
		

		if(condition[0]){
  		track_this("webglSuccess_chrome")
		} else if (condition[1]){
		 track_this("webglSuccess_ff")
		}else{
	 		track_this("webglSuccess_other!!")
		}
	  window.location.href="1mt_webgl.php";
	 return;
	}

    loaderSpeeds = obj_init.speed;
    loaderUrls = obj_init.url;
    loaderAutoAdvance = obj_init.autoAdvance;
    if (obj_init.timeout) loaderTimeout = obj_init.timeout;

    var url = "loader.jpg?"+1000000*Math.random();

    loadTimeStart = new Date().getTime();

    var req;
    
    try
    {
        req = new XMLHttpRequest();
    }
    catch(e)
    {
        // assume IE6 or older
        try
        {
          req = new ActiveXObject("Microsoft.XMLHttp");
        }
        catch(e) { 
        }
    }

    if (req.addEventListener) {
    
    if(Object.defineProperty){
        document.getElementById('preloading_pane').style.display="block";
        loader = new TowerLoader({
    	   markerClass: "tower-loader-marker",
    	   container: "tower-loader-inner"
       	})
	 loader.start();
	}else{
            document.getElementById('progress_container').style.display="block";
            document.getElementById('enter_progress').style.width= (req.readyState*15)+"%";
            document.getElementById('enter_progress').innerHTML= (req.readyState*15)+"%";	
	}
        req.addEventListener("progress", updateProgress, false);
        req.addEventListener("load", transferComplete, false);
        req.addEventListener("error", transferFailed, false);
        req.addEventListener("abort", transferCanceled, false);
    } else {
        req.onreadystatechange = function() {
            document.getElementById('progress_container').style.display="block";
            document.getElementById('enter_progress').style.width= (req.readyState*15)+"%";
            document.getElementById('enter_progress').innerHTML= (req.readyState*15)+"%";
            if (req.readyState === 4) {
                transferComplete();
            }
        }
    }
    
    req.open("GET",url,true);
    if (req.overrideMimeType) {
        req.overrideMimeType('text/plain; charset=x-user-defined-binary');
    }
    req.send();
    
    loaderTimer = setTimeout(function() { loaderTimedOut = true; transferFailed(); },loaderTimeout*1000);
}


// progress on transfers from the server to the client (downloads)
function updateProgress(evt) {
	
  if (loaderFail) return;
  
    //document.getElementById("progress").innerHTML="progress"+evt.total;
  if (evt.lengthComputable) {
  	
    var percentComplete = evt.loaded / evt.total*100;
    if(loader){
	if ( loader.progress < 1 ) {
		
        loader.progress += percentComplete
  	} else {
        loader.waitAndStop();
        } //if
        
     }else{
     document.getElementById('enter_progress').innerHTML= Math.round(percentComplete) + "%";
     document.getElementById('enter_progress').style.width=percentComplete+"%";    
     }
  } else {
     
  }
}

function transferComplete(evt) {
   clearTimeout(loaderTimer);
    var tt = new Date().getTime()-loadTimeStart
    var loadTimeSeconds = (tt/1000.0);    
    var bytesPerSecond = testFileSize/loadTimeSeconds;
    var mbytesPerSecond = Math.round((bytesPerSecond/1000000)*1000)/1000.0;
    var mbitsPerSecond = Math.round(((bytesPerSecond/1000000)*8)*1000)/1000.0;
 
    if (loaderFail) {   // let them choose
        if (loaderTimedOut) {
            mbitsPerSecond = loaderSpeeds.low;
        } else {
            mbitsPerSecond = loaderSpeeds.high;
            loaderAutoAdvance = false;  // prevent auto-advance
        }
    }
    
//    alert(mbitsPerSecond);
//    alert(mbPerSecond+"mb/s");

    var target = 'lo';

    var targetUrl = loaderUrls.low;
    
    
    
   // $('#start_low').click(function() { window.location.href = loaderUrls.low; });    
    //$('#start_med').click(function() { window.location.href = loaderUrls.med; });    
   // $('#start_high').click(function() { window.location.href = loaderUrls.high; });    
    
    if (mbitsPerSecond >= loaderSpeeds.high) {
        bandwidth = 'high';
       
    } else if (mbitsPerSecond >= loaderSpeeds.med) {
       bandwidth = 'med';

    }
    check_environment()
      
}

function transferFailed(evt) {
//  alert("An error occurred while transferring the file.");
    loaderFail = true;
    transferComplete();
}

function transferCanceled(evt) {
//  alert("The transfer has been canceled by the user.");
  loaderFail = true;
  transferComplete();
}


          // create a TowerLoader



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
