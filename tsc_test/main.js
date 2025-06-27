"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
function log(message) {
    console.log(message);
}
var msg = 'LOGGING';
log(msg);
function something() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // This will give an error. To make it work change the let to var
    console.log("Finally: ", i);
}
something();
var a;
var b;
var c;
var d;
var e = [1, 2, 31];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var an; // this is of type any which allows it to change types
an = 1;
an = 'string';
var message;
message = 'abc'; // type = any -> Intellisense functions not available for this type
var endsWithC = message.endsWith('c');
var alternativeWay = message, endsWith;
('c');
var doLog = function (message) { return console.log(message); };
doLog("Arrow Function");
var printPoint = function (point) {
    console.log("X: " + point.x + "\nY: " + point.y);
};
printPoint({ x: 1, y: 2 });
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
var point = new point_1.Point(100, 101);
point.draw();
point.x = 400;
point.y = 401;
point.draw();
var undefPoint = new point_1.Point();
undefPoint.draw();
