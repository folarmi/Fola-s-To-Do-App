//Selectors
const inputBox = document.getElementById("text-box");
const showItem = document.getElementById("list-item");
const trashBin = document.querySelector("#trash");
const pencil = document.getElementById("pencil");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
var spans = document.getElementsByTagName("span");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
console.log(pencil);



// //Event Listeners
// pencil.addEventListener("click", write);
saveBtn.addEventListener("click",saveToDoState);
clearBtn.addEventListener("click",clearToDoState);

//loads todo if found
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteToDo()
  }
}

// Execute a function when the user releases a key on the keyboard
inputBox.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
   
    const inputValue = inputBox.value;
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,inputValue);
    inputBox.value = " ";

    deleteToDo();
  }
});


// delete a toDo
function deleteToDo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
}
}

// To put a line through the element
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('line-through');
  }
},false
);

//Save to do list
function saveToDoState(){
  localStorage.setItem("toDoList",ul.innerHTML)
}

// clear to do list
function clearToDoState(){
  localStorage.removeItem("toDoList",ul.innerHTML);
  ul.textContent = " "
}

deleteToDo()

loadTodo()

//get to do list
// function getToDoList (){
//   localStorage.getItem("toDoList",ul.innerHTML)
// }

// function write() {
  
// }