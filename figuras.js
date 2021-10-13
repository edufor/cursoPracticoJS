// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;

}

// console.log("El perímetro del cuadrado es " + perimetroCuadrado + " cm");
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado es " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const lado1Triangulo = 6;
// const lado2Triangulo = 6;
// const ladoBaseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del Triángulo miden " 
//     + lado1Triangulo + " cm, " 
//     + lado2Triangulo + " cm, " 
//     + ladoBaseTriangulo + " cm "
// );

// const perimetroTriangulo = lado1Triangulo + lado2Triangulo + ladoBaseTriangulo;

function perimetroTriangulo(lado1, lado2, ladoBase) {
    return lado1 + lado2 + ladoBase;

}

// console.log("El perímetro del triángulo es " + perimetroTriangulo + " cm.");
// console.log("La altura del triángulo es " + alturaTriangulo + " cm.");
// const areaTriangulo = (ladoBaseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(ladoBase, altura) {
    return (ladoBase * altura) / 2

}
// console.log("El área del triángulo es " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del Círculo
console.group("Circulos");

// Radio
// const radioCirculo = 4;

function diametroCirculo(radio) {
    return radio * 2; 
}

// console.log("El radio del circulo es " + radioCirculo + " cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del circulo es " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("PI equivale a " + PI + " ;)");

// Circunferencia
// const perimetroCirculo = diametroCirculo * Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

// console.log("El perímetro del circulo es " + perimetroCirculo + " cm");
// Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radio) {
    return (radio * radio) * PI;

}

// console.log("El área del circulo es " + areaCirculo + " cm^2");

console.groupEnd();