import * as PIXI from 'pixi.js'
import heroPlus from "./images/plus.png"
import minImage from "./images/1euro.png"
import city2Image from "./images/city4.jpg"
import { Plus } from './plus'
import { Min } from './min'
import { Background } from './background'
import { Button2 } from "./button2";



export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    private style: PIXI.TextStyle
    private bg: Background
    private plus: Plus
    private min: Min
    private mins: Min[] = []
    private text: PIXI.Text
    private button: Button2
    private container = new PIXI.Container();
    private a: number
    private b: number
    private c: number

    constructor(pixi: PIXI.Application) {
        this.pixi = new PIXI.Application({ width: 1920, height: 1080 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()


        this.pixi.loader.add('plusTexture', heroPlus)
            .add('minTexture', minImage)
            .add('city2Texture', city2Image)

        this.pixi.loader.load(() => this.loadCompleted())

    }



    loadCompleted() {
        this.style = new PIXI.TextStyle({
            breakWords: true,
            dropShadow: true,
            fill: "white",
            fontFamily: "Arial Black",
            fontWeight: "bold",
            strokeThickness: 3

        })

        this.bg = new Background(this.pixi.loader.resources["city2Texture"].texture!, this.pixi.screen.width, this.pixi.screen.height)
        this.pixi.stage.addChild(this.bg)


        for (let i = 0; i < 8; i++) {
            this.min = new Min(this.pixi.loader.resources["minTexture"].texture!, this)
            this.pixi.stage.addChild(this.min)
            this.mins.push(this.min)
        }

        this.plus = new Plus(this.pixi.loader.resources["plusTexture"].texture!, this)
        this.pixi.stage.addChild(this.plus)

this.pixi.ticker.add((delta: number) => this.update(delta))
}
    public collision(a, b) {
        const bounds1 = a.getBounds()
        const bounds2 = b.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }
    mathQues() {
        this.a = this.randomInteger(4, 9)
        this.b = this.randomInteger(1, 4)
        this.c = this.a - this.b
        let d = this.randomInteger(1, 10)
        let e = this.randomInteger(11,20)

        this.text = new PIXI.Text("sample", this.style)

        this.text.x = 630
        this.text.y = 275
        this.container.addChild(this.text)
    

        console.log("wat is", this.a, "-", this.b)
        console.log("het antword is", this.c)

        this.text.text = " wat is " + this.a + "-" + this.b;



        this.addButton(d + 2, 3)
        this.addButton(d - 1, 2.3)
        this.addButton(this.c, 4.3)
       

    }



    addButton(answer, move) {

        this.button = new Button2(
            this.pixi.screen.width / move,
            this.pixi.screen.height / 3
        );

        this.button.question.text = answer



        
        
        this.container.addChild(this.button);
        this.pixi.stage.addChild(this.container);
        

    }




    update(delta: number) {

     
        this.plus.update(delta)

        for (let g = 0; g < this.mins.length; g++) {
            if (this.collision(this.plus, this.mins[g])) {
                this.mathQues();
                this.mins[g].destroy();
                this.mins = this.mins.filter(ge => ge != this.mins[g]);
            }
        }
    }

}

new Game()