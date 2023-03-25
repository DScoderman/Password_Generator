// Assignment Code
var generateBtn = document.querySelector("#generate");
const CapLetters = Array["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LowercaseLetters = Array["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const Number = Array[1,2,3,4,5,6,7,8,9,0]
const SpecialCharacters = Array["!","”","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","/","^","_","`","{","}","|","~"];  
const index = Math.floor(Math.random() *password.length)
const stringlength = ()

for (password i=o; i< length; i++) {
// Pick characters wirthin set using random number from index
}

function generatePassword() {

    var charSet = "";
    var charTypeLower = charType.LowercaseLetters();
    if (charTypeLower === "lowercase") {
      charSet = Array;
    } else if (charTypeLower === "uppercase") {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (charTypeLower === "numeric") {
      charSet = "0123456789";
    } else if (charTypeLower === "special") {
      charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
return "gen pass";
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

//     passwordText.value = password;

//     // pass must include 1 upper, 1 lower, 8 chars min, max 128 chars


// if (password <8 && password <129)
// alert("please choose a password between 8 & 129 characters");

}

generateBtn.addEventListener("click", writePassword);