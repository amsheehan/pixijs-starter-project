import * as PIXI from 'pixi.js';

export function didCollide(r1: PIXI.Sprite, r2: PIXI.Sprite) {
  let hit = false;
  let combinedHalfWidths: number;
  let combinedHalfHeights: number;
  let vx: number;
  let vy: number;

  r1['centerX'] = r1.x;
  r1['centerY'] = r1.y;
  r2['centerX'] = r2.x;
  r2['centerY'] = r2.y;

  r1['halfWidth'] = r1.width / 2;
  r1['halfHeight'] = r1.height / 2;
  r2['halfWidth'] = r2.width / 2;
  r2['halfHeight'] = r2.height / 2;

  vx = r1['centerX'] - r2['centerX'];
  vy = r1['centerY'] - r2['centerY'];

  combinedHalfWidths = r1['halfWidth'] + r2['halfWidth'];
  combinedHalfHeights = r1['halfHeight'] + r2['halfHeight'];

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      hit = true;
      console.log('collision detected');
    } else {
      hit = false;
    }
  } else {
    hit = false;
  }

  return hit;
}
