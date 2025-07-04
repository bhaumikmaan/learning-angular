import {Point} from './point' ;
function log(message: string){
  console.log(message);
}
var msg = 'LOGGING';
log(msg);


function something(){
  for(let i = 0 ; i < 5 ; i++){
    console.log(i);
  }
  // This will give an error. To make it work change the let to var
  console.log("Finally: " , i);
}

something();

let a: number; let b: boolean; let c: string;
let d: any;
let e: number[] = [1, 2, 31];
let f: any [] = [1, true,'a', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
enum Color { Red = 0, Green = 1, Purple = 2, Blue = 3};
let backgroundColor = Color.Red;

let an ; // this is of type any which allows it to change types
an = 1;
an = 'string'

let message;
message = 'abc'; // type = any -> Intellisense functions not available for this type
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

let doLog = (message: string) => console.log(message);
doLog("Arrow Function");

interface Pointer {
  x: number,
  y: number
}
let printPoint = (point: Pointer) => {
  console.log("X: " + point.x + "\nY: " + point.y)
}
printPoint({x: 1 , y: 2})

// class Point {
//     x: number;
//     y: number;
//     draw(){
//         console.log("X: " + this.x + "\nY: " + this.y)
//     }
//     // ? is used to make the parameter optional
//     constructor(x?: number , y?:number){
//         this.x = x;
//         this.y = y ;
//     }
// }


let point:Point = new Point(100 , 101);
point.draw();
point.x = 400;
point.y = 401;
point.draw();

let undefPoint = new Point();
undefPoint.draw() ;
