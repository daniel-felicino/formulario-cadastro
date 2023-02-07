const btnEnviarForm = document.getElementById('btnEnviarForm')
const loadingRedirecionamento = document.getElementById('loadingRedirecionamento')
const loadingSucesso = document.getElementById('loadingSucesso')
const containerFormulario = document.getElementById('container')
const linkPrivacidadeTermos = document.getElementById('linkPrivacidadeTermos')
const linkTermoDeUso= document.getElementById('linkTermoDeUso')
const centralizarLoadingRedirecionamento = document.getElementById('centralizarLoadingRedirecionamento')
const centralizarLoadingSucesso = document.getElementById('centralizarLoadingSucesso')


btnEnviarForm.addEventListener("click", function (e) {
   e.preventDefault()
   const spanNome = document.getElementById('IdSpanNome');
   const spanEmpresa = document.getElementById('IdSpanEmpresa');
   const spanEmail = document.getElementById('IdSpanEmail');
   const spanCelular = document.getElementById('IdSpanCelular');

   const nome = document.getElementById('nome').value
   const empresa = document.getElementById('empresa').value
   const email = document.getElementById('email').value
   const celular = document.getElementById('celular').value

   if (nome == "") {

      spanNome.classList.remove('spanNome');
      return false;
   } else {
      spanNome.classList.add('spanNome');

   }
   if (empresa == "") {

      spanEmpresa.classList.remove('spanEmpresa');

      return false;

   } else {
      spanEmpresa.classList.add('spanEmpresa');

   }
   if (email == "" || !validarEmail(email)) {

      spanEmail.classList.remove('spanEmail');
      return false;
   } else {
      spanEmail.classList.add('spanEmail');

   }
   if (celular == "") {

      spanCelular.classList.remove('spanCelular');
      return false;
   } else {
      spanCelular.classList.add('spanCelular');

      setTimeout(() => {

         centralizarLoadingRedirecionamento.style.display = "block";
         loadingRedirecionamento.style.display = "block";

         containerFormulario.style.display = "none";
         loadingSucesso.style.display = "none";
       
      }, 200)
      setTimeout(() => {
         centralizarLoadingRedirecionamento.style.display = "block";

         loadingSucesso.style.display = "block"
         loadingRedirecionamento.style.display = "none";
         containerFormulario.style.display = "none";
         
      }, 5000)

      setTimeout(() => {

         window.location.href = "index.html"

      }, 27000)

   }


})

 function validarEmail(email) {
   let mascaraEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // O match()método compara uma string com uma expressão regular **
   if (email.match(mascaraEmail)) {
     console.log("email válido!");
 
     return true;
   } else {
     console.log("email Inválido");
 
      return false;
   }
 }

