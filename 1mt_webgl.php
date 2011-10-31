<? include("1mt_global_inc.php"); ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="chrome=1">


<meta name="description" content="ONE MILLIONth TOWER re-imagines the urban landscape, using the magic of cinema, architecture, animation and cutting-edge open-source web technology to transform a dilapidated highrise neighbourhood into a vibrant resident-led community. A documentary set in an HTML5 virtual landscape." />
<meta name="keywords" content="NFB, National Film Board, HTML5, Firefox, WebGL, interactive documentary, Emmy, highrise, highrises, apartments, architecture, animation, google streetview, urban, suburbs,Urban renewal, participatory design, collaboration, resident-led, tenant's rights, imagination, transformation, urban planning, public space, playground, chrome, social innovation" />



<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
<title>NFB - One Millionth Tower</title>

<link rel="stylesheet" href="<?= $media_server_url?>css/style.css" type="text/css" />

<script type="text/javascript" src="<?= $media_server_url?>three/build/Three.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/custom_imageutils.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/custom_JSONLoader.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>three/js/RequestAnimationFrame.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>three/js/Stats.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>three/js/Detector.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>three/js/customQuake_bk.js"></script>

<script type="text/javascript" src="<?= $media_server_url?>js/tween.js"></script>
<script src="<?= $media_server_url?>popcorn/popcorn.js"></script>
<script src="<?= $media_server_url?>popcorn/plugins/code/popcorn.code.js"></script>
<script src="<?= $media_server_url?>popcorn/plugins/subtitle/popcorn.subtitle.js"></script>
<script src="<?= $media_server_url?>js/subtitle_manager.js"></script>
<script src="<?= $media_server_url?>js/build_timeline_01.js"></script>
<script src="<?= $media_server_url?>js/camera_move.js"></script>
<script src="<?= $media_server_url?>js/tower_utils.js"></script>
<script src="<?= $media_server_url?>js/get_point.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/particles.js"></script>
<script src="<?= $media_server_url?>js/materials.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/terrain_builder.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/create_scenes.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/precipitation.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/video_alpha.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/video_no_alpha.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/html5Preloader.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/preloading.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/constellation.js"></script>
<script type="text/javascript" src="<?= $media_server_url?>js/fonts/helvetiker_bold.typeface.js"></script>

<script type="text/javascript" src="<?= $media_server_url?>js/text_builder.js"></script>

<script src="<?= $media_server_url?>js/cufon-yui.js" type="text/javascript"></script>
<script src="<?= $media_server_url?>js/particles_large_01_geese.js" type="text/javascript"></script>
<script src="<?= $media_server_url?>js/xpath_search.js" type="text/javascript"></script>

<script src="<?= $media_server_url?>js/main_body_font.js" type="text/javascript"></script>

<script src="<?= $media_server_url?>js/semantic_data_writer.js" type="text/javascript"></script>

<script src="<?= $media_server_url?>js/nfb_font.js" type="text/javascript"></script>
<script src="<?= $media_server_url?>js/Helvetica_Neue_Bold_Condensed_700.font.js" type="text/javascript"></script>
<script type="text/javascript">


	var GLOBAL_MEDIA_SERVER = "", GLOBAL_MEDIA_SERVER_THINK;
	var ffversion;
			if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
			ffversion=new Number(RegExp.$1) // capture x.x portion and store as a number
			}
			if(! ffversion){
       GLOBAL_MEDIA_SERVER_THINK = "";

     	}else{
  		if(ffversion  <9){
  	  GLOBAL_MEDIA_SERVER_THINK = "";
  		}
    }


			 Cufon.replace('.start_links', { fontFamily: 'Helvetica Neue', hover:true });


        Cufon.replace('.default_nav_grey', { fontFamily: 'Helvetica Neue Bold Condensed', hover:true });


			 Cufon.replace('.footer_links', { fontFamily: 'standard 07_56', hover:true });




			//Cufon.replace('.title'); // Requires a selector engine for IE 6-7, see above
</script>

<script src="js/render_engine.js" type="text/javascript"></script>
<script src="js/mouse_control.js" type="text/javascript"></script>

<script type="text/javascript">
//////////////////// 3d engine

function start_everything(_weather_code){

      weather_code = parseInt(_weather_code);

      if(!weather_code){weather_code=1}
      load_img_set(1)




}

			var AMOUNT = 100;
			var weather_code;
			var container


			var camera, scene, renderer,projector
			var video_play_status = 0;

			var pano_mesh;
      var height = window.innerHeight-70;

      		  if(height<570){

      		  height = 570
      		  }




		  var width = window.innerWidth;


			var mouseX = 0;
			var mouseY = 0;
			//var ccX,ccY;
                         var fov = 75,isUserInteracting = false,
			onMouseDownMouseX = 0, onMouseDownMouseY = 0,
			lon = 123, onMouseDownLon = 0,
			lat = 60, onMouseDownLat = 0,
			phi = 0, theta = 0;

			var TC_height = -50;

			var explore = 0,is_intro = 1,is_outro;
     			var w_degree=-20;
			var objects = [],global_view_mode,tween_array  =[]
			var videos_alpha =[]

			var goose_trigger;
			var can_move = true;
			var global_pause_state = 0
			var maquette_array =[]
			var active_maquette;

			var material_library

			var tc1_complete=0,tc2_complete=0,rv1_complete=0,rv2_complete=0,rv3_complete=0,mk_complete=0,outro_complete=0

    window.onresize = function(event) {
    height = window.innerHeight-70;
    width = window.innerWidth;
    renderer.setSize( width, height )
    container.style.width = "99%";
    container.style.height = height+"px";
    //$('#main_menu').css('height', height+"px")
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
}


