// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var options = ["Min 8 characters", "Max 128 characters", "Lowercase", "Uppercase", "Numerics", "Special characters"]

function toggleIcon (node, isToggled) {
  
  if (isToggled) {
    node.firstChild.innerHTML = "✅";
  } else {
    node.firstChild.innerHTML = "";
  }
}
function toggleButton(node){
  isMinCharacters = !isMinCharacters
  toggleIcon (document.querySelector(".btn-option"), isMinCharacters)
} 
var nodes = document.querySelectorAll(".btn-option")

for (var i = 0; i < nodes.length; i++) {
  toggleButton(nodes[i])
}

var isMinCharacters = false;
var isMaxCharacters = false;
var isLowercase = false;
var isUppercase = false;
var isNumerics = false;
var isSpecial = false;


/*Logic 
1. Create 6 prompts for password criteria 
2. Use .length and at => 8 characters, but <128 characters
3. Will need to use a for loop 
3. Prompt for character types to include in password --> lowercase, uppercase, numeric, and special characters
4. Input is validated and one type is selected 
5. Use an alert prompt*/