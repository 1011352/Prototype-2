import * as PIXI from "pixi.js";

export class Button extends PIXI.Graphics {
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.beginFill(0xff0000);
    this.drawRoundedRect(0, 0, 150, 80, 15);
    this.endFill();

    const startText = new PIXI.Text("Start Game", {
      breakWords: true,
      dropShadow: true,
      fill: "white",
      fontFamily: "Arial Black",
      fontWeight: "bold",
      strokeThickness: 3
    });

    startText.x = this.getBounds().width / 2;
    startText.y = this.getBounds().height / 2;
    startText.anchor.set(0.5);

    this.addChild(startText);

    this.buttonMode = true
    this.interactive = true
  }
}