var init_3d = function () {

			  // createScroll("#googlebut", "#googlebutcont", "#google_content_container", "#google_wiki_text");

				container = document.getElementById( '3d_screen');
				var global_wrapper = document.getElementById( 'global_wrapper');
				var startbar = document.getElementById( 'start_box');
				var global_footer = document.getElementById( 'global_footer');
				container.style.height = height+"px"
				global_wrapper.style.height = height+"px"
				//$('#main_menu').css('height', height+"px")

				camera = new THREE.Camera( 54, width / height, 1, 22000);
				camera.position.z = -2000;
			  	camera.position.y = -150;
				scene = new THREE.Scene();

				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor( 0xffffff, 1 );
				renderer.sortObjects = false
				renderer.setSize( width, height );

				container.appendChild( renderer.domElement );
				projector = new THREE.Projector();



			  container.addEventListener( 'mousedown', onDocumentMouseDown, false );
				container.addEventListener( 'mousemove', onDocumentMouseMove, false );
				container.addEventListener( 'mouseup', onDocumentMouseUp, false );
				container.addEventListener( 'mouseout', onDocumentMouseOut, false );
				container.addEventListener( 'mouseover', onDocumentMouseOver, false );

				//overlays
				document.getElementById( 'startbar' ).addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.getElementById( 'startbar' ).addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.getElementById( 'startbar' ).addEventListener( 'mouseup', onDocumentMouseUp, false );


				//document.getElementById( 'live_feed' ).addEventListener( 'mousedown', onDocumentMouseDown, false );
				//document.getElementById( 'live_feed' ).addEventListener( 'mousemove', onDocumentMouseMove, false );
				//document.getElementById( 'live_feed' ).addEventListener( 'mouseup', onDocumentMouseUp, false );


				//document.getElementById( 'main_menu' ).addEventListener( 'mousedown', onDocumentMouseDown, false );
				//document.getElementById( 'main_menu' ).addEventListener( 'mousemove', onDocumentMouseMove, false );
				//document.getElementById( 'main_menu' ).addEventListener( 'mouseup', onDocumentMouseUp, false );

				document.getElementById( 'main_story_dashboard' ).addEventListener( 'mouseover', main_story_dashboard_mouse_over, false );
				document.getElementById( 'main_story_dashboard' ).addEventListener( 'mouseout', main_story_dashboard_mouse_out, false );


				global_footer.addEventListener( 'mouseup', onDocumentMouseUp, false );

				container.addEventListener( 'dblclick', onDocumentDoubleClick, false );
				container.addEventListener( 'rightclick', onDocumentRightClick, false );

				document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keyup',onKeyUp, false );

				startbar.addEventListener( 'mousemove', onStartBarMouseOver, false );
				startbar.addEventListener( 'mouseout', onStartBarMouseOut, false );

				global_footer.addEventListener( 'mousemove', onFooterBarMouseOver, false );
				container.style.cursor="move"



 if(height<570){
		  document.getElementById('startbar').style.top= "0px"

		  }


				material_library = new MaterialLibrary()
				material_library.load_materials();
				scene.fog = new THREE.FogExp2( material_library.fog_color, material_library.fog_density);

				terrain_builder()

				document.getElementById('bells').volume=0
				document.getElementById('audio').volume=0
				document.getElementById('geese').volume=0


				document.getElementById('audio').play()
				document.getElementById('bells').play()
				document.getElementById('geese').play()

				console.log(material_library.weather_condition)
				 if(material_library.weather_condition =="night"){
				  document.getElementById('audio').src="<?= $media_server_url?>videos/ambient/ambient_night.ogg"
				  document.getElementById('audio').play()
				 }

				 if(material_library.weather_condition =="rain"){
				  document.getElementById('audio').src="<?= $media_server_url?>videos/ambient/ambient_rain.ogg"
				  document.getElementById('audio').play()
				 }


				 if(material_library.weather_condition =="snow"){
				  document.getElementById('audio').src="<?= $media_server_url?>videos/ambient/ambient_snow.ogg"
				  document.getElementById('audio').play()
				 }

				var dummy = { v: document.getElementById('audio').volume};
				 new TWEEN.Tween( dummy ).to( { v: .7 }, 3000 )
				.onUpdate( function() {
 				document.getElementById('audio').volume = this.v
 				})
				.start();

				var dummy = { v: document.getElementById('bells').volume};
				 new TWEEN.Tween( dummy ).to( { v: .6 }, 3000 )
				.onUpdate( function() {
 				document.getElementById('bells').volume = this.v
 				})
 				.delay(3000)
				.start();
				if(material_library.weather_condition !="night"){
				var dummy = { v: document.getElementById('geese').volume};
				 new TWEEN.Tween( dummy ).to( { v: .3 }, 3000 )
				.onUpdate( function() {
 				document.getElementById('geese').volume = this.v
 				})
 				.delay(5000)
				.start();

			}

			}








function animate() {
	requestAnimationFrame( animate );
	if(global_pause_state == 0 || global_pause_state == 2){
		TWEEN.update();
		render();
		//stats.update();
	}


}


function createScroll(scrollbut, scrollbutcont, scrollcontainer, scrollinner) {
	$(scrollbut).draggable({
		axis : 'y',
		containment : 'parent',
		helper : function() {
			return $(scrollbut).clone().css('opacity', 0)
		}
	});

	var scrollheight = $(scrollcontainer).height() - $(scrollinner).height();
	var scrollbarheight = $(scrollbutcont).height() - $(scrollbut).height();

	var offset = scrollheight / scrollbarheight;

	$(scrollbut).bind("drag", function(event, ui) {
		$(scrollbut).stop().animate({
			top : ui.helper.position().top,
			easing : 'easeOutQuad'
		}, 500, function() {
			//animation complete
		});
		$(scrollinner).stop().animate({
			marginTop : (-ui.helper.position().top * offset)/2,
			easing : 'easeOutQuad'
		}, 500, function() {
			//animation complete
		});
	});
}




		</script>

        <script src="js/jquery.js"></script>
        <script src="js/jquery-ui-1.8.16.custom.min.js" type="text/javascript"></script>
        <script src="js/jquery.easing.1.3.js" type="text/javascript"></script>



	<script type='text/javascript' src='js_autosuggest/jquery.autocomplete.js'></script>

	<link rel="stylesheet" type="text/css" href="js_autosuggest/jquery.autocomplete.css" />
  <script>
/////////////////////COUNTRY SELECTOR
function pre_start(){
	if(document.getElementById('country_global').value != "Type in the name of a country, any country"){
		set_var("chosen_land",document.getElementById('country_global').value);
	}else{
		set_var("chosen_land","Italy");
	}
	tracking_section ="explore/"
	var tracking_url = track_base+tracking_section
	track_this('flythru')
	//piwikTracker.setCustomUrl(tracking_url )
 // piwikTracker.trackPageView();
	start()
}

function pre_start_linear(){

	tracking_section ="justwatch/"
	//var tracking_url = track_base+tracking_section
	//piwikTracker.setCustomUrl(tracking_url )
  //piwikTracker.trackPageView();
  camera.position.y = -100
  do_linear = 1
  track_this('justwatch')
	set_var("chosen_land","Italy");
	start()
}

function findValue(li) {

	if( li == null ) return alert("No match!");
	if( !!li.extra ) var sValue = li.extra[0];
	else var sValue = li.selectValue;
	document.getElementById('enter_btn').style.display="block"
	set_var("chosen_land",sValue)
	//get_xpath(sValue)
}

function selectItem(li) {
	findValue(li);
}

function formatItem(row) {
	return row[0] ;
}

function searchKeyPress(e)
        {
                // look for window.event in case event isn't passed in
                if (window.event) { e = window.event; }
                if (e.keyCode == 13)
                {
	            set_var("chosen_land",document.getElementById("country_global").value)
				document.getElementById("results_id").style.display="none"
                move_to_OUTRO_2()
                }
        }


$(document).ready(function() {
	$("#country_global").autocomplete(
		"js_autosuggest/search_xml.php",

		{
			delay:10,
			minChars:1,
			matchSubset:1,
			cacheLength:10,
			onItemSelect:selectItem,
			onFindValue:findValue,
			autoFill:true,
			maxItemsToShow:10
		}
	);
});
  </script>
