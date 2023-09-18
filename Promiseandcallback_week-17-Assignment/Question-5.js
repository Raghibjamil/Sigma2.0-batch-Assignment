async  function greeting_Message(name)
{
    return name;

}

// console.log( greeting_Message('raghib jamil'))     async function return the promise...

greeting_Message( 'Raghib jamil').then((name)=>{
    console.log(`Hello,${name} !`);
}).catch((error)=>{
    console.log(error);
})
