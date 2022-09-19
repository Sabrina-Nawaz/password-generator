// Variables below stored in the global scope hold the password criterias to be used.
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

function generatePassword() {
// Variables below are created in the local scope of the function to create empty arrays for data to be pushed into and defines the parameters for the length of the password. 
  var passChars = [];
  var finalPassword = [];
  var pLength = prompt('length of password');
// The prompt below is to ensure that the user meets the requirements for the password length. If the password is below 8 characters or over 128 characters, then the prompt pops up to inform them the password does not match the criteria. 
  if (pLength < 8 || pLength > 128) {
    alert('Password does not match the length criteria!')
    return null;
  }
  // Variables below store prompts for the criterias to be selected for a password: lowercase, uppercase, numeric and/or special characters. 
  var lCase = confirm('Do you want to include lowercase letters?');
  var uCase = confirm('Do you want to include uppercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var specialChar = confirm('Do you want to include special characters?');

  // When the criterias are all false, an alert pops up to indicate at least one option should be selected and validated.  
  if (lCase === false && uCase === false && numbers === false && specialChar === false) {
    alert('At least one character type should be selected');
    return null;
  }
// When the criterias for the password are true and selected, the concat function joins two or more arrays to generate a string.
  if (lCase === true && uCase === true && numbers === true && specialChar === true) {
    passChars = passChars.concat(lowerCaseArr)
    passChars = passChars.concat(upperCaseArr)
    passChars = passChars.concat(numbersArr)
    passChars = passChars.concat(specialsArr)
  }
// The length of the password is looped over to pick out parts of each criteria and create a random string under the variable randomChar, which is then pushed into the finalPassword array.
  for (var i = 0; i < pLength; i++) {
    var randomChar = randomIndex(passChars)
      finalPassword.push(randomChar)
  }

  return finalPassword.join('');
}
// randomIndex uses the Math.random() function to round down with Math.floor and the returns a number that is greater than or equal to 0.0 and less than 1.0. It is multiplied with the length of the array.
function randomIndex(arr){

  return arr[Math.floor(Math.random() * arr.length)];
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
