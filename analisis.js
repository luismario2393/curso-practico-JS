// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = promedio([personitaMitad1, personitaMitad2]);

        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        salaryA - salaryB;
    }
);

// Promedio
const promedio = lista => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};



const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10 %
const sliceStart = (salariosColSorted.length * 90) / 100;
const sliceCount = salariosColSorted.length - sliceStart;

const salariosColTop10 = salariosColSorted.splice(
    sliceStart,
    sliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col,
    }
);