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
    this.mon;

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
        
        glob.windowHalfX = glob.SCREEN_WIDTH / 2;
        glob.windowHalfY = glob.SCREEN_HEIGHT / 2;

        glob.camera.aspect = glob.SCREEN_WIDTH / glob.SCREEN_HEIGHT;
        glob.camera.updateProjectionMatrix();

        glob.renderer.setSize( glob.SCREEN_WIDTH, glob.SCREEN_HEIGHT );
        
        glob.scaner.remove();
        glob.scaner = new scaner(glob.container, glob.scene, glob.controls.getObject(), glob.windowHalfX, glob.windowHalfY);
}
window.addEventListener( 'resize', onWindowResize, false );
