 // pour recuperer le bouton
let btn = document.getElementById("add_todo"); 
// pour recuperer le input
let todo = document.getElementById('todo'); 
// pour recuperer la div ou on va ajouter les todos
let todoList = document.getElementById("todolist"); 

// ecouter le click sur le bouton
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // recuperer la valeur du input
    let val = todo.value;
    // creer un paragraphe
    let p = document.createElement("p");
    // ajouter le contenu du input dans le paragraphe
    p.textContent = val;
    // ajouter le paragraphe dans la div
    todoList.appendChild(p);

    p.addEventListener('click',() => {
      p.style.fontSize = "2em";
      // style only red after click
      // p.style.color = "red";
      p.style.color = (p.style.color != "red")  ? "red": "blue";

    })
  });   

  // ******************************  Exo2  create calculate  ********************************************

  let btnPlus = document.getElementById("addi"); 
  let btnMoins = document.getElementById("sous"); 
  let btnMulti = document.getElementById("multi"); 
  let btnDivi = document.getElementById("divi"); 
  let btnTotal = document.getElementById("egal"); 
  let nombre1 = document.getElementById("nombre1");
  let nombre2 = document.getElementById("nombre2");
  let op = "+";

  btnPlus.addEventListener('click', () => {
    op = "+";
    
  })
  btnMoins.addEventListener('click', () => {
    op = "-";
    
  })
  btnMulti.addEventListener('click', () => {
    op = "*";
    
  })
  btnDivi.addEventListener('click', () => {
    op = "/";
    
  })
  btnTotal.addEventListener('click', () => {
    op = ("nombre1" + "nombre2" == "+" : "nombre1" - "nombre2" == "-") ;
    
  })
  