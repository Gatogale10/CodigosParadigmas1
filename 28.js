// Clases Herencia

class Producto
{
    constructor(nombre,precio)
    {
        this.nombre = nombre
        this.precioo = precio

    }

    // Metodo 
    formatearProducto()
    {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
        
    }

    PrecioProducto()
    {
        return this.precio
    }

}


const producto2 = new Producto('Monitor curvo de 49"',800);
const producto3 = new Producto('Laptop',300);
//Sin herencia
class Libro
{ 
    constructor(nombre,precio,isbn)
    {
        this.nombre = nombre
        this.precio = precio
        this.isbn = isbn
    }


}

class Telefono extends Producto
{
    constructor(nombre,precio,modelo)
    {
        //Es la forma de heredar el constructor
        //Al ser el mismo tipo de dato toma el constructor de producto y hace lo 
        // mismo con el constructor de Telefono y se evita duplicar codigo , al igual 
        // que esos parametros que pasen en la funcion constructor los colocara en los atributos
        // correspondientes
        super(nombre,precio);
        this.modelo = modelo;
    }

    formatearProducto()
    {
        //Evitamos duplicar codigo por que tambien se herandan los metodos
        cosole.log(`${super.formatearProducto()} y su modelo es ${this.modelo} `)
    }

    PrecioProducto()
    {
        //Pero va mas a alla de simplemente usar un metodo ya existente 
        // ese mismo metodo que se heredo lo podemos utilizar en otros metodos nuevos
        //y sin ser tener las propiedades de ese metodo anterior si no que podemos utilizarlo 
        //cuando querramos.
        console.log(`El precio es de ${super.PrecioProducto}`)
    }

    

}

console.log(producto2);
console.log(producto3);
console.log(PrecioProducto)

// Esta es otra forma de crear objetos en JavaScript 
// Como se hace en los demas lenguajes de programacion 
// toda clase es objeto pero no todo objeto es clase como 
// lo vimos en la clase pasada y como se hacia el constructor
