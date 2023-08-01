//inside the array index value always start from 0 !!!

const arr=[1,2,999,56,"Mithun",1234,"pw"];
    let n=arr.length;
    console.log("length of array :-",n);
for(let i=0;i<n;i++)
{
    if(typeof(arr[i])==="string")
    {
        console.log("Found The First String :", arr[i]);
        break;
    }
    
}