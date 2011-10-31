var maps_lat, maps_long,  maps_is_street_view, maps_city_name, maps_url,maps_wiki

String.prototype.capitalize = function(){
   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};
  

function get_xpath(country){

	var req = new XMLHttpRequest();
	req.open("GET", "js_autosuggest/1mt_locations_nu_01.xml", false);
	req.send(null);
	var xmlDoc = req.responseXML;      
	var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);
	var search_item = country.capitalize();
	
	maps_city_name = "";
	maps_wiki = "NULL";
	


        var xstring = "/DATA/ROW[translate(country_name, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = '" + search_item.toLowerCase() + "']/ID"
        var result = xmlDoc.evaluate(xstring, xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

	if(!result.snapshotItem(0)){ return "not_in_db"}
	
	
        var random_id = Math.floor(Math.random()*result.snapshotLength)
        var maps_id = (result.snapshotItem(random_id).textContent)
	var xstring = "/DATA/ROW[ID=\"" + maps_id + "\"]/longtitude_latitude";
        var result = xmlDoc.evaluate(xstring, xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
 	var maps_lat_long = (result.snapshotItem(0).textContent)
	maps_lat_long = maps_lat_long.replace("(","");
	maps_lat_long = maps_lat_long.replace(")","");
	
	var maps_lat_long_array = maps_lat_long.split(",")
	maps_lat = parseFloat(maps_lat_long_array[0]);
	maps_long = parseFloat(maps_lat_long_array[1]);
	//alert (maps_long)

	var xstring = "/DATA/ROW[ID=\"" + maps_id + "\"]/street_view";
        var result = xmlDoc.evaluate(xstring, xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
 	maps_is_street_view = (result.snapshotItem(0).textContent)
//	alert(	maps_is_street_view)
	
	var xstring = "/DATA/ROW[ID=\"" + maps_id + "\"]/city_name";
        var result = xmlDoc.evaluate(xstring, xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
 	maps_city_name= (result.snapshotItem(0).textContent)


	var xstring = "/DATA/ROW[ID=\"" + maps_id + "\"]/wikipedia";
    	var result = xmlDoc.evaluate(xstring, xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    	if((result.snapshotItem(0).textContent)!=""){
 	maps_wiki = (result.snapshotItem(0).textContent)
 	}
	
	var xstring = "/DATA/ROW[ID=\"" + maps_id + "\"]/url";
        var result = xmlDoc.evaluate(xstring, xmlDoc, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	maps_url= (result.snapshotItem(0).textContent)
       	if(maps_url==""){ return "no_highrise"}
    	return "highrise"


}


var country_list_root_node

function get_countries(){
	var req = new XMLHttpRequest();
	var temp_array = [];
	req.open("GET", "js_autosuggest/1mt_locations_nu_01.xml", false);
	req.send(null);
	var root_node = req.responseXML;      
	var x=root_node.getElementsByTagName("ROW");

	for (var i=0;i<x.length;i++){	
	var duplicate_country = 0
	  if (x[i].childNodes[13].firstChild){
	  for (var j=0;j<temp_array.length;j++){
	  if(temp_array[j]==x[i].childNodes[3].firstChild.nodeValue){duplicate_country=1;}
	  }
	  if(duplicate_country==0){temp_array.push(x[i].childNodes[3].firstChild.nodeValue);}  
	  }
	}


for (var i=0;i<temp_array.length;i++){
document.write("<a class='woh_link' style='font-size:14px;' onclick='clear_google_form()' href='javascript:create_google_pano(\""+temp_array[i]+"\")'>"+temp_array[i]+"</a>")

}

}


function parse_countries(evt){

  
}



function docEvaluateArray (expr, doc, context, resolver) {
doc = doc ? doc : (context ? context.ownerDocument : document);
resolver = resolver ? resolver : null;
context = context ? context : doc;
var result = doc.evaluate(expr, context, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
var a = [];
for(var i = 0; i < result.snapshotLength; i++) {
       a[i] = result.snapshotItem(i);
	   alert(result.snapshotItem(i))
	    }
    return a;
}