function loadfabric(scene) {

    
    var loader = new THREE.JSONLoader();

    loader.load('model/fabric.json', function(geometry) {

        var mat = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, overdraw: true});
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.name = "sphere";
        mesh.position.x = 30;
        mesh.position.z = -150;
        mesh.updateMatrix();
        scene.add(mesh);
        
    });
    

}

function loadcandle(scene) {

    
        var loader = new THREE.OBJMTLLoader();

        loader.addEventListener( 'load', function ( event ) {

                var mesh = event.content;
                mesh.position.x = - 30;
                mesh.position.z = - 150;
                scene.add( mesh );

        });

        loader.load( 'model/candle.obj', 'model/candle.mtl' );

    

}

function loadsphere(){
    
}