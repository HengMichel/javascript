// 1- Saisir un nombre dans un formulaire

// 2- Tant que la valeur est (inférieure ou égale à 3) "ou" (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".

// 3- Déclarer une variable "majoriteFR" qui comprend la valeur 18;

// 4- Déclarer une fonction "afficheAge" qui prend deux paramètres "agePersonne" et "ageAdulte" de type nombre et sans valeur de retour

// 5- Les opérations effectuées par la fonction :

//     a- Si "agePersonne" est supérieur à 3 "et" inférieur à "ageAdulte", à partir d'une boîte de dialogue, on affiche le message suivant "Vous n'êtes pas encore majeur ! "

//     b- Si "agePersonne" est supérieur ou égal à "ageAdulte" "et" inférieur ou égale à 120, à partir d'une boîte de dialogue, on affiche le message suivant "Bienvenue, vous êtes majeur. :)"

// 7- Au moment d'exécution de la fonction, nous passerons en paramètre
//     a- La valeur saisie dans le formulaire (premier paramètre)
//     b- La variable "majoriteFR" (deuxième paramètre)




// **************************************Mitra Version*****************************************************************************


function afficheAge(agePersonne, ageAdulte) {
    if (agePersonne < ageAdulte) {
      alert("Vous n'êtes pas encore majeur ! ");
    }
  
    if (agePersonne >= ageAdulte) {
      alert("Bienvenue, vous êtes majeur. :)");
    }
  }
  
  var age = prompt("Indiquez votre âge : ");
  
  while (age <= 3 || age >= 120 || isNaN(age)) {
    age = prompt("Indiquez votre âge : ");
  }
  
  var majoriteFR = 18;
  
  afficheAge(age, majoriteFR);
  






// ***************************Chatgpt*************************************

// 1. Saisir un nombre dans un formulaire
// var ageSaisi = parseInt(prompt("Indiquez votre âge"));

// 2. Tant que la valeur est inférieure ou égale à 3 ou supérieure ou égale à 120 ou une string, la boîte de dialogue s'affiche
// while (ageSaisi <= 3 || ageSaisi >= 120 || isNaN(ageSaisi)) {
//   ageSaisi = parseInt(prompt("Indiquez votre âge"));
// }

// 3. Déclarer une variable "majoriteFR" qui comprend la valeur 18
// var majoriteFR = 18;

// 4. Déclarer une fonction "afficheAge" qui prend deux paramètres "agePersonne" et "ageAdulte" de type nombre et sans valeur de retour
// function afficheAge(agePersonne, ageAdulte) {
// 5a. Si "agePersonne" est supérieur à 3 et inférieur à "ageAdulte", afficher "Vous n'êtes pas encore majeur !"
//   if (agePersonne > 3 && agePersonne < ageAdulte) {
//     console.log("Vous n'êtes pas encore majeur !");
//   }
// 5b. Si "agePersonne" est supérieur ou égal à "ageAdulte" et inférieur ou égal à 120, afficher "Bienvenue, vous êtes majeur. :)"
//   else if (agePersonne >= ageAdulte && agePersonne <= 120) {
//     console.log("Bienvenue, vous êtes majeur. :)");
//   }
// }

// 7. Appel de la fonction "afficheAge" avec les paramètres correspondants
// afficheAge(ageSaisi, majoriteFR);

// *****************************************************************

// ***************************Début exercice******************************
// var nameCar = []
// var nameFormulaire;
// while (nameCar.length <= 12) {
//   nameFormulaire=prompt("Saisir le nom d'une voiture");
//   nameCar.push(nameFormulaire);
// }
// console.log(nameCar);

// var prenom = [];
// var prenomForm;
// while (prenom.length <= 12) {
//   prenomForm = prompt("Saisit un prénom");
//   prenom.push(prenomForm);
// }
// console.log(prenom.length);

// var adj = []

// var adjForm;

// while(adj.length<=15) {
//     adjForm=prompt("saisir adj");
//     adj.push(adjForm);
// }
// console.log(adj.length);
