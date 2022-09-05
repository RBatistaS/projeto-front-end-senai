var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

function validacao() {
  var nome = document.getElementById(nome);
  // algoritmo
  window.alert(nome +' cadastro efetivado entramos em contato em breve');

}

function cadastro() {
 
  window.alert('Cadastre se para saber mais!');

}