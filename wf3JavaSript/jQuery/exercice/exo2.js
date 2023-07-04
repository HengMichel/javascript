// $("#dropdown").on('change',()=>{
//     if ($("#dropdown").val() == 1){
//     $("#message").text("Je dois " +"Bien Manger");
// }
//     else if ($("#dropdown").val() == $("#dropdown").val()){
//     $("#message").text("Je dois "+"Bien Dormir");
// }
//     else $("#message").text("Je dois "+"Faire du Sport")

// });


$("#dropdown").on("change", ()=>{
    $("#message").text("Je dois " + $("#dropdown").val())
});