</head>
<body onLoad=""  style="margin:0">


<!--------------------------IFRAMES ---------------------------------->
<?
global $onfb_ntpg_app;
$onfb_ntpg_app = "interactive";
onfb_smart_navbar_print();

?>
<div id="3d_screen" style="display:none;position:absolute;top:35px;width:99%;height:100%;z-index:2"></div>

<iframe name="code_run" src="blank.php" style="display:none"></iframe>
<div id="global_wrapper" style="position:absolute;top:35px;width:100%">
<iframe id="street_view_underlay" frameborder="0" allowtransparency="true" src="blank.php" style="background:transparent;opacity: 100;display:none;position:absolute;width:100%;height:100%;overflow:hidden;z-index:1"></iframe>
<iframe id="streetview_inset" scrolling="no" frameborder="0" src="blank.php" style="display:none;position:absolute;z-index:6000;width:800px;height:500px;opacity: 0;overflow:hidden"></iframe>
<iframe id="page_overlay" frameborder="0" allowtransparency="true" src="blank.php" style="background:transparent;display:none;position:absolute;width:100%;height:100%;z-index:7999;"></iframe>
<iframe id="weather" scrolling="no" allowtransparency="true"  frameborder="0" src="yahoo_rss_reader.php" style="display:none;position:fixed;bottom:35px;right:0px;z-index:1001;height:90px;width:300px;overflow:hidden"></iframe>



<div class="footer_links" style="display:block;position:absolute;top:0;z-index:5000;pointer-events:none" id="timecode"></div>



<div id="breadcrumbs">
<center>
<table width=170>
<tr>
<td><a href="javascript:move_to_TC();"><img id="bread_crumbs_tc1" src ="images/breadcrumbs/tc.png" border=0></a></td>
<td><a href="javascript:move_to_RV();"><img id="bread_crumbs_rv1" src ="images/breadcrumbs/ravine.png" border=0></a></td>
<td><a href="javascript:move_to_GV1();"><img id="bread_crumbs_rv2"src ="images/breadcrumbs/ravine.png" border=0></a></td>
<td><a href="javascript:move_to_GV2();"><img id="bread_crumbs_rv3" src ="images/breadcrumbs/ravine.png" border=0></a></td>
<td><a href="javascript:move_to_MK();"><img id="bread_crumbs_mk" src ="images/breadcrumbs/mk.png" border=0></a></td>
<td><a href="javascript:move_to_CHOOSE_A_COUNTRY();"><img id="bread_crumbs_outro" src ="images/breadcrumbs/outro.png" border=0></a></td>
<td width=20></td>
<td>
<div id="special_feature_btns" style="display:none">
<table width=80>
<tr>
<td><a href="javascript:move_to_IMAGINE()"><img id="bread_crumbs_sf1" src ="images/breadcrumbs/sf_01.png" border=0></a></td>
<td><a href="javascript:move_to_LIVING_PROOF()"><img id="bread_crumbs_sf2" src ="images/breadcrumbs/sf_02.png" border=0></a></td>
<td><a href="javascript:move_to_HIGHRISE();"><img id="bread_crumbs_sf3" src ="images/breadcrumbs/sf_01.png" border=0></a></td>
<td><a href="javascript:move_to_TECH()"><img id="bread_crumbs_sf4"src ="images/breadcrumbs/sf_02.png" border=0></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</center>
</div>


<!-- MAIN DASHBOARD  -->
<div id="lat_long_text" style="display:none"></div>

<div id="debug_fireworks"><!--<a href="javascript:go_green()">green</a>--></div>
<div id="sidebar">
<!--<a href="javascript:close_help()"><img src="images/white_x.png"></a>-->
<div id="debug_text"></div>
<div id="sidebar_inner">
<div id="camera_controller"></div>
</div>
</div>



<!-- TOP DASH -->

<div id="main_story_dashboard"  onmouseover="stop_spin()" onMouseOut="start_spin()">
<div id="btn_go_menu" onclick='javascript:load_menu()'><a class="bold_font_12_white" href="javascript:load_menu();">STORY MENU</a></div>
<div id="btn_skip_video" style="display:none; width:100%;margin-top:10px;font-size:15px"><table><tr><td><a class="bold_font_12" href="javascript:go_explore();">CLOSE</a></span></td><td><a class="default_nav_white" href="javascript:go_explore();">X</a></td></tr></table></div>
<div id="btn_stop_video" style="text-align:right;padding-right:10px" onclick="track_exit_event();go_explore()"><a id="control_label" class="bold_font_12" href="#">X</a></div>
<div id="btn_stop_video_linear" style="text-align:right;padding-right:10px" onclick="load_menu()"><a id="control_label_" class="bold_font_12" href="#"> STOP X</a></div>

<div id="btn_close_menu" style="display:none"><a class="bold_font_12" href="javascript:close_menu();">CLOSE X</a></div>
<div id="btn_close_google" style="display:none;padding:0"><a href="javascript:uncreate_google_pano();"><img  src="images/return_to_1mt_3d.jpg" border=0></a></div>
<div id="btn_close_google_linear" style="display:none"><a class="bold_font_12" href="javascript:load_menu();"><img  src="images/return_to_1mt_3d.jpg" border=0></a></div>

<div id="progress_header_sf" style="margin-top:10px">

<div style="float:left">
<div id="bar-holder_sf">
<div id="progress_bar_timeline_sf" style="pointer-events:none;background-color:#fff;opacity:.8;position:absolute;right:0px;top:0px;height:8px;z-index:400;width:100%"></div>
<div class="long-bar" style="cursor:none" id="light-blue-grey"></div>
</div>
</div>
<div id="timer_sf" class="normal_font_10" style="margin-top:-4px;margin-left:5px;float:left;font-size:10px;"></div>
</div>

<div id="progress_header">

