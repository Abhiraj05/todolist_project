document.addEventListener('DOMContentLoaded', () => {

    let task = document.getElementById('task-name')
    let add_btn = document.getElementById('add')
    let list = document.getElementById('list')
    let tasks = JSON.parse(localStorage.getItem('tasks'))||[]
    let task_name, items, eachtask, liElement, deleteElement

     


    add_btn.addEventListener('click', () => {
        task_name = task.value.trim()
        if (task_name == "") return
        const new_task = {
            id: Date.now(),
            name: task_name,
            completed: false
        }
        tasks.push(new_task)
        addtask()
        console.log(tasks)
     
    })

    function addtask() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function display() {
        tasks.forEach(task => {
            liElement = document.createElement("li");
            // deleteElement = document.createElement("button");
            // deleteElement.textContent = "delete"
            // deleteElement.setAttribute("class", "item")
            liElement.textContent = task.name
            // liElement.appendChild(deleteElement)
            list.appendChild(liElement)
            console.log(task)
        });
    }
    display()

})