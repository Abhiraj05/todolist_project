document.addEventListener('DOMContentLoaded', () => {

    let tasktext = document.getElementById('task-name')
    let add_btn = document.getElementById('add')
    let list = document.getElementById('list')
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []


    
    tasks.forEach((task) => display(task))
    
    //add new task
    function addtask() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    add_btn.addEventListener('click', () => {
       const task_name = tasktext.value.trim()
        if (task_name == "") return
        const new_task = {
            id: Date.now(),
            name: task_name,
            completed: false
        }
        tasks.push(new_task)
        display(new_task)
        tasktext.value = ""

        addtask()
    })

 //display and remove tasks
    function display(task) {
        const  li = document.createElement("li");
        li.setAttribute('id', task.id)
        if (task.completed) li.classList.add("completed")
        li.innerHTML = `
            <span>${task.name}</span>             <button>delete</button>`

        li.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") return
            task.completed = !task.completed
            li.classList.toggle("completed")
            addtask()
        })

        li.querySelector("button").addEventListener('click', (e) => {
            e.stopPropagation()
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove()
            addtask()

            
            
        })
        list.appendChild(li)
    }


    
})

