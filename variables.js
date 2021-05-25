// Variables

var nombre = "Paula";

console.log (nombre);

var numero = 1000;
console.log(numero);

// variable tipo objeto
var persona = {
    nombre: "Nico",
    apellido: "Perez",
    telefono: 12345678,
    
};

var $ciudad = "Mendoza";

let _dni = 88888888;
console.log(persona);

//trabajando con el DOM

let titulo = document.getElementById('titulo');

//escribo en el archivo html

titulo.innerHTML = "Nuevo título para el index del html";

let parrafo = document.getElementById('parrafo');
parrafo.innerHTML = "Nuevo titulo para el párrafo";