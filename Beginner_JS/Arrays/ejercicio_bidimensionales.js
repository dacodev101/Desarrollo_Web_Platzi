let array1D = [1, 2, 3] // Unidimensional
let array2D = [[1, 2, 3],[4, 5, 6],[7, 8, 9]] // Bidimensional


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix[1][2] = 10

let value = matrix[0][1]

// Operations 

// Recorrer un arreglo bidimensional

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
    
}

// Buscar un elemento en una Matriz

function findElement (matrix, element){

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === element){
                return true
            }
        }
    }
    
    return false
}

// Clonar una matriz

function cloneMatrix (matrix){
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [...matrix[i]] 
    }
    return newMatrix
}

/* Exercise: Arrays Bidimensionales



*/

const competitions = [
    ['Javascript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'C#'],
]

const results = [0, 0, 1]

function determinateWinner (competitions, results){
    const winnerCount = {}
    let winner = ''
    for (let i = 0; i < competitions.length; i++) {

        // const home = competitions[i][0];
        // const away = competitions[i][1]; Se puede simplificar con la linea de abajo 
        const [home, away] = competitions[i]

        console.log(`home: ${home} -- away: ${away} `);
        winnerTeam = results[i] === 0 ? away : home;

        // En el objeto creado -> creo el ganador

        winnerCount[winnerTeam] = (winnerCount[winnerTeam] || 0) + 3
        console.log(winnerTeam)
        /* (winnerCount[winnerTeam] -> Undifined || 0 -> Asigna 0)
            El Undefined se da porque no existe y si no existe utilizamos
            || para asignar al winnerCount[winnerTeam] el valor de 0
        */
        if(!winner || winnerCount[winnerTeam] > winnerCount[winner]){
            console.log(winner);
            winner = winnerTeam
        }
    }

    return winner
}

determinateWinner(competitions, results)