alert("Este programa entrega la cantidad de valores que quieras de la tabla del numero que elijas")
let tabla = parseInt(prompt("Escriba el numero de la tabla matematica que quiere saber"))
let cant = parseInt(prompt("Escriba la cantidad de valores que desea obtener"))

alert("Puede cancelar la operacion en cualquier momento")
for (let i = 1; i <= cant; i++) {
    if (confirm("El " + i + "° valor de la tabla solicitada es " + tabla*i)) {

    }
    else {
        break
    }
}






