// Concat

const morseCode1 = ['....', '___']
const morseCode2 = ['.-..', '.-']

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1, morseCode2, morseCodeMessage);

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseCodeMessage2);

// Spread operator

function combineMorseMessages(morseCode1, morseCode2) {
    return [...morseCode1, ...morseCode2]
}

const morseCodeMessage3 = combineMorseMessages(morseCode1, morseCode2)


// join()

const morseCodeMessageString = morseCodeMessage.join('*')

console.log(morseCodeMessageString);

// every()

const ages = [1, 2, 3, 4, 5, 6, 7, 8]

const everyPair = ages.every(element => element < 10)
console.log(everyPair);

// some()

const atLeastOneIsOver =  ages.some(age => age > 9)

console.log(atLeastOneIsOver);


// includes() // True or False

const numbersIncluides = [1, 2, 3, 4, 5]

const result1 = numbersIncluides.includes(3) // true
const result2 = numbersIncluides.includes(3) // false

// indexOf // retorna el valor del indice que cumple con la condicion

const fruits = ['apple', 'cherry', 'grape', 'mango']

const indexOf1 = fruits.indexOf('grepe') // 2
const indexOf2 = fruits.indexOf('blueberry') // -1 ---- no existe

// lastIndexOf // retorna el valor del indice que cumple con la condicion

const numbers = [2, 4, 6, 8, 10, 4]

const lastIndex1 = numbers.lastIndexOf(4) // 5
const lastIndex2 = numbers.lastIndexOf(12) // -1 ---- no existe

// Exercise : Finding Substring indices

const stringArray = ['apple', 'cherry', 'grape', 'mango', 'cherry', 'kiwi']
const target = 'cherry'

function findStringIndicesInArray(arrayS , target){
    
    const result = {
        includesTargetString: false,
        firtsOccurrenceIndex: -1,
        lastOccurrenceIndex: -1
    }

    if(arrayS.includes(target)){
        result.includesTargetString = true;
        result.firtsOccurrenceIndex = arrayS.indexOf(target);
        result.lastOccurrenceIndex = arrayS.lastIndexOf(target);
    }

    return result
}

const result = findStringIndicesInArray(stringArray, target)
console.log(result);


// Slice 

const animales = ['ant', 'bison', 'Camel', 'duck', 'elephant']

console.log(animales.slice(2));
console.log(animales.slice(2, 4));