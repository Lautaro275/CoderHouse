const UNO = "Este es un"
let dos = "algoritmo"
var tres = "simple"

var par = prompt("Ingrese un numero par")

if (par % 2 == 0) {
    console.log(UNO + " " + dos + " " + tres);
}
else {
    console.error(dos + " " + UNO + " " + tres + " " + dos)
}
