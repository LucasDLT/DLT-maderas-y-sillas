
//**************ARRAY******************  
let contenedor = document.getElementById("contenedor");
let button = document.getElementById("boton");

function clickBoton(){
    console.log("click");
}

clickBoton()


button.addEventListener("mousedown", () =>  console.log("mousedown"));

const listaMesas = [];


//**************CONSTRUCTOR***********
 
class Mesa{
      constructor(infoMesa){
          this.img = infoMesa.img; 
          this.nombre = infoMesa.nombre;
          this.precio = infoMesa.precio;
          this.vendido = false,
          this.cantidad = infoMesa.cantidad;
          this.id = infoMesa.id;
          this.button = infoMesa.button;

          }
          //FUNCION VENDER
          venta(){
                if (this.vendido = true){

                    this.cantidad = this.cantidad - 1;

                    console.log("elemento vendido")
                }
          }             
    }  
//**************OBJETOS****************

const mesaExtensible = new Mesa(
    {
      img:  `../img/mesa.jpg`,
      nombre: "extensible",
      precio: 230000,
      cantidad: 10,
      id:1,
      button: "agregar al carrito"
    }  
    
) 

const mesaWood = new Mesa(
    {
        img:`../img/mesaDos.jpg`,
        nombre: "wood",
        precio: 250000,
        cantidad: 10,
        id:2,
        boton: "agregar al carrito"

    }
)


const mesaWoodBlack = new Mesa (
    {
        img: src= `../img/mesaTres.jpg`,
        nombre: "wood black",
        precio: 110000,
        cantidad: 10,
        id:3,
        boton: "agregar al carrito"

    }
)

const mesaStone = new Mesa(
    {
        img: `../img/mesaCuatro.jpg` ,
        nombre:"stone",
        precio: 210000,
        cantidad: 10,
        id: 4,
        boton: "agregar al carrito"

    }

)

const mesaFlex = new Mesa (
    {
        img:`../img/mesaCinco.jpg`,
        nombre:"flex",
        precio: 130000,
        cantidad: 10,
        id: 5,
        boton: "agregar al carrito"

        
    }
)

const mesaRedondaWood = new Mesa(
    {
        img:`../img/mesaSeis.jpg`,
        nombre:"cuadrada wood",
        precio:90000,
        cantidad: 10,
        id: 6,
        boton: "agregar al carrito"

    }
)


//********PUSH
 
listaMesas.push(mesaExtensible, mesaWood, mesaStone, mesaRedondaWood, mesaWoodBlack, mesaFlex);
 




//FOREACH



listaMesas.forEach(mesa => {
    let div = document.createElement("div");
    let boton = document.createElement("boton");
    div.innerHTML = `
    <div>
        <h2>Id: ${mesa.id} </h2>
        <h2>Mesa: ${mesa.nombre} </h2>
        <p>Valor $: ${mesa.precio} </p>
        <img src= ${mesa.img}>
        <button> ${mesa.button}</button>
    </div>  
`;
    contenedor.append(div);
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



