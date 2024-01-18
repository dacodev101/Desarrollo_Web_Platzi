const deck = ['♠','♦','♥','♣','♠','♦','♥','♣','♠','♦','♥','♣','♠','♦','♥','♣']

// Algoritmo de Fisher-Yates
function barajarCartas(){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [deck[i],deck[j]] = [deck[j],deck[i]]
    }
}

function repartirCartas(numeroCartas){
    barajarCartas()
    if(deck.length > numeroCartas){
        const nuevoSetCartas = deck.splice(0,numeroCartas)
        return nuevoSetCartas
    }else{
        alert(`No se pueden entregar mas cartas. Solo quedan ${deck.length} cartas`)
    }
}

const jugador1 = repartirCartas(3)
const jugador2 = repartirCartas(3)
const jugador3 = repartirCartas(3)
const jugador4 = repartirCartas(3)
const jugador5 = repartirCartas(3)
const jugador6 = repartirCartas(3)