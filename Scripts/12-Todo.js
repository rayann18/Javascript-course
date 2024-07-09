const todolist = [{name :'make dinner',
dueDate: '2024-12-24'}, {

name: 'wash dishes',
dueDate: '2024-12-24'} ];

renderTodolist()

function renderTodolist(){
  



let todolistHTML = ''

todolist.forEach((todoObject, index) => {
const {name , dueDate } = todoObject
  const html = ` 
  <div> ${name}</div>
  <div> ${dueDate}</div>
  <button onclick="
    todoList.splice(${index} , 1);
    renderTodoList();
 " class = "delete-todo-button js-delete-todo-button" >Delete</button 
    
  `;
  todolistHTML += html
})





document.querySelector('.js-todo-list')
 .innerHTML  = todolistHTML;
}

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) =>{
deleteButton.addEventListener('click' , () => {
  todoList.splice(index , 1);
  renderTodoList();
})
  })



document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo()
})


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