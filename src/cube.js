import React from "react";
import * as THREE from "./three";

export default class Cube extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);
        var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        // renderer.setClearColor(0x000000, 0.5);
        renderer.setSize(700, 300);
        this.mount.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        // cube.position.set(0, 0, 0);
        scene.add(cube);
        cube.scale.x = 2.5; // SCALE
        cube.scale.y = 2.5; // SCALE
        cube.scale.z = 2.5; // SCALE
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
        // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
        return (<div className="cube" ref={ref => (this.mount = ref)} />
        );
    }
}
