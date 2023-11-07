function findNb(volume){
    if(volume<=0){
        return -1;
    }
    let quantityCubes = 0;
    let n = 1;
    while(volume>0){
        volume -= (n++)**3;
        quantityCubes++;
    }
    if(volume!=0){
        return -1;
    }
    return quantityCubes;
}

console.log(findNb(1071225))

