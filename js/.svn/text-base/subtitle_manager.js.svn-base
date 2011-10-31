    var subtitle_script, global_unitrans
    var semantic_script 
    var oHead = document.getElementsByTagName('head')[0]; 
    
    var global_subtitle_file="subtitles"
    
function load_gl_subtitles(lng)   
    { 
    	$('#subtitles_links').css('display', 'none')
    	$('#subtitle-container').css('display', 'block')
  var subtitle_src= "js/"+global_subtitle_file+"_"+lng+".js" 
  
  track_this(global_subtitle_file+"_"+lng);
  
     
	if(subtitle_script){
	 oHead.removeChild(subtitle_script);
	  subtitle_script = false
	 
	} 
	if(global_unitrans){
	var pt= Popcorn.getInstanceById(global_unitrans)
	for (i=0, l=pt.data.history.length;i<l;i++){
	Popcorn.removeTrackEvent(pt,pt.data.history[i])
	}

	}
	
	//global_unitrans=false
       $('#btn_subtitles').html("SUBTITLES: "+lng)
       subtitle_script = document.createElement('script');  
       subtitle_script.setAttribute('src',subtitle_src);  
       subtitle_script.setAttribute('type','text/javascript');   
       oHead.appendChild(subtitle_script); 
       set_var('no_webgl_subtitles',lng)
   
    }  
	
function load_subtitles(subtitle_src,lng)   
    { 
    	
   
    	$('#subtitles_links').css('display', 'none')
    	$('#subtitle-container').css('display', 'block')
        
	if(subtitle_script){
	 oHead.removeChild(subtitle_script);
	 subtitle_script = false
	 
	} 
	if(global_unitrans){
	var pt= Popcorn.getInstanceById(global_unitrans)
	for (i=0, l=pt.data.history.length;i<l;i++){
	Popcorn.removeTrackEvent(pt,pt.data.history[i])
	}

	}
	//global_unitrans=false
       $('#btn_subtitles').html("SUBTITLES: "+lng)
       Cufon.refresh()
       subtitle_script = document.createElement('script');  
       subtitle_script.setAttribute('src',subtitle_src);  
       subtitle_script.setAttribute('type','text/javascript');   
       oHead.appendChild(subtitle_script); 
       set_var('no_webgl_subtitles',lng)
   
    }  


    function load_semantic_data(semantic_src)   
    { 
         
	if(semantic_script){
	 oHead.removeChild(semantic_script);
	}

       semantic_script = document.createElement('script');  
       semantic_script.setAttribute('src',semantic_src);  
       semantic_script.setAttribute('type','text/javascript');   
       oHead.appendChild(semantic_script); 

   
    }  
    
function unload_subtitles(){
      $('#btn_subtitles').html("SUBTITLES")
    	$('#subtitles_links').css('display', 'none')
    	$('#subtitle-container').css('display', 'none')
	if(subtitle_script){
	 oHead.removeChild(subtitle_script);
	}
	if(global_unitrans){
	var pt= Popcorn.getInstanceById(global_unitrans)
	for (i=0, l=pt.data.history.length;i<l;i++){
	Popcorn.removeTrackEvent(pt,pt.data.history[i])
	}
	}
	
	subtitle_script= false;
	global_unitrans = false;
	erase_var('no_webgl_subtitles')

}