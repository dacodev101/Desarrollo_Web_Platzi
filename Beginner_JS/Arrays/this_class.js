// const house = {
//     dogName : 'Fido',
//     dogGreeting : function () {
//         console.log(`Hi I'm ${this.dogName}`);
//     }
// }

// house.dogGreeting();


// function dogGreeting (){
//     console.log(`Hi I'm ${this.dogName}`);
// }

// dogGreeting.call(newHouse)

// Bind - Call - Apply

function newDogGreeting (owner, address){
    console.log(`Hi, Im ${this.dogName} and I live whit ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Candy'
}
const owner = "Daniel"
const address = "Avenue 123"

// Call -- Recibe cada parametro seguido de una coma
newDogGreeting.call(newHouse, owner, address)

// Apply - Recibe dos parametros 1. Argumento 2. Array

const valueNecesary = [owner, address]
newDogGreeting.apply(newHouse, valueNecesary)

//Bind -- Recibe los mismos parametros que Call pero retorna una funcion

const bindDogGreeting = newDogGreeting.bind(newHouse, owner, address)
bindDogGreeting();


// Funciones flechas --  Arrow Function

// Function General 

const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow Function - Explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow Function - Implicit return

const newGreetingWithOutParameter = name => { `Hi, ${name}`}
const newGreetingWithParameter = (name, lastName) => { `Hi, I'm ${name} ${lastName}`}

// Lexical Binding



const funcionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction : function (message){
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`);
    }
}

funcionalCharacter.messageWithTraditionalFunction("With great power comes great responsability")
funcionalCharacter.messageWithArrowFunctionFunction("Beware of Doctor Octupus")

// Windows


