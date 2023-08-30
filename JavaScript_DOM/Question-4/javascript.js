let Name=document.getElementById('UserName');

let Password=document.getElementById('password');


let form_Val=document.getElementById('form');

form_Val.addEventListener('submit',(Event)=>{
    if(Name.value.length>=3)
    {
        if(Password.value.length>=8)
        {
            alert('Form Validation Successful')
        }
        else{
            alert('Form Validation Failed');
        }

    }
    else{
        alert('Form Validation Failed');
    }
})