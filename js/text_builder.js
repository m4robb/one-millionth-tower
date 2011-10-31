// JavaScript Document


var firstLetter = true;

var fontMap = {
"helvetiker" : 0,
"optimer" : 1,
"gentilis" : 2

};

var weightMap = {
"normal" : 0,
"bold" : 1
}

//var textGeo,parent

function build_text(rtext,x,y,z,rx,ry,rz,_hex){
	
	if(!_hex){
		var hex = 0xFFFFFF
	}else{
		var hex = _hex
	}

                textGeo = new THREE.Text( rtext, {

					size: 50, 
					height: 8,
					curveSegments: 6,
					font: "helvetiker",
					weight: "bold",
					style: "normal"

				});
				
                textMaterial = new THREE.MeshLambertMaterial( { color: _hex} );
				
				//parent = new THREE.Object3D();
				
				textMesh1 = new THREE.Mesh( textGeo, textMaterial );

                textMesh1.position.x = x;
                textMesh1.position.y = y;
                textMesh1.position.z = z;

                //textMesh1.rotation.x = 0;
                //textMesh1.rotation.y = Math.PI * 2;
				textMesh1.rotation.x = rx * Math.PI / 180;
				textMesh1.rotation.y = ry * Math.PI / 180;
				textMesh1.rotation.z = rz * Math.PI / 180;


				scene.addChild( textMesh1 );
				textMesh1.visible=false
				objects.push(textMesh1)	
				return textMesh1

}