window.onload = function()
{
    var camera, scene, renderer;
    var effect, controls;
    var element, container, mercurio;
    var clock = new THREE.Clock();
    var cube, veCubo = false; //VARIABLES DE EJEMPLO, NO DEBERÁ ESTAR AL FINAL...
    //Array de planetas y sus posiciones en el escenario..
    //Posciones elementos...
    /*
    Atrás: x : -300, y : 350, z : 30,
    Adelante : x : 250, y : 350, z : 0
    Izquierda : x : 0, y : 200, z : -350
    Derecha : x : 0, y : 180, z : 300
    */
    //Base array planetas...
    var planetas = [
					 {
						             imagen 	   : "img/planetas/luna.jpg",
                         nombre      : "La Luna",
                         vista       : false,
                         position    : { x : -300, y : 350, z : 30},
                         tamano      :50,
						             objeto		   : 0
           },
             {
                           imagen 	   : "img/planetas/jupiter.jpg",
                           nombre      : "jupiter",
                           vista       : false,
                           position    : {x : 250, y : 350, z : 0},
                           tamano      :50,
                           objeto		   : 0
            },
             {
                         imagen    	 : "img/planetas/marte.jpg",
                         nombre      : "marte",
                         vista       : false,
                         position    : {x : 0, y : 200, z : -350},
                         tamano      :50,
                         objeto		   : 0
          },
           {
                       imagen 	   : "img/planetas/mercurio.jpg",
                       nombre      : "mercurio",
                       vista       : false,
                       position    : {x : 0, y : 180, z : 300},
                       tamano      :50,
                       objeto		   : 0
         },
       {
                     imagen 	 : "img/planetas/tierra.jpg",
                     nombre      : "tierra",
                     vista       : false,
                     position    : {x : 250, y :0, z :-350},
                     tamano      :50,
                     objeto		 : 0
       },
     {
                   imagen 	   : "img/planetas/venus.jpg",
                   nombre      : "venus",
                   vista       : false,
                   position    : {x : 0, y : 0, z : 0},
                   tamano      :50,
                   objeto		   : 0
     }];
    var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);


	};

    var resize = function()
    {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        effect.setSize(width, height);
    };

    var init = (function()
    {
        renderer = new THREE.WebGLRenderer();
        element = renderer.domElement;
        container = document.getElementById('example');
        container.appendChild(element);
        effect = new THREE.StereoEffect(renderer);
        effect.separation = 0.2;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
        camera.position.set(0, 5, 0);
        scene.add(camera);
        controls = new THREE.OrbitControls(camera, element);
        controls.rotateUp(Math.PI / 4);
        controls.target.set
        (
            camera.position.x + 0.1,
            camera.position.y + 0.1,
            camera.position.z
        );
        controls.noZoom = false;
        controls.noPan = false;
        //controls.autoRotate = true;
        function setOrientationControls(e)
        {
            if (!e.alpha)
            {
                return;
            }
            controls = new THREE.DeviceOrientationControls(camera, true);
            controls.connect();
            controls.update();
            element.addEventListener('click', fullscreen, false);
            window.removeEventListener('deviceorientation', setOrientationControls, true);
        }
        //Adicona luz..
        window.addEventListener('deviceorientation', setOrientationControls, true);
        var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
        scene.add(light);

        //Crear los panetas...
        //Con la porpiedad position.x se establecerá la posición en x, los mismo con y, z
        //ES ESTE ESPACIO SE ESPERA QUE SE CREEN LOS "PLANTEAS/LUNA"
        // SE PUEDE HACER USO DE LA FUNCIÓN crearPlaneta()
        //EL TAMAÑO DE LOS PLANETAS PUEDE SER IGUAL A 50
        //LAS IMÁGENES SE ENCUENTRA DENTRO DE LA CARPETA img/planteas


        luna = crearPlaneta(planetas[0]);
        /*
        EJEMPLO CON UN CUBO...
        ESTA PORICIÓN DE CÓDIGO SÓLO TIENE FINES DE EJEMPLO, NO DEBEÁ ESTAR AL FINAL DEL EJERCICIO...
        */
        var geometry = new THREE.BoxGeometry(20,20,20);
        var material = new THREE.MeshBasicMaterial({color: "red"});
        var texture = THREE.ImageUtils.loadTexture('img/luna.jpg');
        var material = new THREE.MeshBasicMaterial({map: texture});
        cube = new THREE.Mesh(geometry, material);
        luna = crearPlaneta(planetas[0]);
        jupiter = crearPlaneta(planetas[1]);
        marte = crearPlaneta(planetas[2]);
        mercurio = crearPlaneta(planetas[3]);
        tierra = crearPlaneta(planetas[4]);
        venus = crearPlaneta(planetas[5]);
        scene.add(luna);
        luna.position.x= planetas[0].position.x;
        luna.position.y = planetas[0].position.y;
        luna.position.z = planetas[0].position.z;

        scene.add(jupiter);
        jupiter.position.x= planetas[1].position.x;
        jupiter.position.y = planetas[1].position.y;
        jupiter.position.z = planetas[1].position.z;

        scene.add(marte);
        marte.position.x= planetas[2].position.x;
        marte.position.y = planetas[2].position.y;
        marte.position.z = planetas[2].position.z;

        scene.add(mercurio);
        mercurio.position.x= planetas[3].position.x;
        mercurio.position.y = planetas[3].position.y;
        mercurio.position.z = planetas[3].position.z;

       scene.add(tierra);
        tierra.position.x= planetas[4].position.x;
        tierra.position.y = planetas[4].position.y;
        tierra.position.z = planetas[4].position.z;
        scene.add(venus);
        venus.position.x= planetas[5].position.x;
        venus.position.y = planetas[5].position.y;
        venus.position.z = planetas[5].position.z;
      //  scene.add(cube);

        //FIN DEL EJEMPLO, NO DEBERÁ ESTAR AL FINAL...


        //http://stemkoski.github.io/Three.js/Skybox.html
        //Para adicionar escenario en 3D...
        var imagePrefix = "img/place/place-";
        var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
        var imageSuffix = ".jpg";
        var skyGeometry = new THREE.BoxGeometry( 800, 800, 800 );

        var materialArray = [];
        for (var i = 0; i < 6; i++)
        {
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
                side: THREE.BackSide
            }));
        }
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        scene.add( skyBox );
        window.addEventListener('resize', resize, false);
        setTimeout(resize, 1);
    })();

    var update = function(dt)
    {
        resize();
        camera.updateProjectionMatrix();
        controls.update(dt);
    };
    //Saber si el elemento está dentro del punto de vista que se está viendo...
    var puntoDeVista = function()
	{
        var frustum = new THREE.Frustum();
        var cameraViewProjectionMatrix = new THREE.Matrix4();
        camera.updateMatrixWorld(); // make sure the camera matrix is updated
        camera.matrixWorldInverse.getInverse( camera.matrixWorld );
        cameraViewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
        frustum.setFromMatrix( cameraViewProjectionMatrix );
        //frustum.intersectsObject(objeto) indica si está el punto de vísta...
        //ESTO LO HARÁ POR CADA FRAME, POR LO QUE ES IMPORTANTE VALIDAR SI YA ESTÁ VIENDO EL OBJETO...
        //EN EL EJEMPLO DEL ARRAY DE PLANETAS, EXISTE LA PROPIEDAD "vista", la cual indica si se está viendo el planeta...
        //EJEMPLO VIENDO UN CUBO...
        if(frustum.intersectsObject(luna))

        {
            if(!planetas[0].vista)
            {
              planetas[0].vista = true;
               responsiveVoice.speak("Estas viendo la luna", "Spanish Female");
              //console.log("estas viendo la luna");
            }
        }
        else
        {
          planetas[0].vista= false;
        }

        if(frustum.intersectsObject(jupiter))

        {
            if(!planetas[1].vista)
            {
              planetas[1].vista = true;
               responsiveVoice.speak("Estas viendo a jupiter", "Spanish Female");
              //console.log("estas viendo la luna");
            }
        }
        else
        {
          planetas[1].vista= false;
        }
        if(frustum.intersectsObject(marte))

        {
            if(!planetas[2].vista)
            {
              planetas[2].vista = true;
               responsiveVoice.speak("Estas viendo a marte", "Spanish Female");
              //console.log("estas viendo la luna");
            }
        }
        else
        {
          planetas[2].vista= false;
        }
        if(frustum.intersectsObject(mercurio))

        {
            if(!planetas[3].vista)
            {
              planetas[3].vista = true;
               responsiveVoice.speak("Estas viendo a mercurio", "Spanish Female");
              //console.log("estas viendo la luna");
            }
        }
        else
        {
          planetas[3].vista= false;
        }
        if(frustum.intersectsObject(tierra))

        {
            if(!planetas[4].vista)
            {
              planetas[4].vista = true;
               responsiveVoice.speak("Estas viendo a la tierra", "Spanish Female");
              //console.log("estas viendo la luna");
            }
        }
        else
        {
          planetas[4].vista= false;
        }

        if(frustum.intersectsObject(venus))

        {
            if(!planetas[5].vista)
            {
              planetas[5].vista = true;
               responsiveVoice.speak("Estas viendo a venus", "Spanish Female");
              //console.log("estas viendo la luna");
            }
        }
        else
        {
          planetas[5].vista= false;
        }

};

    var animate = function()
    {
        requestAnimationFrame(animate);
        luna.rotation.y += 0.1;
        jupiter.rotation.y += 0.1;
        marte.rotation.y += 0.1;
        mercurio.rotation.y += 0.1;
        tierra.rotation.y += 0.1;
        venus.rotation.y += 0.1;
        puntoDeVista();
        update(clock.getDelta());
        effect.render(scene, camera);
    };
    animate();

    var fullscreen = function()
    {
        if (container.requestFullscreen)
        {
            container.requestFullscreen();
        }
        else if (container.msRequestFullscreen)
        {
            container.msRequestFullscreen();
        }
        else if (container.mozRequestFullScreen)
        {
            container.mozRequestFullScreen();
        }
        else if (container.webkitRequestFullscreen)
        {
            container.webkitRequestFullscreen();
        }
    }
};
