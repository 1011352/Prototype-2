import * as PIXI from 'pixi.js'
import { Game } from './game'
import { Plus } from './plus'

export class Min extends PIXI.Sprite {
    game: Game
    plus: Plus
    min: Min
    xspeed: number
    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.game = game


        //this.width = 150
        //this.height = 150
        this.x = (Math.random() * game.pixi.screen.right) + 1
        this.y = (Math.random() * game.pixi.screen.bottom) + 1


        //window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        //window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }
/*
    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = 4
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = -4

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
                this.xspeed = 0
        }
    }
    update(delta: number) {
        this.x += this.xspeed * delta
    }
*/
}

