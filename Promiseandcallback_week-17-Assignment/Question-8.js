fetch('https://jsonplaceholder.typicode.com/posts ')
.then((response)=>{
    return response.json();
}).then((r)=>{
    console.log(r);
}).catch((error)=>{
    console.log(error);
})


// did not able click capture the output  of this question because its to long .......