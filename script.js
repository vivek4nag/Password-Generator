const passwordBox = document.getElementById("password")
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()<>?/{}[]~+-=|";

const allChars = upperCase + lowerCase + number + symbol

function createPassword () {
    let password = "";
    //below 4 line just to make sure ki saare character 1-1 krke aajaye
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copypassword(){
    passwordBox.select(); // highlights (selects) the entire content (the generated password) inside the passwordBox input field.
    navigator.clipboard.writeText(passwordBox.value); // copies the selected text (the password) from the input field to the system clipboard.
}

// navigator.clipboard.writeText(passwordBox.value);
//  navigator.clipboard: modern JavaScript API that provides an asynchronous way to interact with the clipboard (i.e., copy and paste).
//  writeText(): This method takes the text (in this case, the password) and writes it directly to the user's clipboard.