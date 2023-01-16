const inputTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');


taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (inputTask.value.trim() === '') {
    return false;
  }

  tasksList.insertAdjacentHTML('afterbegin',`
  <div class="task">
    <div class="task__title">
      ${inputTask.value.trim()}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
  `);

  inputTask.value = '';

  let taskRemove = tasksList.querySelector('.task__remove');
  taskRemove.onclick = () => {
    taskRemove.closest('.task').remove();
  }
})
