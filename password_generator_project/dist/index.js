const passwordBox=document.getElementById("password");
const myCheckboxU= document.getElementById('myCheckbox');
const myCheckboxL=document.getElementById('myCheckbox1');
const myCheckboxN=document.getElementById('myCheckbox2');
const myCheckboxS=document.getElementById('myCheckbox3');
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwyz";
const number="0123456789";
const symbol="@#$%^&*()_+|}{?></\][=-!~";
let final_String=uppercase+uppercase+number+symbol;
// console.log(arr)

function createpassword(){
    let password="";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    // console.log(password)
    // let count=0;
    while(password.length<length){
        password += final_String[Math.floor(Math.random()*final_String.length)]
        // count++;
    }
    // console.log(count)
    // console.log(password);
    passwordBox.value=password;
    checkStringProperties(password)
   
   
   

}


function checkStringProperties(inputString) {
    // Define regular expressions for each property
    const hasNumber = /\d/.test(inputString);
    const hasUppercase = /[A-Z]/.test(inputString);
    const hasLowercase = /[a-z]/.test(inputString);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(inputString); // You can adjust the symbols as needed
  
    // Return an object with the results

  
  // Example usage
  
  
//   console.log(result);
console.log(hasNumber)

 
    if(hasNumber ==true)
    {
        myCheckboxN.checked = true;

    } 
    if(hasUppercase == true){
        myCheckboxU.checked = true;
    } 
    if(hasLowercase == true)
    {
        myCheckboxL.checked = true;
    } 
    if(hasSymbol == true){
        // console.log("NUmber and string and symbol")
        
        
        
        myCheckboxS.checked = true;
    }

  }



function copypassword(){
    /**
     * select:-
     * The select() function is used to search an element in the page with the given id, class or tag name and return it as a p5.element. It has a syntax similar to the CSS selector.
     */
    passwordBox.select();
    /**
     * copy:-
     * Copies the current selection to the clipboard. Conditions of having this behavior enabled vary from one browser to another, and have evolved over time. Check the compatibility table to determine if you can use it in your case.
     */
    /**
     * execommand:-
     * 
     *  its document object exposes an execCommand method to run commands that manipulate the current editable region, such as form inputs or contentEditable elements.
     */
    document.execCommand("copy");
}

// function checkStringProperties(inputString) {
//     // Define regular expressions for each property
//     const hasNumber = /\d/.test(inputString);
//     const hasUppercase = /[A-Z]/.test(inputString);
//     const hasLowercase = /[a-z]/.test(inputString);
//     const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(inputString); // You can adjust the symbols as needed
  
//     // Return an object with the results
//     return {
//       hasNumber,
//       hasUppercase,
//       hasLowercase,
//       hasSymbol
//     };
//   }
  
//   // Example usage
  
//   const result = checkStringProperties(password);
// //   console.log(result);

//   function checing_value(result){
//     if(result.hasNumber ===true && result.hasUppercase === true && result.hasLowercase === true && result.hasSymbol === true){
//         // console.log("NUmber and string and symbol")
//         myCheckbox.checked = true;
//     }

//   }
// checing_value(result)