<div style="float:left">
<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
    <div id="track-btn-holder">
       <div id="track_backward" class="track-btns"><a href="javascript:track_previous()" onMouseOver="progressAct('rewind')" onMouseOut="progressInact('rewind')"><img name="rewind" src="images/track-rewind.png" /></a></div>
        <div id='track_play' class="track-btns" style="display:none"><a href="javascript:track_play()" onMouseOver="progressAct('play')" onMouseOut="progressInact('play')"><img name="play" src="images/track-play.png" /></a></div>
  		<div id='track_pause' class="track-btns"><a href="javascript:track_pause()" onMouseOver="progressAct('pause')" onMouseOut="progressInact('pause')"><img name="pause" src="images/track-pause.png" /></a></div>
        <div id="track_forward" class="track-btns"><a href="javascript:track_next()" onMouseOver="progressAct('fastForward')" onMouseOut="progressInact('fastForward')"><img name="fastForward" src="images/track-fast-forward.png" /></a></div>
  </div>
  </td>
  </tr>
  <tr>

  <td align="center">

    <div id="bar-holder" onMouseOut="setInvisibility()">
    <div id="progress_bar_timeline" style="pointer-events:none;background-color:#ffffff;opacity:.5;position:absolute;right:0px;top:0px;height:8px;z-index:400;width:100%"></div>
    <div class="long-bar" id="black-text"></div>
    <div onClick="start_timeline()" onMouseOver="setVisibility('block','3','Introduction')" onMouseOut="setInvisibility()" class="long-bar" id="linear_intro"></div>
    <div onClick="move_to_TC()" onMouseOver="setVisibility('block','74','Tennis Court')" class="long-bar" id="linear_tc"></div>
    <div onClick="move_to_RV()" onMouseOver="setVisibility('block','120','Ravine')"  class="long-bar" id="linear_rv"></div>
    <div onClick="move_to_MK()" onMouseOver="setVisibility('block','218','Parking Lot')"  class="long-bar" id="linear_mk"></div>
    <div onClick="move_to_OUTRO()" onMouseOver="setVisibility('block','305','Whole World')" class="long-bar" id="linear_ot"></div>
    </div><!--bar-holder-->
    </td>
    </tr>
    </table>
    </div>
    <div id="timer" class="normal_font_10" style="margin-left:5px;margin-top:12px;float:left;font-size:10px;"></div>
</div><!--end header-->

</div><!-- end dash -->

<!-- MORE BUTTONS AND OVERLAYS -->

<div  onmouseover="stop_spin()" onMouseOut="start_spin()" id="subtitles_toggle" style="position:fixed;bottom:35px; z-index:602;">
<div id="subtitles_links" style="padding-left:10px; margin-bottom:20px;display:none;background:url(images/sidebar_bg_white.png) repeat">
<table width=100%>
<tr>
<td valign=top>
</td>
<td valign=top>
<a href="#" onclick="$('#subtitles_links').css('display', 'none')" class="bold_font_12">X</a>
</td>
</tr>
<tr>
<td valign=top>
<a href="javascript:load_gl_subtitles('en')" class="bold_font_12">ENGLISH</a>
<br>
<a href="javascript:load_gl_subtitles('fr')" class="bold_font_12">FRANCAIS</a>
<br>
<a href="javascript:unload_subtitles()" class="bold_font_12">SUBTITLES OFF</a>
<br>
<a href="javascript:load_external('http://www.universalsubtitles.org/en/teams/HIGHRISE/')"  class="bold_font_12">HELP US TRANSLATE INTO YOUR LANGUAGE</a>
<br>

</td>
<td valign=top>
</td>
</tr>
</table>

</div>

<a  onmouseover="stop_spin()" onMouseOut="start_spin()" id="btn_subtitles" style="padding-left:10px;padding-top:5px;width:150px;height:25px;display:none;background:url(images/sidebar_bg_white.png) repeat" href="#" onclick="$('#subtitles_links').css('display', 'block')" class="bold_font_12">SUBTITLES</a>
</div>

<div id="subtitle-container" class="subtitle_font">
</div>

<script type="text/javascript" language="JavaScript">

if (document.images){
	var rewindOff = new Image();
	rewindOff.src = "images/track-rewind.png";
	var rewindOn = new Image();
	rewindOn.src = "images/track-rewind-hover.png";

	var playOff = new Image();
	playOff.src = "images/track-play.png";
	var playOn = new Image();
	playOn.src = "images/track-play-hover.png";

	var fastForwardOff = new Image();
	fastForwardOff.src = "images/track-fast-forward.png";
	var fastForwardOn = new Image();
	fastForwardOn.src = "images/track-fast-forward-hover.png";

	var pauseOff = new Image();
	pauseOff.src = "images/track-pause.png";
	var pauseOn= new Image();
	pauseOn.src = "images/track-pause-hover.png";
}

function progressAct(imgName){
	if (document.images)
    	document.images[imgName].src = eval(imgName + "On.src");
}

function progressInact(imgName){
	if (document.images)
    document.images[imgName].src= eval(imgName + "Off.src");
}

function setVisibility(visibility,offset, txt){
	document.getElementById('black-text').style.display = "block";
	document.getElementById('black-text').style.left=offset-15+"px"
	document.getElementById('black-text').innerHTML = txt
}

function setInvisibility(){
		document.getElementById('black-text').style.display = "none";
}

function track_pause(){
	pause_video()
	document.getElementById('track_play').style.display = "block";
	document.getElementById('track_pause').style.display = "none";
}

function track_play(){
	resume_scene()
	document.getElementById('track_play').style.display = "none";
	document.getElementById('track_pause').style.display = "block";
}
</script>

<script>
function check_input(obj){
	//switch_camera("railed")
	//document.getElementById('enter_btn').style.display="none"
	obj.focus();
	if(obj.value=="Type in the name of a country, any country"){
		obj.value =""
	}
}
</script>





<div id="landscape"  class="normal_font_10" style="display:none;position:absolute;top:170px; left:610px; z-index:500;width:220px">
This documentary was built using new open source technologies: HTML5, webGL and Mozilla's Popcorn.
</div>

<div id="friends" class="normal_font_10" style="display:none;position:absolute;top:270px; left:610px; z-index:500">
Jim Guthrie + Owen Pallett<br>
Ob, Priti, Faith, Jamal<br>
Graeme Stewart<br>
E.R.A. Architects<br>
Heather Frise<br>
Howie Shia, Lilian Chan<br>
+ Kelly Sommerfeld<br>
Branden Bratuhin<br>
Sarah Arruda<br>
Maria-Saroja Ponnambalam<br>
Gerry Flahive<br>
Silva Basmajian<br>
</div>

<div id="explore_text"  class="normal_font_10" style="display:none;position:absolute;top:380px; left:610px; z-index:500;width:210px">
EXPLORE the full documentary on your own.
Walk and click through a virtual neighbourhood
to unleash stories of imagination on six locations.
</div>

<div id="linear_text"  class="normal_font_10" style="display:none;position:absolute;top:460px; left:610px; z-index:500;width:193px">
Sit back and watch the full six minute
documentary unfold in an animated virtual space.
</div>

<div id="standard_text"  class="normal_font_10" style="display:none;position:absolute;top:480px; left:610px; z-index:500;width:193px">
Watch the same story in the standard,
non-interactive non-experimental version.
</div>









<!-- START BAR -->
<div id="startbar" style="display:none; padding:10px; background:url(images/sidebar_bg_white.png) repeat">

<div id="title_container">

    <div id="highrise_presents" style="display:none;position:absolute;top:0">
    	<img src="images/highrise_project.png">
    </div>

	<div id="1mtlogo" style="display:none;position:absolute;top:0"><img src="images/1mt_logo_clear_webgl.png">
    </div>

</div>
    <!-- 1mt text -->
	<div id="1mttext" style="display:none;">
        <div class="heavy_font_16 doc_intro">
       		an interactive documentary <a  onMouseOver="$('#landscape').fadeIn(500, function() {})" onMouseOut="$('#landscape').fadeOut(500, function() {})" href="#">experiment</a>
        	<br>
        	by Katerina Cizek, Mike Robbins + friends
        </div>

         <div class="heavy_font_11 doc_intro">
