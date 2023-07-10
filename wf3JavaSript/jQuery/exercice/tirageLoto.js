/*
- on veut 5 n° au hasard
- on des n° différents
- numéros de 1 à 49
- comment savoir si le n° est déjà sorti ?
- Trier les n° pour l'affichage final
*/
// 1 => declarer un tableau vide

let table = [];

for (i = 0; i < 5; i++) {
  let aleatoire = Math.floor(Math.random() * 50);
  if (!table.includes(aleatoire)) {
    table.push(aleatoire);
    table.sort((a, b) => a - b);
    console.log(table);
    $("p").text(table);
  }
}

// 2 => generer un nombre aleatoire tant que le tableau n'a pas 5 chiffre
// function generateRandomNumber() {
//     for(i = 0, i<5,i++){
//         table = randomNumber.val();
//     }
//     return Math.floor(Math.random() * 50);
//   } if(generateRandomNumber=== table.val()){
//     return Math.floor(Math.random() * 50);

//   }
// 3 => verifier que le chiffre est dans un tableau

// 4 => trier et afficher
