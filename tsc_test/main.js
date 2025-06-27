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
var an;
an = 1;
an = 'string';
