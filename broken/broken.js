var items = [];
var tasks = [];    // var is outdated

function addItem() {
    let input = document.getElementById("itemInput") ///should use const 
    let item = input.value    ///should use const 
    if (item != "") items.push({ name: item, bought: false });
    input.value = ""
    renderItems()
}

function renderItems() {   // should include if statemaent to check if object exists
    document.getElementById("shoppingList").innerHTML = ""  // should use variable for better redability
    for (var i = 0; i <= items.length; i++) {
        let itemElement = document.createElement("div") // should be const 
        itemElement.className = "item"

        if (items[i].bought == true) {  // best practice is to use ===
            itemElement.classList.add("bought")
        }

        itemElement.innerHTML = "<span>" + items[i].name + "</span><button onclick='toggleBought(" + i + ")'>Toggle Bought</button><button onclick='deleteItem(" + i + ")'>Delete</button>"

        document.getElementById("shoppingList").appendChild(itemElement)  // should be varible
    }
}

function toggleBought(index) {
    items[index].bought = !items[index].bought
    renderItems()
}

function deleteItem(index) {
    items.splice(index)  // should provide deleteCount
    renderItems()
}

function addTask() {
    let input = document.getElementById("taskInput")
    let task = input.value
    if (task != "") tasks.push({ name: task, completed: false });
    input.value = ""
    renderTasks()
}

function renderTasks() {   // should include if statemaent to check if object exists
    document.getElementById("taskList").innerHTML = "" // should be a variable
    for (var i = 0; i <= tasks.length; i++) {
        let taskElement = document.createElement("div")
        taskElement.className = "task"

        if (tasks[i].completed == true) { // best practice is to use ===
            taskElement.classList.add("completed")
        }

        taskElement.innerHTML = "<span>" + tasks[i].name + "</span><button onclick='toggleCompleted(" + i + ")'>Complete</button><button onclick='deleteTask(" + i + ")'>Delete</button>"

        document.getElementById("taskList").appendChild(taskElement)
    }
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed
    renderTasks()
}

function deleteTask(index) {
    tasks.splice(index)  // should provide deleteCount
    renderTasks()
}

window.onload = function () {    /// on load doesnt make sense because code doesnt use local storage and doestn fetach data from server
    renderItems()
    renderTasks()
}









