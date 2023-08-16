function userlist(params) {
    let arr=["raghiv,sahil,junaib","iqbal","Mithun"]
    let value=false
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===params)
        {
            console.log(`YES,${arr[i]} is valid username.`);
            value=true;
            
            break;
        }
       
    }
    if(!value)
    {
        console.log(`No,${params} is not valid username`);
    }

    
}
userlist("someone");