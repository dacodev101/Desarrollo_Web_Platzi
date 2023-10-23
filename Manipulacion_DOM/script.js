const h1 = document.querySelector('#h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const buttonCalcular = document.querySelector('#btnCalcular')
const parrafoResultado = document.querySelector('#resultado')

form.addEventListener('submit', bntOnClick);


function bntOnClick(event){
    event.preventDefault();
    const resultado = Number(input1.value) + Number(input2.value)
    parrafoResultado.innerText = `El resultado de la suma es: ${resultado}`
}

