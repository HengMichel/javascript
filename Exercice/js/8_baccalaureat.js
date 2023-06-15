var moyen = prompt("moyenne d'un candidat");
// var result = moyen + ("");
if(moyen<10){
document.write(moyen + " recalé ");
}
if(moyen >= 10 && moyen <= 12){
    document.write(moyen+ " reçu ");
    }

if(moyen>12 && moyen <= 20){
    document.write(moyen +" reçu avec mention ");
    }
if(moyen>20 ){
    document.write("Veuillez saisir une note entre 0 et 20");
}    

