"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + "\nY: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            if (val < 0) {
                throw new Error('Value can not be less that 0');
            }
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
