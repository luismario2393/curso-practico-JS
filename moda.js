// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];

// const lista1Count = {};

// lista1.map(
//     function (elemento) {

//         if(lista1Count[elemento]) {

//             lista1Count[elemento] += 1;
//         } else {

//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//     }
// );

// const moda = lista1Array[lista1Array.length - 1];

function moda(lista) {
    const listaObj = {};

    lista.map(
        function(e) {
            if(listaObj[e]) {

                listaObj[e] += 1;
            } else {
    
                listaObj[e] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
};
