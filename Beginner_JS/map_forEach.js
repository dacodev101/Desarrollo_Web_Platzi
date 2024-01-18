// map() --> Retorna un Array

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers, squaredNumbers);

// forEach --> No retorna un Array

const colors = ['red', 'pink', 'blue']
const iteratedColors  = colors.forEach(color => console.log(color));

// Exercise --- Fahrenheit to Celsius Conversion

const temperaturesFahrenheit = [32, 68, 95, 104, 212]
const temperaturesCelsius = temperaturesFahrenheit.map(temperatura => (temperatura - 32) / (5/9))

console.log(temperaturesFahrenheit, temperaturesCelsius);

// Exercise ---- Sum of values on array

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8]
let suma = 0;
numbersArray.forEach(number => {
    suma += number
}
)

console.log(numbersArray, suma);