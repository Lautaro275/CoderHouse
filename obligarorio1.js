var nombre = prompt("Ingrese su nombre")
alert("Hola " + nombre + " es un gusto conocerte")


var prueba = prompt("Te gustaria una pequeña prueba?")
if (prueba == "Si" || prueba == "si" || prueba == "SI") {
    alert("Te voy a hacer algunas preguntas, contesta lo mas rapido que puedas por favor.")
    if (prompt("9x8") == 72 && prompt("ln(e)") == 1 && prompt("La integral desde -PI/2 hasta PI/2 del seno(x) dx es igual a...") == 0) {
        alert("Felicidades, pasaste las pruebas")
    } 
    
    else {
        alert("No estuviste a la altura de las circunstancias, lo 100to :(")
    }
}
else {
    alert(nombre + " realmente me entristece mucho que no quieras jugar conmigo. Adios.")
}