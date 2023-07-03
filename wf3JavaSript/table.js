// *****************************   TABLE   ******************************************
// ***************************************************************************************

let tab = ["Alin", 45]; // ["Alin", 45]
tab[3] = "2 rue de l'amour"; // ["Alin", 45, "", "2 rue de l'amour"]
// // vue que le tableau n'a pas d'indice 2 et 3 met l'indice 2 a vide et l'indice 3 avec la valeur
console.log(tab);
tab.push("0678545855"); // ["Alin", 45, "", "2 rue de l'amour", "0678545855"]
console.log(tab);
tab.unshift("Johanne"); // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
console.log(tab);
tab[3] = "future"; // ["Johanne", "Alin", 45, "future", "2 rue de l'amour", "0678545855"]
console.log(tab);
delete tab[3]; // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
console.log(tab);
tab = new Array(); // reinitialise le tableau
tab = [];  // reinitialise le tableau

let tableau = ["Cynthia", "Narcis", "Rahim", "Nawal", "Karima"];
let index = tableau.indexOf("Narcis");
console.log(index); // 1
let newTab = tableau.slice(0, 3); // ["Cynthia", "Narcis", "Rahim"]
console.log(newTab);

let tabNumer = [1, 8, 19, 5];
console.log(tabNumer.sort()); // [1, 19, 5, 8]

tabNumer.sort(function (a, b) {
    return a - b;
});

let tab2 = [2, 7, 9, 8];
tab2.fill("Alexis"); // ["Alexis", "Alexis", "Alexis", "Alexis"]
console.log(tab2);
tab2.fill("Michel", 1, 3); // ["Alexis", "Michel", "Michel", "Alexis"]
console.log(tab2);

let tab3 = ["Alexis", "Jérémy", "Michel", "Faissal"];
let str = tab3.join(' '); // "Alexis Jérémy Michel Faissal"
console.log(str);
console.log(tab3.reverse()); // ["Faissal", "Michel", "Jérémy", "Alexis"];

let tab4 = [2, 5, 8];
// tab4.splice(1, 2); // [2]
tab4.splice(2, 0, 'a', 'b'); // [2, 5, 'a', 'b', 8]
console.log(tab4);

let tab5 = [1, 2, 3];
let tab6 = [4, 5, 6];
let tab7 = tab5.concat(tab6); // [1, 2, 3, 4, 5, 6]
console.log(tab7);

let tab8 = [1, 6, 8, 3];
let tab9 = tab8.map(e => e * 5); // [5, 30, 40, 15]
console.log(tab9);

// *********************************************** Exercice  ****************************************************
// Exercise
// be the table: ["banana", "apple", "mango"]
// Add a strawberry between apple and mango
// Remove the bannan
// replace strawberry and mango and apple by guava

tableau.splice(2, 0, 'a', 'b'); // Ajoute 'a' et 'b' à partir de l'indice 2
tableau.shift(); // Supprime le premier élément du tableau
tableau.fill(0, 1, 4); // les éléments de l'indice 1 à l'indice 3 sont remplacés
                     // par la valeur 0
            
let fruit = ["banane", "pomme" , "mangue"];
fruit.splice(2,0,"fraise");
console.log(fruit);
fruit.shift();
console.log(fruit);
fruit.fill("goyave");
console.log(fruit);




