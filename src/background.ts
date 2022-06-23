import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { Game } from './game'

export class Background extends  PIXI.TilingSprite  {
    xmove: number = 0
    game : Game
    pixi : PIXI.Application


    constructor(texture: PIXI.Texture, w:number, h:number, ) {
        super(texture, w, h)
      






        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xmove = 4
                break
            case "D":
            case "ARROWRIGHT":
                this.xmove = -4





        }
    }


    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xmove = 0
        }
    }

    update(delta:number) {
        this.tilePosition.x += this.xmove * delta

    


        

    }


}

