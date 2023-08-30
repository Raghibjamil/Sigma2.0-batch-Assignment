
// The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.





let loginButton=document.getElementById('loginButton');
let logoutButton=document.getElementById('logoutButton');
let heading=document.getElementById('authStatus');


loginButton.addEventListener('click',(e)=>{
    localStorage.setItem('userauthentation',true);
    heading.innerText='User is logged In'
 
})

logoutButton.addEventListener('click',(e)=>{
    localStorage.removeItem('userauthentation');
    heading.innerText='User is not logged in .'
})

if(localStorage.getItem('userauthentation')==='true'){
    heading.innerText='User is logged In'
}
