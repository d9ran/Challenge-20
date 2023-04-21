// -Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y escriba el mayor, el menor y la media aritmética.

// -Se recuerda que la media aritmética de un conjunto de valores es la suma de esos valores dividida por la cantidad de valores.

let arrayNumbers = [];
let quantityNumbers;

do {
    quantityNumbers = parseInt(prompt("Ingrese la cantidad de números que va a introducir"));
} while (isNaN(quantityNumbers) || quantityNumbers <= 0);

for (let i = 0 ; i < quantityNumbers ; i++){
    let number;

    do {
        number = parseInt(prompt(`Ingrese el número ${i + 1}`));
    } while(isNaN(number));

    arrayNumbers.push(number);
}

let maxNumber = Math.max(...arrayNumbers);
let minNumber = Math.min(...arrayNumbers);
let averageNumber = arrayNumbers.reduce((acc, val) => acc + val , 0) / quantityNumbers;

document.write(`<h3>El número mayor es ${maxNumber}, el número menor es ${minNumber} y la media aritmética es ${averageNumber}</h3>`);