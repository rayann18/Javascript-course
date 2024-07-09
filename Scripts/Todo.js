const todolist = [{name :'make dinner',
dueDate: '2024-12-24'}, {

name: 'wash dishes',
dueDate: '2024-12-24'} ];

renderTodolist()

function renderTodolist(){
  



let todolistHTML = ''

for(let i =0; i<todolist.length; i++){ 
  const todoObject = todolist[i]
const {name , dueDate } = todoObject
  const html = ` 
  <div> ${name}</div>
  <div> ${dueDate}</div>
  <button onclick="
    todoList.splice(${i} , 1);
    renderTodoList();
 " class = "delete-todo-button" >Delete</button 
    
  `;
  todolistHTML += html
}


document.querySelector('.js-todo-list')
 .innerHTML  = todolistHTML;
}

function addTodo(){
const inputElement =  document.querySelector('.js-name-input')


const name = inputElement.value

 const dateInputElement = document.querySelector('.js-due-date-input')
 const dueDate = inputElement.value

 todolist.push({name : name ,
  dueDate : dueDate , }
 );


inputElement.value= ''

renderTodolist()
}