music by Jim Guthrie, Owen Pallet
        </div>

        <div class="normal_font_11" style="width:512px">
        	<p>
			You see them all over the world. More than a billion of us live in highrises. But most of these low- and middle-income buildings are now aging and falling into disrepair. </p>
          <p>
            Could life in the global highrise be different?
                    </p>
          <p>
Take an interactive journey through a virtual landscape,
where the power of imagination transforms spaces - and lives.
          </p>
        </div>


    </div>
 <!-- 1mt text -->

   <!-- start box -->
    <div id="start_box" style="display:none;">

    	<div id="enter_btn">

        	<div id="enter_progress" style="text-align:left;height:20px; margin-bottom:15px; width:531px;" class="enter_btn_01"></div>

            <div style="width:531px; height:20px;text-align:right;">
       			<a id="explore_text_btn" style="display:none;margin-right:5px; position:relative; top:3px;"  class="bold_font_14" href="javascript:pre_start()" onMouseOver="$('#explore_text').fadeIn(100, function() {})" onMouseOut="$('#explore_text').fadeOut(100, function() {})">EXPLORE >></a>
        	</div>

        	<div id="watch_text_btn" style="margin-top:20px;height:20px;display:none" class="enter_btn_01">
         		<a class="bold_font_14" href="javascript: pre_start_linear()">or</a> <a  class="bold_font_14" href="javascript:pre_start_linear()" onMouseOver="$('#linear_text').fadeIn(100, function() {})" onMouseOut="$('#linear_text').fadeOut(100, function() {})">JUST WATCH >></a>
     		</div>



    	</div>

    </div>
    <!-- start box -->

</div>

<div id="choose_country">
<div id="btn_close_choose" style="width:100%;text-align:right"><a href="javascript:resume_outro()" class="bold_font_12">X</a></div>
<div class="bold_font_14">CHOOSE A COUNTRY</div>
<div class="normal_font_12">And we'll connect this story to the whole world.</div>


<br />
<div id="choose_country_input">
<table  width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td>
<input style="margin:10px 0 0 10px; width:400px; border:none"  onkeypress="searchKeyPress(event);" onclick="check_input(this)" style="width:200px" id="country_global" value="Type in the name of a country, any country"/>
</td>
<td align=right>
<div style="margin:10px 10px 0 10px;" id="enter_btn2"><a href="#" onClick="javascript:move_to_OUTRO_2()"><img width=100 src="images/enter_text.png" border=0></a></div>
</td>
</tr>
</table>
</div>
</div>

<script>

function hide_choose_country(){
	$('#choose_country').fadeOut(500, function() {})
}


function show_country(){
	$('#country').fadeIn(500, function() {})
}

function hide_country(){
	$('#country').fadeOut(1000, function() {})
}


function show_feeds(){
	$('#live_feeds').fadeIn(1000, function() {})
}

function hide_feeds(){
	$('#live_feed').fadeOut(1000, function() {})
}

var menu_is_loaded =0

function load_menu(){
	menu_is_loaded = 1
    unbuild_maps()
	$('#startbar').hide();
	$('#text_use_keyboard').fadeOut(1000, function() {})
	$('#share_btns').fadeOut(1000, function() {})
	$('#btn_go_menu').fadeOut(1000, function() {})
	$('#live_feed').fadeOut(1000, function() {})
	$('#main_menu_div').fadeIn(1000, function() {})
	$("#choose_country").css('display', 'none');
	$('#btn_stop_video_linear').fadeOut(1000, function() {})
	$('#breadcrumbs').css('display', 'none')
	$('#progress_header_sf').fadeOut(1000, function() {})
	//$("#progress_header_sf").css('display', 'none');
	if(is_looking_at_google){
	    //$('#progress_header').fadeIn(1000, function() {})
	    $('#btn_close_google').fadeOut(1000, function() {})
	    $('#btn_close_google_linear').fadeOut(1000, function() {})
	    $('#btn_close_menu').fadeIn(1000, function() {})
	    uncreate_google_pano()
	}else{
	    $('#btn_close_menu').fadeIn(1000, function() {})
		if(do_linear==0){
		 pause()
		}else{
		 $('#progress_header').fadeOut(1000, function() {})
		 pause_video()
		}
	}
}

function close_menu(){
console.log("close"+ is_intro + ":" + is_looking_at_google)
	menu_is_loaded = 0
	if(do_linear==1 && !is_looking_at_google){
		$('#progress_header').fadeIn(1000, function() {})
		if(is_intro!=1){
		resume_scene()
		}
		if(is_intro_video==1){
		INTRO_mesh.visible=true
		start_timeline()
		}
	}
	if(do_linear == 0 && !enter_has_cleared){
	    $('#breadcrumbs').css('display', 'block')
		if(is_outro==1){
		resume_scene()
	}

	}

		if(do_linear != 1 && is_intro_video==1){

				resume_scene()
	}
	$('#btn_go_menu').fadeIn(1000, function() {})
    $('#btn_close_menu').fadeOut(1000, function() {})
	$('#main_menu_div').fadeOut(1000, function() {})

}



</script>


<!---flythru text--->


	<div id="intro_text_1" class="normal_font_12 intro_block">Welcome to the One Millionth Tower. <br> A virtual landscape.</div>

	<div id="intro_text_2" class="normal_font_12 intro_block">A real highrise neighbourhood in Toronto, Canada, re-imagined. <br>But this could be almost anywhere.</div>

<div id ="breadcrumbs_text"  class="normal_font_12 intro_block">
Discover six stories <br>
to unleash imagination on this neighbourhood.
</div>

<div id="next_step_pane" class="normal_font_12 intro_block" style="width:800px; margin-left:-400px">
You have discovered 6 stories that re-imagine this neighbourhood.
<br>
Now find 4 special features to go behind the scenes.
</div>

<div id="text_use_keyboard" style="top:40px;" class="normal_font_12 intro_block">To "look" around, use your mouse.<br> To "walk" around, use the arrow keys on your keyboard</div>



<div id="google_maps_desc" style="display:none;">
	<div class='heavy_font_16'>WORLD OF HIGHRISES</div>
	<div class='normal_font_10' id="google_caption"></div>
</div>

<div id="google_maps_side" style="left:30px">
	<div class='bold_font_12' style="min-width:340px;max-width:400px;padding:5px;margin-bottom:5px;background:url(images/sidebar_bg_white.png)repeat;font-size:30px;line-height:30px;text-align:left;" id="google_caption_title">ITALY/Naples</div>
        <div id="google_maps_side_inner" style="display:none">
        <div style="width:100%;">
            <div class='bold_font_12' style="float:left;font-size:20px">Wikipedia:</div>
            <a class='bold_font_12' id="google_article_close" style="float:right;font-size:20px" href="#" onClick="javascript:$('#google_content_container').hide();javascript:$('#google_article_open').show();javascript:$('#google_article_close').hide();">X</a>
            <a class='bold_font_12' id="google_article_open" style="display:none;float:right;font-size:20px" href="#" onClick="javascript:$('#google_content_container').show();javascript:$('#google_article_open').hide();javascript:$('#google_article_close').show();">></a>
            <div style="clear:both;"></div>
        </div>
        <div id="google_content_container" style="height:400px;width:330px;overflow:auto;">
            <div class='normal_font_10' id ="google_wiki_text" style="width:280px;padding-top:10px;overflow:hidden;text-align:left"></div>
        </div>

    </div>

