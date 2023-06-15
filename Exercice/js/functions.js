function afficheAge(agePersonne, ageAdulte) {
  if (agePersonne < ageAdulte) {
    alert("Vous n'êtes pas encore majeur ! ");
  }

  if (agePersonne >= ageAdulte) {
    alert("Bienvenue, vous êtes majeur. :)");
  }
}

// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num" et elle retourne un tableau "addElement"
// 2- dans la fonction :

function fillArray(num) {
  // a/Déclarer une variable de type tableau "addElement"
  var addElement = [];
  // b/ Déclarer une variable "elem"
  var elem;
  // c/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données, nous allons stocker la valeur de retour dans la variable "elem" (nombre de l'affichage de la boîte de dialogue dépend du nombre qui vient du paramètre utilisé dans la fonction)
  //   d/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement"
  for (var i = 0; i < num; i++) {
    elem = prompt("Saisir de données !");
    addElement.push(elem);
  }

  return addElement;
}

// execution de la fonction : 
var fruits = fillArray(3);
console.log(fruits);