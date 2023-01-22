//Objetos

const nombreProducto = "Monitor 20 Pulgadas"
const precio = 300
const disponible = true;

//Se escriben comas despues de declarar 
//Cada atributo 

const producto =
{
      nombreProducto: "Monitor 20 Pulgadas",
      precio: 300,
      disponible: true
}
//contiene mas informacion que una variable
//mediante sus atriubutos

//Es como en los demas lenguajes de programacion
console.log(producto);
console.log(producto.precio);
//Es lo mismo que lo de arriba
console.log(producto["precio"]);
//Agregar nuevas propiedades
producto.imagen= "Imagen.jpg"
//Elimiar propiedades
delete producto.disponible;
console.log(producto)


