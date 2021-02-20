const UNO = "Este es un"
let dos = "algoritmo"
var tres = "simple"

var bandera = prompt("Ingrese un numero par")

if (bandera % 2 == 0) {
    console.log(UNO + " " + dos + " " + tres);
}
else {
    console.error(dos + " " + UNO + " " + tres + " " + dos)
}
