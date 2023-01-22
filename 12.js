//Objetos
//Es para ejecutar el codigo de forma estricta
"use strict"
 
const producto =
{
    nombreProducto: "Monitor",
    precio: 200,
    disponible: true

}
// Va a impedir agregar mas atributos o propiedades
// al objeto o modificarlo
Object.freeze(producto);
producto.imagen = "Imagen.jpg"

//Para saber si un objeto esta sellado
console.log(Object.isFrozen(producto));
//Ahora, diferencia entre freeze y seal
// es que seal si te deja modificar el objeto
// y freeze no, se queda como un valor constante 
//ambos impiden borrar elementos y agregar pero seal si 
//permite modificar
//Object.seal(producto)
producto.precio = "Nuevo objeto "
producto.nuevo = "Nuevo elemento"
console.log(producto);
