// Assignment Code
var generateBtn = document.querySelector("#generate");
var CapLetters = Array["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowercaseLetters = Array["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Number = Array[1,2,3,4,5,6,7,8,9,0]
var SpecialCharacters = Array["!","”","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","/","^","_","`","{","}","|","~"];  
var index = math.floor(math.random * password.length)


function generatePassword() {
console.log("test. button clicked")
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // pass must include 1 upper, 1 lower, 8 chars min, max 128 chars


if (password <8 && password <129)
alert("please choose a password between 8 & 129 characters");

}

generateBtn.addEventListener("click", password)