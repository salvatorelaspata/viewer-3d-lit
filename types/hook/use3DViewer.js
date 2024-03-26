import * as THREE from 'three';
import { CanvasTexture } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { catalog } from "../config/catalog";
// import { actions } from "../store/store";
import { loadBackground, loadModel, loadTexture } from './useLoader';
let camera, scene, controls, sceneMeshes = [], renderer;
const _createMaterial = (texture, hdrEquirect) => {
    const meshParams = {
        // color: 0xffffff,
        transmission: 0,
        opacity: 1,
        metalness: 0.2,
        roughness: 0,
        ior: 1.5,
        // thickness: 0.01,
        specularIntensity: 1,
        // specularColor: 0xffffff,
        specularColor: new THREE.Color(0xffffff),
        envMapIntensity: 1,
        // lightIntensity: 1,
    };
    const r = Math.round(255 * Math.random());
    const g = Math.round(255 * Math.random());
    const b = Math.round(255 * Math.random());
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    return new THREE.MeshPhysicalMaterial({
        // color: randomColor,
        // ...(texture instanceof THREE.Texture
        //   ? { color: randomColor, alphaMap: texture }
        //   : { map: texture }),
        ...(texture instanceof CanvasTexture && {
            color: randomColor,
            alphaMap: texture,
        }),
        ...(texture instanceof THREE.Texture && { map: texture }),
        metalness: meshParams.metalness,
        roughness: meshParams.roughness,
        ior: meshParams.ior,
        envMap: hdrEquirect,
        envMapIntensity: meshParams.envMapIntensity,
        transmission: meshParams.transmission,
        specularIntensity: meshParams.specularIntensity,
        specularColor: meshParams.specularColor,
        opacity: meshParams.opacity,
        side: THREE.DoubleSide,
        transparent: true,
    });
};
const _onWindowResize = () => {
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    console.log("_onWindowResize", width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};
const _managePosition = (obj, camera, controls) => {
    // Creo un box che contiene l'obj così da calcolarne i delta
    const boundingBox = new THREE.Box3().setFromObject(obj);
    // console.log(boundingBox)
    const { min: { 
    // x: minX, 
    y: minY,
    // z: minZ 
     }, max: { x: maxX, y: maxY,
    // z: maxZ
     }, } = boundingBox;
    // const deltaX = (maxX - minX) / 2
    const deltaY = (maxY - minY) / 2;
    // const deltaZ = (maxZ - minZ) / 2
    // set obj position
    obj.rotation.set(0, 0, 0);
    obj.position.set(0, -deltaY, 0);
    camera.position.set(maxX * 6, 0, 0); // x, y, z
    controls.target = new THREE.Vector3(0, 0, 0);
};
export const applyTextureOnMesh = (obj, hdrEquirect, texture) => {
    obj &&
        obj.traverse(function (child) {
            // child.addEventListener('click', (a: THREE.Event) => {
            //   applyTextureOnMesh(obj, hdrEquirect, texture)
            // })
            if (child instanceof THREE.Mesh) {
                child.material = _createMaterial(texture, hdrEquirect);
                // actions.addComponent(child)
                sceneMeshes.push(child);
            }
            else {
                // console.log("Not managed", child);
            }
        });
};
export const use3DViewer = async (mount, modelConfig) => {
    const { object, background, texture: t } = modelConfig;
    const [obj, hdrEquirect, texture] = await Promise.all([
        loadModel(object),
        loadBackground(background),
        loadTexture(t), // texture for 3d model
    ]);
    // apply random mesh color to object model
    applyTextureOnMesh(obj, hdrEquirect, texture);
    // create and configure renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(document.body.clientWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    // mount renderer to dom
    mount && mount && mount.appendChild(renderer.domElement);
    // create scene
    scene = new THREE.Scene();
    // create camera
    camera = new THREE.PerspectiveCamera(75, document.body.clientWidth / window.innerHeight, 0.1, 1000);
    // set texture environment mapping
    scene.background = hdrEquirect;
    // LUCE
    if (!(scene.background instanceof THREE.DataTexture)) {
        const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        const light2 = new THREE.AmbientLight(0x404040);
        scene.add(light);
        scene.add(light2);
    }
    // add obj to scene
    scene.add(obj);
    // orbit controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 0;
    controls.maxDistance = 100;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    // settings camera and objec position
    _managePosition(obj, camera, controls);
    // ANIMATE
    const renderAndAnimate = () => {
        requestAnimationFrame(renderAndAnimate);
        if (obj)
            obj.rotation.y -= 0.002;
        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();
        renderer.render(scene, camera);
    };
    // loop
    renderAndAnimate();
    // resize listener
    window.addEventListener('resize', _onWindowResize);
    return { obj, hdrEquirect, texture };
};
