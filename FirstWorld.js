class FirstWorld {
    constructor() {
        this.scene = new THREE.Scene(),
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
            this.renderer = new THREE.WebGLRenderer()
    }

    createCube() {
        const triangles = 20;
        this.box = new THREE.Mesh(new THREE.BoxGeometry(700, 700, 700, triangles,triangles,triangles), new THREE.MeshBasicMaterial({
            color: 0x0099ff, //The color chosen for the mesh 
            wireframe: true //Shade in or wireframe?
          }));
        this.scene.add(this.box);
    }

    realizeActions() {
        this.box.rotation.x += 0.01;
        this.box.rotation.y += 0.01;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.realizeActions();
        this.renderer.render(this.scene, this.camera);
    }
}