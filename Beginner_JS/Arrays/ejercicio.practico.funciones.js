// Create powerPuffGirl objects

function PowerPuffGirl (name, color, superpower){
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function (){
        console.log(`Powerpuff Girl Informacion:
            Name: ${this.name}
            Color: ${this.color}
            Superpower: ${this.superpower}
            ${this.isLeader ? 'Leader: Yes':'Leader: No'}
        `)
    }

    this.becomeLeader = function (){
        this.isLeader = true
        console.log(`${this.name} has become the Leader of the PowerPuffGirls`)
    }
}

const blossom = new PowerPuffGirl('Blossom', 'Pink', 'Ice Breath')
const butterCup = new PowerPuffGirl('Buttercup', 'Green', 'Super Strength')
const bubbles = new PowerPuffGirl('Bubbles', 'Blue', 'Supersonic Flight')

blossom.displayInfo()
butterCup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
butterCup.displayInfo()
bubbles.displayInfo()