
window.addEventListener("keydown", checkKey);


function checkKey(ev){     if(ev.keyCode === 13)    
    {       
      saveNewTask();    }     }    
      const mySaveButton = document.getElementById("saveNewTask");

// lägg till klick på save-knappen
mySaveButton.addEventListener("click",saveNewTask);  
function saveNewTask(){ 
    
    //Hämta textrutans innehåll
    const text = document.getElementById("newTask"); 
    
    if(text.value.trim().length > 0)
    {

    console.log(text.value); 
    
    //Skapa en ny div
    var divTask = document.createElement("div"); 
    divTask.className = "createdTask"


    //Lägg till lyssnare till vårt nya element 
    divTask.addEventListener("click",moveToNext);
    
  
        

        const firstKanban = document.getElementsByClassName("kanban")[0];
        console.log(firstKanban);


        console.log("new Element is clicked"); 
   


    //Skapa en text-node som du kan lägga in i din nya div
    var theText = document.createTextNode(text.value); 
   
    //Lägg till text-noden till din nyskapde div
    divTask.appendChild(theText); 

    //Lägg till tillbaka-knapp
    var backButton = document.createElement("button");
    backButton.className = "backButton";
    backButton.innerHTML = "&larr;";
    backButton.addEventListener("click", moveBack);
    divTask.appendChild(backButton);


    






    //Lägg till nya diven i föräldern till knappen du tryckte på
    firstKanban.appendChild(divTask); 
    
 


    } //end if

        //Tömmer textruta
        text.value= "";   
        
} //end function


function moveToNext(){

//vi måste hitta vilket index vår nuvarande förälder har, detta för att kunna byta ut föräldern mot en bättre.

const kanban = Array.from(document.getElementsByClassName("kanban"));

//leta efter index för föräldern jag kom ifrån
let currentParentIndex = kanban.indexOf(this.parentElement);


console.log(currentParentIndex);

if(currentParentIndex<kanban.length-1)
{
currentParentIndex = currentParentIndex +1;
kanban[currentParentIndex].appendChild(this);
}


}

function moveBack(ev){

event.stopPropagation();
   const clickedParent = this.parentElement;
   const kanban = Array.from(document.getElementsByClassName("kanban"))
   let currentParentIndex = kanban.indexOf(clickedParent.parentElement);

   if(currentParentIndex > 0)
   {
currentParentIndex -= 1;
kanban[currentParentIndex].appendChild(clickedParent);

   }



}

/*function moveToDone(){

    const thirdKanban = document.getElementsByClassName("kanban")[3];
    thirdKanban.appendChild(this);
}*/