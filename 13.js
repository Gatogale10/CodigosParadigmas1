//Objetos

 
const producto =
{
    nombreProducto: "Monitor",
    precio: 200,
    disponible: true

}

const medidas = 
{
    peso: "1kg",
    medida: "1m"

}
Object.freeze(producto);
//Estamos uniendo dos objetos, mas no modificandolos
//No debemos modificar los datos de los objetos
const nuevoProducto = {...producto,...medidas};

console.log(producto);
console.log(nuevoProducto);
