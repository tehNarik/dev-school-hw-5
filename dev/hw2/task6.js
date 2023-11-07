function func(stringNumbers){
    let numArray = stringNumbers.split("").map(Number);
    numArray.sort().reverse();
    let res = "";
    for(let el of numArray){
        res += el;
    }
    return res;
}
let string = "62124"
console.log(func(string))