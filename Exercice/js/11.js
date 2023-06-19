// alert('test');

// var heure = prompt("Entrez l'heure :");
// var minute = prompt("Entrez les minutes :");
// var seconde = prompt("Entrez les secondes :");

// // on teste les cas d'erreur
// if ((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <=59)) { // &&
//     seconde++; // on incrémente les secondes
//     if (seconde === 60) { // ===
//         // on met les secondes à 0 et passe à la minute suivante
//         seconde = 0;
//         minute++;
//         if (minute === 60) { // ===
//             // on met les minutes à 0 et passe à l'heure suivante
//             minute = 0;
//             heure++;
//             if (heure === 24) { // ===
//                 // l'heure suivante est minuit
//                 heure = 0;
//             }
//         }
//     }
//     // affichage de l'heure
//     document.write("<h3>Dans une seconde il sera " + heure + " h " + minute + " m " + seconde + " s</h3>");
// } else {
//     // heure incorrecte
//     document.write("Heure incorrecte !");
// }

{/* <p>Ecrivez un programme qui demande une heure à un utilisateur sous la forme de trois informations (heures, minutes,
		secondes).</p>
	<p>il affiche ensuite l'heure qu'il sera une seconde plus tard.</p>
	<p>Les erreurs de saisie doivent être gérées.</p> */}

    
    // Demande à l'utilisateur d'entrer l'heure
var heureUtilisateur = prompt("Veuillez entrer l'heure (format HH:MM:SS) :");

// Divise l'heure en heures, minutes et secondes
var temps = heureUtilisateur.split(":");
var heures = parseInt(temps[0]);
var minutes = parseInt(temps[1]);
var secondes = parseInt(temps[2]);

// Ajoute une seconde
// secondes++;

// Vérifie si une correction est nécessaire pour les minutes et les heures
// if (secondes >= 60) {
//   secondes = 0;
//   minutes++;

//   if (minutes >= 60) {
//     minutes = 0;
//     heures++;

//     if (heures >= 24) {
//       heures = 0;
//     }
//   }
// }

// Affiche l'heure avec une seconde de plus
// console.log("L'heure actuelle avec une seconde de plus : " + heures + ":" + minutes + ":" + secondes);
