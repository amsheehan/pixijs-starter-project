import * as PIXI from 'pixi.js';

class Environment {
    type = 'WebGL';
    antiAliased = true;

    setWebGLOrCanvas() {
        console.log("webgl support", PIXI.utils.isWebGLSupported())

        if (!PIXI.utils.isWebGLSupported()) {
            this.type = "canvas";
        } else {
            console.warn('This game only runs in browsers that support WebGL. :(');
        }
    }
}
export default Environment;