</div>

<div id="google_maps_list" style="display:none;width:320px;">
<div>
<br>
<script>
get_countries();
</script>
</div>

</div>
<div class="" id="google_label" style="position:absolute;z-index:6001;display:none;text-align:left; width:600px" >Italy/Rome</div>
        <div id="suggest_highrise" style="display:none" class="enter_btn_01">
	    <a style="font-size:20px" class="bold_font_12" onClick="set_google_form();$('#suggest_highrise').css('display', 'none')" href="#"><< SUGGEST A HIGHRISE</a>
        </div>
<!----- POPCORN DIVS  -->


<div id="live_feed" onmouseover="stop_spin()" onMouseOut="start_spin()" data-plugin="wikipedia" class="butter-plugin" style="width:370px; position:absolute;left:0px;top:35px;z-index:1000;display:none">
    <table>
         <tr>
        <td><span id="live_feed_title"></span><div id="semantic_wrap"></div><div style="fontsize:15px;margin-top:20px" id="live_feed_sub" class="butter-plugin_sub"></div></div></td>
				<td valign=top><a class="bold_font_12" href="javascript:hide_feeds()">x</a></td>
			</tr>
			<td><span id="live_feed_more"></span></td>
		</tr>
	</table>
</div>


<div  id="live_feeds" style="width:350px; position:absolute;left:0px;top:30px;z-index:1000;display:none">
</div>




<!---- menu div ---->
<div id="main_menu_div" onmouseover="stop_spin()" onMouseOut="start_spin()">
<table cellpadding="0" cellspacing="0">

         <tr>
            <td class='heavy_font_34' style="color:#FFF;">MAIN STORY</td>
            <td class='heavy_font_34' style="color:#FFF;" colspan="2">SPECIAL FEATURES</td>
            <td></td>
        </tr>
        <tr>

            <td><div class="menu_btn">
            		<a href="javascript:go_explore()" onclick="cancel_menu()" onmouseover="$('#cell_2').show();" onmouseout="$('#cell_2').hide();"><img src="images/menu buttons/freeroam.png"></a>
                	<div class="menu_title  bold_font_16">Explore</div>
                    <div class="media-type  bold_font_12">interactive</div>
                    <div id="cell_2" class="menu_caption normal_font_11">Explore the One Millionth Tower documentary on your own.  Walk and click through a virtual neighbourhood to unleash stories of imagination on six locations.  (Features current weather conditions at the real tower. fun!)</div>
                </div>
            </td>

            <td><div class="menu_btn">
            		<a href="javascript:move_to_IMAGINE(1)" onmouseover="$('#cell_4').show();" onmouseout="$('#cell_4').hide();"><img src="images/menu buttons/imagine.png"></a>
                	<div class="menu_title bold_font_16">Imagine</div>
                    <div class="media-type bold_font_12">video</div>
                    <div id="cell_4" class="menu_caption normal_font_11">It takes a village to raise a community.  A four minute documentary celebrating the unique process of collaboration that brings the story of One Millionth Tower to life on the web.</div>
                </div>
            </td>



            <td><div class="menu_btn" style="margin-right:0px">
            		<a href="javascript:move_to_HIGHRISE(1)" onmouseover="$('#cell_3').show();" onmouseout="$('#cell_3').hide();"><img src="images/menu buttons/worldofhighrises.png"></a>
                	<div class="menu_title bold_font_16">World of Highrises</div>
                    <div class="media-type bold_font_12">interactive</div>
                    <div id="cell_3" class="menu_caption normal_font_11">Visit a highrise community in almost any country on the planet, look around with Google streetview (where available) or through satellite imagery. Bring our animation with you. And tell us about one you know!</div>
                </div>
            </td>
        </tr>
        <tr>

         	<td><div class="menu_btn">
            		<a href="javascript:go_linear()" onmouseover="$('#cell_1').show();" onmouseout="$('#cell_1').hide();"><img src="images/menu buttons/mainstory.png"></a>
                	<div class="menu_title bold_font_16">Just Watch</div>
                    <div class="media-type bold_font_12">documentary</div>
                    <div id="cell_1" class="menu_caption normal_font_11">Watch the One Millionth Tower, the full six minute documentary, unfold in an animated virtual space. Witness the power of imagination transform a dilapidated highrise community. </div>
                </div>
            </td>


            <td><div class="menu_btn">
            		<a href="javascript:move_to_LIVING_PROOF(1)" onmouseover="$('#cell_5').show();" onmouseout="$('#cell_5').hide();"><img src="images/menu buttons/livingproof.png"></a>
                	<div class="menu_title bold_font_16">Living Proof</div>
                    <div class="media-type bold_font_12">video</div>
                    <div id="cell_5" class="menu_caption normal_font_11">Tower renewal is not a pipe dream. This three minute video gives living proof examples of successful highrise revitalization projects around the world, narrated by architect Graeme Stewart.</div>
                </div>
            </td>



            <td><div class="menu_btn"  style="margin-right:0px">
            		<a href="javascript:move_to_TECH(1)" onmouseover="$('#cell_6').show();" onmouseout="$('#cell_6').hide();"><img src="images/menu buttons/opentechnology.png"></a>
                	<div class="menu_title bold_font_16">Open Technology</div>
                    <div class="media-type bold_font_12">video</div>
                    <div id="cell_6" class="menu_caption normal_font_11">Nerd alert! This three minute video goes behind the scenes to explain our use of the world's leading edge open source web technologies to create One Millionth Tower: HTML5, webGL, Three.js and Mozilla's popcorn.</div>
                </div>
            </td>
        </tr>
    </table>
</div>
<script>
function show_sub(obj){
	document.getElementById(obj).style.display="block"
}

function hide_sub(obj){
	document.getElementById(obj).style.display="block"
}


</script>
<!-- END POPCORN -->

<!--------- FORM ---------->

<div id="form" style="position:absolute; z-index:1000011; display:none;">

<div style="width:100%; text-align:right; margin-top:10px">
<a class="bold_font_12" onClick="$('#form').css('display', 'none');$('#suggest_highrise').css('display', 'block')" style="font-size:20px; margin-right:15px;">X</a></div>
<div id="form_block" style="z-index:10000;">
<form onsubmit="clear_google_form()" action="send_form.php" target="code_run" method="post">

    	<ul class="form" style="z-index:10000;">
