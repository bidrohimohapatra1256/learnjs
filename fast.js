// Numbers:
let length = 16;
let weight = 7.5;

// Strings:


// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
const p = document.getElementById("p");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  if (input !== "") {
    let regExp = new RegExp(input, "gi");
    p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
  }
});
// Decimal Numbers
console.log(323)
 
// Binary Numbers
console.log(0b11);
console.log(0B0111);
 
// Hexadecimal Numbers
console.log(0xfff);
 
// Octal Numbers
console.log(0562);