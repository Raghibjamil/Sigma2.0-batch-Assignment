let arr=['JavaScript','Java','Python','c++'];
let container=document.getElementById('conatiner');
container.innerHTML='<span>Which is your Favorite Programing Language : </span>'
let select=document.createElement('select')
let option=document.createElement('option')
for(let i of arr)
{
    let options=document.createElement('option')
    options.innerText=i;
    select.appendChild(options)

    
}
container.appendChild(select);