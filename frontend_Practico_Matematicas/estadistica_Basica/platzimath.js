const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(array) {
  // function sumarElementos (valorAcumulado, nuevoValor){
  //     return valorAcumulado + nuevoValor
  // }
  const sumaLista = array.reduce((acumulador, actual) => {
    return acumulador + actual;
  });
  resultado = Math.round((sumaLista / array.length) * 100) / 100;
  return resultado
};

PlatziMath.esPar = function esPar(Lista) {
  return Lista.length % 2 ? false : true;
};

PlatziMath.ordenarLista = function ordenarLista(lista) {
  return lista.sort((a, b) => a - b);
};

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(
  lista
) {
  return lista.sort((a, b) => a[1] - b[2]);
};

PlatziMath.calcularMediana = function calcularMediana(listaMediana) {
  const lista = PlatziMath.ordenarLista(listaMediana);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitadLista = Math.round(lista.length / 2);
    const sumaMitades =
      (lista[indexMitadLista] + lista[indexMitadLista - 1]) / 2;
    return sumaMitades;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaImpares = lista[indexMitadListaImpar];
    return medianaImpares;
  }
};

PlatziMath.calcularModa = function calcularModa(lista) {
    lista.sort();

    const objDatos = {};
    for (const dato of lista) {
    objDatos[dato] ? (objDatos[dato] += 1) : (objDatos[dato] = 1);
    }

    const mayorFrecuencia = Math.max(...Object.values(objDatos));
    for (const [valor, frecuencia] of Object.entries(objDatos)) {
        console.log(valor, frecuencia);
        if (frecuencia === mayorFrecuencia) {
            modas.push(valor);
        }
    }
    const resultado = modas.length === 1 ? modas[0] : modas
    return resultado
    //resultadoOperacion.innerText = `Moda == ${modas.length === 1 ? modas[0] : modas}`;
};

PlatziMath.convertirInputANumerosYTexto = function convertirInputANumerosYTexto(
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
  const arrayNumerosTexto = PlatziMath.ordenarLista([
    ...arrayNumeros,
    ...arrayTexto,
  ]);
  inputOrdenado.innerText = arrayNumerosTexto.join(" ");
  inputOrdenado.classList.remove("inactive");
  return arrayNumerosTexto;
};
