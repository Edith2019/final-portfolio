import React from "react";
import * as THREE from "./three";

const createScene = () => {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);
    return scene;
};
const createCamera = () => {
    let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    return camera;
};

const createRenderer = () => {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(700, 300);
    return renderer;
};

const createCube = () => {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    cube.scale.x = 2.5;
    cube.scale.y = 2.5;
    cube.scale.z = 2.5;
    return cube;
};

export default class Cube extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        const scene = createScene();
        const camera = createCamera();
        const renderer = createRenderer();
        const cube = createCube();
        scene.add(cube);
        this.mount.appendChild(renderer.domElement);
        let animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }
    render() {
        return <div className="cube" ref={ref => this.mount = ref} />;
    }
}