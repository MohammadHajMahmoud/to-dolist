const todos=JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')):[];
const data= JSON.parse(localStorage.getItem('tasks'))? JSON.parse(localStorage.getItem('tasks')):[];
document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
        if(!input.value){
          alert("Please add a Task");

           }else{
          todos.push(input.value)
          localStorage.setItem('tasks',JSON.stringify(todos))
           addItem(input.value);
        }
        
    } 
});

  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    if(!input.value){
      alert("Please add a Task");

       }else{
      todos.push(input.value)
      localStorage.setItem('tasks',JSON.stringify(todos))
       addItem(input.value);
    }

});
  

   addItem = (input) => {
 
    const item = document.createElement("div");
    const div = document.createElement("div");
    const text = document.createElement("p");
    const trashIcon = document.createElement("i");
    item.className = "item";
    text.textContent = input;
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    
    trashIcon.addEventListener("click", () => {
      let tasks;
      if(localStorage.getItem("tasks")==null){
        tasks =[];
      }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
      const todoIndex =text.textContent;
      tasks.splice(tasks.indexOf(todoIndex),1)
      localStorage.setItem("tasks",JSON.stringify(tasks))
      item.remove();
    })
    
    div.appendChild(trashIcon);
    item.appendChild(text);
    item.appendChild(div);

    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }
  data.map((todo)=>{
    addItem(todo);
  })
 
   
  