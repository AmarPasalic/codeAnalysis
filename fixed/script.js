const items = [];
const tasks = [];

function addItem() {
    const input = document.getElementById("itemInput")
    const item = input.value
    if (item != "") {
        items.push({ name: item, bought: false })
    }
    input.value = ""
    renderItems()
}

function renderItems() {
    const shoppingList = document.getElementById("shoppingList")
    shoppingList.innerHTML = ""
    for (var i = 0; i <= items.length; i++) {
        if (items[i]) {
            let itemElement = document.createElement("div")
            itemElement.className = "item"

            if (items[i].bought) {
                itemElement.classList.add("bought")
            }

            itemElement.innerHTML = "<span>" + items[i].name + "</span><button onclick='toggleBought(" + i + ")'>Toggle Bought</button><button onclick='deleteItem(" + i + ")'>Delete</button>"

            shoppingList.appendChild(itemElement)
        }

    }
}

function toggleBought(index) {
    items[index].bought = !items[index].bought
    renderItems()
}

function deleteItem(index) {
    items.splice(index, 1)
    renderItems()
}

function addTask() {
    let input = document.getElementById("taskInput")
    let task = input.value
    if (task != "") tasks.push({ name: task, completed: false });
    input.value = ""
    renderTasks()
}

function renderTasks() {
    const taskList = document.getElementById("taskList")
    taskList.innerHTML = ""
    for (var i = 0; i <= tasks.length; i++) {

        if (tasks[i]) {
            let taskElement = document.createElement("div")
            taskElement.className = "task"
            if (tasks[i].completed === true) {
                taskElement.classList.add("completed")
            }

            taskElement.innerHTML = "<span>" + tasks[i].name + "</span><button onclick='toggleCompleted(" + i + ")'>Complete</button><button onclick='deleteTask(" + i + ")'>Delete</button>"

            taskList.appendChild(taskElement)
        }
    }
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed
    renderTasks()
}

function deleteTask(index) {
    tasks.splice(index, 1)
    renderTasks()
}


