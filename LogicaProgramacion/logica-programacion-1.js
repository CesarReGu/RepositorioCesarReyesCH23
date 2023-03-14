
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

// Ifs anidados que comprueban cual es el mayor, menor y el centro
let mayor, centro, menor;

if (num1 >= num2 && num1 >= num3) {
  mayor = num1;
  if (num2 >= num3) {
    centro = num2;
    menor = num3;
  } else {
    centro = num3;
    menor = num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  mayor = num2;
  if (num1 >= num3) {
    centro = num1;
    menor = num3;
  } else {
    centro = num3;
    menor = num1;
  }
} else {
  mayor = num3;
  if (num1 >= num2) {
    centro = num1;
    menor = num2;
  } else {
    centro = num2;
    menor = num1;
  }
}

// Imprimimos resultados de mayor a menor
console.log(mayor, centro, menor);

// Imprimimos resultados menor a mayor
console.log(menor, centro, mayor);

// Ver si son iguales
if (num1 === num2 && num1 === num3) {
  console.log("Los números son iguales");
} else {
  console.log("Los números son diferentes");
}
