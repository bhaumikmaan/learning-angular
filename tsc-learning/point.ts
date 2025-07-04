export class Point {
  constructor(public _x?:number, private _y?:number){}

  draw(){
    console.log("X: " + this._x + "\nY: " + this._y)
  }
  get x(){
    return this._x;
  }
  set x(val){
    if(val < 0){
      throw new Error('Value can not be less that 0');
    }
    this._x = val;
  }
}
