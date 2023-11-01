class Card {
    constructor (name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }

    showStats(){
        console.log(`${this.name}: Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`)
    }
    attack( target ){
        console.log(`${this.name} is attacking ${target.name} for ${this.power} damage.`)
        target.resilience = target.resilience - this.power
        console.log(`${target.name} has ${target.resilience} health remaining`)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play (targetNinja){
        if (targetNinja instanceof Unit){
            if (this.stat === "resilience"){
                targetNinja.resilience -= this.magnitude
            }
            else{
                targetNinja.power += this.magnitude
            }
        }
        else {
            throw new Error ("Target must be a Ninja!");
        }
    }

}

const redNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4)

redNinja.attack(blackNinja)

console.log (blackNinja)