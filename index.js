document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove-task-button';
        removeButton.addEventListener('click', removeTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(removeButton);
        
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
    }
}

function removeTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}

function toggleTaskCompletion(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}
