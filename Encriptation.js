function encriptar() {
    var saltos = parseInt(document.getElementById("clave").value);
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    var inputOriginal = document.getElementById('text1')
    var result = document.getElementById('cifrado');
    let originalMessage = inputOriginal.value.toLowerCase();
    let encryptedMessage = '';
 
    for (let i = 0; i < originalMessage.length; i++) {
        let letra = originalMessage[i];
 
        if (alphabet.includes(letra)) {
            let index = alphabet.indexOf(letra);
            let newLetter = alphabet[(index + saltos) % alphabet.length];
            encryptedMessage += newLetter;
        } else {
            encryptedMessage += letra; 
        }
    }
    result.value = encryptedMessage;
 }
 
 function desencriptar() {
    var saltos = parseInt(document.getElementById("clave").value);
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    var inputOriginal = document.getElementById('text2')
    var result = document.getElementById('deCifrado');
    let originalMessage = inputOriginal.value;
    let decryptedMessage = '';
 
    for (let i = 0; i < originalMessage.length; i++) {
        let letra = originalMessage[i];
 
        if (alphabet.includes(letra)) {
            let index = alphabet.indexOf(letra);
            let newLetter = alphabet[(index - saltos + alphabet.length) % alphabet.length];
            decryptedMessage += newLetter;
        } else {
            decryptedMessage += letra; 
        }
    }
    result.value = decryptedMessage;
 }

 function reiniciar() {
     document.getElementById('clave').value = '';
     document.getElementById('text1').value = '';
     document.getElementById('cifrado').value = '';
     document.getElementById('text2').value = '';
     document.getElementById('deCifrado').value = '';
 }