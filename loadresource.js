function loadfabric(scene) {

    var loader = new THREE.JSONLoader();

    loader.load('model/fabric.json', function(geometry) {

        var mat = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, overdraw: true});
        var mesh = new THREE.Mesh(geometry, mat);

        var mirror = mesh.clone();
        mirror.rotation.z = Math.PI;
        mesh.add(mirror);
        
        mesh.name = "sphere";
        mesh.position.x = 30;
        mesh.position.z = -150;
        mesh.updateMatrix();
                
        //scene.add(mesh);
        
        glob.res["fabric"] = mesh;
        
    });
    
}

function loadcandle(scene) {

        var loader = new THREE.OBJMTLLoader();
        glob.mon.add(loader);
        loader.addEventListener( 'load', function ( event ) {

                var mesh = event.content;

                var mirror = mesh.clone();
                mirror.rotation.z = Math.PI;
                mesh.add(mirror);

                mesh.name = "sphere";
                mesh.position.x = - 100;
                mesh.position.z = - 150;
                mesh.scale.set(10,10,10);
                //scene.add( mesh );
                
                glob.res["candle"] = mesh;

        });

        loader.load( 'model/candle.obj', 'model/candle.mtl' );

}

function loadElephant(scene) {

        var loader = new THREE.OBJMTLLoader();
        glob.mon.add(loader);
        loader.addEventListener( 'load', function ( event ) {

                var mesh = event.content;

                var mirror = mesh.clone();
                mirror.rotation.z = Math.PI;
                mesh.add(mirror);

                mesh.name = "sphere";
                mesh.position.x = - 100;
                mesh.position.z = - 350;
                mesh.scale.set(10,10,10);
                scene.add( mesh );
                
                glob.res["elephant"] = mesh;        

        });

        loader.load( 'model/elephant.obj', 'model/elephant.mtl' );

}

function loadAlien3(scene) {

        var loader = new THREE.OBJMTLLoader();
        glob.mon.add(loader);
        loader.addEventListener( 'load', function ( event ) {

                var mesh = event.content;
                mesh.position.y = 3;
                
                var mirror = mesh.clone();
                mirror.position.y = -9;
                mirror.rotation.z = Math.PI;
                mesh.add(mirror);

                mesh.name = "sphere";
                mesh.scale.set(0.4, 0.4, 0.4);
                mesh.position.x = 30;
                mesh.position.z = - 80;
                //scene.add( mesh );
                
                glob.res["alien_3"] = mesh;

        });

        loader.load( 'model/alien_3.obj', 'model/alien_3.mtl' );

}

function loadB7(scene) {

        var loader = new THREE.OBJMTLLoader();
        glob.mon.add(loader);
        loader.addEventListener( 'load', function ( event ) {

                var mesh = event.content;

            var mirror = mesh.clone();
                mirror.rotation.z = Math.PI;
                mesh.add(mirror);

                mesh.name = "sphere";
                mesh.scale.set(3.0, 3.0, 3.0);
                mesh.position.x = 20;
                mesh.position.z = - 300;
                //scene.add( mesh );
                
                glob.res["B7"] = mesh;

        });
        loader.load( 'model/B7.obj', 'model/B7.mtl' );
}

function loadDeep(scene) {

        var loader = new THREE.OBJMTLLoader();
        glob.mon.add(loader);
        loader.addEventListener( 'load', function ( event ) {

                var mesh = event.content;

                var mirror = mesh.clone();
                mirror.rotation.z = Math.PI;
                mesh.add(mirror);

                mesh.name = "sphere";
                mesh.scale.set(0.1, 0.1, 0.1);
                mesh.position.x = 0;
                mesh.position.z = -3000;
                
                //scene.add( mesh );
                
                glob.res["Deep"] = mesh;

        });

        loader.load( 'model/Deep.obj', 'model/Deep.mtl' );

}

function loadsphere(scene){

    var mat = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, overdraw: true});
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(20, 20, 10), mat);
    sphere.position.z = -150;
    sphere.position.x = -50;
    sphere.updateMatrix();
    sphere.name = "factory";
    scene.add(sphere);    

}