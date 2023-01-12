const inputTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');


taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (inputTask.value.trim() !== '') {
    tasksList.insertAdjacentHTML('afterbegin',`
    <div class="task">
      <div class="task__title">
        ${inputTask.value.trim()}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `);
  }

  let taskListItems = document.querySelectorAll('.task__remove');
  Array.from(taskListItems, item => item.onclick = () => {
    item.closest('.task').remove();
    return false;
  })
})
