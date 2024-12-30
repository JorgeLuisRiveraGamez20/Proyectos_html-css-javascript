const frase = document.querySelector('.escribir');
const agregar = document.querySelector('.agregador');
const fraseVisible = document.querySelector('.frase');

function agregando() {
    if (frase.value === '') {
        alert("Usted no ha digitado nada, digite una frase inspiradora")
    } else {
        fraseVisible.textContent = frase.value
        fraseVisible.style.display = 'block'
    }
}

agregar.addEventListener('click', agregando)