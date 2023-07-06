// creer une variable pour chaque bouton

// creer une variable pour chaque input

// ecouter le click sur le bouton solution
// si on click sur le bouton solution il affiche le nombre mystere dans message



// ecouter le click sur le bouton nouveau jeu
// si on click dessus il genere un nombre aleatoire entre 0 et 50 puis remet le nombre d'essaies a zero

// pour generer un nombre aleatoire utiliser l'objet math





    var solution;
    var essais = 0;
    
    $(document).ready(function() {
      nouveauJeu();
      
      $("#propose").click(function() {
        proposer();
      });
      
      $("#newGame").click(function() {
        nouveauJeu();
      });
      
      $("#afficherSolution").click(function() {
        afficherSolution();
      });
    });
    
    function nouveauJeu() {
      solution = Math.floor(Math.random() * 51) + 1; // Génère un nombre aléatoire entre 1 et 50
      essais = 0;
      $("#message").append("");
      $("#reponse").append("");
      $("#proposition").val("");
    }
    
    function proposer() {
      var proposition = parseInt($("#proposition").val());
      essais++;
      
      if (proposition === solution) {
        $("#message").append("Bonne réponse !");
      } else if (essais === 7) {
        $("#message").append("Perdu ! La solution était : " + solution);
      } else {
        var message = (proposition < solution) ? "Trop petit" : "Trop grand";
        $("#message").append(message);
        $("#reponse").append(proposition + " - ");
      }
      
      $("#proposition").val("");
    }
    
    function afficherSolution() {
      $("#message").append("La solution était : " + solution);
    }
{/* <body>
  <h1>Jeu du nombre mystère</h1>
  
  <p id="message"></p>
  <p id="reponse"></p>
  
  <input type="number" id="proposition">
  <button id="proposer">Proposer</button>
  <button id="nouveauJeu">Nouveau jeu</button>
  <button id="afficherSolution">Solution</button>
</body> */}


{/* another*******************************************************************************************


var nb_aleatoire = Math.floor(Math.random() * 51);
//math.floor pour retourner un nombre entier , Math.random pour un nombre aleatoire entre 0 et 0,99
console.log(nb_aleatoire);
 
let solution = document.getElementById("solution");
let reponse = document.getElementById("reponse");
let boutonPropose = document.getElementById("propose");
let proposition = document.getElementById("proposition");
 
// en j querry
// let solution= $("#solution");
 
// addventlistener ecouteur d'evenement (click, change)
solution.addEventListener("click", () => {
  // Quand on clique sur solution , l'input "reponse" prend en valeur le nombre aléatoire (le nombre aléatoire est affiché dans l'input de la réponse)
  reponse.value = nb_aleatoire;
  boutonPropose.setAttribute("disabled", true);
  proposition.setAttribute("disabled", true); //Une fois le bouton solution cliqué, le bouton proposer et l'input proposition prennent l'attribut disabled (On ne peut plus cliquer dessus)
});
 
let newGame = document.getElementById("newgame");
let essai = document.getElementById("essai");
let message = document.getElementById("message");
 
newGame.addEventListener("click", () => {
  proposition.removeAttribute("disabled", false);
  boutonPropose.removeAttribute("disabled", false);
  nb_aleatoire = Math.floor(Math.random() * 51);
  console.log(nb_aleatoire);
  reponse.value = "";
  message.value = "";
  essai.value = 1;
  proposition.value = "";
});
boutonPropose.addEventListener("click", () => {
  if (essai.value == 7) {
    boutonPropose.setAttribute("disabled", true);
    proposition.value = "";
    message.value = "Game over";
    reponse.value = nb_aleatoire;
    proposition.setAttribute("disabled", true);
  } else {
    // Si la valeur de la proposition n'est pas vide ET est égale au bon nombre aléatoire , alors un message de félicitation apparaitra , et la réponse sera donnée
    if (proposition.value != "" && proposition.value == nb_aleatoire) {
      message.value = "Félicitation, tu as trouvé";
      reponse.value = nb_aleatoire;
      proposition.setAttribute("disabled", true);
    } else if (proposition.value != "" && proposition.value < nb_aleatoire) {
      message.value = "Le nombre est trop petit";
      essai.value++;
      proposition.value = "";
    } else if (proposition.value != "" && proposition.value > nb_aleatoire) {
      message.value = "Le nombre est trop grand";
      essai.value++;
      proposition.value = "";
    }
  }
});*/}