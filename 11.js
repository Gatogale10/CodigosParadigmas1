//Obejos 
 
const producto =
{
    nombreProducto: "Monitor",
    precio: 200,
    disponible: true

}

// Forma anterior 
const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;
//Forma nueva de hacerlo con 
// Destructuring 
//Extrae los valores de un arreglo o un objeto de
//manera mas sencilla,extrae el valor y crea la variable
//deben tener el mismo nombre que en el objeto
const {precio} = producto;
const { nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);
