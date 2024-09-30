
function copypassword(){
    passwordBox.select(); // highlights (selects) the entire content (the generated password) inside the passwordBox input field.
    navigator.clipboard.writeText(passwordBox.value); // copies the selected text (the password) from the input field to the system clipboard.
}

// navigator.clipboard.writeText(passwordBox.value);
//  navigator.clipboard: modern JavaScript API that provides an asynchronous way to interact with the clipboard (i.e., copy and paste).
//  writeText(): This method takes the text (in this case, the password) and writes it directly to the user's clipboard.