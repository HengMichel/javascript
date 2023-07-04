 // ******************************  Exo2  create calculate  ********************************************

 let btnPlus = document.getElementById("addi"); 
 let btnMoins = document.getElementById("sous"); 
 let btnMulti = document.getElementById("multi"); 
 let btnDivi = document.getElementById("divi"); 
 
 let btnTotal = document.getElementById("egal"); 
 let op = "+";

 btnPlus.addEventListener('click', () => {
   op = "+";
   
 })
 btnMoins.addEventListener('click', () => {
   op = "-";
   
 })
 btnMulti.addEventListener('click', () => {
   op = "*";
   
 })
 btnDivi.addEventListener('click', () => {
   op = "/";
   
 })
 btnTotal.addEventListener('click', () => {
    let nombre1 = document.getElementById("nombre1").value;
    let nombre2 = document.getElementById("nombre2").value;
    let result;

    if(op === "+"){
    result = Number(nombre1)+Number(nombre2);

}
    else
    if(op === "-"){
        result = Number(nombre1)-Number(nombre2);
    }
    else
    if(op === "*"){
        result = Number(nombre1)*Number(nombre2);
    }
    else
    if(op === "/"){
        result = Number(nombre1)/Number(nombre2);
    }
    let resultat = document.getElementById("resultat");
    resultat.value = result;

 });


 // const touches = [...document.querySelectorAll('.bouton')];
 // console.log();