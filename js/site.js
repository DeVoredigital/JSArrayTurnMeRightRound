// JS Code for Uturn - reversing the letters in a string using an array.

//Get the string from the page
// Controller
function getValue() {

    document.getElementById("alert").classList.add("invisible");

   let userString =  document.getElementById("userString").value;

   let revString = reverseString(userString);

   displayString(revString);

}
//reverse the string
// Logic
function reverseString(userString) {

    let revString = [];

    // reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString;
}
//display message with the Uturn to the User
// View
function displayString(revString){

    //write message to page
    document.getElementById("msg").innerHTML = `Your string revered is: ${revString}`;
    
    //show alert box
    document.getElementById("alert").classList.remove("invisible");


}