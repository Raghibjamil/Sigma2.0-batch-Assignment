



const data=()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            return response.json();
}).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})
}

data('https://jsonplaceholder.typicode.com/todos/1')
