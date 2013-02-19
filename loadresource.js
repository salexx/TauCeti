function loadfabric() {

    var loader = new THREE.JSONLoader();

    loader.load('model/fabric.json', function(geometry) {

        var mat = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, overdraw: true});
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.updateMatrix();
        mesh.name = "factory";
        mesh.scale.x = 0.01;
        mesh.scale.y = 0.01;
        mesh.scale.z = 0.01;
        //scene.add(mesh);
        
    });

}

function loadsphere(){
    
}