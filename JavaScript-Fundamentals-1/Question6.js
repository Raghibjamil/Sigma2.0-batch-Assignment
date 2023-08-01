// here we are using typeof function and Strict Not Equal operator !
let name="Mithun";
let email="mithun.s@pw.live";
let age=21;



function userinformation(name,email,age)
{
    if(typeof(name)!=="string")
    {
        console.log("Name should be a string .");
        
    }
    if(typeof(email)!=="string")
    {
        console.log("Email should be a string .");
    }
    if(typeof(age)!=="number")
    {
        console.log("Age should be a number.");
    }

    else{
        console.log("validate successfully .");
    }

}
userinformation(name,email,age);