const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

 
    newTaskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const title = newTaskInput.value.trim();
        if (!title) return;

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'text';
        span.textContent = title;

     
        span.ondblclick = () => startEditing(span);

        const actions = document.createElement('div');
        actions.className = 'actions';

       
        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '✓';
        doneBtn.onclick = () => li.classList.toggle('done');

      
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '🗑';
        delBtn.onclick = () => li.remove();

        actions.append(doneBtn, delBtn);
        li.append(span, actions);
        taskList.appendChild(li);
        newTaskInput.value = ''; 
      }
    });


    function startEditing(span) {
      const li = span.parentElement;
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'edit';
      input.value = span.textContent;

      li.replaceChild(input, span);
      input.focus();

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (input.value.trim()) {
            span.textContent = input.value.trim();
            li.replaceChild(span, input);
          }
        } else if (e.key === 'Escape') {
          li.replaceChild(span, input); 
        }
      })};