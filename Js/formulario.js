let formulario = document.getElementById("formulario");
let input = document.getElementById("input").value;


formulario.addEventListener("submit", (e) => {
e.preventDefault();


let inputs = e.target.children;

console.log(inputs[1].value);
console.log(inputs[2].value);
console.log(inputs[3].value);
console.log(inputs[4].value);
console.log(inputs[5].value);



});