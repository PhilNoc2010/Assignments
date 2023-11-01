class Ninja {
    constructor(name){
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    speakWisdom() {
        console.log("All that is not saved is lost")
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }

    showStats(){
        console.log(`My Health is ${this.health}`)
        console.log(`My Speed is ${this.speed}`)
        console.log(`My Strength is ${this.strength}`)
    }

    drinkSake() {
        this.health += 10
        console.log(`My Health is now ${this.health}`)
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
