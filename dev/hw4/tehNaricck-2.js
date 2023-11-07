class Vector{
    constructor(arr) {
        this.array = arr;
    }
    getArr(){
        return this.array;
    }
    add(vector){
        if (this.array.length !== vector.array.length) {
        throw new Error("Vectors must have the same length");
    }
        var newArr = [];
        for(var i=0; i<this.array.length; i++){
            newArr.push(this.array[i]+vector.array[i]);
        }
        return new Vector(newArr);
    }
    subtract(vector){
        if (this.array.length !== vector.array.length) {
        throw new Error("Vectors must have the same length");
      }
        var newArr = [];
        for(var i=0; i<this.array.length; i++){
            newArr.push(this.array[i]-vector.array[i]);
        }
        return new Vector(newArr);
    }
    dot(vector){
        if (this.array.length !== vector.array.length) {
        throw new Error("Vectors must have the same length");
    }
        let res = 0;
        for(let i=0; i<this.array.length; i++){
            res += this.array[i]*vector.array[i];
        }
        return res;
    }
    norm(){
        let res = 0;
        for(let i=0; i<this.array.length; i++){
            res += this.array[i]*this.array[i];
        }
        return Math.sqrt(res);
    }
    toString() {
    return "(" + this.array.join(",") + ")";
}

equals(vector) {
    if (!(vector instanceof Vector)) {
        return false;
    }
    return JSON.stringify(this.array) === JSON.stringify(vector.array);
}
}
var a = new Vector([1, 2, 3]);
var b = new Vector([1,1,1]);
var c = a.dot(b);
console.log(a.norm());