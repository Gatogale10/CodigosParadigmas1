//Metodos de los objetos
"use strict"
const reproductor =
{
    reproduccir : function(id)
    {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)

    },

    pausar: function(){
        console.log("Pausando la cancion...")
    }

    


}

//Tambien se pueden colocar las funcion por fuera del objeto
//Por que como vimos estas se agregaran por fuera
//al igual que las variables
//Object.freeze(reproductor);
//Si colocamos el codigo de arriba ya no se podra 
//realizar el agregar funciones por fuera
reproductor.borrarCancion = function(id)
{
    console.log(`Eliminando la cancion: ${id}`);

}





//Un metodo del objeto
//Accion que puede realizar el objeto
reproductor.reproduccir(114);

