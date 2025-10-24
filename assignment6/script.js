document.addEventListener('DOMContentLoaded', () => {
  const myName = 'Rassul';
  const myGroup = '2419';
  console.log('Name:', myName);
  console.log('Group:', myGroup);
  alert('Hello, JavaScript World! its me rt!');

  const str = 'JS';
  const num = 42;
  const bool = true;
  console.log('Types:', typeof str, typeof num, typeof bool);
  const a = 10, b = 3;
  console.log('Add:', a + b);
  console.log('Sub:', a - b);
  console.log('Mul:', a * b);
  console.log('Div:', a / b);
  console.log('Mod:', a % b);
  console.log('Concat:', 'Hello ' + str);

  const changeTextBtn = document.getElementById('btn-change-text');
  const paragraph = document.getElementById('change-text-paragraph');
  changeTextBtn.addEventListener('click', () => {
    paragraph.textContent = 'boom there is no rt!';
  });

  const styleBox = document.getElementById('style-box');
  const changeBgBtn = document.getElementById('btn-change-bg');
  const changeFontBtn = document.getElementById('btn-change-font');
  let bgToggle = false;
  let fontToggle = false;
  changeBgBtn.addEventListener('click', () => {
    bgToggle = !bgToggle;
    styleBox.style.background = bgToggle ? '#204b57' : '#ffffff';
  });
  changeFontBtn.addEventListener('click', () => {
    fontToggle = !fontToggle;
    styleBox.style.fontSize = fontToggle ? '22px' : '14px';
  });

  const addItemBtn = document.getElementById('btn-add-item');
  const removeItemBtn = document.getElementById('btn-remove-item');
  const itemList = document.getElementById('item-list');
  let itemCount = 0;
  addItemBtn.addEventListener('click', () => {
    itemCount += 1;
    const li = document.createElement('li');
    li.textContent = 'Item ' + itemCount;
    itemList.appendChild(li);
  });
  removeItemBtn.addEventListener('click', () => {
    const last = itemList.lastElementChild;
    if (last) itemList.removeChild(last);
  });

  const hoverBox = document.getElementById('hover-box');
  const originalHoverBg = getComputedStyle(hoverBox).backgroundColor;
  hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.background = '#800000';
  });
  hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.background = originalHoverBg;
  });

  const liveInput = document.getElementById('live-input');
  const liveOutput = document.getElementById('live-output');
  liveInput.addEventListener('keyup', () => {
    liveOutput.textContent = liveInput.value;
  });



  const todos = [];
  const todoInput = document.getElementById('todo-input');
  const addTaskBtn = document.getElementById('add-task');
  const todoList = document.getElementById('todo-list');
  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(t => {
      const li = document.createElement('li');
      const left = document.createElement('div');
      left.className = 'row';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = t.completed;
      const label = document.createElement('span');
      label.textContent = t.text;
      if (t.completed) label.classList.add('completed');
      checkbox.addEventListener('change', () => {
        t.completed = checkbox.checked;
        renderTodos();
      });
      left.appendChild(checkbox);
      left.appendChild(label);
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => {
        const idx = todos.findIndex(x => x.id === t.id);
        if (idx !== -1) {
          todos.splice(idx, 1);
          renderTodos();
        }
      });
      li.appendChild(left);
      li.appendChild(delBtn);
      todoList.appendChild(li);
    });
  }
  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    todos.push({ id: Date.now() + Math.random(), text: trimmed, completed: false });
    todoInput.value = '';
    renderTodos();
  }
  addTaskBtn.addEventListener('click', () => addTodo(todoInput.value));
  todoInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') addTodo(todoInput.value);
  });
});