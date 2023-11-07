function func(number){
    let sum = 0;
    for(let i=1; i<10; i++){
        if(i<number && (i%3===0 || i%5===0)){
            sum += i;
        }
    }
    return sum;
}

let maxNumber = 8; //число, до якого будуть братися числа для додавання

console.log(func(maxNumber));