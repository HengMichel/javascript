// ************************************* Function  *****************************************************************
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
    console.log(i);
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
 
  const array = [1, 12, 3, 67, 1, 23, 0, 87];
  const array2 = [1, 1, 2, 3, 4, 5];
  const array3 = [0];
  const array4 = ['never gonna', 'give you', 'up'];
  const array5 = ['never gonna', 'let you', 'down'];
  
  // exercice
  // Ecrivez une fonction "verifSortAsc" qui prend en paramètre un tableau et
  // vérifie qu'il est bien trié dans l'ordre ascendant.
  // La fonction devra retourner "true" si c'est le cas, "false" sinon.
  // Exemples :
  // verifSortAsc(array) => doit retourner "false"
  // verifSortAsc(array2) => doit retourner "true"
   
  
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



const estPalindrome = ("Radar"," level ", "Civic"," Deified", "Madam"," Kayak", "Rotator", "Stats") ? " true!   palindrome!!! " : " false !";



// creation de la classe personne
class Personne{
    // on appelle la fonction constructor (nom imposé par js) avec 2 param : n et a 
    constructor(n, a) { 
        this.nom = n; // on declare une variable nom qui prend la valeur de n
        this.age = a; // on declare une variable age qui prend la valeur de a
    }

    saluer() { // la methode saluer permet d'afficher la phrase : "Bonjour, je m'appelle "nom de l'objet" et j'ai "age de l'ojet" ans.
        console.log("Bonjour, je m'appelle "+this.nom+ " et j'ai "+ this.age+ " ans.");
    }
}
// creation des objets p1 et p2
// pour recuperer l'age ou le nom de p1 faire la syntaxe : p1.age; p1.nom;
let p1 = new Personne("toto", 10); // il s'appelle toto et a 10 ans
// pour recuperer l'age ou le nom de p2 faire la syntaxe : p2.age; p2.nom;
let p2 = new Personne("titi", 9); // il s'appelle titi et a 9 ans
// pour appeler la methode saluer sur un des objets faire: p1.saluer();
p1.saluer(); // "Bonjour, je m'appelle toto et j'ai 10 ans."
p2.saluer(); // "Bonjour, je m'appelle titi et j'ai 9 ans."
console.log(p2.nom);

// EX01 :
// Supposons que vous deviez modéliser une classe Cercle qui représente un cercle avec comme propriété,
// rayon et les méthodes calculerSurface() qui calcule et reourne la surface du cercle et afficherInfo() 
// qui affiche les informations du cercle dans la console.
// Votre tâche consiste à créer la classe Cercle, instancier un objet Cercle et appelé les méthodes calculerSurface()
//  et afficherInfo() pour l'objet instancié.
// formule pour calculer la surface d'un cercle : PI multiplié par le rayon au carré PI*(rayon*rayon)
class Cercle{
      // on declare le constructeur de la classe qui prend un parametre qui est le rayon
    constructor(r){
      this.rayon = r;
    }
        // declarer les methodes calculerSurface et afficherInfo
    calculerSurface() {       
       // calculer la suface
      let surface = Math.PI * Math.pow(this.rayon,2);
      return surface;
    }
    afficherInfo() {
      // console.log("Le rayon du cercle est de  " + this.rayon +" cm" +" et une surface de " + this.calculerSurface() + " cm2");
      console.log("Le rayon du cercle est de  " + this.rayon +" cm" +" et une surface de " + Math.ceil(this.calculerSurface()) + " cm2");

    }
}

let r1 = new Cercle(10); // instancier un objet cercle = Creer un objet Cercle
r1.afficherInfo();


// EX02 :
// Supposons que vous deviez modéliser une classe CompteBancaire qui représente un compte bancaire avec comme propriété,
// titulaire,solde et les méthodes deposer(montant) qui permet de déposer de l'argent sur le compte, retirer(montant)  qui permet de retirer de l'argent du compte et afficherSolde() qui affiche le solde actuel du compte. 

// Votre tâche consiste à créer la classe CompteBancaire,créer le consctructor avec les paramètres : 
// titulaire et solde
// créer les méthodes:
// déposer qui prend un paramètre pour ajouter de l'argent dans le compte
// retirer qui prend un paramètre pour retirer de l'argent dans le compte
// afficherSolde qui affiche le solde du compte dans la console

// instancier un objet CompteBancaire avec comme titulaire: Abraham et solde 5 €
// appeller la méthode ajouter en lui passant la valeur 10
// appeller la méthode retirer en lui passant la valeur 7
// appeller la méthode afficherSolde

class CompteBancaire {
  constructor(titu,sold){
    this.titulaire = titu;
    this.solde = sold;
  }
  deposer(montant){
    this.solde = this.solde + montant;
  }
  retirer(montant){
    this.solde -= montant;
    // this.solde = this.solde - montant;
  }
  afficherSolde(){
    console.log("Montant du solde est de " + this.solde + " €");
  }
}

let compte1 = new CompteBancaire("Abraham",5);
compte1.deposer(10);
compte1.retirer(7);
compte1.afficherSolde();

// *****************************  Correction ******************************************
// class CompteBancaire
// class CompteBancaire{
  // le constructeur prend 2 params: le titulaire => t et le solde => s

  // constructor(t, s) { 
  //     this.titulaire = t;
  //     this.solde = s;
  // }

  // declarer les methode deposer, retirer et afficherSolde
  // deposer(montant) { // deposer prend un param : montant
  //     this.solde += montant;
      // this.solde = this.solde + montant;
  // }

  // retirer(montant) {
  //     this.solde -= montant;
      // this.solde = this.solde - montant;
  // }



//   afficherSolde() {
//       console.log("le solde de votre compte est de: "+this.solde+ " €");
//   }
// }
// instancier un objet CompteBancaire
// let compte = new CompteBancaire("Wassila", 80000);
// compte.deposer(100000);
// compte.retirer(50000);
// compte.afficherSolde();

// ******************************** FIN Correction *********************************************


// ici on utilise une fonction traditionnelle
function rappel() {
  console.log("Ceci est une fonction de rappel")
}
setTimeout(rappel(), 2000);

// ici on utilise une fonction anonyme (tendance plus "sexy")
setTimeout(function() {
  console.log("Ceci est une fonction de rappel")
}, 2000)