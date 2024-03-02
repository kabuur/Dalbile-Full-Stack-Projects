class Car {


    constructor(color){

        this.color = color
    }

    greeting(){
        console.log(this.color)
    }
}


const car1 = new Car("blue")

car1.greeting()