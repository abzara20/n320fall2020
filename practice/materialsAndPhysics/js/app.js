//get canvas from html
let canvas = document.getElementById("myCanvas");

//create the 3d engine, goes in global scope
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, mat;


scene = createScene();

engine.runRenderLoop(function() {

    // mat.diffuseTexture.vScale += .01;

    scene.render();
})


//-----------------------------------
//Helper functions
//-----------------------------------

function createScene () {
    //create the scene space 
    var scene = new BABYLON.Scene(engine);
    //add a camera to the scene and attatch to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI /2 , Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:1}, scene);
    // light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);

    mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("img/texture.jpg ", scene);
    mat.specularColor = new BABYLON.Color3(0.5,0.6,0.87);
    sphere.material = mat;
    
    
    return scene;
}

