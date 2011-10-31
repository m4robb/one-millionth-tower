var loader

function bandwidth_progress(  ) {
          // create a TowerLoader
            preload_time_start = new Date().getTime()
            loader = new TowerLoader({
            markerClass: "tower-loader-marker",
            container: "tower-loader-inner"
	          loader.start();
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