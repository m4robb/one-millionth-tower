// JavaScript Document

function write_wiki( url,target, title_txt ) {
 document.getElementById( "live_feed_title").innerHTML=""
 document.getElementById( "live_feed_sub").innerHTML=""
 document.getElementById( "semantic_wrap").innerHTML=""
 document.getElementById( "semantic_wrap").style.display="none"
 var  _text, _guid = Popcorn.guid(), _title,_desc; 
        window["place_wiki_data"] = function( data ) {	 

          if(_title){document.getElementById("live_feed_title").removeChild( _title )}
          if(_desc){document.getElementById("live_feed_sub").removeChild( _desc )}
     	 _title = document.createElement( 'div' );	
        _title.innerHTML = "<span class='bold_font_12'>WIKIPEDIA: "+title_txt+"</span>";
        // get the content of the wiki article
        _desc = document.createElement( 'p' );
        // get the article text and remove any special characters
        _text = data.parse.text[ "*" ].substr( data.parse.text[ "*" ].indexOf('<p>') );
        
       // var rx=new RegExp("<table .*?</table>","gi");
       // _text=_text.replace(rx,"eeeeeeeeeeee");
        _text = _text.replace(/((<table(.|\n)+?table>)|(\((.*?)\) )|(\[(.*?)\]))/g, "");
       // _text.replace(/\s*\<table.*?\</table>\s*/g, '')

 
        console.log(_text)
        _desc.innerHTML =  _text.substr( 0,  1000 ) + " ..." ;
        $('#live_feed').fadeIn(1000, function() {})
	      document.getElementById("live_feed_title").appendChild( _title );
              document.getElementById("live_feed_sub" ).appendChild( _desc );
              document.getElementById("live_feed_more" ).innerHTML  = "<a href='javascript:load_external_page_wiki(\""+url+"\")'>READ FULL ARTICLE IN NEW WINDOW</a>" 
              var _fired = true;
      };
      

        Popcorn.getScript("http://en.wikipedia.org/w/api.php?action=parse&props=text&page=" + url.slice( url.lastIndexOf("/")+1)  + "&format=json&callback=place_wiki_data");


    }


function write_wiki_google( url) {

      var  _text, _guid = Popcorn.guid(); 
     

        //alert(Popcorn.getScript("http://en.wikipedia.org/w/api.php?action=parse&props=text&page=" + url.slice( url.lastIndexOf("/")+1)  + "&format=json&callback=place_wiki_data"))
        window["place_wiki_data"] = function( data ) {
		  

        var _desc = document.createElement( 'p' );
        // get the article text and remove any special characters
        _text = data.parse.text[ "*" ].substr( data.parse.text[ "*" ].indexOf('<p>') );
        
        //alert(_text)
        //_text = _text.replace(/((<table(.|\n)+? table>))/g, "");
        _desc.innerHTML = "<span class='body_text' style='font-size:12px;color:#000'>"+_text.substr( 0,  15000 ) + " ...</span>" ;
				Cufon.refresh();
        document.getElementById("google_wiki_text" ).appendChild( _desc );
				document.getElementById("google_wiki_text").style.height="auto";
				if(parseInt(document.getElementById("google_wiki_text").style.height) > 600){
					$('#scrollcontainer').show()
				}else{
					$('#scrollcontainer').hide()
				}
        var _fired = true;
      };
      

        Popcorn.getScript("http://en.wikipedia.org/w/api.php?action=parse&props=text&page=" + url.slice( url.lastIndexOf("/")+1)  + "&format=json&callback=place_wiki_data");


    }
var idx = 0;

