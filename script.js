// Add your JavaScript code here

const form = document.getElementById('encryptionForm');
const encryptedText = document.getElementById('encryptedText');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const encryptionType = document.getElementById('encryptionType').value;
    const textToEncrypt = document.getElementById('textToEncrypt').value;
    
    // Perform encryption or decryption based on the selected encryption type
    let result = '';
    
    if (encryptionType === 'caesar') {
        result = caesarCipherEncrypt(textToEncrypt);
    } else if (encryptionType === 'vigenere') {
        result = vigenereCipherEncrypt(textToEncrypt);
    } else if (encryptionType === 'aes') {
        result = aesEncrypt(textToEncrypt);
    } else if (encryptionType === 'railfence') {
        result = railFenceCipherEncrypt(textToEncrypt);
    }
    
    // Display the result
    encryptedText.textContent = `Result: ${result}`;
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

function caesarCipherDecrypt(encryptedText) {
    const shift = 3;
    let decryptedText = '';
    
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letter
            charCode = ((charCode - 65 - shift + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letter
            charCode = ((charCode - 97 - shift + 26) % 26) + 97;
        }
        
        decryptedText += String.fromCharCode(charCode);
    }
    
    return decryptedText;
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

function vigenereCipherDecrypt(encryptedText) {
    const keyword = 'KEY'; // Change this to your desired keyword
    const keywordLength = keyword.length;
    let decryptedText = '';
    
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
        const keywordCharCode = keyword.charCodeAt(i % keywordLength);
        
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letter
            charCode = ((charCode - 65 - (keywordCharCode - 65) + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letter
            charCode = ((charCode - 97 - (keywordCharCode - 65) + 26) % 26) + 97;
        }
        
        decryptedText += String.fromCharCode(charCode);
    }
    
    return decryptedText;
}

// AES Encryption function
function aesEncrypt(text) {
    // Add your AES Encryption logic here
    // Return the encrypted text
    return 'AES encrypted text';
}

function aesDecrypt(encryptedText) {
    // Add your AES Decryption logic here
    // Return the decrypted text
    return 'AES decrypted text';
}

// Rail Fence Cipher encryption function
function railFenceCipherEncrypt(text) {
    const rails = 3; // Number of rails for the cipher
    let railArray = [];
    for (let i = 0; i < rails; i++) {
        railArray.push([]);
    }
    
    let rail = 0;
    let direction = 1;
    
    for (let i = 0; i < text.length; i++) {
        railArray[rail].push(text.charAt(i));
        
        rail += direction;
        
        if (rail === 0 || rail === rails - 1) {
            direction *= -1;
        }
    }
    
    let encryptedText = '';
    
    for (let i = 0; i < rails; i++) {
        encryptedText += railArray[i].join('');
    }
    
    return encryptedText;
}

function railFenceCipherDecrypt(encryptedText) {
    const rails = 3; // Number of rails for the cipher
    const railLength = Math.ceil(encryptedText.length / rails);
    let railArray = [];
    
    let railIndex = 0;
    let railPos = 0;
    
    for (let i = 0; i < encryptedText.length; i++) {
        railArray[railIndex] = railArray[railIndex] || [];
        railArray[railIndex][railPos] = encryptedText.charAt(i);
        
        railIndex += 1;
        
        if (railIndex === rails) {
            railIndex = 0;
            railPos += 1;
        }
    }
    
    let decryptedText = '';
    
    railIndex = 0;
    railPos = 0;
    
    for (let i = 0; i < encryptedText.length; i++) {
        decryptedText += railArray[railIndex][railPos];
        
        railIndex += 1;
        
        if (railIndex === rails) {
            railIndex = 0;
            railPos += 1;
        }
    }
    
    return decryptedText;
}
