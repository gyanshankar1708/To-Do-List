let btn = document.getElementById("btn");
let list = document.querySelector(".list");
let clrbtn = document.getElementById("clear");


const htmlCreate = (str) => {
  return `<div class="items">${str}</div>`;
};


function localStore(note){
  let notes = JSON.parse(localStorage.getItem("Do")) || [];
  notes.push(note);
  localStorage.setItem("Do", JSON.stringify(notes));
}

window.onload = () => {
  let toDo = JSON.parse(localStorage.getItem("Do")) || [];
  toDo.forEach(item => {
      list.innerHTML += htmlCreate(item);
  });
};

btn.addEventListener("click", () => {
  let val = document.getElementById("note").value;
  if (val != ""){
    list.innerHTML += htmlCreate(val);
    localStore(val);
    document.getElementById("note").value = "";
  }
});


clrbtn.addEventListener("click",()=>{
  localStorage.removeItem("Do");
  list.innerHTML = "";
});