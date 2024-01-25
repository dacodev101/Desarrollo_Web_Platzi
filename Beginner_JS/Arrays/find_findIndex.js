// find() Retorna el primer elemento que cumpla con la condicion


const multipleOf5 = [5, 10, 15, 20, 25]
const firstNumberGraterThan10 = multipleOf5.find(num => num > 10)

// findIndex() Retorna la posicion del primer elemento que cumpla con la condicion

const numberRandoms = [2, 34, 65, 54, 68, 100, 43, 504]
const indexNumberRandom = numberRandoms.findIndex(num => num > 200)

console.log(multipleOf5, firstNumberGraterThan10);
console.log(numberRandoms, indexNumberRandom);

// Exercise: Raffle Winner Verification Program

const winnerParticipants = [
    {id: 1, name: 'Daniel',idTicket: 105 },
    {id: 2, name: 'Miguel',idTicket: 453 },
    {id: 3, name: 'Matias',idTicket: 110 },
]

function findWinnerByName(nameP){
    const winnerName = winnerParticipants.find(participant => participant.name === nameP)
    return winnerName ? winnerName : "No winner found with that name"
}

function findWinnerByTicketNumber(numberTicket){
    const winnerIdTicket = winnerParticipants.findIndex(participant => participant.idTicket === numberTicket)
    return winnerIdTicket !== -1 ? winnerIdTicket : "No winner found with that ticket number"
}

function displayInfoWinner (winner){
    if (winner !== undefined && winner !== null && winner !== "No winner found with that name") {
        console.log(winner)
    } else {
        console.log("No Winner found");
    }
}

const winnerByName = findWinnerByName('Daniel')
const winnerByTicketNumber = findWinnerByTicketNumber(453)

displayInfoWinner(winnerByName)
console.log(`Indes of winner by Ticket Number is : ${winnerByTicketNumber}`);