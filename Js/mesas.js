let contenedor = document.getElementById("contenedor");
let botonCarrito = document.getElementById("botonCarrito");
let input = document.getElementById("input");
let botonInput = document.getElementById("botonInput");
let botonBorrarCarrito = document.getElementById("eliminarCarrito");

//**************CONSTRUCTOR***********

class Mesa {
  constructor(infoMesa) {
    this.img = infoMesa.img;
    this.nombre = infoMesa.nombre;
    this.precio = infoMesa.precio;
    (this.vendido = false), (this.id = infoMesa.id);
  }
}
//**************OBJETOS****************

const mesaExtensible = new Mesa({
  img: `../img/mesa.jpg`,
  nombre: "extensible",
  precio: 230000,
  id: 1,
});

const mesaWood = new Mesa({
  img: `../img/mesaDos.jpg`,
  nombre: "wood",
  precio: 250000,
  id: 2,
});

const mesaWoodBlack = new Mesa({
  img: (src = `../img/mesaTres.jpg`),
  nombre: "wood black",
  precio: 110000,
  id: 3,
});

const mesaStone = new Mesa({
  img: `../img/mesaCuatro.jpg`,
  nombre: "stone",
  precio: 210000,
  id: 4,
});

const mesaFlex = new Mesa({
  img: `../img/mesaCinco.jpg`,
  nombre: "flex",
  precio: 130000,
  id: 5,
});

const mesaRedondaWood = new Mesa({
  img: `../img/mesaSeis.jpg`,
  nombre: "cuadrada wood",
  precio: 90000,
  id: 6,
});
//**************ARRAY****************** /

const listaMesas = [];
const carrito = [];

//********PUSH

listaMesas.push(
  mesaExtensible,
  mesaWood,
  mesaStone,
  mesaRedondaWood,
  mesaWoodBlack,
  mesaFlex
);

//FOREACH
listaMesas.forEach((mesa) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src=" ${mesa.img} " class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class= "card-title">Nombre:${mesa.nombre} </h2>
                <p class="card-text">Precio:${mesa.precio}</p>
            </div>
         <button id="${mesa.id}">agregar al carrito</button>
    </div>`;

  contenedor.append(div);

  let boton = document.getElementById(mesa.id);
  boton.addEventListener("click", () => comprarMesa(mesa));
});

let comprarMesa = (mesa) => {
  let busqueda = carrito.find((item) => item.id === mesa.id);
  if (busqueda !== undefined) {
    busqueda.precio = busqueda.precio + mesa.precio;
    busqueda.cantidad = busqueda.cantidad + 1;
  } else {
    carrito.push({
      id: mesa.id,
      nombre: mesa.nombre,
      precio: mesa.precio,
      imagen: mesa.img,
      cantidad: 1,
    });
  }
};

let buscarMesa = (string) => {
  console.log(string);
  let mesaBuscada = listaMesas.find((mesa) => mesa.nombre.includes(string));
  console.log(mesaBuscada);
  /*     input.value = ' ' CON ESTO ESTOY HACIENDO QUE CUANDO BUSQUE EL BOTON INPUT QUEDE NULO
   */
};

botonCarrito.addEventListener("click", () => console.log(carrito));

input.addEventListener("input", () => buscarMesa(input.value));

//STORAGE Y JSON

//  GUARDAR EL ARRAY CON OBJETOS EN STORAGE

let guardarStorage = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

listaMesas.forEach((mesa) => {
  guardarStorage(mesa.id, JSON.stringify(mesa));
});

//BORRAR CARRITO STORAGE
botonBorrarCarrito.addEventListener("click", () => {
  localStorage.clear();
});

/*
//FILTER
let filtrado = listaMesas.filter(item => item.precio >=200000);

console.log(filtrado);

mesaFlex.venta();
mesaFlex.venta();
mesaFlex.venta();

console.log(mesaFlex);

console.log(listaMesas);





// DESCUENTO CON MAS DE 4 ELEMENTOS

let precio = Number(prompt(`ingrese el precio del producto`));
let descuento = 0.20;
let cantidad = Number(prompt(`ingrese la cantidad de productos a comprar`));
let stock = 10;
let descuentoFinal = descuentoTotal();

function descuentoTotal () {
   valorCompra = precio * cantidad;
  
   if (cantidad > 4 ) {
       valorDescuento = valorCompra * 0.20;
       totalPago = valorCompra - valorDescuento;

       alert(`recibiste un descuento del % 30 del valor de tu compra, el total a pagar es de $ ${totalPago}`);

   } else if (cantidad === 0  || precio === 0) {
       alert(`los datos ingresados no son validos`);
       
   } else{
       alert(`el valor de tu compra es de $ ${valorCompra}`)
   }

   
}
console.log(`el valor de la compra sin descuento es de $ ${valorCompra}`);
*/

//const { Console } = require("console");

//TRAJE DE A UNO LAS MESAS DE LA LISTA
/* let imagen1 = document.getElementsByClassName("imagen1");
console.log(imagen1);

let imagen2 = document.getElementsByClassName("imagen2");
console.log(imagen2);

let imagen3 = document.getElementsByClassName("imagen3");
console.log(imagen3);

let imagen4 = document.getElementsByClassName("imagen4");
console.log(imagen4);

let imagen5 = document.getElementsByClassName("imagen5");
console.log(imagen5);

let imagen6 = document.getElementsByClassName("imagen6");
console.log(imagen6);

let imagen7 = document.getElementsByClassName("imagen7");
console.log(imagen7);

let imagen8 = document.getElementsByClassName("imagen8");
console.log(imagen8);  */

// TRAJE TODOS LOS LI DEL LISTADO PERO EN UNA SOLA LINEA DE CODIGO
/* let li = document.getElementsByTagName("li");

for (const mesas of li) {// RECORRO EL LISTADO 
    console.log(mesas.innerHTML);//MUESTRO POR CONSOLA CADA MESA
    
}

 */
