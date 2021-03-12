// Asocio los niveles y los multiplicadores con el mismo numero de indice, el cual es ingresado por el usuario cuando se usa la funcion constructora
const Niveles  = ["universitario", "terciario", "secundario", "primario"];
const Multiplicadores  = [1.6, 1.4, 1.2, 1];

function producto(nivel, asignatura, servicio, cantidad) {
    this.nivel = nivel
    this.asignatura = asignatura
    this.servicio = servicio
    this.cantidad = cantidad
    this.Precio = parseFloat(Multiplicadores[nivel])*cantidad*300;
    this.Mostrar = function() {
        alert(`El valor final por las clases de ${producto1.asignatura} es de: $` + this.Precio);
    }
}

const producto1 = new producto(prompt("Seleccione un numero segun el nivel para el cual desea el servicio (0 - Universitario- 1 - Terciario- 2 - Secundario- 3 - Primario)"), prompt("Escriba el nombre de la asignatura"), prompt("Puede elegir entre: Realizacion de trabajos practicos - Ayuda con trabajos practicos - Clases particulares"), prompt("Que cantidad de horas necesitara con un profesor a su disposicion"))

//Otra forma de dar el precio final como salida
/*let Precio1 = producto1.Precio;
alert(Precio1); */

producto1.Mostrar();


//minuto 38:20

