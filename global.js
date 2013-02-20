Global = function() {

    this.SCREEN_WIDTH  = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;
    
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    
    this.stat;
    this.container;
    this.renderer;
    this.scene;
    this.camera;
    this.control;
    this.terrain;
    this.scaner;
    this.bibutats;
    this.PointLight;
    
    this.composer;
    this.effectFXAA;
    
    this.maxAnisotropy;

    this.clock = new THREE.Clock();
    
    this.res = {}; // хранилище мешей 

};

// Дополнительная ф-я для полученья псевдослучайных последловательностей
Math.seed = 0;
Math.rnd = function(max, min) {
    max = max || 1;
    min = min || 0;
 
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;
 
    return min + rnd * (max - min);
};

// addEventListener onWindowResize
function onWindowResize() {
        
        glob.SCREEN_WIDTH = window.innerWidth;
        glob.SCREEN_HEIGHT = window.innerHeight;

        glob.camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        glob.camera.updateProjectionMatrix();

        glob.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        
        glob.scaner.remove();
        glob.scaner = new scaner(container, scene, controls.getObject(), SCREEN_HEIGHT / 2, SCREEN_HEIGHT / 2);
}
window.addEventListener( 'resize', onWindowResize, false );
