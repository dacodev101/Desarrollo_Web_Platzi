
const transactions = [
    { id: 1, description: 'Compras Tienda', amount: -500},
    { id: 2, description: 'Compras Colegio', amount: -350},
    { id: 3, description: 'Salario', amount: 5000},
    { id: 4, description: 'Freelance', amount: 2500},
    { id: 5, description: 'Salud y Declaracion', amount: -1500},
]

// Calculate Total Balcance

const totalBalance = transactions.reduce((acc, trans) => acc + trans.amount,0)

// Find the Largest Transaction ( Income or Expense )

const largestTransaction = transactions.reduce((maxTrans , trans) =>{
    return Math.abs(trans.amount) > Math.abs(maxTrans.amount) ? trans : maxTrans
}, transactions[0])

// Filter purchase Transactions

const purchaseTransaction = transactions.filter(trans => transactions.amount < 0)


// Finds a Transactions by Description 

function findTransactionByDescription (nameTransaction){
    const transactionFind = transactions.find(trans => trans.description === nameTransaction)
    return transactionFind || "No found transaction with that Description"
}

const specificTransactionByDescription = findTransactionByDescription('Salud y Declaracion')

// find a Transactions by Amount

function findTransactionByAmount (amount){
    const transactionFind = transactions.findIndex(trans => trans.amount === amount)
    return transactionFind !== - 1 ? transactionFind :  "No found transaction with that Amount"
}

const specificTransactionByAmount = findTransactionByAmount(-1500)

// Update Transaction descriptions

transactions.forEach( transaction => {
    if(transaction.amount < 0){
        transaction.description = `Expense: ${transaction.description}`
    }else{
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log(transactions)