<div class='regular_font_10'> Type in name or address of any HIGHRISE community in the world. Also give us any relevant links to wikipedia or articles, or just write your own description of why this HIGHRISE is interesting</div>
            	<li>
                <label class="regular_font_10" for="name">Name:</label>
                <input  onclick="this.focus()" type="text" id="name" name="name" accesskey="a" tabindex="10" class="form_field" style="z-index:11000;" />
               	</li>

                <li>
                    <label class="regular_font_10" for="email">Email:</label>
                    <input onclick="this.focus()" type="text" id="email" name="email" accesskey="b" tabindex="20" class="form_field" style="z-index:11000;" />
                </li>

                <li style="margin-bottom:0px;">
                     <label class="regular_font_10" for="highrise">Description, location of highrise:</label>

                    <textarea  onclick="this.focus()" name="highrise" id="highrise" accesskey="c" tabindex="30" class="form_message"></textarea>

              	<input type="submit" accesskey="d" tabindex="40" value="SEND >>" class="submit" style="background:transparent; border:0; cursor:pointer; font-weight:bold;" />
              	</li>




    	</ul>

    </form>
</div>

<div id="form_thanks" style="padding:10px">
Thanks for sharing your highrise. We'll take a look at what you've sent us, and let you know if we can add it to our list to the right.
</div>


</div>



<!-- POP UP WINDOWS -->

<div id="blog">
<div style="width:100%;text-align:right"><a onClick="$('#blog').css('display', 'none')" class="close_form" style="font-size:20px;">X</a></div>
<div class="bold_font_12">SUBSCRIBE TO THE HIGHRISE BLOG</div>
<div class="normal_font_10">and receive occasional updates from us.
</div>

<br />
<div id="blog_input">
<table  width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td>
<input style="margin:10px 0 0 10px; width:400px; border:none"  onkeypress="#" onclick="check_input(this)" style="width:200px" id="country_global" />
</td>
<td align=right>
<div style="margin:10px 10px 0 10px;" id="enter_btn2"><a href="#" onClick="#"><img width=100 src="images/enter_text.png" border=0></a></div>
</td>
</tr>
</table>
</div>
</div>

<div id="whole_world">

<div style="width:100%;text-align:right"><a href="#"  onClick="$('#whole_world').css('display', 'none');$('#choose_country').css('display', 'block');" class="default_nav">X</a></div>
<div class="bold_font_14">THE WHOLE WORLD</div>
<div class="normal_font_12" id="alert_text">
</div>
</div>


<div style="position:fixed;bottom:0px;height:35px; width:100%;z-index:7999;background-color:#000000"></div>


<!-- PROGRESS AND LOOPS-->
<script>

//document.getElementById('google_ambient').addEventListener('ended', function(){this.currentTime = 0;}, false);
function clear_google_form(){

//document.getElementById('form_block').innerHTML="Thank you for submitting your highrise with us."
		$("#form_block").css('display', 'none');
		$("#form_thanks").css('display', 'block');
}

function set_google_form(){
                $('#form').fadeIn(500, function() {});
		$("#form_block").css('display', 'block');
		$("#form_thanks").css('display', 'none');
}

</script>




<!--AUDIO -->
<video id="video_controller" controls="controls" controls="controls" style="width:240px; height:160px; display:none;background-color:#fff;position:absolute;top:30px"><source src="<?= $media_server_url?>videos/timeline_audio.ogv"></video>

<audio style="display:none" id="audio" src="<?= $media_server_url?>videos/ambient/landing_page_ambient.ogg"></audio>

<audio style="display:none" id="rollovers" src="<?= $media_server_url?>videos/rollovers/RO_TC1.ogg"></audio>

<audio style="display:none" id="bells" src="<?= $media_server_url?>videos/ambient/soft_bells.ogg"></audio>

<audio style="display:none" id="violin" src="<?= $media_server_url?>videos/ambient/violins.ogg" ></audio>

<audio style="display:none" id="moving_sound" src="<?= $media_server_url?>videos/ambient/Footsteps_Concrete.ogg" ></audio>

<audio style="display:none" id="tc_ambient" src="<?= $media_server_url?>videos/ambient/TennisCourtAMB_Dead.ogg" ></audio>

<audio style="display:none" id="mk_ambient" src="<?= $media_server_url?>videos/ambient/MarketAMB_Dead.ogg" ></audio>

<audio style="display:none" id="rv_ambient" src="<?= $media_server_url?>videos/ambient/GardenAMB_Dead.ogg" ></audio>

<audio style="display:none" id="google_ambient" src="<?= $media_server_url?>videos/ambient/GOOGLE_AMBIENT.ogg" ></audio>

<audio style="display:none" id="flythru" src="<?= $media_server_url?>videos/ambient/flythru.ogg" ></audio>

<audio style="display:none" id="geese" src="<?= $media_server_url?>videos/ambient/geese.ogg" ></audio>

<audio style="display:none" id="weather"></audio>

<!---->
<script>
/**/
document.getElementById('audio').addEventListener('ended', function(){this.currentTime = 0;}, false);
document.getElementById('tc_ambient').addEventListener('ended', function(){this.currentTime = 0;}, false);
document.getElementById('mk_ambient').addEventListener('ended', function(){this.currentTime = 0;}, false);
document.getElementById('rv_ambient').addEventListener('ended', function(){this.currentTime = 0;}, false);
document.getElementById('google_ambient').addEventListener('ended', function(){this.currentTime = 0;}, false);
//document.getElementById('geese').addEventListener('ended', function(){this.currentTime = 0;}, false);

function cancel_menu(){
is_from_menu = false
}

function secondstotime(secs)
{
    var t = new Date(1970,0,1);
    t.setSeconds(secs);
    var s = t.toTimeString().substr(3,6);
    if(secs > 86399)
        s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
    return s;
}


function do_progress() {
    $("#progress_header_sf").css('display', 'none');
    if(do_linear==1){
    $("#progress_header").css('display', 'block');
  }
	var seekbar = document.getElementById('progress_bar_timeline');
	var vvid = document.getElementById('video_controller');
	var progress_percentange = vvid.currentTime/vvid.duration*400
    seekbar.style.width = Math.abs(progress_percentange-400)+"px";
    document.getElementById('timer').innerHTML= secondstotime(vvid.currentTime) + "/" + secondstotime(vvid.duration)
}

function do_progress_sf(_target_mesh) {
    $("#progress_header").css('display', 'none');
    $("#progress_header_sf").css('display', 'block');
	var seekbar = document.getElementById('progress_bar_timeline_sf');
	var progress_percentange = _target_mesh.time_elapsed/_target_mesh.time_total*400
    seekbar.style.width = Math.abs(progress_percentange-400)+"px";
    if(_target_mesh.time_elapsed){
    document.getElementById('timer_sf').innerHTML= secondstotime(_target_mesh.time_elapsed) + "/" + secondstotime(_target_mesh.time_total)
}
}

var over_interface
function start_spin(){
over_interface=false
}

