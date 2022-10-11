let formulario = document.getElementById("formulario");
/* let input = document.getElementById("input").value;
 */

const contacto = [];

const guardarContacto = (e) => {
  e.preventDefault();
  console.log(e.target.children[3].value);
};

formulario.addEventListener("submit", (e) => guardarContacto(e));

/* let inputs = e.target.children;
 */
/* console.log(inputs[1].value);
console.log(inputs[2].value);
console.log(inputs[3].value);
console.log(inputs[4].value);
console.log(inputs[5].value); */

/* localStorage.setItem("saludo", "hola");
localStorage.setItem("numero", "5");
localStorage.setItem("valor", "true"); */

/* let mensaje = localStorage.getItem("numero");
console.log(typeof(mensaje)); */
