// seulement si un seul parametre dans un formulaire
$("#loginForm").submit(e => {
  // pour plusieur parametre dans un formulaire
  // $("#loginForm").on("submit", (e) => {
    if($("#loginForm").val() == "" || $("#password").val() == "")
    $("#errorMessage").text("Veuillez remplir tous les champs !!!" );
    e.preventDefault();//empeche la soumission du formulaire
  });

  // ************ version JS **************
  document.getElementById("loginForm").addEventListener("submit"),() =>{
    var username = document.getElementById("username").value;
    var upassword = document.getElementById("password").value;
    if(username == '' || password == '')
    document.getElementById("errorMessage").textContent("Veuillez remplir tous les champs !!!");
    e.preventDefault();
  }

