// 1- Déclarer une fonction "additionDesChiffres" qui prend trois paramètres
// - premier de type number "paramNum"
// - deuxième de type string "paramString"
// - troisème de type tableau "paramArray"

// La fonction aura une valeur de retour

// 2- Grâce à une boucle (le nombre de la condition dans la boucle vient du premier paramètre),
//  la fonction "additionDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle

function additionDesChiffres(paramNumb, paramString, paramArray) {
  for (var i = 0; i <= paramNumb; i++) {
    paramArray.push(i);
  }

  var result = [paramString, paramArray];
  return result;
}

// var ValeurRetour = additionDesChiffres(15,"Le résultat de notre fonction : []")

var num = 15;
var chaineCaractere = "Le résultat de notre fonction : ";
var tab = [];
var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);

document.write(valeurRetour);
