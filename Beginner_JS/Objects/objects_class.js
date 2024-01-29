// let person = {
//     nombre: 'Daniel',
//     apellido: 'Ballen',
//     edad: 26
// }

// Function constructora

function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona('Daniel', 'Ballen', 26)
persona1.nacionalidad = 'Colombiano' // Agregamos un nuevo atributo al obj persona1 pero no a la Funcion Constructora

const persona2 = new Persona('Matias', 'Ballen', 7)
// Esta nueva persona2 no contiene el atributo "nacionalidad" ya que no lo comparte con persona1

// Añadir funcionalidades a la funcion Constructora

Persona.prototype.nombreCompleto = this.nombre + this.apellido

const persona3 = new Persona('Yessica', 'Lizarazo', 26)

console.log({
    persona1,
    persona2,
    persona3
});