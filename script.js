// Assignment Code
var generateBtn = document.querySelector("#generate");


// array data
var CapLetters = Array["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowercaseLetters = Array["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Number = Array[1,2,3,4,5,6,7,8,9,0]
var SpecialCharacters = Array["!","”","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","/","^","_","`","{","}","|","~"];  
const index = Math.floor(Math.random())

var password = "";
var password = typeof String;


var passwordlength = prompt("define your password length")

generateBtn.addEventListener("click", writePassword);




if (passwordlength < 8 || passwordlength > 128) {
alert("choose pass between 8 & 128 chars");

}


var uppercase = confirm("Would you like uppercase letters?") 

if (uppercase === true)  {
    console.log(password = password + CapLetters(index))

}

var Lowercase = confirm("would you like lowercase letters?")

if (Lowercase === true) {
console.log (password = password + LowercaseLetters(index))

} 

var characternumbers  = confirm("would you like numbers?") 

if (number === true) { 

    console.log (password = password + number(index))

}

var SpecialCharacter  = confirm("would you like special characters?") 

if (SpecialCharacter === true) { 

    console.log (password = password + SpecialCharacter(index))
   
}



// for (password i=o; i< length; i++) {
// Pick characters wirthin set using random number from index


function generatePassword() {

    
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