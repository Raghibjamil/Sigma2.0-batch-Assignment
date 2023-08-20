let str=new String("Raghib");
function reversefunc(Str)
{
    let arr=Str.split('')
    // // console.log(Array.isArray(arr) );
    let arr2=arr.reverse();
    // // console.log(arr2);
    let finalstring=arr2.join("")
    // // console.log(finalstring);
    return finalstring

    // return Str.split('').reverse().join("")   here we are chaining the methodss.......

   
}
let result=reversefunc(str);
console.log(result);