let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// showing the input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});


// button clicking 
genBtn.addEventListener('click', ()=> {
    passBox.value = generatePassword();
});


//funtion to generate password
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789"
let allSymbols = "~`!@#$%^&*()_+=-*{}[]'<>?/|"

function generatePassword(){
    let genPassword = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    // genPassword =  upperChars.charAt(Math.floor(Math.random() * upperChars.length));

    if(allChars === ""){
        alert("please select atleast one checkbox to continue");
    }
    else{
        
        while ( genPassword.length < inputSlider.value){
    
            genPassword +=  allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        return genPassword
    }

}

copyIcon.addEventListener('click', copypassword);


// function copypassword() {
//     passBox.select(); // highlights the entire content inside the passwordBox input field.

//     if (passBox.value !== "" && passBox.value.length >= 1) {
//         navigator.clipboard.writeText(passBox.value) // copies the selected text from the input field to the system clipboard.
//             .then(() => {
//                 copyIcon.title = "Password Copied"; // Update the title on success
//                 console.log(copyIcon.title); // Debugging output
//                 setTimeout(() => {
//                     copyIcon.title = "Copy Password"; // Reset the title after 2 seconds
//                 }, 2000);
//             })
//             .catch(err => {
//                 console.error('Could not copy password: ', err);
//                 copyIcon.title = "Failed to Copy"; // Update the title on failure
//                 console.log(copyIcon.title); // Debugging output
//                 setTimeout(() => {
//                     copyIcon.title = "Copy Password"; // Reset the title after a failure
//                 }, 2000);
//             });
//     } else {
//         copyIcon.title = "No Password to Copy"; // If there's no password, show a different message
//         console.log(copyIcon.title); // Debugging output
//         setTimeout(() => {
//             copyIcon.title = "Copy Password"; // Reset the title after a while
//         }, 2000);
//     }
// }


function copypassword(){
    passBox.select(); // highlights (selects) the entire content (the generated password) inside the passwordBox input field.

    if(passBox.value !== "" || passBox.value.length >=1){

        navigator.clipboard.writeText(passBox.value); // copies the selected text (the password) from the input field to the system clipboard.
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.title = "";
        }, 2000);
    }
}

// navigator.clipboard.writeText(passwordBox.value);
//  navigator.clipboard: modern JavaScript API that provides an asynchronous way to interact with the clipboard (i.e., copy and paste).
//  writeText(): This method takes the text (in this case, the password) and writes it directly to the user's clipboard.