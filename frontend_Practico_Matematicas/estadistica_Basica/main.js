const inputArray = document.querySelector("#input-list");
const inputOrdenado = document.querySelector(".input-ordenado");
const resultadoOperacion = document.querySelector(".result-tendencia");
const botonPromedio = document.querySelector(".promedio");
const botonMediana = document.querySelector(".mediana");
const botonModa = document.querySelector(".moda");

botonPromedio.addEventListener("click", () =>
  calcularPromedio(convertirInputANumerosYTexto(inputArray))
);
botonMediana.addEventListener("click", () =>
  calcularMediana(convertirInputANumerosYTexto(inputArray))
);
botonModa.addEventListener("click", () =>
  calcularModa(convertirInputANumerosYTexto(inputArray))
);

calcularPromedio = function calcularPromedio(array) {
  // function sumarElementos (valorAcumulado, nuevoValor){
  //     return valorAcumulado + nuevoValor
  // }
  const sumaLista = array.reduce((acumulador, actual) => {
    return acumulador + actual;
  });
  resultado = Math.round((sumaLista / array.length) * 100) / 100;
  resultadoOperacion.innerText = `Promedio == ${resultado} `;
  return resultado
};

esPar = function esPar(Lista) {
  return Lista.length % 2 ? false : true;
};

ordenarLista = function ordenarLista(lista) {
  return lista.sort((a, b) => a - b);
};

ordenarListaBidimensional = function ordenarListaBidimensional(
  lista
) {
  return lista.sort((a, b) => a[1] - b[2]);
};

calcularMediana = function calcularMediana(listaMediana) {
  const lista = ordenarLista(listaMediana);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitadLista = Math.round(lista.length / 2);
    const sumaMitades =
      (lista[indexMitadLista] + lista[indexMitadLista - 1]) / 2;
    resultadoOperacion.innerText = `Mediana ${sumaMitades} `;
    return sumaMitades;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    resultadoOperacion.innerText = `Mediana == ${lista[indexMitadListaImpar]}`;
    const medianaImpares = lista[indexMitadListaImpar];
    console.log(medianaImpares);
    return medianaImpares;
  }
};

calcularModa = function calcularModa(lista) {
  lista.sort();

  const objDatos = {};
  for (const dato of lista) {
    objDatos[dato] ? (objDatos[dato] += 1) : (objDatos[dato] = 1);
  }

  const mayorFrecuencia = Math.max(...Object.values(objDatos));
  const modas = [];

  for (const [valor, frecuencia] of Object.entries(objDatos)) {
    console.log(valor, frecuencia);
    if (frecuencia === mayorFrecuencia) {
      modas.push(valor);
    }
  }
  resultadoOperacion.innerText = `Moda == ${modas.length === 1 ? modas[0] : modas
    }`;
};

convertirInputANumerosYTexto = function convertirInputANumerosYTexto(
  input
) {
  const valores = input.value.split(" ");
  const arrayNumeros = valores.map((valor) => {
    if (isNaN(valor)) {
      return valor;
    } else {
      return Number(valor);
    }
  });
  const arrayTexto = valores.filter((valor) => isNaN(valor));
  const arrayNumerosTexto = ordenarLista([
    ...arrayNumeros,
    ...arrayTexto,
  ]);
  inputOrdenado.innerText = arrayNumerosTexto.join(" ");
  inputOrdenado.classList.remove("inactive");
  return arrayNumerosTexto;
};
