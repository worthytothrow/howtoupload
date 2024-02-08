// const a:number = 1
// const b:string = "b"
// const c:()=>void = function func(){}
// let str:string[] = ["sadsdadas" , "sdadsadsa"]

class Point { x: number; y: number; }
let point: Point = new Point()
point.x = 1;
point.y = 2;

class Rect {
    x1: number; 
    public x2: number; 
    y1: number; 
    y2: number;

    private readonly MAX_COORD  = 1000;
    
    constructor(x: number, y: number){
        this.x1 = x
        this.x2 = x
        this.y1 = y
        this.y2 = y
    }

    square () {
        return Math.abs( this.x1 - this.x2) * Math.abs( this.y1 - this.y2)
    }
}
let rect1: Rect = new Rect(10,20)
rect1.x1 = 5
rect1.x2 = 5

rect1.square()