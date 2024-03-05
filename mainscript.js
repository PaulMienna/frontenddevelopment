//Introduksjon ved å bruke
const PålIntroduksjon = {
  name: "Pål",
  age: 22,
  isTakingCourse: true,
  hobbies: ["3D-Model", "Gaming", "Coding"],
};
console.log("Pål", PålIntroduksjon);
// Bruk av split funksjon så ser vi at vi kan splitte text, men samtidig beholde originale teksten.
function javaScriptTesting(str) {
  const splitArray = str.split(" ");

  console.log("Original tekst:", str);
  console.log("Splittet tekst", splitArray);

  return splitArray;
}

const text = "Vi jobber med JScript, splitArray og funksjoner.";
const result = javaScriptTesting(text);

console.log("Funksjons resultat:", result);

//Hvordan bruke let i en "random number generator" ved hjelp av JScript.
let num1, num2;
num1 = Math.floor(Math.random() * 10) + 1;
num2 = Math.floor(Math.random() * 10) + 1;
const sum = num1 + num2;

console.log("første nummer =", num1);
console.log("andre nummer =", num2);

// vis av resultat med bruk av element.
const resultElement = document.createElement("p");
resultElement.innerHTML = "Summen av " + num1 + " og " + num2 + " er " + sum;
console.log(resultElement);
