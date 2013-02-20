if (!Detector.webgl) Detector.addGetWebGLMessage();

glob = new Global();

init();
animate();
 
function init() {

    glob.container = document.createElement('div');
    document.body.appendChild(glob.container);

    glob.renderer = new THREE.WebGLRenderer({antialias: true});
    glob.camera = new THREE.PerspectiveCamera(35, glob.SCREEN_WIDTH / glob.SCREEN_HEIGHT, 1, 1000);
    glob.scene = new THREE.Scene();
    glob.PointLight = new pointlight(glob.scene);
    glob.scene.add( glob.camera );
    
    // *** FOG INIT ***
    //scene.fog = new THREE.Fog( , 1, 700 );
    //glob.scene.fog.color = new THREE.Color( 20, 20, 20 );
    glob.scene.fog = new THREE.FogExp2(0x000000, 0.0025);

    // *** Controls ***
    glob.controls = new THREE.PointerLockControls(glob.camera);
    glob.scene.add(glob.controls.getObject());
    glob.controls.enabled = true;

    // *** LIGHT INIT ***
    glob.scene.add(new THREE.AmbientLight('rgb(5,5,20)'));
    
    directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(10, 0, -100);
    glob.scene.add(directionalLight);
    directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(-10, 0, 100);
    glob.scene.add(directionalLight);
    
    loadfabric(glob.scene);
    loadcandle(glob.scene);
    loadElephant(glob.scene);
    loadAlien3(glob.scene);
    loadB7(glob.scene);
    //loadDeep(glob.scene);
    
    // *** Enviroment INIT *** 
    glob.maxAnisotropy = glob.renderer.getMaxAnisotropy();
    glob.terrain = new terrain(glob.scene, glob.maxAnisotropy);
    //terrain.MakeBiburats();
    //terrain.energyLines=[];
        
    glob.stats = new Stats();
    glob.container.appendChild( glob.stats.domElement );

    // *** RENDERER ***
    glob.renderer.setSize(glob.SCREEN_WIDTH, glob.SCREEN_HEIGHT);
    glob.renderer.setClearColor(glob.scene.fog.color, 1);
    glob.renderer.autoClear = false;

    glob.renderer.domElement.style.position = "relative";
    glob.container.appendChild(glob.renderer.domElement);

    // *** STATS ***
    glob.stats = new Stats();
    glob.container.appendChild(glob.stats.domElement);

    // *** Scaner ***
    glob.scaner = new scaner(glob.container, glob.scene, glob.controls.getObject(), glob.SCREEN_HEIGHT / 2, glob.SCREEN_HEIGHT / 2);

}

function animate() {

    requestAnimationFrame(animate);
    render();
    glob.stats.update();

}

function render() {

    var delta_time = glob.clock.getDelta();

    glob.controls.update( delta_time * 10);
    
    glob.terrain.update(glob.controls.getObject());    
  
//    mouseX = 0;
//    var collision = false;
//    for (var index in scene.children) {
//        mouseX += 1;
//        var object = scene.children[index];
//
//        if (true === controls.CheckCollisionWithCamera(object)) {
//            collision = true;
//        }
//        if ("update" in object) {
//            object.update(delta_time);
//        }
//    }
//    if (collision === false) {
//        controls.controlSet(true);
//    }

    glob.scaner.update(delta_time);

    document.getElementById( "val_left" ).innerHTML = Math.floor(glob.controls.getObject().position.x) + " : " + Math.floor(glob.controls.getObject().position.z);

    glob.renderer.clear();
    glob.renderer.render(glob.scene, glob.camera);

}


var onKeyDownMain = function(event) {
    if (event.keyCode === 32) { // Пробел
       
        var b7 = glob.res["candle"].clone();
        b7.position.x = Math.random() * 1000 - 500;
        b7.position.z = Math.random() * 1000 - 500;
        glob.scene.add(b7);

        //glob.scene.fireLaser(glob.controls.getObject());
    }
};
document.addEventListener( 'keydown', onKeyDownMain, false );

