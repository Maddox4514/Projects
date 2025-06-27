/*
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let user1 = prompt("Enter your first number:");
let user2 = prompt("Enter your second number:");

let number1 = parseFloat(user1);
let number2 = parseFloat(user2);

if(isNaN(number1)  ||  isNaN(number2)) {
    console.log("please enter a valid number");
} else {
    let result = addNumbers(number1, number2);
    console.log("the sum is: " + result);
} */

/*function addNumbers(num1, num2) {
     let sum = num1 + num2;
     return sum;
}   

let choice = prompt("Type 'int' for whole numbers or 'float' for decimals:")

let input1 = prompt("Enter your first number:");
let input2 = prompt("Enter your second number:");

let number1,number2;
if (choice === "int"){
    number1 = parseInt(input1);
    number2 = parseInt(input2);
} else {
    number1 = parseFloat(input1);
    number2 = parseFloat(input2);
}

if (isNaN(number1)  || isNaN(number2)) {
    console.log("Error:Enter a valid number!");
} else {
    let result = addNumbers(number1, number2);
    console.log("the sum is: " + result);
}*/

/*function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}   

let cigaba = true;
while (cigaba) {
    let choice = prompt("Type 'int' for whole numbers or 'float' for decimals:")

let input1 = prompt("Enter your first number:");
let input2 = prompt("Enter your second number:");

let number1,number2;
if (choice === "int"){
    number1 = parseInt(input1);
    number2 = parseInt(input2);
} else {
    number1 = parseFloat(input1);
    number2 = parseFloat(input2);
}

if (isNaN(number1)  || isNaN(number2)) {
    console.log("Error:Enter a valid number!");
} else {
    let result = addNumbers(number1, number2);
    console.log("the sum is: " + result);
}

let response = prompt("Do you want to add more numbers?: (Yes/No)");
if (response !== "Yes") {
    cigaba = false;
}
}

console.log("Thank you for trying this code")*/
function loadTasks(){
    let savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks): [];
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

let  tasks = loadTasks();

function addTask(taskText) {
    tasks.push({text: taskText, done: false});
    console.log(`Added: "${taskText}"`);
    saveTasks();
    showTasks();
}

function clearTask() {
    tasks = [];
    saveTasks();
    console.log("All tasks cleared");
    showTasks();
}

function deleteTask(taskNumber){
    let index = taskNumber - 1;


    if (index >= 0 && index < tasks.length){
        let removedTask = tasks.splice(index, 1);
        console.log(`Deleted: "${removedTask[0]}"`);
    } else {
        console.log("Error: invalid task number!")
    }
}

function showTasks(){
    if(tasks.length === 0) {
        console.log("No task yet!")
    } else {
        console.log("Your to-do list:");
        for(let i = 0; i<tasks.length; i++) {
            let status = tasks[i].done ? "[Done]" : "[]";
            console.log(`${i + 1}.  ${tasks[i].text} ${status}`);
        }
    }
}

function markTaskDone(taskNumber) {
    let index = taskNumber- 1;
    console.log(`Attempting to mark task ${taskNumber} as done.....`)
    if (index >= 0 && index < tasks.length) {
        tasks[index].done = true;
        console.log(`marked'${tasks[index].text}' status set to: ${tasks[index].done}`);
        saveTasks();
        showTasks();
    } else {
        console.log("Error: invalid command");
    }
}

let running = true;
while ( running) {
    let choice = prompt("what would you like to do?\n" +
        "add - Add a task\n" +
        "done - mark as done\n" +
        "clear - clear tasks\n" +
        "delete - Delete a task\n" +
        "show - Show a task\n" +
        "quit - Quit"
    ).toLowerCase();

    //console.log(`You entered: "${choice}"`);
    if (choice === "add") {
        let task = prompt('Enter the task to add:');
        if (task) {
            addTask(task);
        } else {
            console.log("task cannot be empty!");
        }
    } else if (choice === "delete") {
        showTasks();
        let taskNumber = prompt("Enter the number of the task to delete:");
        let num = parseInt(taskNumber, 10);
        if (!isNaN(num)) {
            deleteTask(num);
        } else {
            console.log("Please enter a valid number!:");
        }
    } else if (choice === "show") {
      //  console.log("showing tasks.....");
        showTasks();
    } else if (choice === "done") {
        showTasks();
        let taskNumber= prompt("enter the number of the task to mark as done");
        let num = parseInt(taskNumber, 10);
        if (isNaN(num)) {
            console.log("Enter a valid number")
        }
    } else if ( choice === "quit") {
        running = false;
        console.log("Goodbye!");
    } else if (choice === "clear"){
        clearTask();
    } else {
        console.log("invalid choice! please enter add, delete,show, or quit.");
    }
}

/*let running = true;
while (running) {
    let action = prompt("what do you want to do? (add/delete/show/quit)").toLowerCase();

    if (action === "add") {
        let newTask = prompt("Enter the task:");
        if (newTask) {
            addTask(newTask);
        } else {
            console.log("Error: Task cannot be empty!");
        } 
    } else if (action === "delete") {
            showTasks();
            let taskNumber = parseInt(prompt('Enter the task number to delete'));
            if(!isNaN(taskNumber)) {
                deleteTask(taskNumber);
            } else {
                console.log("enter a valid Number")
            }
    } else if (action === "show") {
        showTasks();
    } else if (action === "quit") {
        running = false;
        console.log("Goodbye!");
    } else {
        console.log("Error:Type 'add', 'delete', 'show', or 'quit'. ");
    }
} */

/*addTask("Reading.");
addTask("Praying.");
addTask("Sleeping.");
addTask("Wake up for subh prayer.")
showTasks();
deleteTask(3);
showTasks();*/