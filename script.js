// Create character set
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericsStr = "0123456789";
var specialStr = "!@#$%^&*()~";

var lowerCaseArr = lowerCaseStr.split('');
var upperCaseArr = upperCaseStr.split('');
var numbersArr = numericsStr.split('');
var specialsArr = specialStr.split('');

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passChars, passLength) {
  // Logic 
  // 1. Create 1 prompt for password criteria 
  // 2. Use prompt variable and at => 8 characters, but <128 characters
  var pLength = prompt('length of password');

  if (pLength >= 8 && pLength < 128) {
    alert('Password matches the length criteria!')
  } else {
    alert('Password does not match the length criteria!')
    return null;
  } 
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lCase = confirm('Do you want to include lowercase letters?');
  var uCase = confirm('Do you want to include uppercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var specialChar = confirm('Do you want to include special characters?');
  
  // 4. Input is validated and one type is selected 
  if (lCase === false && uCase === false && numbers === false && specialChar === false) {
    alert('At least one character type should be selected');
    return null;
  }

var password = "";
/*  if (lCase === true) {
    password += lowerCaseStr
  }
  if (uCase === true) {
    password += upperCaseStr
  } 
  if (specialChar === true) {
    password += specialStr
  } 
  return password;
}*/
var passChars = [lowerCaseStr, upperCaseStr, numericsStr, specialStr];
//var passLength = 8;
//Randomize var password and create a for loop 
for (var i = 0; i < passChars.length; i++) {
    var randomNumber = Math.floor(Math.random() * passChars.length);
      password += passChars.substring(randomNumber, randomNumber +1)
      } return password
  } 
  // 5. Will need to use a for loop 
  // 6. Create a function for Character Set
  // 7. Use an alert prompt


  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
