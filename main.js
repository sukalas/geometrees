const Main = (() => {
    this.world = null;
    const init = () => {
        _makeEnviroment();
        _addObjects();
        _animate();
    }

    const _makeEnviroment = () => {
        this.world = new FirstWorld();
        this.world.renderer.setSize( window.innerWidth, window.innerHeight );
        this.world.camera.position.z = 1000;
        document.body.appendChild( this.world.renderer.domElement );
    }
    
    const _addObjects = () => {
        this.world.createCube();
    }
    
    const _animate = () => {
        this.world.animate();
    }
    
    return {
        init: init
    }

})();