
/////////////////////RAIN SNOW SLEET ETC
function Precipitation(){
    this.posn = new THREE.Vector3();
    this.init();
}

Precipitation.MAX_SPEED = 10;
Precipitation.ORIGIN = new THREE.Vector3(Math.random() * (500)+500 ,600,Math.random() * (500)+1700);
Precipitation.MAX_DISTANCE

//returns random number within a range
Precipitation.prototype.getRand = function(minVal, maxVal){
    return minVal + (Math.random() * (maxVal - minVal));
}

Precipitation.prototype.init = function(){
	//start at center
    this.posn.copy(Precipitation.ORIGIN);
	//random speed
    this.speed = new THREE.Vector3(this.getRand(-Precipitation.MAX_SPEED, Precipitation.MAX_SPEED), this.getRand(-Precipitation.MAX_SPEED, Precipitation.MAX_SPEED)-10, this.getRand(-Precipitation.MAX_SPEED, Precipitation.MAX_SPEED));
}

Precipitation.prototype.update = function(){
	//move star
   this.posn = this.posn.addSelf(this.speed);
	
    //document.getElementById('debug_text').innerHTML
    if (this.posn.distanceTo(Precipitation.ORIGIN) > Precipitation.MAX_DISTANCE) {
    if(precipitation_kill){
        this.init();
        }
    }
}





///Rain, Snow, etc

var precipitation_geometry, precipitation, precipitations, precipitation_array = [],precipitation_kill
 
 
function init_precipitation(precipitation_count){

    var colors = [];
    

precipitation_kill = false
    precipitation_geometry = new THREE.Geometry();
    //create one shared material
    var sprite = THREE.ImageUtils.loadTexture("textures/particles/snow.png");
	
    var material = new THREE.ParticleBasicMaterial({
        size: 40,
        map: sprite,
        opacity:0.5,
        depthTest: false,
        vertexColors: true //allows 1 color per particle
    });
    //create particles
    for (i = 0; i < precipitation_count; i++) {
        precipitation_geometry.vertices.push(new THREE.Vertex());
        colors[i] = new THREE.Color(0xffffff);
       
        precipitation_array.push(new Precipitation());
        precipitation_geometry.vertices[i] = new THREE.Vertex(precipitation_array[i].posn);
    }
    
    precipitation_geometry.colors = colors;
	
	 
    
    //init particle system
    precipitations = new THREE.ParticleSystem(precipitation_geometry, material);
    precipitations.sortParticles = false;
    scene.addObject(precipitations);
    
    
    

}

function remove_precipitation(){
precipitation_kill = true
 scene.removeObject(precipitations);
 precipitation_array = []
}

