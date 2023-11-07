function isPrime(number){
    if(number%2===0 && number != 2){ //перевірка на парність, щоб не перевіряти кратність кожному парному числу
        return false;
    }
    let temp = 3;
    while(temp<(number/2)){
        if(number%temp===0){
            return false;
        }
        temp+=2; 
    }
    return true;
}
// let num=9;
// console.log(isPrime(Math.abs(num)));
for(let i = -5; i<20; i++){
    if(isPrime(Math.abs(i))){
        console.log("Число " + i + " просте число.");
    }else{
        console.log("Число " + i + " не просте число.");
    }
}