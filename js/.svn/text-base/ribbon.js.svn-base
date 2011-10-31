// JavaScript Document
var ribbon_x,ribbon_y,ribbon_z, ribbon_n, ribbon_geometry, ribbon
ribbon_init = function(){
				ribbon_geometry = new THREE.Geometry();
				

				ribbon_n = 1000;
			

				for ( var i = -ribbon_n; i < ribbon_n; i++ ) {

					var i2 = i + ribbon_n;

					ribbon_x = i * 1.175;
					ribbon_y = ( i2 % 2 ) * 100;
					ribbon_z =0 
					if ( i2 % 2 )  {

						//ribbon_z = 10 * Math.sin( i2 * 0.3 ) * Math.cos( i2 * 0.1 );

					}

					var vector = new THREE.Vector3( ribbon_x, ribbon_y, ribbon_x );
					ribbon_geometry.vertices.push( new THREE.Vertex( vector ) );
				
				

					var h = i2%2 ? 1 : 0.15;
					if( i2%4 <= 2 ) h -= 0.15;

					color = new THREE.Color( 0xffffff );
					color.setHSV( 1 , 1, h );
					ribbon_geometry.colors.push( color );
					}
					
					var materials = new THREE.MeshBasicMaterial( { color:0xffffff, vertexColors:true } );
					//materials[c].program = material_base.program;
				    var tmpRot = new THREE.Matrix4();
				    tmpRot.setRotationAxis( new THREE.Vector3( 1, 0, 0 ), 1.57 );
					ribbon = new THREE.Ribbon( ribbon_geometry, materials  );	
					
					ribbon.position.set( 100, -100, 200 );
					
					ribbon.doubleSided = true;
					ribbon.matrixAutoUpdate = false;

					// manually create local matrix

					ribbon.matrix.setPosition( ribbon.position );
					ribbon.matrixRotationWorld.setRotationFromEuler( ribbon.rotation );
					
					
					
					ribbon.matrix.setPosition( ribbon.position );
					ribbon.matrixRotationWorld.setRotationFromEuler( ribbon.rotation );

					ribbon.matrix.n11 = ribbon.matrixRotationWorld.n11;
					ribbon.matrix.n12 = ribbon.matrixRotationWorld.n12;
					ribbon.matrix.n13 = ribbon.matrixRotationWorld.n13;

					ribbon.matrix.n21 = ribbon.matrixRotationWorld.n21;
					ribbon.matrix.n22 = ribbon.matrixRotationWorld.n22;
					ribbon.matrix.n23 = ribbon.matrixRotationWorld.n23;

					ribbon.matrix.n31 = ribbon.matrixRotationWorld.n31;
					ribbon.matrix.n32 = ribbon.matrixRotationWorld.n32;
					ribbon.matrix.n33 = ribbon.matrixRotationWorld.n33;

					ribbon.matrix.multiplySelf( tmpRot );

					ribbon.matrix.scale( ribbon.scale );
					ribbon.boundRadiusScale = Math.max( ribbon.scale.x, Math.max( ribbon.scale.y, ribbon.scale.z ) );

					
					scene.addObject( ribbon );
					scene.matrixAutoUpdate = false;
					
}

ribbon_render = function(){
	            var time = new Date().getTime() * 0.00005;
				for ( var i = -ribbon_n; i < ribbon_n; i++ ) {

					var i2 = i + ribbon_n;
					var anim_x  =  time;
					var anim_z  =  1 * Math.sin( i2 * 0.1 + time*30 );
	                document.getElementById("debug_text").innerHTML= anim_z	

					ribbon_geometry.vertices[i2].position.z = anim_z;
					//ribbon_geometry.vertices[i2].position.y = ribbon_geometry.vertices[i2].position.y+anim_x;
					

				}
ribbon_geometry.__dirtyVertices = true;				
}
				