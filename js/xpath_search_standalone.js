var maps_lat, maps_long,  maps_is_street_view="", maps_city_name, maps_url,maps_wiki

String.prototype.capitalize = function(){
   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};

function is_ws(nod) {
	return !(/[^\t\n\r ]/.test(nod.data));
}

function findWhiteSpace(node, nodeNo) {
	for (i=0; i<node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType == 3 && is_ws(node.childNodes[i])) {
			nodesToDelete[nodesToDelete.length] = node.childNodes[i]
		}
		if (node.childNodes[i].hasChildNodes()) {
			findWhiteSpace(node.childNodes[i], i);
		}
	}
	node = node.parentNode;
	i = nodeNo;
}


function stripWhiteSpace(node) {
	nodesToDelete = Array();
	findWhiteSpace(node, 0);
	for(i=nodesToDelete.length-1;i>=0;i--) {
		nodeRef = nodesToDelete[i];
		nodeRef.parentNode.removeChild(nodeRef)
	}
}

function load_doc(xml_file)
{
var xhttp;
if (window.XMLHttpRequest){
  xhttp=new XMLHttpRequest();
  }else{
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

  
xhttp.open("GET",xml_file,false);
xhttp.send("");
return xhttp.responseXML;
}


function get_xpath(country){	

maps_city_name = "";
maps_wiki = "NULL";
maps_is_street_view ="";
var xmlDoc=load_doc("js_autosuggest/1mt_locations_nu_01.xml");
var search_item = country

// code for IE
if (window.ActiveXObject)
{


var xstring = "/DATA/ROW[country_name=\"" + search_item + "\"]/ID";
var nodes=xmlDoc.selectNodes(xstring);
//alert(nodes.length)

var xstring = "/DATA/ROW[country_name=\"" + search_item + "\"]/url";
var nodes=xmlDoc.selectNodes(xstring);
maps_url= nodes[0].childNodes[0].nodeValue


var xstring = "/DATA/ROW[country_name=\"" + search_item + "\"]/city_name";
var nodes=xmlDoc.selectNodes(xstring);
maps_city_name= nodes[0].childNodes[0].nodeValue

var xstring = "/DATA/ROW[country_name=\"" + search_item + "\"]/street_view";
var nodes=xmlDoc.selectNodes(xstring);
if(nodes[0].childNodes.length){
maps_is_street_view= nodes[0].childNodes[0].nodeValue
}


}
else if (document.implementation && document.implementation.createDocument)
{
   
	var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);
	
	

	

//var xstring = "/DATA/ROW[translate(country_name, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = '" + search_item.toLowerCase() + "']/ID"
	
	var xstring = "/DATA/ROW[country_name=\"" + search_item + "\"]/ID";
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

}


var country_list_root_node
function get_countries(){

var temp_array = [];
	var req = null;
	req = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP")

	req.onreadystatechange = function(){
		if(req.readyState == 4){
			if(req.status == 200){
			 stripWhiteSpace(req.responseXML);
			 var doc = req.responseXML;
			 var x = doc.getElementsByTagName("ROW");
	                 var link_text="";
	                
			 for (var i=0;i<x.length;i++){	
			  var duplicate_country = 0
	  		  if (x[i].childNodes[6].firstChild){
	   		   for (var j=0;j<temp_array.length;j++){
	    		    if(temp_array[j]==x[i].childNodes[1].firstChild.nodeValue){duplicate_country=1;}
	   		   }
	   		   if(duplicate_country==0){
	   		    temp_array.push(x[i].childNodes[1].firstChild.nodeValue)
	    		    link_text+="<a class='woh_link' href='javascript:create_google_pano(\""+escape(x[i].childNodes[1].firstChild.nodeValue)+"\")'>"+x[i].childNodes[1].firstChild.nodeValue+"</a>\n";
	   		   }  
	  		  }
			 }	                

			document.getElementById("google_maps_list").innerHTML=link_text	
			}else{
			alert("Error: returned status code " + req.status + " " + req.statusText);
			}
		        }
	          };
	//file_o = "../../xml_data/en_"+xml;
	var file_o = "js_autosuggest/1mt_locations_nu_01.xml";
	req.open("GET", file_o, true);
	req.send('');
	
	


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