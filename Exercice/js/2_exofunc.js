affichage();


// 1- une fonction sans paramètre et sans valeur de retour
function affichage() {
    console.log('coucou');
}



// 2- une fonction avec un paramètre et sans valeur de retour
function affichageSurLaPageWeb(chaineCaractere) {
    document.write(chaineCaractere);
}


affichageSurLaPageWeb("<p>Narcis est cool</p>");
affichageSurLaPageWeb("<p>Wassila est belle</p>");

// console.log(affichageSurLaPageWeb("<p>Cynthia est curieuse</p>"));

var aff = affichageSurLaPageWeb("<p>Cynthia est curieuse</p>");

console.log(aff);

// 3- une fonction avec deux paramètres et avec une valeur de retour
// quand on implante une fonction, en général les paramètres sont considérés comme des variables
function additions(num1, num2) {
    var resultat = num1 + num2;
    // mot clé "return" nous permet d'avoir une valeur de retour au moment où on execute la fonction
    // Attention, avec ce mot clé "return" on aura toujours une seule valeur de retour
    // return resultat + "coucou";
    return resultat;
}

// quand on execute une fonction qui prend des paramètres, les valeurs données seront stockées dans les paramètres de la fonction en question
// dans notre exemple les deux valeurs de "2 et 3" seront stockées successivement dans les paramètres "num1 et num2" de la fonction "additions" 
var res = additions(2, 3);

document.write(res);

console.log(typeof res);

//4- une fonction sans paramètres et avec une valeur de retour

function multiplications() {

    var result = 5 * 12;
    return result;
}

var res2 = multiplications();

console.log(res2);