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

// ***************************************** exo J-2 *******************************************************

// (4 == 4) && (5 != "5")              // => false
// (10 > 5) || (3 <= 2)                // => true
// !(true && false)                    // => true
// (4 >= 4) && !(false || true)        // => false
// (7 >= 8) || !(false && true)        // => true
// (5 > 3) && (10 == 10)               // => true
// !(true || false) && (6 >= 6)        // => false
// (8 <= 4) || !(false && true)        // => true
// !((10 > 8) || (5 < 2))              // => false

// let i = 6;

// do {
//     console.log(i); // affiche 6
//     i++;  // incremente i 6 + 1 = 7
// } while (i < 5); // verifie la condition

// console.log(i); // affiche 7

// // exemple du break => arreter l'execution de la boucle si la variable i egale 4
// for (let i = 0; i < 10; i++){
//     console.log(i); // affiche i
//     if (i == 4) { // si i = 4
//         break; // sortir de la boucle
//     }
// }

// //  exemple du continue => on souhaite afficher que les nombres pairs entre 0 et 10
// for (let i = 0; i <= 10; i++){
//     if (i % 2 != 0) { // verifie si i n'est pas un nombre pair
//         continue; // ignore et passe a l'iteration suivante
//     }
//     console.log(i);
// }

// // idem
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// //  exemple du continue => on souhaite afficher que les nombres impairs entre 0 et 10
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) { // verifie si i n'est pas un nombre impair
//         continue; // ignore et passe a l'iteration suivante
//     }
//     console.log(i);
// }

// let tab = ["Alin", 45]; // ["Alin", 45]
// tab[3] = "2 rue de l'amour"; // ["Alin", 45, "", "2 rue de l'amour"]
// // vue que le tableau n'a pas d'indice 2 et 3 met l'indice 2 a vide et l'indice 3 avec la valeur
// console.log(tab);
// tab.push("0678545855"); // ["Alin", 45, "", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab.unshift("Johanne"); // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab[3] = "future"; // ["Johanne", "Alin", 45, "future", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// delete tab[3]; // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
// console.log(tab);
// tab = new Array(); // reinitialise le tableau
// tab = [];  // reinitialise le tableau

// let tableau = ["Cynthia", "Narcis", "Rahim", "Nawal", "Karima"];
// let index = tableau.indexOf("Narcis");
// console.log(index); // 1
// let newTab = tableau.slice(0, 3); // ["Cynthia", "Narcis", "Rahim"]
// console.log(newTab);

// let tabNumer = [1, 8, 19, 5];
// console.log(tabNumer.sort()); // [1, 19, 5, 8]

// tabNumer.sort(function (a, b) {
//     return a - b;
// });

// let tab2 = [2, 7, 9, 8];
// tab2.fill("Alexis"); // ["Alexis", "Alexis", "Alexis", "Alexis"]
// console.log(tab2);
// tab2.fill("Michel", 1, 3); // ["Alexis", "Michel", "Michel", "Alexis"]
// console.log(tab2);

// let tab3 = ["Alexis", "Jérémy", "Michel", "Faissal"];
// let str = tab3.join(' '); // "Alexis Jérémy Michel Faissal"
// console.log(str);
// console.log(tab3.reverse()); // ["Faissal", "Michel", "Jérémy", "Alexis"];

// let tab4 = [2, 5, 8];
// // tab4.splice(1, 2); // [2]
// tab4.splice(2, 0, 'a', 'b'); // [2, 5, 'a', 'b', 8]
// console.log(tab4);

// let tab5 = [1, 2, 3];
// let tab6 = [4, 5, 6];
// let tab7 = tab5.concat(tab6); // [1, 2, 3, 4, 5, 6]
// console.log(tab7);

// let tab8 = [1, 6, 8, 3];
// let tab9 = tab8.map(e => e * 5); // [5, 30, 40, 15]
// console.log(tab9);

// *********************************************** Exercice  ****************************************************
// Exercise
// be the table: ["banana", "apple", "mango"]
// Add a strawberry between apple and mango
// Remove the bannan
// replace strawberry and mango and apple by guava

// tableau.splice(2, 0, 'a', 'b'); // Ajoute 'a' et 'b' à partir de l'indice 2
// tableau.shift(); // Supprime le premier élément du tableau
// tableau.fill(0, 1, 4); // les éléments de l'indice 1 à l'indice 3 sont remplacés
// par la valeur 0

// let fruit = ["banane", "pomme" , "mangue"];
// fruit.splice(2,0,"fraise");
// console.log(fruit);
// fruit.shift();
// console.log(fruit);
// fruit.fill("goyave");
// console.log(fruit);

// ************************************* Fonction  *****************************************************************

function maxMin(a, b, c) {
  if (c == true) {
    if (a > b) {
      console.log(a);
      return a;
    } else if (b > a) {
      console.log(b);
      return b;
    }
  } else if (c == false) {
    if (a < b) {
      console.log(a);
      return a;
    } else if (b < a) {
      console.log(b);
      return b;
    }
  }
}

let a = 10;
let b = 20;

let result1 = maxMin(10, 20, true);
let result2 = maxMin(10, 20, false);

// ************************************ Correction ************************************************************
function addition(a, b) {
  let resultat = a + b;
  return resultat;
}
// idem
function addition(a, b) {
  return a + b;
}

// let somme = addition(2, 5);
// let somme2 = addition(4, 7);
// console.log(somme);
// console.log(somme2);

function direBonjourPrenom(prenom = "Anonyme") {
  document.write("Bonjour, ", prenom, " !");
}

direBonjourPrenom(); // Bonjour, Anonyme !

// direBonjourPrenom("Michel"); // Bonjour, Michel !

// Exo 1
function maxMin(a, b, c = true) {
  if (c == true) {
    // si c == true
    if (a > b) {
      // si a plus grand que b
      return a; // on retourne a
    } else {
      // sinon
      return b; // on retourne b
    }
  } else {
    // si c = false
    if (a < b) {
      // si a est plus petit que b
      return a; // on retourne a
    } else {
      // sinon
      return b; // on retourne b
    }
  }
}
let resultat = maxMin(3, 8, true);
console.log(resultat);

// on retourne a si (c = true et a > b) ou (c = false et a < b)
// on retourne b si (c = true et a < b) ou (c = false et a > b)
function maxMin(a, b, c = true) {
  if ((c == true && a > b) || (c == false && a < b)) {
    return a;
  } else if ((c == true && a < b) || (c == false && a > b)) {
    return b;
  }
}

let result = maxMin(3, 8, false);
console.log(result);

//    ************************************************** another excercice ****************************************

// ecrire une fonction sommeTab qui prend en paramètre un tableau composé de nombres.
// la fonction doit retourner la somme des éléments du tableau
// exemple : sommeTab([1,6,9]) =>16

let num = 1; // variable num qui contient la valeur 1
do {
  // faire:
  if (num % 2 === 0) {
    // si num est divisible par 2 (a savoir un nombre pair)
    console.log(num); // afficher num
  }
  num++; //incrementer num
} while (num <= 20); // tant que num est inferieur ou egale a 20

function someTab(tableau) {
  // fonction someTab prend un parametre
  let somme = 0; // initialisation de la variable somme à 0
  let i = 0; // initialisation de la variable i à 0
  //  0 correspond a la premiere position du tableau
  while (i < tableau.length) {
    // tant que i est plus petit que la taille du tableau
    // on ajoute la valeur de la position i du tableau a la variable somme
    somme = tableau[i] + somme;
    i++; // incrementer i
    // somme += tableau[i];
  }
  // a la fin de la boucle on retourne la somme
  return somme;
}

let tab = [1, 2, 8, 5, 6];
let resultat2 = someTab(tab);
console.log(resultat2); // => affiche 22

// eviter cette mauvaise maniere
// let resultat3 = someTab([1, 6, 9]); // => 16

let somme = 0; // la variable somme vaut 0 au depart

for (let i = 1; i <= 5; i++) {
  // console.log(i);
  somme = somme + i;
  // somme += i;
}

console.log(somme);

// iteration 1:
// somme = 0
// i = 1
// fin iteration 1:
// somme = 1
// i = 2
// iteration 2:
// somme = 1
// i = 2
// fin iteration 2
// somme = 3
// i = 3
// iteration 3:
// somme = 3
// i = 3
// fin iteration 3
// somme = 6
// i = 4
// iteration 4:
// somme = 6
// i = 4
// fin iteration 4
// somme = 10
// i = 5
// iteration 5:
// somme = 10
// i = 5
// fin iteration 5
// somme = 15
// i = 6

// ecrire une fonction maxTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus grand nombre du tableau
// exemple:
// maxTab([2, 7, 4, 0]) => 7

function maxTab(tab) {
    let max = tab[0]; // on considere le premier element comme etant le plus grand
    for (let i = 0;i<tab.length;i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau 
        if(max<tab[i] ){ // si max est plus <
            // on remplace la valeur de max par la valeur de la position i du tableau
           max = tab[i];
        }

    }
  return max;
}

let tableau = [2, 7, 4, 0];
let res = maxTab(tableau);
console.log(res);//affiche => 7



// ecrire une fonction minTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus petit nombre du tableau
// exemple:
// minTab([2, 7, 4, 0]) => 0

function minTab(tab) {
    let min = tab[0]; // on considere le premier element comme etant le plus grand
    for (let i = 0;i>tab.length;i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau 
        if(min>tab[i] ){ // si max est plus <
            // on remplace la valeur de max par la valeur de la position i du tableau
           min = tab[i];
        }

    }
  return min;
}

let tableau2 = [2, 7, 4, 0];
let res2 = minTab(tableau);
console.log(res2);//affiche => 0



// ecrire une fonction maxMinTab qui prend en paramètre un tableau composé de
// nombres et un boolean
// ● si le deuxieme parametre égale true la fonction devra retourner le plus
// grand nombre du tableau
// ● sinon elle retournera le plus petit
// exemple:
// maxMinTab([2, 7, 4, 0], true) => 7
// maxMinTab([2, 7, 4, 0], false) => 0


function maxTab(tableau) {
    let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
    for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau
        if (max < tableau[i]) {  // si max est plus petit
            // on remplace la valeur de max par la valeur de la position i du tableau
            max = tableau[i]; 
        }
    }
    return max; // retourner max
}

 

