//**************ARRAY******************  

const listaMesas = [];

//**************CONSTRUCTOR***********
 
class Mesa{
      constructor(infoMesa){
          this.img = infoMesa.img; 
          this.nombre = infoMesa.nombre;
          this.precio = infoMesa.precio;
          this.vendido = false,
          this.cantidad = infoMesa.cantidad;
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
      img: "",
      nombre: "mesa extensible",
      precio: 230000,
      cantidad: 10,
    }  
) 

const mesaWood = new Mesa(
    {
        img:"",
        nombre: "mesa wood",
        precio: 250000,
        cantidad: 10,
    }
)


const mesaWoodBlack = new Mesa (
    {
        img:"",
        nombre: "mesa wood black",
        precio: 110000,
        cantidad: 10,
    }
)

const mesaStone = new Mesa(
    {
        img:"",
        nombre:"mesa stone",
        precio: 210000,
        cantidad: 10,
    }

)

const mesaFlex = new Mesa (
    {
        img:"",
        nombre:"mesa flex",
        precio: 130000,
        cantidad: 10,
    }
)

const mesaRedondaWood = new Mesa(
    {
        img:"",
        nombre:"mesa redonda wood",
        precio:90000,
        cantidad: 10,
    }
)
//********PUSH
 
listaMesas.push(mesaExtensible, mesaWood, mesaStone, mesaRedondaWood, mesaWoodBlack, mesaFlex);

//FOREACH


listaMesas.forEach(item => console.log(item.precio, item.nombre));
 
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

