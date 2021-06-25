// const lista1 = [
//     100,
//     200,
//     500,
//     400000,
//     10000,
//     125,
//     460
// ];

// const mitadLista1 = parseInt(lista1.length / 2);


// function calcularMediaAritmetica(lista) {
//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento;
//         }
//     );
//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;
// }

// function esPar(numerito) {
//     if(numerito % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;



function mediana (lista) {
     let mediana;
     const listaArray = lista.sort((a, b) => a - b);
     const mitadLista = parseInt(lista.length / 2);
     const esPar = numerito => {
         if(numerito % 2 === 0) {
             return true;
         } else {
             return false;
         }
     };
     const promedio = lista => {
         const sumaLista = lista.reduce(
             function (valorAcumulado = 0, nuevoElemento) {
                 return valorAcumulado + nuevoElemento;
             }
         );
         const promedioLista = sumaLista / lista.length;
    
         return promedioLista;
     };

     if (esPar(listaArray.length)) {
         const elemento1 = listaArray[mitadLista - 1];
         const elemento2 = listaArray[mitadLista];
    
         const promedioElemento1y2 = promedio([elemento1, elemento2]);
    
         mediana = promedioElemento1y2;
    } else {
         mediana = listaArray[mitadLista];
    };

     return mediana;

}