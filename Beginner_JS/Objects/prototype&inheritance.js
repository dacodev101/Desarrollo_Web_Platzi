class Animals {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo
    }
    queAnimalSoy (){
        console.log(`Soy un ${this.nombre}`);
    }
    queTipoSoy (){
        console.log(`Soy un ${this.tipo}`);
    }
}

class Perro extends Animals {
    constructor(nombre, tipo, raza){
        super(nombre, tipo)
        this.raza = raza
    }
    tipoLadrido(){
        console.log(`Yo ladro como un ${this.raza}`);
    }
}

perro1 = new Perro('Bobby', 'Perro', 'Labrador')

perro1.morder = function () {
    console.log(`Yo ${this.nombre} muerdo como un ${this.raza}`)
}

perro1.morder()

console.log({
    Animals,
    Perro,
    perro1
})

Perro.prototype.correr = function (){
    console.log(`Yo ${this.nombre} corro como un ${this.tipo} de raza ${this.raza}`)
}

perro1.correr()