function stop_spin(){
over_interface=true
}
//document.getElementById('video_controller').ondurationchange = do_progress;

</script>
<div id="progress_bar" style="background-color:#666;position:absolute;left:0px;bottom:0px;height:5px;z-index:400;width:0%"></div>
<canvas style="display:none" width="640" height="480" id="pano_buffer_cnvs"></canvas>
</div>



<div onmouseover="stop_spin()" onmouseout="start_spin()" id="global_footer" style="position:fixed;bottom:0px;height:35px; width:50%;z-index:8000;background-color:#000000">
        <table border=0 cellpadding=0 cellspacing=0>
            <tr>
            <td>
            <div style="display:none" id="interface_controls">
            </div>
            </td>
            <td style="padding-right:20px; padding-left:2px;">
            <div style="height:35px; overflow:hidden;"><a class="default_nav_grey" href="javascript:load_page('highrise.php')"><img src="images/bottomNAV_Highrise.png" alt="Highrise" title="Highrise" /></a></div>
            </td>
            <td style="padding-right:20px">
            <a class="default_nav_grey" href="javascript:load_page('about.php')">ABOUT 1 MILLIONth TOWER</a>

            </td>
            <td style="padding-right:20px">
            <a class="default_nav_grey" href="javascript:load_page('about_the_tech.php')">ABOUT THE TECH</a>
            </td>

            <td style="padding-right:20px">
            <a class="default_nav_grey" href="javascript:load_page('directors_statement.php')">DIRECTOR'S NOTE</a>
            </td>
            </tr>
        </table>
</div>




<div id="global_footer_right" style="position:fixed;right:0px;bottom:0px;height:35px;z-index:8000;background-color:#000000;width:50%;text-align:right;">
    <table border=0 cellpadding=0 cellspacing=0 align=right>
        <tr>

      <td style="padding-right:10px;">
        	<div class="social_media"><a href="javascript:load_external_page('http://twitter.com/home?status=Currently reading http://highrise.nfb.ca/onemillionthtower')" title="Click to share this post on Twitter"><img src="images/bottomNAV_twitter_sprite.png" alt="twitter" title="Twitter" /></a></div>
        </td>

        <td style="padding-right:10px;">
        	<div class="social_media"><a href="javascript:load_external_page('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location)+'&t='+encodeURIComponent(document.title))"><img src="images/bottomNAV_facebook_sprite.png" alt"facebook" title="Facebook" /></a></div>
        </td>

        <td style="padding-right:20px;">
        	<div class="social_media"><a href="javascript:load_external_page('https://m.google.com/app/plus/x/?v=compose&content='+encodeURIComponent(document.location))"><img src="images/bottomNAV_google_sprite.png" alt"google" title="Google" /></a></div>
        </td>



        <td style="padding-right:20px">
        <a class="default_nav_grey" href="javascript:load_external('http://highrise.nfb.ca/index.php/share')">SHARE VIDEOS</a>
        </td>

        <td style="padding-right:20px">
        <a class="default_nav_grey" href="javascript:load_external('http://highrise.nfb.ca/get-involved/')">GET INVOLVED</a>
        </td>

        <td style="padding-right:20px">
        <a class="default_nav_grey" href="javascript:load_page('credits.php')">CREDITS</a>
        </td>

        <td style="padding-right:20px">
        	<div style="height:35px; overflow:hidden;"><a href="javascript:mute();" onClick="$('#sound').toggleClass('off');"><img id="sound" src="images/bottomNAV_sound_sprite.png" alt="mute" title="Mute" /></a></div>
        </td>

        </tr>
    </table>
</div>




<!-- PRELOADING PANE -->
<div id="preloading_pane">
    <div id="tower-loader-outer">
        <div id="tower-loader-inner">
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
        <div class="tower-loader-marker"></div>
      </div>
    </div>
<div  class="normal_font_12" style="color:#FFF">The towers in the world, the world in the towers</div>
<div id="preload_text" style="display:none">The towers in the world, the world in the towers</div>
</div>


 <div id="share_btns" style="display:none">
 <a href="javascript:load_external_page('http://www.facebook.com/sharer.php?u='+global_share_url+'&t='+encodeURIComponent(global_share_name))"><img class="share_btn" src="sections/imgs/btn_facebook.png" alt="Facebook" /></a>
 <a href="javascript:load_external_page('http://twitter.com/home?status=Currently viewing '+global_share_url)" title="Click to share this video on Twitter"><img class="share_btn" src="sections/imgs/btn_twitter.png" alt="Twitter" /></a>
 <a href="javascript:load_external_page('https://m.google.com/app/plus/x/?v=compose&content='+global_share_url)"><img class="share_btn" src="sections/imgs/btn_google_plus.png" alt="Google Plus" /></a>
 <img class="share_btn" src="sections/imgs/btn_share.png" alt="Share" />
 </div>

<!-- Piwik -->
<script type="text/javascript">
//var pkBaseURL = (("https:" == document.location.protocol) ? "https://highrise.nfb.ca/piwik/" : "http://highrise.nfb.ca/piwik/");
//document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
</script><script type="text/javascript">
var tracking_section="vanilla/", track_base="1MT/webgl/",time_line_pos=0, ev
try {
//var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 2);
//piwikTracker.setCustomUrl( track_base )
//piwikTracker.trackPageView();
//piwikTracker.enableLinkTracking();
} catch( err ) {}



	function track_exit_event(){
		if(ev){
	//	var t_elasped=document.getElementById('video_controller').currentTime-time_line_pos
	//	piwikTracker.setCustomVariable (1, "exit_video", ev + ":"+ t_elasped, "page")
	//	piwikTracker.trackPageView();
	  }
	ev = false
	}
</script>

<!-- End Piwik Tracking Code -->

</body>

<script>
var bells_timeout





var global_mute

function mute(){


if (!global_mute){
	$("#video_controller").prop('muted', true);
	$("#video_controller_sf").prop('muted', true);
	$("#audio").prop('muted', true);
	$("#bells").prop('muted', true);
	$("#violin").prop('muted', true);
	$("#moving_sound").prop('muted', true);
	$("#tc_ambient").prop('muted', true);
	$("#rv_ambient").prop('muted', true);
	$("#mk_ambient").prop('muted', true);
	$("#google_ambient").prop('muted', true);
	$("#flythru").prop('muted', true);
	$("#geese").prop('muted', true);
	global_mute = true;
	return;
}else{
	$("#video_controller").prop('muted', false);
	$("#video_controller_sf").prop('muted', false);
	$("#audio").prop('muted', false);
	$("#bells").prop('muted', false);
	$("#violin").prop('muted', false);
	$("#moving_sound").prop('muted', false);
	$("#tc_ambient").prop('muted', false);
	$("#rv_ambient").prop('muted', false);
	$("#mk_ambient").prop('muted', false);
	$("#google_ambient").prop('muted', false);
	$("#flythru").prop('muted', false);
	$("#geese").prop('muted', false);

	global_mute = false;
}

}

</script>


</html>


