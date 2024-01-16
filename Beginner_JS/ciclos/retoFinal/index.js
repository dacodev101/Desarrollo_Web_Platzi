/*

Juguemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

- El juego debe tener una palabra oculta
- El juego puede dar 1 pista de la palabra
- El usuario debe ingresar una suposicion
-El juego debe verificar si la suposicion del usuario es correcta
-El juego debe tener un numero limitado de intentos.
- El juego debe terminar cuando el usuario o adivina la palabra oculta o se queda sin intentos

*/

let flagIntentos = 0;
const wordHidden = "anolaima"
const pista = "Capital frutera de Colombia"

console.log(`Encuentra la palabra oculta
    -- Tienes 3 intentos para encontrarla
    -- Tu pista sera : ${pista}
    
    Buena suerte
`);

while (flagIntentos < 3) {
    const wordUser = prompt("Ingresa tu palabra")
    const wordUserLower = wordUser.toLowerCase();

        if (wordUserLower === wordHidden) {
            console.log(`Has encontrado la palabra oculta`);
            flagIntentos = 4
        }else if(wordUserLower !== wordHidden){
            console.log(`No has encontrado la palabra oculta}
                Te quedan ${3 - (flagIntentos+1)} Intentos
            `);
            flagIntentos++
        }else{
        console.log(`Se te han acabado los intentos`);
        }
}