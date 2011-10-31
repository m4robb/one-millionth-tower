// JavaScript Document

function build_rootsnnnnn(number_of_roots,center_x, center_z) {
	var radius = 100
	for ( var i = 0; i < number_of_roots; i++ ) {
		var x = center_x + (Math.random() * radius)-(Math.random() * radius)
		var z = center_z + (Math.random() * radius)-(Math.random() * radius)
		build_root(x,z)
	}
}

function build_roots(number_of_roots,center_x, center_z){
	
	var radius = 75
	var master_geometry = new THREE.Geometry()
    var master_material = new THREE.LineBasicMaterial( { color: 0x0000ff, opacity: 1, linewidth: .5 } );
	for ( var i = 0; i < number_of_roots; i++ ) {
		var rw = Math.random() * 360;
		var sub_geometry = new THREE.Geometry()
		var wx = center_x + (Math.random() * radius)-(Math.random() * radius)
		var wz = center_z + (Math.random() * radius)-(Math.random() * radius)
		var resolution = Math.random()*1250;
		var amplitude = ( 20 * ( Math.random() * 20 + 1 ) );
		
		var speed = Math.random();
		var size = Math.random()*360+180 / 1000;
		var segment;


		for ( var j = 0; j <= resolution; j ++ ) {
			
		rw += Math.random() - .2;
		
		wx += Math.cos(rw) * speed;
	    wz += Math.sin(rw)* speed;
	
	
		segment = ( j * size ) * Math.PI / 180;
		sub_geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( wx, j*2, wz ) ) );
        }
		
		var material = new THREE.LineBasicMaterial( { color: 0x564a1a, linewidth: 2, blending:THREE.AdditiveBlending} );
		var line = new THREE.Line(sub_geometry, material );			
		line.position.x = center_x
		line.position.y = 0;
		line.position.z = center_z
		line.scale.y=-1
		//line.rotation.y = Math.random()*360 * Math.PI *180;
		//GeometryUtils.merge( master_geometry, line );
		scene.addObject( line );
		//new TWEEN.Tween( line.materials[0]).to( {opacity: 1 },3000 ).easing( TWEEN.Easing.Linear.EaseNone).start();
		new TWEEN.Tween( line.position).to( {y: 2800 },25000 ).easing( TWEEN.Easing.Linear.EaseNone).start();	 
	}

		//var master_line = new THREE.Line(master_geometry,  new THREE.MeshFaceMaterial() );	
		//scene.addObject( master_line );

}

