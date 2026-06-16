console.log("JavaScript conectado correctamente");

const nombreUsuario = "Perrito chico y orejon";
let contadorMensajes = 0;
const precioProducto = 1500;
let puntajeJuego = 0;

contadorMensajes++;
puntajeJuego += 10;

console.log(nombreUsuario);
console.log(contadorMensajes);
console.log(precioProducto);
console.log(puntajeJuego);

console.log("Nombre de usuario:", nombreUsuario);
console.log("Contador de mensajes:", contadorMensajes);
console.log("Precio del producto:", precioProducto);
console.log("Puntaje del juego:", puntajeJuego);   

// Función saludar
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

// Llamadas a la función
console.log(saludar("Matias"));
console.log(saludar("Juan"));
console.log(saludar("María"));


// Función calcularDoble
function calcularDoble(numero) {
    return numero * 2;
}

// Verificaciones
console.log(calcularDoble(5));
console.log(calcularDoble(10));
console.log(calcularDoble(25));

// Crear el array
let tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Leer un libro"];

// Mostrar el array completo
console.log(tareas);

// Mostrar cuántas tareas hay
console.log("Cantidad de tareas:", tareas.length);

// Mostrar la primera tarea
console.log("Primera tarea:", tareas[0]);

// Mostrar la última tarea
console.log("Última tarea:", tareas[tareas.length - 1]);

// Agregar una nueva tarea
tareas.push("Practicar HTML y CSS");

// Mostrar el array actualizado
console.log("Array actualizado:", tareas);

function clasificarNota(nota) {
    if (nota >= 60) {
        return "Aprobado";
    } else {
        return "Desaprobado";
    }
}

// Pruebas
console.log(clasificarNota(85));
console.log(clasificarNota(60));
console.log(clasificarNota(45));
console.log(clasificarNota(10));

function clasificarNota(nota) {
    return nota >= 60 ? "Aprobado" : "Desaprobado";
}

console.log(clasificarNota(75));

for (let i = 0; i < tareas.length; i++) {
    console.log("Tarea " + i + ":", tareas[i]);
}

tareas.forEach(function(tarea) {
    console.log(tarea);
});


let indiceAleatorio = Math.floor(Math.random() * tareas.length);

console.log("Índice aleatorio:", indiceAleatorio);
console.log("Tarea seleccionada:", tareas[indiceAleatorio]);

// Seleccionar elementos
const boton = document.getElementById("boton");
const parrafo = document.getElementById("mensaje");

// Escuchar el click
boton.addEventListener("click", function () {

    // Verificar que el click funciona
    console.log("Botón clickeado");

    // Cambiar texto
    parrafo.textContent = "¡Nuevo texto generado!";

    // Generar color aleatorio
    let rojo = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);

    // Aplicar color
    parrafo.style.backgroundColor =
        `rgb(${rojo}, ${verde}, ${azul})`;
});


const imagenes = document.querySelectorAll(".foto");
const mensaje = document.getElementById("mensaje");

imagenes.forEach(function(imagen) {

    imagen.addEventListener("click", function() {

        console.log("Imagen clickeada");

        mensaje.textContent = "Seleccionaste: " + imagen.alt;

        imagen.style.border = "4px solid white";

    } );
});

console.log("mensaje");
console.log("mensaje");


