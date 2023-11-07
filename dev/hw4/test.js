class Animal{
    type;
    constructor(type){
        this.type = type;
    }

    describe(){
        console.log(`the type is ${this.type}`);
    }
}
class Cat extends Animal{
    breed;
    constructor(breed) {
        super(breed);
        this.breed = breed;
    }
    describe(){
        super.describe();
        console.log(`the second type is ${this.breed}`);
    }
}
var c = new Cat('cat');
c.describe();