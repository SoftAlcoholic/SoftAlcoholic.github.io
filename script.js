// Add your JavaScript code here

const form = document.getElementById('encryptionForm');
const encryptedText = document.getElementById('encryptedText');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const encryptionType = document.getElementById('encryptionType').value;
    const textToEncrypt = document.getElementById('textToEncrypt').value;
    
    // Perform encryption based on the selected encryption type
    let encryptedResult = '';
    
    if (encryptionType === 'caesar') {
        encryptedResult = caesarCipherEncrypt(textToEncrypt);
    } else if (encryptionType === 'vigenere') {
        encryptedResult = vigenereCipherEncrypt(textToEncrypt);
    } else if (encryptionType === 'aes') {
        encryptedResult = aesEncrypt(textToEncrypt);
    } else if (encryptionType === 'railfence') {
        encryptedResult = railFenceCipherEncrypt(textToEncrypt);
    }
    
    // Display the encrypted result
    encryptedText.textContent = `Encrypted Text: ${encryptedResult}`;
});

// Caesar Cipher encryption function
function caesarCipherEncrypt(text) {
    const shift = 3;
    let encryptedText = '';
    
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letter
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letter
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        
        encryptedText += String.fromCharCode(charCode);
    }
    
    return encryptedText;
}

// Vigenère Cipher encryption function
function vigenereCipherEncrypt(text) {
    const keyword = 'KEY'; // Change this to your desired keyword
    const keywordLength = keyword.length;
    let encryptedText = '';
    
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        const keywordCharCode = keyword.charCodeAt(i % keywordLength);
        
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letter
            charCode = ((charCode - 65 + keywordCharCode - 65) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letter
            charCode = ((charCode - 97 + keywordCharCode - 65) % 26) + 97;
        }
        
        encryptedText += String.fromCharCode(charCode);
    }
    
    return encryptedText;
}

// AES Encryption function
function aesEncrypt(text) {
    // Add your AES Encryption logic here
    // Return the encrypted text
    return 'AES encrypted text';
}

// Rail Fence Cipher encryption function
function railFenceCipherEncrypt(text) {
    // Add your Rail Fence Cipher encryption logic here
    // Return the encrypted text
    return 'Rail Fence encrypted text';
}
