// Selezioniamo gli elementi della pagina
const newTask = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
// Aggiungiamo un listener al click del bottone "Add"
addTaskButton.addEventListener('click', function() {
    if (newTask.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    // Creiamo un nuovo elemento "li"
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = newTask.value;
    taskList.appendChild(newTaskItem);
    // Creiamo un bottone per eliminare il task
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';
    newTaskItem.appendChild(deleteButton);
    // Aggiungiamo un listener al click del task per segnalarlo come completato
    newTaskItem.addEventListener('click', function() {
        newTaskItem.classList.toggle('completed');
    });
    // Aggiungiamo un listener al click del bottone "Delete"
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTaskItem);
    });
    // Reset del campo di input
    newTask.value = '';
});