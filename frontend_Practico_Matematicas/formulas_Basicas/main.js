console.group('Circle')

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

console.groupEnd('Circle')