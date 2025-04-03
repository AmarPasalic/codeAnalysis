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
    items.forEach((element, i) => {
        if (!element) return;
        let itemElement = document.createElement("div")
        itemElement.className = "item"
        { element.bought && itemElement.classList.add("bought") }
        itemElement.innerHTML = "<span>" + element.name + "</span><button onclick='toggleBought(" + i + ")'>Toggle Bought</button><button onclick='deleteItem(" + i + ")'>Delete</button>"
        shoppingList.appendChild(itemElement)
    })
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
    const input = document.getElementById("taskInput")
    const task = input.value
    if (task != "") tasks.push({ name: task, completed: false });
    input.value = ""
    renderTasks()
}

function renderTasks() {
    const taskList = document.getElementById("taskList")
    taskList.innerHTML = ""
    tasks.forEach((element, i) => {
        if (!element) return;
        const taskElement = document.createElement("div")
        taskElement.className = "task"
        { element.completed && taskElement.classList.add("completed") }

        taskElement.innerHTML = "<span>" + element.name + "</span><button onclick='toggleCompleted(" + i + ")'>Complete</button><button onclick='deleteTask(" + i + ")'>Delete</button>"

        taskList.appendChild(taskElement)
    })
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed
    renderTasks()
}

function deleteTask(index) {
    tasks.splice(index, 1)
    renderTasks()
}


