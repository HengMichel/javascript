// pour recuperer le bouton
let btn = document.getElementById("add_todo");
// pour recuperer le input
let todo = document.getElementById('todo');
// pour recuperer la div ou on va ajouter les todos
let todoList = document.getElementById("todolist");

// ecouter le click sur le bouton

// btn.addEventListener('click', (e) => {
//     e.preventDefault();

// recuperer la valeur du input

// let val = todo.value;

// creer un paragraphe

// let p = document.createElement("p");

// ajouter le contenu du input dans le paragraphe

// p.textContent = val;

// ajouter le paragraphe dans la div

// todoList.appendChild(p);

// p.addEventListener('click',() => {
//   p.style.fontSize = "2em";

// style only red after click

// p.style.color = "red";
// p.style.color = (p.style.color != "red")  ? "red": "blue";
//   })
// });

//  si vous arrivez a refaire le code de tel sorte qu'on puisse ajouter des todos => vous gagnez 0.5
// si vous arrivez a faire en sorte que si on click sur une todo il devient rouge => 0.5
// plus 1 pour la prochaine evalution

// $("#todolist").click(e => {
//   e.preventDefault();

//   $("#todo").val()

//   // let p = $("<p></p>");
//   p= $("#todolist").html("<p>"+$("#todo").val()+"</p>");

//   p.css("color","red");

//   // + $("#add_todo").text()

//   // $("#todolist").val()

// });
$("#add_todo").click((e) => {
  e.preventDefault();
  let val = $("#todo").val();
  // let p = $("#todolist").html("<p>"+$("#todo").val()+"</p>");
  // .html ecrase l'ancienne donnee pour la remplacer
  $("#todolist").append("<p>" + val + "</p>").click((e) => {
      // p.css("color", "red");
      // p.css("fontSize", "10em");

      // e.target.style.color = "red";
      // e.target.style.fontSize = "10em";

      $(e.target).css({
        "color": "red",
        "font-size": "10em"
      })


      // *******  ne fonctionne pas **********************
      // if ($(e.target.hasClass("blue"))) {
      //   $(e.target.removeClass("blue")).css("color", "red");
      // }
      //  else {
      //   target.addClass("blue").css("color", "blue");
      // }
      // target.css("font-size", "10em").text(todoValue);

    });
});
