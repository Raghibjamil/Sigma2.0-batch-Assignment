let properties={
    name:"jamil",
    age:18,
    country:'india'
}
function properties_Value(arr)
{
    console.log(Object.hasOwn(arr,'age'));
    // console.log(Object.hasOwnProperty('name'));
   
}
properties_Value(properties);
