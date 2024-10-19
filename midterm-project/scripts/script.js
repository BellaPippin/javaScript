//Welcome to the To-Do List script, where the magic happens :p 

// Test loading
//alert ("I've loaded the script");

// Icon effects

const image = document.getElementById('addIcon');

        image.addEventListener('mouseover', function() {
            image.src = 'images/add-hover.png'; // Change to the second image
        });

        image.addEventListener('mouseout', function() {
            image.src = 'images/add.png'; // Change back to the first image
        });


// Initialize the To-Do List

let toDoList = []  

// Display number of tasks 

document.getElementById("toDoCounter").innerHTML = `${toDoList.length} To-Do's`

// Tasks will be objects of class "task". Create the class.

class Task {
    constructor(name) {
      this.name = name;
    }

    addTask(task) {
        toDoList.push(task);

        let container = document.getElementById("container");

        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "itemLine");

        let newIcon = document.createElement("img");
        newIcon.setAttribute ("src", "images/checkbox-empty.png");

        newIcon.addEventListener('mouseover', function() {
            newIcon.src = 'images/checked-hover.png'; 
        });

        newIcon.addEventListener('mouseout', function() {
            newIcon.src = 'images/checkbox-empty.png'; 
        });


        newIcon.setAttribute ("onclick", "deleteTask(this)");

        let taskName = document.createElement("p");
        taskName.textContent = task.name;

        container.appendChild(newDiv);
        newDiv.appendChild(newIcon);
        newDiv.appendChild(taskName);

        // Refresh number of tasks 

        document.getElementById("toDoCounter").innerHTML = `${toDoList.length} To-Do's`
    }
  };


// Add a task

document.getElementById("addIcon").addEventListener("click", function(){
    
    // Get user's task, create a new task object
    
    let inputTask = new Task (document.getElementById('inputTask').value);

    inputTask.addTask(inputTask);

    document.getElementById("inputTask").value = ""; //Reset the text area


    // console.log(inputTask);
    // console.log(toDoList);
});


  // Function that deletes tasks

  function deleteTask(element) {

    const parentElement = element.parentNode;

    parentElement.remove();

    // Refresh number of tasks 

    toDoList.pop();

    document.getElementById("toDoCounter").innerHTML = `${toDoList.length} To-Do's`


  };


// Sample Tasks for testing

// let sampleTask1 = new Task ("Buy Groceries");
// let sampleTask2 = new Task ("Do Homework");
// let sampleTask3 = new Task ("Wash Dishes");

// toDoList.push(sampleTask1, sampleTask2, sampleTask3);

//console.log(toDoList)








