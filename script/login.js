/* Nessas primeiras linhas estamos selecionados os elementos que desejamos manipular e jogando eles nas variaveis */
const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

/* Caso o input tenha mais de 3 letras, o atributo disabled que esta definido no HTML ele é removido, e caso não tenha as 3 letras ele é atribuido novamente */
const validarInput = ({ target }) => {
   if (target.value.length > 3){
    button.removeAttribute('disabled');
   } else { 
    button.setAttribute('disabled', ''); 
   }
}

/* Alem de quebrar o padrão do evento de submit que seria recarregar a pagina, ele adiciona o input ao localStorage da WEB e ainda encaminha o usuario para outra pagina que no caso é a do jogo */
const subHandle = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/jogo.html'
}

input.addEventListener('input', validarInput);
form.addEventListener('submit', subHandle);
