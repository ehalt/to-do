
// let's do something special 
//all selectors here

const todoInput = document.querySelector('.guta');
const todoButton = document.querySelector('.btn-doto');
const todoList = document.querySelector('.tlist');
const filterOption = document.querySelector('.filter-todo'); 

//Event listeners

todoButton.addEventListener('click', addTodo);

//to delete todo items
todoList.addEventListener('click', deleteCheck);
// let's do tite selectors
filterOption.addEventListener('click', filterTodo);

//let's create " Functions "

function addTodo(event) {
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //lest create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button here
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to this list
    todoList.appendChild(todoDiv);

    //let's clear the value user input
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //let's DELETE todo items
    if(item.classList[0]  === 'trash-btn') {
        const todo = item.parentElement;
        //umm gonna add animation here
        todo.classList.add("fall");
        todo.addEventListener('transitioned', function(){
            todo.remove();
        });
    }
    //complete task "check"
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//anoter function here
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "sob":
                todo.style.display = 'flex';
            case "hoce":
                if(todo.classList.contains('hoce')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display='none';
                }
                break;
            case "hoyni": 
                if(!todo.classList.contains('hoce')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}