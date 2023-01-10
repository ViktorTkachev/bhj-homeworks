const inputTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');

taskForm.addEventListener('submit', (e) => {
  if (inputTask.value == '') {
    return false;
  } else {
    tasksList.innerHTML +=`
    <div class="task">
      <div class="task__title">
        ${inputTask.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
  }
  e.preventDefault();

  let taskListItems = document.querySelectorAll('.task__remove');

  Array.from(taskListItems, item => item.onclick = () => {
    item.closest('.task').remove();
    return false;
  })
})
