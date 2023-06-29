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

function maxMin(a,b,c) {
    if(c == true){
        if(a>b){
            console.log(a);
            return a;
        }
        else if(b>a){
            console.log(b);
            return b;
        }
        
    }
    else if(c == false){
        if(a<b){
            console.log(a);
            return a;
        }
        else if (b<a){
            console.log(b);
            return b;
        }
    }

}

let a = 10;let b = 20;

let result1 = maxMin(10,20,true);
let result2 = maxMin(10,20,false);


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
    if (c == true) { // si c == true
    if (a > b) { // si a plus grand que b
    return a; // on retourne a
    } else { // sinon
    return b; // on retourne b
    }
    } 
    else { // si c = false
    if (a < b) { // si a est plus petit que b
    return a; // on retourne a
    } else { // sinon
    return b; // on retourne b
    }
    }
   }
   let resultat = maxMin(3, 8, true);
   console.log(resultat);
    
   // on retourne a si (c = true et a > b) ou (c = false et a < b)
   // on retourne b si (c = true et a < b) ou (c = false et a > b)
   function maxMin(a, b, c = true) {
    if (((c == true) && (a > b)) || ((c == false) && (a < b))) {
    return a;
    } else if (((c == true) && (a < b)) || ((c == false) && (a > b))) {
    return b;
    }
   }
    
   let result = maxMin(3, 8, false);
   console.log(result);

//    ************************************************** another excercice ****************************************

// ecrire une fonction sommeTab qui prend en paramètre un tableau composé de nombres.
// la fonction doit retourner la somme des éléments du tableau 
// exemple : sommeTab([1,6,9]) =>16

function sommeTab(a,b,c){
let result3 = a+b+c;

return result3 
}
let somme = sommeTab(1,6,9);
console.log(somme);


// ecrire une fonction maxTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus grand nombre du tableau
// exemple:
// maxTab([2, 7, 4, 0]) => 7


function maxTab ([2,7,4,0]){
    maxTab[1];

}
console.log(maxTab);




// ecrire une fonction minTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus petit nombre du tableau
// exemple:
// minTab([2, 7, 4, 0]) => 0














// ecrire une fonction maxMinTab qui prend en paramètre un tableau composé de
// nombres et un boolean
// ● si le deuxieme parametre égale true la fonction devra retourner le plus
// grand nombre du tableau
// ● sinon elle retournera le plus petit
// exemple:
// maxMinTab([2, 7, 4, 0], true) => 7
// maxMinTab([2, 7, 4, 0], false) => 0





// exercice
// soit les tableaux suivants
// const array = [1, 12, 3, 67, 1, 23, 0, 87];
// const array2 = [1, 1, 2, 3, 4, 5];
// const array3 = [0];
// const array4 = ['never gonna', 'give you', 'up'];
// const array5 = ['never gonna', 'let you', 'down'];