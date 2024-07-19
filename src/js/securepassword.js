//passwordCreate escuchador.
const range =  document.querySelector('.inputRange');
const createButton = document.getElementById('createPassword');
const passwordCreate = document.getElementById('passwordCreate');

const lowercase = 'abcdefghijklmnñopqrstuvwxyz'
const capitalLetters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '¡!#$%&/()=?¿.,+-^*ç{}[]'

function createPassword(length) {
    const allCharacters = lowercase + capitalLetters + numbers + symbols;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
}

createButton.onclick = function() {
    const length = range.value;
    const password = createPassword(length);
    passwordCreate.textContent = 'Contraseña Creada: ' + password;
    
};