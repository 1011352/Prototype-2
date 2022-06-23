import * as PIXI from "pixi.js";

export class Button2 extends PIXI.Graphics {

    public question : PIXI.Text
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.beginFill(0x000000);
    this.drawRoundedRect(0, 0, 150, 80, 15);
    this.endFill();
    

    this.question = new PIXI.Text("Start Game", {
      breakWords: true,
      dropShadow: true,
      fill: "white",
      fontFamily: "Arial Black",
      fontWeight: "bold",
      strokeThickness: 3
    });

    this.question.x = this.getBounds().width / 2;
    this.question.y = this.getBounds().height / 2;
    this.question.anchor.set(0.5);

    this.addChild(this.question);

    this.buttonMode = true
    this.interactive = true
  }
}
