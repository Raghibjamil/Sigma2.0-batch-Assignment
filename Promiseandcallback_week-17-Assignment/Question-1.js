function double_func(array,main_func)
{
        return main_func(array)
}
function main_func(array)
{
    const variable=array.map((item)=>{
            return item*2;
    })
    return variable;
        // console.log(variable);
}

console.log(double_func([1,2,3,4,5],main_func))