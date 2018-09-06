var kanban = document.getElementsByClassName("kanban");
kanban = Array.from(kanban);

for(let i in kanban)
{
    console.log(kanban[i]);
    kanban[i].addEventListener("dragover", dragOver);
    kanban[i].addEventListener("drop", drop);



}




//  lägg till klick på knapp
const newTaskButton = document.getElementById("saveNewTask");
newTaskButton.addEventListener("click", saveNewTask);

function saveNewTask(){

    const newTaskText = document.getElementById("newTask").value;
    const myTemplate = document.getElementById("todoTemplate");

    let newTemplate = myTemplate.cloneNode(true);
    newTemplate.children[0].innerHTML= newTaskText;

    newTemplate.className = "todoTemplate";

    let id = "_"+ Date.now();
    newTemplate.id=id;

    let kanban = document.getElementsByClassName("kanban")[0];
    kanban.appendChild(newTemplate);

    newTemplate.addEventListener("dragstart",dragStart);
    newTemplate.addEventListener("dragend",dragEnd);


    
}


var draggedEl = "";

function dragStart(){
draggedEl = this;
}

function dragEnd(){

    
}

function dragOver(ev){
    ev.preventDefault();


}

function drop(){

    this.appendChild(draggedEl);



}