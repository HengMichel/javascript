// Écrire un programme informatique en Javascript qui calcule le volume d’un parallélépipède rectangle.
// On rappelle que la formule pour calculer le volume est : Volume = largeur x longueur x hauteur.
// pour y arriver :
// 1. il faut déclarer 3 variables (largeur, longueur et hauteur) et les initialiser avec des valeurs numériques
// 2. déclarer une variable volume et l’initialiser à 0
// 3. Appliquer la formule puis affecter son résultat à la variable volume
// 4. afficher le résultat sur la console

// var volume = 0;
// var largeur = 10;
// var longueur = 20;
// var hauteur = 30;

// volume = largeur*longueur*hauteur;
// console.log(volume);



//     exo :
// soit la variable age
// ecrire un programme qui permet:
// 1 d'afficher bébé si age inferieur a 5
// 2 d'afficher enfant si age est compris entre 5 et 10
// 3 d'afficher ado si age est compris entre 11 et 18
// 4 d'afficher vieux si age age est strictement superieur a 18

// let age = 19;

// if (age<5){
// console.log(age + " ans" + " bébé");
// }
// else
// if (age >= 5 && age<= 10){
// console.log(age+ " ans" + " enfant");
// }
// else
// if (age>=11 && age<=18){
// console.log(age+ " ans" + " ado");
// }
// else
// if (age>18){
// console.log(age+" ans" + " bienvenue chez les adultes");
// }else if (age>35){
//     console.log(age + " ans" + " ");
// }

// [15:06] iboudiokel (Invité)
//     exo :
// soit la variable age
// ecrire un programme qui permet:
// 1 d'afficher bébé si age inferieur a 5
// 2 d'afficher enfant si age est compris entre 5 et 10
// 3 d'afficher ado si age est compris entre 11 et 18
// 4 d'afficher vieux si age age est strictement superieur a 18


// var jour = [" dimanche" , " lundi ", " mardi "," mercredi ", " jeudi ", " vendredi ", " samedi "];
// var nombre=0;

// switch (nombre){
//     case 0:
//     console.log(jour[0]);
//     break;
//     case 1 :
//         console.log(jour[1]);
//         break
//         case 2 :
//         console.log(jour[2]);
//         break
//         case 3 :
//         console.log(jour[3]);
//         break
//         case 4 :
//         console.log(jour[4]);
//         break
//         case 5 :
//         console.log(jour[5]);
//         break
//         case 6 :
//         console.log(jour[6]);
//         break

// }


// en ulisant la ternaire ecrire un programe qui affiche adulte si l'age est superieur ou egal a  18 et mineur si age est inferieur a 18

var age = 17;
var personne = (age<18)?"mineur !" : " mageur !";
console.log(personne);

// une annee bisextile est une annee qui est soit:
// 1 - divisible par 4 sans etre divisible par 100
// soit:
// 2 - divisible par 400

var years = 365;
if(years%4===0 && years!==0 || years%400===0){
    // return true;

}
// else return false;

