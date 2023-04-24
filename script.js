// Conexiones con el html
const btn_container = document.getElementById("btn-container");
const status_info = document.getElementById("status-info");
const task_list = document.getElementById("task-list");
const ul_container = document.getElementById("ul-container");

//Variable que almacena cuál fue el botón que pulsó el usuario
let selection;

// Array para almacenar las tareas
const tasks = [];

// Acá se le asigna el contenido del botón que presione el usuario a la variable selection
const btn_selected = btn_container.addEventListener("click", (event) => {
    selection = event.target.textContent;

    if (selection === "Agregar") {
        addTask();
        showTasks();
    } else if (selection === "Eliminar") {
        deleteTask();
        showTasks();
    }
})


// Función para agregar una tarea
function addTask() {
    tasks.push(prompt("Agrega una tarea"));
    status_info.textContent = `La última tarea agregada fue ${tasks[tasks.length - 1]}`;
}

// Función para eliminar una tarea
function deleteTask() {
    // se guarda el índice del elemento contenido en el array que el usuario digite
    const index = tasks.indexOf(prompt("Qué tarea desea eliminar?"));

    // se guarda el elemento eliminado en la variable removed
    let removed;

    // si el índice que se aloja en index, es distinto de -1, es decir, es un valor que existe en el array,
    // se removerá el elemento y se mostrará un mensaje de cuál ha sido el último en ser removido
    if (index !== -1) {
        removed = tasks.splice(index, 1);
        status_info.textContent = `La última tarea eliminada fue ${removed}`;
    } else {
        // si el valor que se aloja en índice es -1, es decir, un valor que no se encuentra en el array
        // mostrará este texto en pantalla
        status_info.textContent = "Valor incorrecto";
    }

}

// Función para mostrar la lista de tareas
function showTasks() {

    //limpiamos la lista desordenada
    ul_container.innerHTML = "";

    //para cada elemento de el array tasks, crearemos un elemento "li"
    //luego, se le agregará a ese elemento li un texto que contiene el índice +1 para mostrar el número al que corresponde en ese array y el nombre de dicho elemento
    // y finalmente, se agrega el "li" creado anteriormente, a la lista desordenada que fue creada en el HTML 
    tasks.forEach((task, index) => {
        const li = document.createElement("li"); // Creamos un elemento de lista (li)
        li.textContent = `${index + 1}. ${task}`; // Agregamos el texto de la tarea al elemento de lista
        ul_container.appendChild(li); // Agregamos el elemento de lista a la lista desordenada
    });


};




/* 
// Ejemplos de uso de las funciones
addTask();
addTask();
addTask();
showTasks(); // Muestra la lista de tareas

deleteTask("Lavar la ropa"); // Elimina una tarea

showTasks(); // Muestra la lista de tareas actualizada
 */