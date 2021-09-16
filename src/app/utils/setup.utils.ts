import * as PIXI from 'pixi.js';
import {AbstractRenderer, Renderer} from 'pixi.js';

import { GameDimension } from '../consts';

export function createGameObjects(renderer: Renderer | AbstractRenderer) {
  return {}
}

export function createGame(environment): PIXI.Application {
  return new PIXI.Application({
    width: GameDimension.Width,
    height: GameDimension.Height,
    antialias: environment.antiAliased,
    backgroundAlpha: 1,
    resolution: 1,
  })
}