function minTab(tableau) {
    let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
    for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau
        if (min > tableau[i]) {  // si max est plus petit
            // on remplace la valeur de max par la valeur de la position i du tableau
            min = tableau[i]; 
        }
    }
    return min; // retourner max
}

 


function maxMinTab(tableau, c) {
    if (c == true) {
        return maxTab(tableau);
    } else {
        return minTab(tableau);
    }
}



// exercice
// soit les tableaux suivants
// const array = [1, 12, 3, 67, 1, 23, 0, 87];
// const array2 = [1, 1, 2, 3, 4, 5];
// const array3 = [0];
// const array4 = ['never gonna', 'give you', 'up'];
// const array5 = ['never gonna', 'let you', 'down'];



const array = [1, 12, 3, 67, 1, 23, 0, 87];
const array2 = [1, 1, 2, 3, 4, 5];
const array3 = [0];
const array4 = ['never gonna', 'give you', 'up'];
const array5 = ['never gonna', 'let you', 'down'];

 

function verifSortAsc(tableau) {
    let estTrier = true; // par defaut on considere que le tableau est trie
    let tab = []; // declare un tableau vide pour avoir une copy du tableau
    for (let i = 0; i < tableau.length; i++){ //
        // remplir le tableau tab par les valeur du tableau tableau
        tab.push(tableau[i]); 
    }
    tab.sort(); // trier tab

 

    for (let i = 0; i < tab.length; i++){ // pour i allant de 0 a taille du tableau
        if (tab[i] == tableau[i]) { // si tab[i] == tableau[i]
            estTrier = true;
        } else { // sinon
            estTrier = false;
            break; // on sort de la boucle
        }
    }
    return estTrier;
}

 

