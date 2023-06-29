// Écrire un programme informatique en Javascript qui calcule le volume d’un parallélépipède rectangle.
// On rappelle que la formule pour calculer le volume est : Volume = largeur x longueur x hauteur.
// pour y arriver :
// 1. il faut déclarer 3 variables (largeur, longueur et hauteur) et les initialiser avec des valeurs numériques
// 2. déclarer une variable volume et l’initialiser à 0
// 3. Appliquer la formule puis affecter son résultat à la variable volume
// 4. afficher le résultat sur la console

var volume = 0;
var largeur = 10;
var longueur = 20;
var hauteur = 30;

volume = largeur*longueur*hauteur;
console.log(volume);

//     exo :
// soit la variable age
// ecrire un programme qui permet:
// 1 d'afficher bébé si age inferieur a 5
// 2 d'afficher enfant si age est compris entre 5 et 10
// 3 d'afficher ado si age est compris entre 11 et 18
// 4 d'afficher vieux si age age est strictement superieur a 18

let age = 19;

if (age<5){
console.log(age + " ans" + " bébé");
}
else
if (age >= 5 && age<= 10){
console.log(age+ " ans" + " enfant");
}
else
if (age>=11 && age<=18){
console.log(age+ " ans" + " ado");
}
else
if (age>18){
console.log(age+" ans" + " bienvenue chez les adultes");
}else if (age>35){
    console.log(age + " ans" + " ");
}

// [15:06] iboudiokel (Invité)
//     exo :
// soit la variable age
// ecrire un programme qui permet:
// 1 d'afficher bébé si age inferieur a 5
// 2 d'afficher enfant si age est compris entre 5 et 10
// 3 d'afficher ado si age est compris entre 11 et 18
// 4 d'afficher vieux si age age est strictement superieur a 18

var jour = [" dimanche" , " lundi ", " mardi "," mercredi ", " jeudi ", " vendredi ", " samedi "];
var nombre=0;

switch (nombre){
    case 0:
    console.log(jour[0]);
    break;
    case 1 :
        console.log(jour[1]);
        break
        case 2 :
        console.log(jour[2]);
        break
        case 3 :
        console.log(jour[3]);
        break
        case 4 :
        console.log(jour[4]);
        break
        case 5 :
        console.log(jour[5]);
        break
        case 6 :
        console.log(jour[6]);
        break

}

// ***************************************** exo J-2 *******************************************************

(4 == 4) && (5 != "5")              // => false
(10 > 5) || (3 <= 2)                // => true
!(true && false)                    // => true
(4 >= 4) && !(false || true)        // => false
(7 >= 8) || !(false && true)        // => true
(5 > 3) && (10 == 10)               // => true
!(true || false) && (6 >= 6)        // => false
(8 <= 4) || !(false && true)        // => true
!((10 > 8) || (5 < 2))              // => false

let i = 6;

do {
    console.log(i); // affiche 6
    i++;  // incremente i 6 + 1 = 7
} while (i < 5); // verifie la condition

console.log(i); // affiche 7

// // exemple du break => arreter l'execution de la boucle si la variable i egale 4
for (let i = 0; i < 10; i++){
    console.log(i); // affiche i
    if (i == 4) { // si i = 4
        break; // sortir de la boucle
    }
}

// //  exemple du continue => on souhaite afficher que les nombres pairs entre 0 et 10
for (let i = 0; i <= 10; i++){
    if (i % 2 != 0) { // verifie si i n'est pas un nombre pair
        continue; // ignore et passe a l'iteration suivante
    }
    console.log(i);
}

// // idem
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

// //  exemple du continue => on souhaite afficher que les nombres impairs entre 0 et 10
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0) { // verifie si i n'est pas un nombre impair
        continue; // ignore et passe a l'iteration suivante
    }
    console.log(i);
}

// soit la variable note
// en utilisant la structure conditionnelle ternaire
// ecrire un code qui permet d'afficher le message 
// " bien "  si note et supperierur ou égal a 15
// "mauvais" si note est strictement inferieur a 15 

let note = 19 ;
let message = (note>=15) ? " bien " : " mauvais " ;
console.log(message)




class Personne {
  constructor(nom, age) {
  this.nom = nom;
  this.age = age;
  }
  saluer() {
  console.log("Bonjour, je m'appelle "+this.nom+ " et j'ai "+ this.age+ " ans.");
  }
 }

var personne1 = new Personne("Alice", 25);
personne1.saluer(); // Affiche "Bonjour, je m'appelle Alice et j'ai 25 ans."
