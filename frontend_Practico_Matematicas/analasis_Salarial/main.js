console.group("Objeto Salarios")
console.log({salarios});
console.groupEnd("Objeto Salarios")
// Analisis personal para Anita

function buscarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda)
}

function medianaPorPersona(nombrePersona) {
    const trabajos = buscarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario
    })
    const medianaSalarios = PlatziMath.calcularMediana(salarios)
    return medianaSalarios
}

function proyeccionPorPersona(nombrePersona) {
    
    const trabajos = buscarPersona(nombrePersona).trabajos;
    console.log(trabajos);
    let porcentajesCreacimiento = []

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCreacimiento = crecimiento / salarioPasado
        porcentajesCreacimiento.push(porcentajeCreacimiento)
        
    }
    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCreacimiento)
    const ultimoSalario = trabajos[trabajos.length - 1].salario
    const aumentoSalario = ultimoSalario * medianaPorcentajeCrecimiento
    const nuevoSalario = ultimoSalario + aumentoSalario

    return nuevoSalario
}


const empresas = {};

for (persona of salarios){
    for (trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {}
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

console.group("Objeto Empresas")
console.log({empresas});
console.groupEnd("Objeto Empresas")

console.log(`Funciones disponible: 
    medianaPorPersona(nombrePersona),
    proyeccionPorPersona(nombrePersona),
    medianaEmpresaYear(name, year),
    proyeccionEmpresas(name),
    medianaGeneral(),
    medianaTop10()`
);
function medianaEmpresaYear(name, year) {
    if (!empresas[name]) {
        console.warn("No existe la empresa");
    }else if (!empresas[name][year]) {
        console.warn("La empresa no tiene salarios para este año");
    }else {
        return PlatziMath.calcularMediana(empresas[name][year])
    }
}

function proyeccionEmpresas(name) {
    
    if(!empresas[name]){
        console.warn("La empresa no existe");
    }else{
        const empresaYear = Object.keys(empresas[name])
        const listaMedianaYear = empresaYear.map((year) => {
            return medianaEmpresaYear(name, year);
        })

        let porcentajesCreacimiento = []

        for (let i = 1; i < listaMedianaYear.length; i++) {
            const salarioActual = listaMedianaYear[i];
            const salarioPasado = listaMedianaYear[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCreacimiento = crecimiento / salarioPasado
            console.log(porcentajeCreacimiento);
            porcentajesCreacimiento.push(porcentajeCreacimiento)
            
        }

        const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCreacimiento)

        const ultimaMediana = listaMedianaYear[listaMedianaYear.length - 1]
        const aumentoSalario = ultimaMediana * medianaPorcentajeCrecimiento
        const nuevaMediana = ultimaMediana + aumentoSalario

        return nuevaMediana
    }
}

function medianaGeneral() {
    const medianasPersonas = salarios.map(persona => 
        medianaPorPersona(persona.name)
    )

    return PlatziMath.calcularMediana(medianasPersonas)
}

function medianaTop10() {
    const medianasPersonas = salarios.map(persona => 
        medianaPorPersona(persona.name)
    )
    const medianaPersonasOrdenadas = PlatziMath.ordenarLista(medianasPersonas)
    const cantidad = medianaPersonasOrdenadas.length * 0.1;

    const top10 = medianaPersonasOrdenadas.slice(-cantidad)

}