

let inputfunc= (value)=>
{
    return setTimeout(()=>{
        let arr=value.split('');
  
    let arr1=arr.reverse();
    let arr2=arr1.join('');
    
    console.log(arr2);
   
    },2000)

    

    

}




inputfunc('Raghib');