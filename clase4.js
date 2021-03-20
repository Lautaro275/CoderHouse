let d = document
let lista = d.getElementById("lista");
console.log(lista)
let li = d.createElement("li");
li.innerHTML = "asasas";
lista.appendChild(li);


if (confirm("Desea agregar o quitar un profesor a la lista?")) {
    if (confirm("Elija aceptar si desea agregar o cancelar si desea quitar un nombre de la lista")) {
        let profe = prompt("Escriba el nombre del profesor que desea agregar");
        lista.innerHTML = `<li> ${profe} </li>`;
        d.createElement("li");
    }
}


