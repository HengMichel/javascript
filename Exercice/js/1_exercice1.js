// //Créer un tableau
// var fruits = ['Apple', 'Banana'];

// //document.write('<p>' + fruits.length);

// var first = fruits[0];

// //document.write('<p>' + first);

// var last = fruits[fruits.length - 1];

// var prenom = ['Nawal', 'Wassila', 'Rahim', 'Jérémy', 'Narcis', 'Karima', 'Faïssal', 'Alin', 'Oliver', 'Cynthia', 'Alexis', 'Michel', 'Mitra'];

// var prenomAssoc = {
//         0: 'Nawal',
//         'prenom2': 'Wassila',
//         'prenom3': 'Rahim',
//         'prenom4': 'Jérémy',
//         'prenom5': 'Narcis',
//         'prenom6': 'Karima',
//         459: 'Faïssal',
//         'prenom8': 'Alin',
//         'prenom9': 'Oliver',
//         'prenom10': 'Cynthia',
//         'prenom11': 'Alexis',
//         'prenom12': 'Michel',
//         'prenom13': 'Mitra'
//     }
//     //document.write('<p>' + 'le 7em élément : ' + prenomAssoc['459']);

// var firstPrenom = prenom[0]; // Nawal
// var lastPrenom = prenom[prenom.length - 1];
// var lastPrenom = prenom[12];


// // for (var i = 0; i < couleurs.length; i++) {
// //     document.write('<p>' + couleurs[i]);
// // }

// // AU LIEU DE MODIFIER LE TABLEAU ON EN CREE UN AUTRE IDENTIQUE
// document.write('<p>' + 'Tableau fruits initial : ' + fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push('Orange', 'Citron');

// document.write('<p>' + 'Tableau fruits ajout des deux éléments : ' + fruits);
// // document.write('<p>' + typeof fruits);
// // document.write('<p>' + newLength);

// var lastElement = fruits.pop();

// document.write('<p>' + 'Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
// document.write('<p>' + 'La taille finale du tableau : ' + fruits.length);
// document.write('<p>' + typeof fruits);
// document.write('<p>' + 'La valeur du dernier élement supprimé : ' + lastElement);


var fruits = ["Apple", "Banana"];
document.write('<p>' + 'Tableau fruits initial : ' + fruits + '</p>');
//Ajouter à la fin du tableau
var newLength = fruits.push('Orange', 'Citron');


document.write('<p>' + 'Tableau fruits ajout des deux éléments : ' + fruits + '</p>');
document.write('<p>' + typeof fruits + '</p>');
document.write('<p>' + typeof newLength + '</p>');
document.write('<p>' + newLength + '</p>');

var lastElement = fruits.pop();
document.write('<p>' + 'Tableau fruits après avoir supprimé le dernier élement : ' + fruits + '</p>');


document.write('<p>' + 'La taille finale du tableau : ' + fruits.length + '</p>');
document.write('<p>' + typeof lastElement + '</p>');
document.write('<p>' + 'La valeur du dernier élement supprimé : ' + lastElement + '</p>');

var firstElement = fruits.shift();
document.write('<p>' + 'Tableau fruits après avoir supprimé le premier élement : ' + fruits + '</p>');

document.write('<p>' + 'La valeur du premier élement supprimé : ' + firstElement + '</p>');

var newLengthShift = fruits.unshift('Strawberry', 'Cherry');

document.write('<p>' + 'Tableau fruits après avoir ajouté le(s) premiers élément(s) : ' + fruits + '</p>');

document.write('<p>' + 'La nouvelle valeur après avoir ajouté le(s) premiers élément(s) : ' + newLengthShift + '</p>');

fruits.push('Mango');

// Créer un tableau
var pos = fruits.indexOf('Banana');

document.write('<p>' + 'Tableau fruits après avoir ajouté le(s) derniers élément(s) : ' + fruits + '</p>');

document.write('<p>' + 'La valeur de retour de la fonction "indexOf" : ' + pos + '</p>');

var removedItem = fruits.splice(pos, 2);

document.write('<p>' + 'Tableau fruits après avoir supprimé le(s) élément(s) par la fonction "splice" : ' + fruits + '</p>');

document.write('<p>' + 'La valeur de retour de la fonction "splice" : ' + removedItem + '</p>');
console.log(removedItem);

var shallowCopy = fruits.slice();

var fruits2 = fruits;

document.write('<p>' + 'La valeur de retour de la fonction "slice" : ' + shallowCopy + ' qui est une copie du tableau "fruits"</p>');
console.log(shallowCopy);

var nouvelleValeur = fruits.unshift("Melon", "Poire");

console.log(fruits);

console.log(shallowCopy);

console.log(fruits2);