console.log(verifSortAsc(array5)); // => 




// exercice
// Ecrivez une fonction "verifSortAsc" qui prend en paramètre un tableau et
// vérifie qu'il est bien trié dans l'ordre ascendant.
// La fonction devra retourner "true" si c'est le cas, "false" sinon.
// Exemples :
// verifSortAsc(array) => doit retourner "false"
// verifSortAsc(array2) => doit retourner "true"

// exercice
// Toujours avec ces cinq tableaux
// Ecrivez une fonction "verifSort" qui prend en paramètre un tableau ainsi qu'un booléen
// "asc".
// ● Si "asc" est "true", on vérifie que le tableau passé en paramètre est trié par ordre
// ascendant
// ● sinon par ordre descendant.
// Faites en sorte que si l'on ne passe pas de deuxième paramètre, le critère de vérification
// soit ascendant par défaut.
// Exemples :
// verifSort(array, true) => doit retourner "false"
// verifSort(array3) => doit retourner "true"
// verifSort(array2, true) => doit retourner "true"
// verifSort(array3, false) => doit retourner "true"
// verifSort(array5, false) => doit retourner "true"

// exercice
// Ecrivez une fonction "reverseWord" qui prend une chaîne de caractères en
// paramètre et qui retourne la chaîne de caractères inversée.
// Exemple :
// reverseWord("Hello World!") => doit retourner "!dlroW olleH"



