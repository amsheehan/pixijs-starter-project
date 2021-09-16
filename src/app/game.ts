import * as PIXI from 'pixi.js';

import Environment from './config/environment';
import { DEFAULT_GAME_SPEED } from './consts/physics';
import * as setup from './utils/setup.utils';

export class Pongderdome {
  environment: Environment;
  loader: PIXI.Loader;

  private game: PIXI.Application;
  private speed: number;
  private state: Function;
  private gameObjects: any = {};
  
  constructor(parent: HTMLElement) {
    this.environment = new Environment();
    this.environment.setWebGLOrCanvas();

    this.renderGameStage(parent);

    this.loader = PIXI.Loader.shared.load(this.setup.bind(this))
    this.speed = DEFAULT_GAME_SPEED;
  }

  private renderGameStage(parent: HTMLElement) {
    this.game = setup.createGame(this.environment); 
    
    parent.replaceChild(this.game.view, parent.lastElementChild); // Hack for parcel HMR
  }

  private setup(loader, resources) {
    this.gameObjects = setup.createGameObjects(this.game.renderer);

    for (const [key,] of Object.entries(this.gameObjects)) {
      this.game.stage.addChild(this.gameObjects[key].sprite);
    }

    /**
     * Setup positions of game objects
     */

    this.state = this.playing;
    this.game.ticker.add(delta => this.gameLoop(delta));
    this.game.ticker.start();
  }

  private gameLoop(delta: number) {
    this.state(delta)
  }

  private playing(delta: number) {
    const normalizedSpeed = this.speed * delta;
    const mousePosition = this.game.renderer.plugins.interaction.mouse.global;
  }
}
