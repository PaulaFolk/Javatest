var numero_1;
var numero_2;
var operacion;
var total;

//sintaxis de una función

function inicio() {
    numero_1 = prompt("Ingrese un número: ");
    numero_1 = parseFloat(numero_1); //Transforma una cadena(texto) a un número decimal
    if (!numero_1) {                                  //se controla que la variabla numero1 se un numero
        alert("Inserte un numero valido")           //si la condicion se cumple aparece una alerta y
        inicio();
    }
    numero_2 = prompt("Ingrese un número: ");
    numero_2 = parseFloat(numero_2);
    if (!numero_2) {                                  //se controla que la variabla numero1 se un numero
        alert("Inserte un numero valido")           //si la condicion se cumple aparece una alerta y
        inicio();
    }
}

function sumar() {
    operacion = numero_1 + numero_2;
    resultado.innerHTML = (operacion);
}

function restar() {
    operacion = numero_1 - numero_2;
    resultado.innerHTML = (operacion);
}

function dividir() {
    operacion = numero_1 / numero_2;
    resultado.innerHTML = (operacion);
}

function multiplicar() {
    operacion = numero_1 * numero_2;
    resultado.innerHTML = (operacion);
}