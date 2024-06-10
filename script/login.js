const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

const validarInput = ({ target }) => {
   if (target.value.length > 3){
    button.removeAttribute('disabled');
   } else { 
    button.setAttribute('disabled', ''); 
   }
}

const subHandle = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/jogo.html'
}

input.addEventListener('input', validarInput);
form.addEventListener('submit', subHandle);
