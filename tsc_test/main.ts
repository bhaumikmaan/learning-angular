function log(message){
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
