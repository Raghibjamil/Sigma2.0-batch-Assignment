let properties={
    name:"jamil",
    age:18,
    country:'india'
}
function properties_Value(arr)
{
    let result=Object.keys(arr);
    // console.log(Array.isArray(result));
    return result.length
}

let Total_properties=properties_Value(properties);
console.log(Total_properties);
