let btn = document.querySelector('#liveToastBtn');
let input = document.querySelector('#task');
let ul = document.querySelector('#list')
const alertDOM =document.querySelector('#alert');


let todoList = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

const alertFunc = (title) =>
`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>${title}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

const getItem = () =>
{
    todoList.forEach(element => {
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${element} `;
        ul.append(liDOM);
    });
}

getItem();


btn.addEventListener("click", newElement);
function newElement(){
    if(input.value){
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${input.value} `;
        ul.append(liDOM);

        todoList.push(input.value);
        localStorage.setItem('todo', JSON.stringify(todoList));
        input.value = "";
    }
    else{
        alertDOM.innerHTML = alertFunc(
            "Hatalı giriş!"
        ) 
    }
}