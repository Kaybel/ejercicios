function isInt(n){
  return Number(n) === n && n % 1 === 0;
}
// const isInt = (n) => Number === n && n % 1 === 0;
// los prompts retornan un string, debo pasarlo a numero
let user = prompt("Cuál es tu edad?");

let age = parseInt( user, 10);

let esEntero = isInt(age);

if (esEntero) {
  if (age > 1 && age <= 3) {
    alert("You are a toddler")
  } else if (age > 3 && age <= 5 ){
    alert("You are a preschool")
  }  else if (age > 5 && age <= 12){
    alert("You are a gradeschooler")
  } else if (age > 12 && age <= 18 ){
    alert("You are a teen")
  } else if (age > 18 && age <= 21){
    alert("You are a young adult")
  } else {
    alert("You are a adult")
  }
} else{
  alert("please write a number")
}