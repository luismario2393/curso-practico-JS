// Código del cuadrado
console.group('Cuadrado');

const perimetroCuadrado = lado => lado * 4;
const  areaCuadrado = lado =>  lado * lado;

console.groupEnd();


// Código del triangulo
console.group('Triangulo')

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

// Código del circulo
console.group('Circulo')

const diametroCirculo = radio => radio * 2;
const PI = Math.PI;

function  perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

const  areaCirculo = (radio) => (radio * radio) * PI;

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}