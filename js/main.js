window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const listEl = document.querySelector('#tasks');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value; 
        if(!task) {
            alert("Будь ласка, заповніть форму!");
            return;
        }

        const taskEl = document.createElement ("div");
        taskEl.classList.add("task");

        const taskContentEl = document.createElement ("div");
        taskContentEl.classList.add("content");

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement("div");
        taskActionsEl.classList.add("actions");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Редагувати";

        const taskDeleteEl = document.createElement("button");
        taskDeleteEl.classList.add("delete");
        taskDeleteEl.innerHTML = "Видалити";

        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = "";

        taskEditEl.addEventListener('click', () => {
           if(taskEditEl.innerText.toLocaleLowerCase() == "редагувати"){
            taskInputEl.removeAttribute("readonly");
            taskInputEl.focus();
            taskEditEl.innerText = "Зберегти";
           } else {
            taskInputEl.setAttribute("readonly", "readonly");
            taskEditEl.innerText = "Редагувати";
           }

        });

        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });
    });
})
 
