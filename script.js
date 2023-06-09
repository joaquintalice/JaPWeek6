/* ***************************** */
/* Acá se vinculan los elementos del HTML para ser modificados en el programa */
const btnAgregar = document.getElementById("btn-agregar");
const btnEliminar = document.getElementById("btn-eliminar");
const statusInfo = document.getElementById("status-info");
const ulContainer = document.getElementById("ul-container");
/* ***************************** */



const tasks = []; // Variable que se inicializa en un array vacío

/* ***************************** */
btnAgregar.addEventListener("click", addTask); // Se agrega un event listener al botón de agregar
btnEliminar.addEventListener("click", deleteTask); // Lo mismo para el botón de eliminar
/* Lo que hace, es que cuando el usuario hace click en cualquiera de los dos botones, se ejecutará
la función correspondiente que se le haya asignado. */
/* ***************************** */


/* ***************************** */
function addTask() {
    const task = prompt("Agrega una tarea"); // Le pide al usuario agregar una tarea la cual se alojará en task
    if (task) { // Si task es verdadero, ejecutará el siguiente código
        tasks.push(task); // Agrega task al array tasks
        statusInfo.textContent = `La última tarea agregada fue: ${tasks[tasks.length - 1]}`; // Actualiza el texto de el elemento status-info con la última tarea agregada
    } else { // Si task es falso, ejecutará el siguiente código
        statusInfo.textContent = "Valor incorrecto"; // Actualiza el texto de el elemento status-info con un mensaje de error
    }
    showTasks(); // Llama a la función showTasks() para actualizar la lista con la nueva información
}
/* ***************************** */


/* ***************************** */
function deleteTask() {
    const taskIndex = parseInt(prompt("Ingrese el número de la tarea que desea eliminar:")); // Le pregunta al usuario el número de la tarea que desea eliminar y lo aloja en la variable taskIndex
    if (!isNaN(taskIndex) && taskIndex >= 1 && taskIndex <= tasks.length) { // Verifica si el valor ingresado es un número válido y está dentro del rango de índices del array tasks
        const removed = tasks.splice(taskIndex - 1, 1); // Remueve el elemento en el índice especificado por el usuario y se le resta 1 a "taskIndex" para que el índice coincida con el utilizado por JavaScript.
        statusInfo.textContent = `La tarea eliminada fue: "${removed}"`; // Actualiza el texto del elemento status-info con la tarea eliminada
    } else {
        statusInfo.textContent = "Índice incorrecto"; // Actualiza el texto del elemento status-info con un mensaje de error
    }
    showTasks(); // Llama a la función showTasks() para actualizar la lista con la nueva información
}


/* ***************************** */


/* ***************************** */
function showTasks() {
    ulContainer.innerHTML = ""; // Reinicia lo que contiene el cl contenedor con ID "ul-container" en el HTML

    /*Se itera el array tasks con el método ".forEach()". DIcho método, ejecuta una función flecha a la que se le asignan
    dos parámetros, uno es "task" que representa el valor del elemento en la iteración actual y "index" que representa
    el índice del elemento en el arreglo.*/
    tasks.forEach((task, index) => {
        const li = document.createElement("li"); // Crea un nuevo elemento li en el HTML
        li.textContent = `${index + 1}. ${task}`; // Actualiza el texto de li para mostrar el índice en el que se encuentra +1 (para que no comience desde 0) y la tarea correspondiente a ese índice
        ulContainer.appendChild(li); // Se agrega el elemento li como hijo de el elemento ul, el cual, tiene como ID "ul-container".
    });
}
/* ***************************** */

