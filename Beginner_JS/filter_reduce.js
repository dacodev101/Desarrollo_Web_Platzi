// filter()

const numbers = [2, 4, 6, ,7, 8, 10, 12]
const evenNumber = numbers.filter( num => num % 2 === 0)

console.log(numbers, evenNumber);


// reduce()

const numbersReduce = [2, 4, 5, 6, 7]
const sumNumberReduce = numbersReduce.reduce((acc,curr) => acc + curr, 0)

console.log(numbersReduce, sumNumberReduce);

// Encontrar cuanto se repite un valor

const words = ['apple', 'banana', 'hello', 'bye', 'hello', 'bye']
const repitedWords = words.reduce((acc, curr) => {
    if(acc[curr]){
        acc[curr]++
    }else{
        acc[curr] = 1
    }
    return acc
}, {})

console.log(words, repitedWords);