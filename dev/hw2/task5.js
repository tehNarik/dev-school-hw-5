function highAndLow(string){
    let numArray = string.split(" ").map(Number);
    let min = numArray[0];
    let max = numArray[0];
    for(let el of numArray){
        if(el>max){
            max = el;
        }else if(el<min){
            min = el;
        }
    }
    return max + " " + min;
}

let stringNumbers="-4 -3 12 8 5"; // приклад вхідних даних
console.log(highAndLow(stringNumbers));