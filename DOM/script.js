// ============================================
// EJERCICIO DE MANIPULACIÓN DEL DOM
// Lista de tareas
// ============================================


// Seleccionamos elementos del HTML
const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

const totalTareas = document.getElementById("totalTareas");
const tareasCompletadas = document.getElementById("tareasCompletadas");
const tareasPendientes = document.getElementById("tareasPendientes");

const mensaje = document.getElementById("mensaje");


// ============================================
// FUNCIÓN PARA AGREGAR UNA TAREA
// ============================================

function agregarTarea() {

    const texto = tareaInput.value.trim();

    // Verificamos que el usuario haya escrito algo
    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }


    // Creamos un elemento <li>
    const nuevaTarea = document.createElement("li");

    nuevaTarea.classList.add("tarea");


    // Creamos el texto de la tarea
    const textoTarea = document.createElement("span");

    textoTarea.textContent = texto;

    textoTarea.classList.add("texto-tarea");


    // Creamos el contenedor de botones
    const botones = document.createElement("div");

    botones.classList.add("botones");


    // Creamos botón completar
    const completarBtn = document.createElement("button");

    completarBtn.textContent = "Completar";

    completarBtn.classList.add("completar");


    // Creamos botón eliminar
    const eliminarBtn = document.createElement("button");

    eliminarBtn.textContent = "Eliminar";

    eliminarBtn.classList.add("eliminar");


    // ============================================
    // EVENTO CLICK PARA COMPLETAR
    // ============================================

    completarBtn.addEventListener("click", function() {

        nuevaTarea.classList.toggle("completada");

        actualizarEstadisticas();

    });


    // ============================================
    // EVENTO CLICK PARA ELIMINAR
    // ============================================

    eliminarBtn.addEventListener("click", function() {

        nuevaTarea.remove();

        actualizarEstadisticas();

    });


    // También podemos hacer clic directamente
    // sobre el texto para completar la tarea

    textoTarea.addEventListener("click", function() {

        nuevaTarea.classList.toggle("completada");

        actualizarEstadisticas();

    });


    // Agregamos los botones al contenedor
    botones.appendChild(completarBtn);
    botones.appendChild(eliminarBtn);


    // Agregamos el texto y botones a la tarea
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botones);


    // Agregamos la tarea a la lista
    listaTareas.appendChild(nuevaTarea);


    // Limpiamos el input
    tareaInput.value = "";


    // Actualizamos las estadísticas
    actualizarEstadisticas();


    // Ponemos nuevamente el cursor en el input
    tareaInput.focus();
}


// ============================================
// FUNCIÓN PARA ACTUALIZAR ESTADÍSTICAS
// ============================================

function actualizarEstadisticas() {

    // Obtenemos todas las tareas
    const tareas = document.querySelectorAll(".tarea");

    // Obtenemos las tareas completadas
    const completadas = document.querySelectorAll(".tarea.completada");


    // Calculamos cantidades
    const total = tareas.length;

    const completadasCantidad = completadas.length;

    const pendientes = total - completadasCantidad;


    // Modificamos el contenido del HTML
    totalTareas.textContent = total;

    tareasCompletadas.textContent = completadasCantidad;

    tareasPendientes.textContent = pendientes;


    // Mostramos u ocultamos el mensaje
    if (total === 0) {

        mensaje.textContent = "No hay tareas todavía.";

    } else {

        mensaje.textContent = "Haz clic sobre una tarea para marcarla como completada.";
    }
}


// ============================================
// EVENTO CLICK DEL BOTÓN AGREGAR
// ============================================

agregarBtn.addEventListener("click", agregarTarea);


// ============================================
// EVENTO KEYDOWN
// Permite agregar una tarea presionando ENTER
// ============================================

tareaInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        agregarTarea();

    }

});


// ============================================
// EJECUTAMOS LAS ESTADÍSTICAS AL INICIAR
// ============================================

actualizarEstadisticas();