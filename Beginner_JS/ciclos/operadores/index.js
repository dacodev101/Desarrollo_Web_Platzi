/*

Operadores Logicos - Comparativos

== Comparar si es igual 
=== comparar si es igual ( valor y tipo de dato)

!= diferente de algo 
!== diferente de algo (valor y tipo de dato)

> Mayor
< Menor

>= Mayor o igual
<= Menos o igual


*/


const a = 10
const b = 20
const c = '10'

a == b; // false
a === c; // false
a == c; // true


/*

Operadores logicos 

&& (AND) --- valor && valor2  --> las dos son verdaderas para = true 
|| (OR)  --- valor || valor2  --> Alguna de las dos es verdadero = true
! (NOT) --- (!valor) --> No es este valor

*/

/*

Juego Adivina el numero

*/

const numeroSecreto = Math.floor(Math.random() * 10 + 1)


function numeroJugador() {
    
    let numJugadorIngresado = parseInt(prompt('Adivina el numero secreto entre 1 y 10'));
    console.log(`Este es el numero con el que juegas ${numJugadorIngresado}`);
    
    if(numJugadorIngresado === numeroSecreto){
        console.log(`¡Felicidades adivinaste el numero secreto!`);
        return numJugadorIngresado;
    }else if(numeroSecreto < numJugadorIngresado){
        console.log(`El numero secreto es mas bajo, intentalo de nuevo`);
        numeroJugador()
    }else if(numeroSecreto > numJugadorIngresado){
        console.log(`El numero secreto es mas alto, intentalo de nuevo`);
        numeroJugador()
    }
    
}


const listaNumeros = [1, 2, 3, 4, 5, 6, 7]
const letras = "Hola"
const objeto = {
    name: 'Daniel',
    edad: 26,
    ciudad: 'Anolaima'
}

listaNumeros.forEach((element) => {
    console.log(element);
});

// letras.forEach(element => {
//     console.log(element);
// })


for (const iterator of letras) {
    console.log(iterator)
}

for (const key in objeto) {
    console.log(`${key} : ${objeto[key]}`);
}


/*

while(condicion){
    codigo
}
*/

let flagContador = 0

while(flagContador < 10){
    console.log(flagContador);
    flagContador++;
}

/*
Do While

do{
    codigo //Primera ejecucion
}while(condicion)

*/
let flagContadorDo = 0
do {
    console.log(flagContadorDo);
    flagContadorDo++
} while (flagContadorDo < 10);