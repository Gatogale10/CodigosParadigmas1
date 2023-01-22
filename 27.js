// POO

/**Object Literal**/

const producto = {
    nombre:'Tablet',
    precio: 500
}

//Esta funcion gracias a los this construye objetos 
//Osea que es una funcion generadora de objetos tipo 
//producto al pasarle valores en sus parametros construye los objetos 
//con estos atributos

// Object Constructor
function Producto(nombre,precio)
{
    this.nombre = nombre;
    this.precio = precio;

}

function Cliente(nombre,apellido)
{
    this.nombre = nombre;
    this.apellido =apellido;

}


Producto.prototype.formatearProducto1 = function()
{
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 49"',800);
const producto3 = new Producto('Laptop',300);
const cliente1  = new Cliente('Juan','De la torre')

//Creamos una funcion en especifico para escribir las propiedades del objeto 
//De una determinada manera,aunque se podria hacer otras funciones que involucren al objeto
//el producto pero seria un funcion idependiente del objeto 
function formatearProducto(producto)
{
    return `El producto ${producto.monitor} cuesta: ${producto.precio}`
}
//Pero la mejor forma o la forma correcta de hacer esto es con prototype
//Este hereda los atributos y metodos de un objeto a otro, al igual
//Puede añadir metodos a un objeto 
//Se escribe de esta manera
Producto.prototype.formatearProducto1 = function()
{
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

console.log(producto2.formatearProducto1());
//Es como agregar un metodo a un objeto
