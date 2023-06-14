// *************************************exo***********************************************************
// Jour Suivant
// Ecrivez un programme jour_suivant.js qui fait saisir un nom de jour de la semaine à l'utilisateur, 
// puis affiche le nom du jour suivant.

// Les erreurs de saisie (jour incorrect) doivent être gérées.

// Effectuez l'exercice avec des if/if else puis avec un switch.

// ************************************Version Alexis*************************************************************
// ***************************************************************************************************************

// var day = prompt("ecrire un jour de la semaine", "lundi");
// (maj et minuscule)
// day = day.toLowerCase();
// while (Number(day)) {
//     day = prompt("ecrire un jour de la semain", "lundi");
// }
// switch (day) {
//   case "lundi":
//     document.write("demain nous serons mardi");
//     break;
//   case "mardi":
//     document.write("demain nous serons mercredi");
//     break;
//   case "mercredi":
//     document.write("demain nous serons jeudi");
//     break;
//   case "jeudi":
//     document.write("demain nous serons vendredi");
//     break;
//   case "vendredi":
//     document.write("demain nous serons samedi");
//     break;
//   case "samedi":
//     document.write("demain nous serons dimanche");
//     break;
//   case "dimanche":
//     document.write("demain nous serons lundi");
//     break;
//   default:
//     document.write("nous ne prenons que les jours de la semaine");
//     day = prompt("écrire un jour de la semaine", "lundi");
// }

// var dayif = prompt("ecrire un jour de la semain", "lundi");
// while (Number(dayif)) {
//   dayif = prompt("ecrire un jour de la semain", "lundi");
// }
// if (dayif == "lundi") {
//   document.write("demain nous seron mardi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron mercredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron jeudi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron vendredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron samedi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron dimanche");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron lundi");
// } else {
//   document.write("nous prenons que les jours de la semaine");
// }


// ***********************************Version Jerem************************************************************
// ************************************************************************************************************

// var jours = prompt("choisissez un jour de la semaine");
 
// var semaine = [
//   "lundi",
//   "mardi",
//   "mercredi",
//   "jeudi",
//   "vendredi",
//   "samedi",
//   "dimanche",
// ];
 
// if (jours === semaine[0]) {
//   document.write(`Demain nous serons ${semaine[1]}`);
// } else if (jours === semaine[1]) {
//   document.write(`Demain nous serons ${semaine[2]}`);
// } else if (jours === semaine[2]) {
//   document.write(`Demain nous serons ${semaine[3]}`);
// } else if (jours === semaine[3]) {
//   document.write(`Demain nous serons ${semaine[4]}`);
// } else if (jours === semaine[4]) {
//   document.write(`Demain nous serons ${semaine[5]}`);
// } else if (jours === semaine[5]) {
//   document.write(`Demain nous serons ${semaine[6]}`);
// } else if (jours === semaine[6]) {
//   document.write(`Demain nous serons ${semaine[0]}`);
// } else {
//   document.write("merci d'écrire un jour");
// }


// **************************************exercice**************************************************************************
// ************************************************************************************************************************
// ****************************Utilisation Random + floor******************************************************************
// declarer une variable Prenom



var prenons = [
  "Alexis",
  "Alin",
  "Cynthia",
  "Faïssal",
  "Jérémy",
  "Karima",
  "Michel",
  "Narcis",
  "Nawal",
  "Oliver",
  "Rahim",
  "Wassila",
];

prenons = Math.random();
prenons = prenons*13;
prenons = Math.floor(prenons);
document.write(prenons);