function write_flickr( tags,target,apikey,userid,title_txt,username) {
	
   document.getElementById( "semantic_wrap").innerHTML=""
   document.getElementById( "semantic_wrap").style.display="none"	
   document.getElementById( "live_feed_title").innerHTML=""
   document.getElementById( "live_feed_sub").innerHTML=""
    	var containerDiv,
    	  _userid,
        _uri,
        _link,
        _image,
        _count = 15 ,
        _height = "50px",
        _width = "50px",
        _padding = "5px",
        _border=  "0px";


    containerDiv = document.createElement( "div" );
    containerDiv.id = "flickr" + idx;
    containerDiv.style.width = "100%";
    containerDiv.style.height = "100%";
    containerDiv.style.display = "none";
    idx++;

	var _title = document.createElement( 'div' );	
	 _title.innerHTML = "<span class='bold_font_12'>FLICKR: "+title_txt+"</span>";

		
		
    // ensure the target container the user chose exists
    if ( document.getElementById( "live_feed_sub" ) ) {
      document.getElementById( "live_feed_sub" ).appendChild( containerDiv );
    } else { 
      throw ( "flickr target container doesn't exist" );
    }
    
    // get the userid from Flickr API by using the username and apikey
    var isUserIDReady = function() {
      if ( !_userid ) {
	 	
        _uri  = "http://api.flickr.com/services/rest/?method=flickr.people.findByUsername&";        
        _uri += "&api_key=" + apikey + "&format=json&jsoncallback=write_flickr";

        Popcorn.getJSONP( _uri, function( data ) {
         // _userid = data.user.nsid;
          getFlickrData();
        });
		
		

      } else {

        setTimeout(function () {
          isUserIDReady();
        }, 5 );
      }
    };
 
    var getFlickrData = function() { 
      _uri  = "http://api.flickr.com/services/feeds/photos_public.gne?";
      if ( _userid ) {       
        _uri += "id=" + _userid + "&";
      }
    
      if ( tags ) {
        _uri += "tags=" + tags + "&";
      }
      _uri += "lang=en-us&format=json&jsoncallback=flickr"; 
       Popcorn.xhr.getJSONP( _uri, function( data ) {
				
       var flickr_url = data.link 
        Popcorn.forEach( data.items, function ( item, i ) { 
											   
          if ( i < _count ) {

            var _link2 = document.createElement( 'a' );
	    _link2.setAttribute( 'onclick', 'load_semantic_data(\''+item.media.m+'\')' );
            _link2.setAttribute( 'href', "#" );
             var _image2 = document.createElement( 'img' );
            _image2.setAttribute( 'src', item.media.m );
            _image2.setAttribute( 'height',_height );
            _image2.setAttribute( 'width', _width );
            _image2.setAttribute( 'style', 'border:' + _border + ';padding:' + _padding );
            _link2.appendChild( _image2 );         
            containerDiv.appendChild( _link2 );

          } else {
	     load_semantic_data(data.items[0].media.m)
	     document.getElementById("live_feed_title").appendChild( _title );
	     document.getElementById("live_feed" ).style.display="block"
             document.getElementById("live_feed_more" ).innerHTML  = "<a href='javascript:load_external_page_wiki(\""+flickr_url+"\")'>VIEW PHOTOSTREAM IN NEW WINDOW</a>" 	     
	     containerDiv.style.display = "block";
	     $('#live_feed').fadeIn(1000, function() {})
            return false;
          }
        });
      });
	
    };

    if ( username && apikey ) {
    	
      isUserIDReady();
    }
    else {
      _userid =userid;
      getFlickrData();
    }	
}

function write_google_news(topic,target){
 document.getElementById( "live_feed_title").innerHTML=""
 document.getElementById( "live_feed_sub").innerHTML=""
 document.getElementById( "semantic_wrap").innerHTML=""
 document.getElementById( "semantic_wrap").style.display="none"

  var scriptLoaded = false,
      scriptLoading = false,
      callBack     = function( data ) {

        if ( typeof google !== 'undefined' && google.load ) {

          google.load("elements", "1", {packages : ["newsshow"], callback: function() {scriptLoaded = true;}});
        } else {

          setTimeout( function() {

            callBack( data );
          }, 1);
        }
      };
      
        if ( !scriptLoading ) {
          scriptLoading = true;
          Popcorn.getScript( "http://www.google.com/jsapi", callBack );
        }

		var _title = document.createElement( 'span' );	

		
		_title.innerHTML = topic || "Top Stories";
		
        var container = document.createElement( 'div' );
        if ( document.getElementById( target ) ) {
          document.getElementById( "live_feed_sub" ).appendChild( container );
         //container.appendChild( container );
        }   
		

		
        var readyCheck = setInterval(function() {
          if ( !scriptLoaded ) {
            return;
          }
          clearInterval(readyCheck);
 			var newsShow = new google.elements.NewsShow( container, {
            format : "300x250",
            queryList : [
              { q: topic || "Top Stories" }
            ]
          } );

        }, 5);
		

		document.getElementById( "live_feed" ).style.display="block";
		document.getElementById( "live_feed_title").appendChild( _title );
	        container.style.display = "block";


      }

