let button=document.getElementById('button');
let image=document.getElementById('logo');
let h1=document.getElementById('heading');

button.addEventListener('click',(Event)=>{
    
    image.classList.toggle('hello')

    if(image.getAttribute('class')==='hello')
    {
        h1.innerHTML='Your Image is Hidden ';
        
    }
    else{
        
        h1.innerHTML='Your Image is Visible'
        
    }

})