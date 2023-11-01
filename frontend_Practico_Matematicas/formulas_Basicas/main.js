console.group('Cuadrado')
const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = Math.pow(ladoCuadrado, 2)

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: Math.pow(lado, 2)
    }
}
console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    perimetroTriangulo,
    areaTriangulo
})

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

function calcularAlturaTriangulo(lado , base){
    if(lado == base){
        console.warn('Ese no es un triangulo isosceles');
    }else{
        return Math.sqrt(Math.pow(lado, 2) - ((Math.pow(base, 2)) / 4))
    }
}

function calcularAlturaTrianguloEscaleno(a, b, c){
  // Verifica que los tres lados sean diferentes
    if (a === b || a === c || b === c) {
        console.warn('Alguno de sus lados son iguales');
    }
    // Verifica que la suma de dos lados sea mayor que el tercer lado
    if (a + b < c || a + c < b || b + c < a) {
        console.warn('La suma de dos lados no es mayor a su tercer lado');
    }
    
    // Semiperimetro
    const s = (a + b + c ) / 2
    
    // Calcular la area
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    // Calcular altura
    const h = 2 * area / a

    return h
}

console.groupEnd('Triangulo')

console.group('Circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const cirucuferenciaCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    cirucuferenciaCirculo,
    areaCirculo,
})

function calcularCirculo(radio){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)
    return{
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(3)
    }
}

console.groupEnd('Circulo')