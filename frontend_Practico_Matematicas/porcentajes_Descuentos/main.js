const inputValor = document.querySelector('#input-precio')
const inputDescuento = document.querySelector('#input-descuento')
const resultadoPorcentaje = document.querySelector('.result-porcentaje')
const botonCalcularPorcentaje = document.querySelector('.boton-porcentaje')

botonCalcularPorcentaje.addEventListener('click', calcularPorcentaje)

const catalogoCupones = {
    'platzi': 15,
    'platziduo': 20,
    'platzi-family': 30
}

function calcularPorcentaje() {
    const precio = Number(inputValor.value);
    const descuento = inputDescuento.value.toLowerCase();
    const cupon = catalogoCupones[descuento]

    console.log({
        precio,
        descuento,
        cupon
    })

    if(!precio || !cupon){
        console.error('No ingresaste un cupon valido o el valor')
        resultadoPorcentaje.innerText = `Rellena el formulario`
    }else{
        const resultado = precio * (cupon / 100)
        resultadoPorcentaje.innerText = `$ ${resultado} de Descuento`
    }

}