function reverseWord(str) {
    // let tab = str.split(''); // conversion de la chaine de caractere en tableau
    // tab.reverse(); // inverser le tableau
    // let chaine = tab.join(''); // convertir le tableau en chaine de caractere
    // return chaine;
    return str.split('').reverse().join('');
}

console.log(reverseWord("Hello World!"));
// exercice
// Ecrivez une fonction "reverseArray" qui prend en paramètre un tableau et qui
// retourne ledit tableau inversé.
// Exemple :
// reverseArray(["Hello", "World!"]) => doit retourner ["World!", "Hello"]

function reverseArray(tab) {
    return tab.reverse();
}

// exercice
// Ecrivez une fonction "reverseWords" qui prend en paramètre un nombre
// indéfini de paramètres étant des chaînes de caractères et qui retourne,
// cette fois-ci, un tableau contenant chaque mot inversé.
// Exemple :
// reverseWords("Hello", "World!") => doit retourner ["olleH", "!dlroW"]

function reverseWords(...words){
    // words.map(reverseWords);
    let resultat = []; // tableau vide 
    for (let i = 0; i < words.length; i++){
        // rempli le tableau resultat avec les valeurs inversees de chaque parametre
        resultat.push(reverseWord(words[i])); 
    }
    return resultat;
}
let res1 = reverseWords("bonjour", "le", "monde");
// console.log(res);


// exercice
// À l'aide des trois fonctions écrites précédemment, écrivez une fonction qui
// prend en paramètre le tableau suivant et retourne ledit tableau inversé, de
// même que tous les mots qu'il contient.
const words = [
's.e.têrp', 'sap',
"setê'n", 'suoV',
'ces', 'redoc',
'av', 'aç',
'eénna', 'etteC'
]


function phrase(tableau) {
    let resultat = reverseArray(reverseWords(...tableau)); 
    return resultat;
}

console.log(phrase(words));

// exercice
// ecrire une fonction estPalindrome qui prend en paramètre une chaine de
// caractere
// la fonction doit retourner true si le paramètre est un palindrome
// dans le cas contraire elle doit retourner false
// Un palindrome est un mot, une phrase, un nombre ou toute autre séquence de
// caractères qui reste identique dans les deux sens de lecture (gauche vers la
// droite et droite vers la gauche)
// les mots Radar, Level, Civic, Deified, Madam, Kayak, Rotator, Stats sont des
// palindromes





// soit la variable note
// en utilisant la structure conditionnelle ternaire
// ecrire un code qui permet d'afficher le message 
// " bien "  si note et supperierur ou égal a 15
// "mauvais" si note est strictement inferieur a 15 

let note = 19 ;
let message = (note>=15) ? " bien " : " mauvais " ;
console.log(message)
